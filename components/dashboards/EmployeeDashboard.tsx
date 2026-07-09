'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, CheckCircle, Clock, Users, TrendingUp, Upload } from 'lucide-react'
import Button from '@/components/ui/Button'

const EmployeeDashboard = () => {
  const [stats, setStats] = useState({
    assignedProjects: 5,
    completedTasks: 23,
    hoursLogged: 168,
    performanceRating: 4.8
  })

  const [assignedProjects, setAssignedProjects] = useState([
    { id: 1, name: 'E-commerce Website', client: 'TechCorp Inc', progress: 65, deadline: '2024-02-15' },
    { id: 2, name: 'Mobile App Design', client: 'StartupHub', progress: 40, deadline: '2024-03-01' },
    { id: 3, name: 'Logo Redesign', client: 'BrandNew LLC', progress: 85, deadline: '2024-01-30' },
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Dashboard</h1>
          <p className="text-gray-600">Track your projects and performance</p>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <Briefcase className="w-6 h-6" />, title: 'Assigned Projects', value: stats.assignedProjects, color: 'sky' },
            { icon: <CheckCircle className="w-6 h-6" />, title: 'Completed Tasks', value: stats.completedTasks, color: 'green' },
            { icon: <Clock className="w-6 h-6" />, title: 'Hours Logged', value: stats.hoursLogged, color: 'orange' },
            { icon: <TrendingUp className="w-6 h-6" />, title: 'Performance', value: `${stats.performanceRating}/5`, color: 'blue' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white border border-${stat.color}-100 rounded-2xl p-6 hover:border-${stat.color}-200 hover:shadow-lg transition-all`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center text-${stat.color}-600`}>
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

        {/* Assigned Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white border border-sky-100 rounded-2xl p-6 mb-8"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Assigned Projects</h2>
          <div className="space-y-4">
            {assignedProjects.map((project) => (
              <div key={project.id} className="border border-sky-100 rounded-xl p-4 hover:border-sky-200 transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.client}</p>
                  </div>
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                    {project.progress}%
                  </span>
                </div>
                <div className="bg-sky-100 h-2 rounded-full overflow-hidden mb-2">
                  <div className="bg-sky-600 h-full" style={{ width: `${project.progress}%` }}></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Progress</span>
                  <span>Due: {project.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Work</h3>
            <p className="text-gray-600 text-sm mb-4">Submit your completed work for review</p>
            <Button variant="primary" className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Upload Files
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Time Tracking</h3>
            <p className="text-gray-600 text-sm mb-4">Log your working hours</p>
            <Button variant="outline" className="w-full">
              <Clock className="w-4 h-4 mr-2" />
              Start Timer
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard