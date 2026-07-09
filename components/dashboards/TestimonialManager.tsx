'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Star, Edit, Trash2, Filter } from 'lucide-react'
import Button from '@/components/ui/Button'

const TestimonialManager = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, client: 'Sarah Johnson', company: 'Tech Corp Inc', rating: 5, text: 'Excellent service and quality work!', featured: true },
    { id: 2, client: 'Mike Chen', company: 'StartupHub', rating: 5, text: 'Professional team, great results', featured: true },
    { id: 3, client: 'Emma Davis', company: 'BrandNew LLC', rating: 4, text: 'Good work, fast delivery', featured: false },
  ])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Testimonials</h1>
          <p className="text-gray-600">Manage client reviews and testimonials</p>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 mb-8"
        >
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Testimonial
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </motion.div>

        {/* Testimonials List */}
        <div className="space-y-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-sky-100 rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.client}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
                {testimonial.featured && (
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 italic">" {testimonial.text} "</p>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-sky-100">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialManager