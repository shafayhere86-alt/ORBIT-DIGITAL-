'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Clock, CheckCircle, AlertCircle, MessageSquare, Settings } from 'lucide-react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabase/client'

const ClientDashboard = () => {
  const [orders, setOrders] = useState([])
  const [stats, setStats] = useState({
    activeProjects: 3,
    totalSpent: '$12,450',
    pendingPayments: 1,
    completedProjects: 8
  })

  const [recentOrders, setRecentOrders] = useState([
    { id: 1, name: 'Website Redesign', status: 'in_progress', date: '2024-01-15', amount: '$2,500' },
    { id: 2, name: 'Logo Design', status: 'completed', date: '2024-01-10', amount: '$500' },
    { id: 3, name: 'SEO Optimization', status: 'pending', date: '2024-01-20', amount: '$1,200' },
  ])

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'text-green-600'
      case 'in_progress': return 'text-blue-600'
      case 'pending': return 'text-yellow-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Manage your projects and orders</p>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <Clock className="w-6 h-6" />, title: 'Active Projects', value: stats.activeProjects },
            { icon: <FileText className="w-6 h-6" />, title: 'Total Spent', value: stats.totalSpent },
            { icon: <AlertCircle className="w-6 h-6" />, title: 'Pending Payments', value: stats.pendingPayments },
            { icon: <CheckCircle className="w-6 h-6" />, title: 'Completed', value: stats.completedProjects }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-sky-100 rounded-2xl p-6 hover:border-sky-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white border border-sky-100 rounded-2xl p-6 mb-8"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-sky-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Project Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-sky-50 hover:bg-sky-50 transition">
                    <td className="py-3 px-4 text-gray-900">{order.name}</td>
                    <td className="py-3 px-4">
                      <span className={`font-semibold ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1).replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{order.date}</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
            <Button variant="primary" className="w-full mb-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline" className="w-full">
              Create Support Ticket
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Account</h3>
            <Button variant="outline" className="w-full mb-2">
              <Settings className="w-4 h-4 mr-2" />
              View Profile
            </Button>
            <Button variant="outline" className="w-full">
              Download Invoices
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ClientDashboard