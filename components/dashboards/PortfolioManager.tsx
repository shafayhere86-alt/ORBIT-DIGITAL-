'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Globe, Settings, Eye, Edit, Trash2, Share2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const PortfolioManager = () => {
  const [portfolios, setPortfolios] = useState([
    { id: 1, title: 'E-Commerce Platform', category: 'Web Development', client: 'TechCorp', image: '🌐', views: 234, featured: true },
    { id: 2, title: 'Mobile App Design', category: 'UI/UX Design', client: 'StartupHub', image: '📱', views: 456, featured: true },
    { id: 3, title: 'Brand Identity', category: 'Branding', client: 'BrandNew', image: '🎨', views: 123, featured: false },
  ])

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Portfolio Manager</h1>
          <p className="text-gray-600">Showcase your best work</p>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Portfolio Item
          </Button>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-sky-100 rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Thumbnail */}
              <div className="h-40 bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-6xl relative">
                {item.image}
                {item.featured && (
                  <div className="absolute top-3 right-3 bg-sky-600 text-white px-2 py-1 rounded text-xs font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                <p className="text-xs text-gray-500 mb-4">Client: {item.client}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 py-2 border-y border-sky-100">
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Eye className="w-4 h-4" />
                    {item.views} views
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 p-2 hover:bg-sky-100 rounded-lg transition text-sky-600 flex items-center justify-center gap-1 text-sm">
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button className="flex-1 p-2 hover:bg-blue-100 rounded-lg transition text-blue-600 flex items-center justify-center gap-1 text-sm">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="flex-1 p-2 hover:bg-red-100 rounded-lg transition text-red-600 flex items-center justify-center gap-1 text-sm">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioManager