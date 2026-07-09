'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Upload, FileText, Download, Eye, Trash2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const FileManager = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'project-brief.pdf', size: '2.4 MB', date: '2024-01-20', type: 'PDF', status: 'completed' },
    { id: 2, name: 'design-mockups.zip', size: '15.8 MB', date: '2024-01-18', type: 'Archive', status: 'completed' },
    { id: 3, name: 'requirements.docx', size: '850 KB', date: '2024-01-15', type: 'Document', status: 'completed' },
  ])

  const [uploadProgress, setUploadProgress] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">File Manager</h1>
          <p className="text-gray-600">Upload and manage project files</p>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-dashed border-sky-300 rounded-2xl p-12 text-center mb-8 hover:border-sky-400 transition"
        >
          <Upload className="w-16 h-16 mx-auto text-sky-400 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Drop files here or click to upload</h3>
          <p className="text-gray-600 text-sm mb-4">Supported formats: PDF, DOC, ZIP, Images (max 100MB)</p>
          <Button variant="primary">Choose Files</Button>
        </motion.div>

        {/* File List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-sky-100 rounded-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-sky-100">
            <h2 className="text-lg font-bold text-gray-900">Uploaded Files</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-sky-50 border-b border-sky-200">
                <tr>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">File Name</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Type</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Size</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, idx) => (
                  <motion.tr
                    key={file.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-sky-50 hover:bg-sky-50 transition"
                  >
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-sky-600" />
                        <span className="font-medium text-gray-900">{file.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-gray-600">{file.type}</td>
                    <td className="py-3 px-6 text-gray-600">{file.size}</td>
                    <td className="py-3 px-6 text-gray-600">{file.date}</td>
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-sky-100 rounded-lg transition">
                          <Eye className="w-4 h-4 text-sky-600" />
                        </button>
                        <button className="p-2 hover:bg-sky-100 rounded-lg transition">
                          <Download className="w-4 h-4 text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded-lg transition">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FileManager