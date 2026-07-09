'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Zap, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const HomePage = () => {
  const features = [
    { icon: <Zap className="w-8 h-8" />, title: 'Lightning Fast', desc: 'Optimized for speed and performance' },
    { icon: <Users className="w-8 h-8" />, title: 'Team Collaboration', desc: 'Work together seamlessly' },
    { icon: <Award className="w-8 h-8" />, title: 'Award Winning', desc: 'Industry recognized solutions' },
  ]

  const stats = [
    { number: '1000+', label: 'Happy Clients' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg"></div>
            ORBIT DIGITAL
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900 transition">Services</Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition">Portfolio</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Empowering Your Business to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Grow</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your digital presence with our comprehensive suite of services. From web development to digital marketing, we've got you covered.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital solutions tailored to your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-sky-100 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-sky-100 mb-8">Join thousands of satisfied clients who have grown with ORBIT DIGITAL</p>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-sky-600">
            Schedule a Consultation
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">ORBIT DIGITAL</h3>
              <p>Empowering your business to grow</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Web Development</Link></li>
                <li><Link href="#" className="hover:text-white transition">Design</Link></li>
                <li><Link href="#" className="hover:text-white transition">Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">About</Link></li>
                <li><Link href="#" className="hover:text-white transition">Team</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 ORBIT DIGITAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage