'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const FAQPage = () => {
  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. Small projects typically take 2-4 weeks, while larger projects can take 2-3 months or more.'
    },
    {
      question: 'Do you offer maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your website or application runs smoothly.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing based on project requirements. We can work with fixed-price projects, hourly rates, or retainer models.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Absolutely. We take confidentiality seriously and are happy to sign NDAs for sensitive projects.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies including React, Next.js, TypeScript, Node.js, and various other cutting-edge tools.'
    },
    {
      question: 'Can I request specific team members?',
      answer: 'Yes, you can request specific team members for your project. We\'ll work with you to assemble the best team for your needs.'
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
        </motion.div>
      </div>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-sky-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-sky-50 transition"
              >
                <h3 className="font-bold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-sky-600 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 border-t border-sky-100 bg-sky-50"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQPage