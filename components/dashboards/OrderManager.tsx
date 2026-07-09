'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Filter, Search, Eye, Edit, Trash2, Download } from 'lucide-react'
import Button from '@/components/ui/Button'

const OrderManager = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      client: 'TechCorp Inc',
      service: 'Website Development',
      package: 'Professional',
      amount: '$2,500',
      status: 'approved',
      date: '2024-01-15',
      progress: 45
    },
    {
      id: 'ORD-002',
      client: 'StartupHub',
      service: 'Logo Design',
      package: 'Starter',
      amount: '$500',
      status: 'completed',
      date: '2024-01-10',
      progress: 100
    },
    {
      id: 'ORD-003',
      client: 'BrandNew LLC',
      service: 'SEO Optimization',
      package: 'Business',
      amount: '$3,500',
      status: 'pending',
      date: '2024-01-20',
      progress: 0
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-blue-100 text-blue-800',
      working: 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    }
    return colors[status as keyof typeof colors] || colors.pending
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Management</h1>
          <p className="text-gray-600">Manage all client orders and projects</p>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="working">Working</option>
            <option value="completed">Completed</option>
          </select>
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            New Order
          </Button>
        </motion.div>

        {/* Orders Table */}
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
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Order ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Client</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Service</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Progress</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-sky-50 hover:bg-sky-50 transition"
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">{order.id}</td>
                    <td className="py-4 px-6 text-gray-700">{order.client}</td>
                    <td className="py-4 px-6 text-gray-700">{order.service}</td>
                    <td className="py-4 px-6 font-semibold text-gray-900">{order.amount}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-sky-100 h-2 rounded-full">
                          <div className="bg-sky-600 h-full rounded-full" style={{ width: `${order.progress}%` }}></div>
                        </div>
                        <span className="text-xs font-semibold text-gray-600">{order.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-sky-100 rounded-lg transition" title="View">
                          <Eye className="w-4 h-4 text-sky-600" />
                        </button>
                        <button className="p-2 hover:bg-sky-100 rounded-lg transition" title="Edit">
                          <Edit className="w-4 h-4 text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded-lg transition" title="Delete">
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

export default OrderManager