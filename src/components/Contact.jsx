import React, { useState } from 'react'
import { contactData } from '../constants'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo form)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {contactData.title}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {contactData.subtitle}
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {contactData.formFields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    rows={5}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
                    required
                  />
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
                    required
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
