'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, MapPin, Lock, Edit2, Save } from 'lucide-react'
import Button from '@/components/ui/Button'

const ClientProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    company: 'Tech Corp Inc',
    phone: '+1 (555) 123-4567',
    address: '123 Business Street, New York, NY 10001',
    country: 'United States'
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account information</p>
        </motion.div>
      </div>

      <div className="p-6 max-w-2xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-sky-100 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{profile.fullName}</h2>
              <p className="text-gray-600">{profile.company}</p>
              {!isEditing && (
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="mt-2">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-4">
            {[
              { icon: <Mail className="w-5 h-5" />, label: 'Email', value: profile.email },
              { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: profile.phone },
              { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: profile.address },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 pb-4 border-b border-sky-50">
                <div className="text-sky-600">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="font-medium text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-sky-100 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Security
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-sky-50 rounded-lg border border-sky-100">
              <div>
                <p className="font-medium text-gray-900">Password</p>
                <p className="text-sm text-gray-600">Last changed 2 months ago</p>
              </div>
              <Button variant="outline" size="sm">Change Password</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-sky-50 rounded-lg border border-sky-100">
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Not enabled</p>
              </div>
              <Button variant="outline" size="sm">Enable 2FA</Button>
            </div>
          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-sky-100 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Preferences</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-gray-700">Receive email notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-gray-700">Project updates</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-700">Marketing communications</span>
            </label>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ClientProfile