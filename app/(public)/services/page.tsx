'use client'

import { motion } from 'framer-motion'
import { Code, Palette, TrendingUp, Search, Layout, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Secure & Scalable']
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that users love',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing']
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO Optimization',
      description: 'Increase your online visibility and drive organic traffic',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics']
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'Strategic marketing to grow your business',
      features: ['Social Media', 'Content Marketing', 'PPC Campaigns', 'Email Marketing']
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: 'Brand Design',
      description: 'Create a memorable brand identity',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Collateral', 'Packaging']
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Performance Optimization',
      description: 'Make your website lightning fast',
      features: ['Load Time Optimization', 'Code Splitting', 'Image Optimization', 'CDN Setup']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-sky-50 to-blue-50 border-b border-sky-200 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive digital solutions for your business</p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-sky-100 rounded-2xl p-8 hover:shadow-lg hover:border-sky-200 transition"
            >
              <div className="text-sky-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">Learn More</Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Simple, Transparent Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Starter', 'Professional', 'Enterprise'].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-8 ${
                  idx === 1
                    ? 'bg-gradient-to-br from-sky-600 to-blue-600 text-white ring-2 ring-sky-600 scale-105'
                    : 'bg-white border border-sky-100'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                <p className={`mb-6 ${idx === 1 ? 'text-sky-100' : 'text-gray-600'}`}>
                  Perfect for {plan.toLowerCase()} projects
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${ idx === 1 ? 'text-white' : 'text-gray-900' }`}>
                    ${[499, 999, 2999][idx]}
                  </span>
                  <span className={idx === 1 ? 'text-sky-100' : 'text-gray-600'}>/month</span>
                </div>
                <Button
                  variant={idx === 1 ? 'outline' : 'primary'}
                  className={`w-full ${
                    idx === 1 ? 'text-white border-white hover:bg-white hover:text-sky-600' : ''
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default ServicesPage