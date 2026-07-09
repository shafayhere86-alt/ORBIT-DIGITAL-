'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Have a project in mind? Let's talk!</p>
        </motion.div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@orbitdigital.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Business Street, New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span> <span>Closed</span></div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white border border-sky-100 rounded-2xl p-8"
          >
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                placeholder="Project inquiry"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <Button variant="primary" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default ContactPage