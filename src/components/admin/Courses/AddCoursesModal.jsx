import React, { useState, useRef } from 'react'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'
import { supabase } from '../../../supabase-client'

export default function AddCoursesModal({ onClose, onCreated }) {
  const fileInputRef = useRef()
  const [form, setForm] = useState({
    slug: '',
    title: '',
    description: '',
    imageUrl: ''
  })
  const [uploading, setUploading] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  // Optional: upload image to Storage and return public URL
  const uploadImage = async (file) => {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    setUploading(true)
    const { data, error } = await supabase
      .storage
      .from('course-images')
      .upload(fileName, file, { upsert: false })

    setUploading(false)
    if (error) throw error
    const { publicURL, error: urlError } = supabase
      .storage
      .from('course-images')
      .getPublicUrl(fileName)
    if (urlError) throw urlError
    return publicURL
  }

  const handleFileSelect = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    try {
      const url = await uploadImage(file)
      setForm(f => ({ ...f, imageUrl: url }))
      toast.success('Image uploaded')
    } catch (err) {
      console.error(err)
      toast.error('Image upload failed')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Basic validation
    if (!form.slug || !form.title) {
      return toast.error('Slug və Title mütləqdir')
    }
    const { data, error } = await supabase
      .from('courses')
      .insert([{
        slug: form.slug,
        title: form.title,
        description: form.description,
        image: form.imageUrl
      }])

    if (error) {
      console.error(error)
      return toast.error('Kurs yaradılmadı: ' + error.message)
    }

    toast.success('Course created!')
    onCreated && onCreated(data[0])  // parent komponenti yenilə
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <X className="absolute top-4 right-4 cursor-pointer" color='black' onClick={onClose} />
        <h2 className="text-2xl font-bold mb-4 text-black">Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Slug</label>
            <input
              name="slug"
              value={form.slug}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. python-basics"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Course Title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Image (optional)</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="flex-1 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Or paste image URL"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="bg-gray-200 px-3 py-1 rounded"
                disabled={uploading}
              >
                Upload
              </button>
              <input
                type="file"
                ref={fileInputRef}
                hidden
                accept="image/*"
                onChange={handleFileSelect}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={uploading}
          >
            {uploading ? 'Uploading…' : 'Create Course'}
          </button>
        </form>
      </div>
    </div>
  )
}
