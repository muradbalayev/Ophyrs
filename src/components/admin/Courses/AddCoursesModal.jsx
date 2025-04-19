import { Eye, Image, Loader2, Users, X } from "lucide-react";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import imageCompression from "browser-image-compression";
import { useAddInstructorMutation } from "../../../redux/services/InstructorApi";

const AddInstructorModal = ({ setShowAddModal }) => {
  const [addInstructor, { isLoading }] = useAddInstructorMutation();
  const fileRef = useRef(null);
  const [data, setData] = useState({
    firstName: "",
    secondName: "",
    title: "",
    bio: "",
    description: "",
    category: "",
    yearsOfExperience: "",
    image: null,
    socialMedia: "",
    workExperience: [],
    certificates: [],
  });

  const [currentCertification, setCurrentCertification] = useState("");
  const [currentExperience, setCurrentExperience] = useState("");

  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFileName, setPhotoFileName] = useState("Choose File");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleBaseChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const addExperience = () => {
    if (!currentExperience.trim()) return;
    setData((prev) => ({
      ...prev,
      workExperience: [...prev.workExperience, currentExperience],
    }));
    setCurrentExperience("");
  };

  const removeExperience = (index) => {
    setData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index),
    }));
  };

  const addCertification = () => {
    if (!currentCertification.trim()) return;
    setData((prev) => ({
      ...prev,
      certificates: [...prev.certificates, currentCertification],
    }));
    setCurrentCertification("");
  };

  const removeCertification = (index) => {
    setData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index),
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 2,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      });

      if (compressedFile.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }

      // Create a new File object with the original name
      const compressedImageFile = new File([compressedFile], file.name, {
        type: compressedFile.type,
      });

      setPhotoPreview(URL.createObjectURL(compressedImageFile));
      setPhotoFileName(file.name);
      setData((prev) => ({ ...prev, image: compressedImageFile }));
    } catch (error) {
      toast.error("Error compressing image");
      console.error("Image compression error:", error);
    }
  };

  const validationSchema = {
    image: (value) => !value && "Please upload a profile image",
    firstName: (value) => !value && "Please enter a first name",
    secondName: (value) => !value && "Please enter a second name",
    title: (value) => !value && "Please enter a title",
    bio: (value) => !value && "Please enter a bio",
    description: (value) => !value && "Please enter a description",
    category: (value) => !value && "Please select a category",
    yearsOfExperience: (value) =>
      !value && "Please enter a years of experience",
    socialMedia: (value) => !value && "Please enter a social media url",
    workExperience: (value) =>
      !value && "Please add at least one work experience",
    certificates: (value) => !value && "Please add at least one certificate",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const [field, validateField] of Object.entries(validationSchema)) {
      const errorMessage = validateField(data[field]);
      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }
    }

    const yearsOfExperience = Number(data.yearsOfExperience);

    const formData = new FormData();
    // Append each field individually to the FormData
    formData.append("firstName", data.firstName);
    formData.append("secondName", data.secondName);
    formData.append("title", data.title);
    formData.append("bio", data.bio);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("yearsOfExperience", yearsOfExperience);
    formData.append("socialMedia", data.socialMedia);
    formData.append("image", data.image);

    // For arrays, we need to stringify them
    formData.append("workExperience", JSON.stringify(data.workExperience));
    formData.append("certificates", JSON.stringify(data.certificates));

    try {
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      await addInstructor(formData).unwrap();
      toast.success("Profile created successfully!");
      setShowAddModal(false);
    } catch (error) {
      console.error("Instructor creation error:", error);
      toast.error("Failed to create profile");
    }
  };

  const handleEyeClick = (url) => {
    setIsLightboxOpen(true);
    setPhotoPreview(url);
  };

  return (
    <div
      className="addModalContainer"
      data-name="form-container"
      onClick={(e) => {
        e.target.dataset.name && setShowAddModal(false);
      }}
    >
      <form className="addModalForm" onSubmit={handleSubmit}>
        <X className="closeButton" onClick={() => setShowAddModal(false)} />
        <h2 className="text-black text-center admin-title text-3xl p-3 mb-5">
          Add Instructor
        </h2>
        <div className="w-full mt-2 gap-3 flex flex-col">
          {/* Personal Info Section */}
          <div className="w-full flex inputRow gap-5 justify-between">
            <div className="inputContainer">
              <label className="form-label">First Name</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={handleBaseChange}
                required
              />
            </div>

            <div className="inputContainer">
              <label className="form-label">Second Name</label>
              <input
                className="form-control"
                type="text"
                name="secondName"
                value={data.secondName}
                onChange={handleBaseChange}
                required
              />
            </div>
          </div>
          <div className="w-full flex inputRow gap-5 justify-between">
            <div className="inputContainer">
              <label className="form-label">Professional Title</label>
              <input
                className="form-control"
                name="title"
                value={data.title}
                onChange={handleBaseChange}
                required
              />
            </div>

            <div className="inputContainer">
              <label className="form-label">Category</label>
              <select
                className="form-control"
                name="category"
                value={data.category}
                onChange={handleBaseChange}
                required
              >
                <option value="">Select Category</option>
                <option value="front-end-development">
                  Front-End Development
                </option>
                <option value="back-end-development">
                  Back-End Development
                </option>
                <option value="data-analitics">Data Analitics</option>
                <option value="graphic-design">Qrafik və Motion Design</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
            </div>
          </div>

          {/* bio Section */}
          <div className="w-full flex inputRow gap-5 justify-between">
            <div className="inputContainer">
              <label className="form-label">Bio</label>
              <textarea
                className="form-control"
                name="bio"
                value={data.bio}
                onChange={handleBaseChange}
                rows={3}
              />
            </div>
          </div>
          {/* Description Section */}
          <div className="w-full flex inputRow gap-5 justify-between">
            <div className="inputContainer">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                value={data.description}
                onChange={handleBaseChange}
                rows={3}
              />
            </div>
          </div>

          <div className="w-full flex inputRow gap-5 justify-between">
            <div className="inputContainer">
              <label className="form-label">Years of Experience</label>
              <input
                className="form-control"
                type="number"
                name="yearsOfExperience"
                value={data.yearsOfExperience}
                onChange={handleBaseChange}
                required
              />
            </div>
          </div>
          <div className="w-full flex inputRow gap-5 justify-between">
            <div className="inputContainer">
              <label className="form-label">Social Media URL</label>
              <input
                className="form-control"
                type="url"
                name="socialMedia"
                value={data.socialMedia}
                onChange={handleBaseChange}
              />
            </div>
          </div>
          <div className="w-full flex inputRow gap-5 justify-between">
            <div className="inputContainer w-full">
              <label className="form-label">Experience</label>

              {/* Yeni təcrübə ekleme alanı */}
              <div className="experience-input flex gap-2">
                <input
                  className="form-control flex-1"
                  value={currentExperience}
                  onChange={(e) => setCurrentExperience(e.target.value)}
                  placeholder="Add experience"
                />
                <button
                  type="button"
                  onClick={addExperience}
                  className="bg-[#214440] text-white px-4 py-2 rounded hover:bg-[#214440]/80"
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : "Add"}
                </button>
              </div>
              <div className="work-experience-list mt-2">
                {data.workExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="experience-item bg-gray-100 p-2 rounded mb-2 flex items-center justify-between"
                  >
                    <span>{exp}</span>
                    <button
                      type="button"
                      onClick={() => removeExperience(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section JSX */}
          <div className="w-full flex inputRow gap-5 justify-between">
            <div className="inputContainer w-full">
              <label className="form-label">Certifications</label>

              {/* Mevcut sertifikaların listesi */}

              {/* Yeni sertifika ekleme alanı */}
              <div className="certification-input flex gap-2">
                <input
                  className="form-control flex-1"
                  value={currentCertification}
                  onChange={(e) => setCurrentCertification(e.target.value)}
                  placeholder="Add certification"
                />
                <button
                  type="button"
                  onClick={addCertification}
                  className="bg-[#214440] text-white px-4 py-2 rounded hover:bg-[#214440]/80"
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : "Add"}
                </button>
              </div>
              <div className="certification-list mt-2">
                {data.certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="certification-item bg-gray-100 p-2 rounded mb-2 flex items-center justify-between"
                  >
                    <span>{cert}</span>
                    <button
                      type="button"
                      onClick={() => removeCertification(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="w-full flex flex-wrap inputRow gap-5 justify-between">
            <div className="inputContainer">
              <label className="form-label">Photo</label>
              <div
                className="form-control cursor-pointer flex  justify-between items-center gap-2"
                onClick={() => fileRef.current.click()}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <p className="select-none">{photoFileName}</p>
                  <Image color="#214440" />
                  <input
                    type="file"
                    ref={fileRef}
                    onChange={handleFileChange}
                    hidden
                  />
                </div>
                {photoPreview && (
                  <Eye
                    color="#214440"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEyeClick(photoPreview);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          style={{ backgroundColor: "#214440" }}
          type="submit"
          className="action-btn mx-auto mt-8 px-4 py-2 flex items-center rounded text-white font-bold gap-2"
        >
          Create Instructor <Users color="white" />
        </button>
      </form>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={[{ src: photoPreview }]}
      />
    </div>
  );
};

export default AddInstructorModal;
