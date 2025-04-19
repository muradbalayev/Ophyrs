// src/hooks/useFormModal.js
import { useState } from "react";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";

const useFormModal = (initialState, validationRules, successMessage) => {
  const [formData, setFormData] = useState(initialState);
  const [arrayFields, setArrayFields] = useState({});
  const [filePreview, setFilePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Genel input değişikliklerini yönet
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  // Dinamik array alanları için ekleme/çıkarma
  const handleArrayField = (fieldName, value, action = 'add') => {
    setArrayFields(prev => ({
      ...prev,
      [fieldName]: action === 'add' 
        ? [...(prev[fieldName] || []), value] 
        : prev[fieldName].filter((_, i) => i !== value)
    }));
  };

  // Dosya yükleme ve sıkıştırma
  const handleFileUpload = async (e, fieldName, maxSizeMB = 2) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const compressedFile = await imageCompression(file, {
        maxSizeMB,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      });

      setFilePreview(URL.createObjectURL(compressedFile));
      setFormData(prev => ({
        ...prev,
        [fieldName]: new File([compressedFile], file.name, {
          type: file.type,
          lastModified: Date.now(),
        })
      }));
    } catch (error) {
      toast.error("Dosya sıkıştırma hatası!");
      console.error("Compression error:", error);
    }
  };

  // Form validasyonu
  const validateForm = () => {
    const newErrors = {};
    Object.entries(validationRules).forEach(([field, validator]) => {
      const error = validator(formData[field], arrayFields);
      if (error) newErrors[field] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form gönderimi
  const handleSubmit = async (submitFn, formatterFn) => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const dataToSend = formatterFn 
        ? formatterFn(formData, arrayFields) 
        : { ...formData, ...arrayFields };
      
      await submitFn(dataToSend).unwrap();
      toast.success(successMessage || "İşlem başarıyla tamamlandı!");
      return true;
    } catch (error) {
      toast.error(error.data?.message || "Bir hata oluştu!");
      console.error("Submission error:", error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // State'i sıfırla
  const resetForm = () => {
    setFormData(initialState);
    setArrayFields({});
    setFilePreview(null);
    setErrors({});
  };

  return {
    formData,
    arrayFields,
    filePreview,
    errors,
    isSubmitting,
    handleChange,
    handleArrayField,
    handleFileUpload,
    handleSubmit,
    resetForm,
    setFormData
  };
};

export default useFormModal;