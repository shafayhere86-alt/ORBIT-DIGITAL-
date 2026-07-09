'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Target, Plus, Filter, Search } from 'lucide-react'
import Button from '@/components/ui/Button'

const CRMDashboard = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: 'Acme Corporation', email: 'contact@acme.com', status: 'new', value: '$5,000', dateAdded: '2024-01-20' },
    { id: 2, name: 'Tech Ventures', email: 'hello@techventures.com', status: 'contacted', value: '$8,000', dateAdded: '2024-01-18' },
    { id: 3, name: 'Innovation Labs', email: 'info@innolabs.com', status: 'qualified', value: '$12,000', dateAdded: '2024-01-15' },
  ])

  const [stats, setStats] = useState({
    totalLeads: 42,
    activeDeals: 8,
    conversionRate: 23.5,
    pipelineValue: '$125,000'
  })

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      qualified: 'bg-green-100 text-green-800',
      lost: 'bg-red-100 text-red-800'
    }
    return colors[status as keyof typeof colors] || colors.new
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CRM Dashboard</h1>
          <p className="text-gray-600">Manage leads and deals</p>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <Users className="w-6 h-6" />, title: 'Total Leads', value: stats.totalLeads },
            { icon: <TrendingUp className="w-6 h-6" />, title: 'Active Deals', value: stats.activeDeals },
            { icon: <Target className="w-6 h-6" />, title: 'Conversion Rate', value: `${stats.conversionRate}%` },
            { icon: <TrendingUp className="w-6 h-6" />, title: 'Pipeline Value', value: stats.pipelineValue }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-sky-100 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leads List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-sky-100 rounded-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-sky-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Recent Leads</h2>
            <Button variant="primary" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Lead
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-sky-50 border-b border-sky-200">
                <tr>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Company</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Email</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Value</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Date Added</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, idx) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-sky-50 hover:bg-sky-50 transition"
                  >
                    <td className="py-3 px-6 font-semibold text-gray-900">{lead.name}</td>
                    <td className="py-3 px-6 text-gray-600">{lead.email}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(lead.status)}`}>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-6 font-semibold text-gray-900">{lead.value}</td>
                    <td className="py-3 px-6 text-gray-600">{lead.dateAdded}</td>
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

export default CRMDashboard