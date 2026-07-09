'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Send, Paperclip, Search, Phone, Video } from 'lucide-react'
import Button from '@/components/ui/Button'

const ClientMessages = () => {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Admin Support', avatar: '👨‍💼', lastMessage: 'Your order has been approved', time: '2m ago', unread: 2 },
    { id: 2, name: 'Project Manager', avatar: '👩‍💼', lastMessage: 'We will send you the first draft by tomorrow', time: '1h ago', unread: 0 },
    { id: 3, name: 'Designer Team', avatar: '👥', lastMessage: 'Revisions completed', time: '5h ago', unread: 0 },
  ])

  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', text: 'Hello! How can we help you today?', time: '10:30 AM' },
    { id: 2, sender: 'user', text: 'Hi! I have a question about my order', time: '10:32 AM' },
    { id: 3, sender: 'support', text: 'Your order has been approved', time: '10:35 AM' },
  ])
  const [messageText, setMessageText] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Chat with support and team members</p>
        </motion.div>
      </div>

      <div className="p-6 h-[calc(100vh-200px)] flex gap-6">
        {/* Conversations List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-80 bg-white border border-sky-100 rounded-2xl overflow-hidden flex flex-col"
        >
          {/* Search */}
          <div className="p-4 border-b border-sky-100">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full text-left p-4 border-b border-sky-50 hover:bg-sky-50 transition ${
                  selectedConversation.id === conv.id ? 'bg-sky-50 border-l-4 border-l-sky-600' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{conv.avatar}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">{conv.name}</p>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="bg-sky-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Chat Area */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 bg-white border border-sky-100 rounded-2xl overflow-hidden flex flex-col"
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-sky-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selectedConversation.avatar}</span>
              <div>
                <h3 className="font-bold text-gray-900">{selectedConversation.name}</h3>
                <p className="text-xs text-gray-500">Active now</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-sky-100 rounded-lg transition">
                <Phone className="w-5 h-5 text-sky-600" />
              </button>
              <button className="p-2 hover:bg-sky-100 rounded-lg transition">
                <Video className="w-5 h-5 text-sky-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none'
                      : 'bg-sky-100 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-sky-100' : 'text-gray-600'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-sky-100">
            <div className="flex gap-2">
              <button className="p-2 hover:bg-sky-100 rounded-lg transition">
                <Paperclip className="w-5 h-5 text-sky-600" />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="flex-1 px-4 py-2 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-500"
              />
              <Button variant="primary" size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ClientMessages