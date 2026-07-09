'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Filter, Search, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'

const SupportTickets = () => {
  const [tickets, setTickets] = useState([
    { id: 'TKT-001', subject: 'Logo file format issue', priority: 'high', status: 'open', date: '2024-01-20' },
    { id: 'TKT-002', subject: 'Need design revision', priority: 'medium', status: 'in_progress', date: '2024-01-18' },
    { id: 'TKT-003', subject: 'Payment confirmation', priority: 'low', status: 'resolved', date: '2024-01-15' },
  ])

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    }
    return colors[priority as keyof typeof colors] || colors.low
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'open': return <AlertCircle className="w-5 h-5 text-orange-600" />
      case 'in_progress': return <Clock className="w-5 h-5 text-blue-600" />
      case 'resolved': return <CheckCircle className="w-5 h-5 text-green-600" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Support Tickets</h1>
          <p className="text-gray-600">Track your support requests</p>
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
              placeholder="Search tickets..."
              className="w-full pl-10 pr-4 py-2 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500"
            />
          </div>
          <select className="px-4 py-2 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500">
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            New Ticket
          </Button>
        </motion.div>

        {/* Tickets List */}
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
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Ticket ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Subject</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Priority</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <motion.tr
                    key={ticket.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-sky-50 hover:bg-sky-50 transition cursor-pointer"
                  >
                    <td className="py-4 px-6 font-semibold text-sky-600">{ticket.id}</td>
                    <td className="py-4 px-6 text-gray-900">{ticket.subject}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(ticket.status)}
                        <span className="font-medium text-gray-700">
                          {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1).replace('_', ' ')}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{ticket.date}</td>
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

export default SupportTickets