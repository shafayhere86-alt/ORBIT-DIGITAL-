'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Download, Eye, Mail, Filter } from 'lucide-react'
import Button from '@/components/ui/Button'

const InvoiceManager = () => {
  const [invoices, setInvoices] = useState([
    { id: 'INV-202401-001', client: 'TechCorp Inc', amount: '$2,500', status: 'paid', date: '2024-01-15', dueDate: '2024-02-15' },
    { id: 'INV-202401-002', client: 'StartupHub', amount: '$500', status: 'paid', date: '2024-01-10', dueDate: '2024-02-10' },
    { id: 'INV-202401-003', client: 'BrandNew LLC', amount: '$3,500', status: 'pending', date: '2024-01-20', dueDate: '2024-02-20' },
    { id: 'INV-202401-004', client: 'Digital Solutions', amount: '$1,800', status: 'overdue', date: '2024-01-05', dueDate: '2024-02-05' },
  ])

  const getStatusColor = (status: string) => {
    const colors = {
      paid: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      overdue: 'bg-red-100 text-red-800',
      draft: 'bg-gray-100 text-gray-800'
    }
    return colors[status as keyof typeof colors] || colors.draft
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Invoice Management</h1>
          <p className="text-gray-600">Create and manage invoices</p>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 mb-8"
        >
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Generate Invoice
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </motion.div>

        {/* Invoices List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-sky-100 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-sky-50 border-b border-sky-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Invoice #</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Client</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, idx) => (
                  <motion.tr
                    key={invoice.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-sky-50 hover:bg-sky-50 transition"
                  >
                    <td className="py-4 px-6 font-semibold text-sky-600">{invoice.id}</td>
                    <td className="py-4 px-6 text-gray-700">{invoice.client}</td>
                    <td className="py-4 px-6 font-semibold text-gray-900">{invoice.amount}</td>
                    <td className="py-4 px-6 text-gray-600">{invoice.date}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-sky-100 rounded-lg transition">
                          <Eye className="w-4 h-4 text-sky-600" />
                        </button>
                        <button className="p-2 hover:bg-sky-100 rounded-lg transition">
                          <Download className="w-4 h-4 text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-sky-100 rounded-lg transition">
                          <Mail className="w-4 h-4 text-orange-600" />
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

export default InvoiceManager