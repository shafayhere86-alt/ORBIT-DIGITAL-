'use client'

import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Award } from 'lucide-react'
import Button from '@/components/ui/Button'

const AboutPage = () => {
  const values = [
    { icon: <Users className="w-8 h-8" />, title: 'Collaboration', desc: 'We work closely with our clients' },
    { icon: <Target className="w-8 h-8" />, title: 'Excellence', desc: 'We strive for the best quality' },
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation', desc: 'We embrace new technologies' },
    { icon: <Award className="w-8 h-8" />, title: 'Integrity', desc: 'We deliver on our promises' },
  ]

  const team = [
    { name: 'John Smith', role: 'CEO & Founder', image: '👨‍💼' },
    { name: 'Sarah Johnson', role: 'Creative Director', image: '👩‍💼' },
    { name: 'Mike Chen', role: 'Technical Lead', image: '👨‍💻' },
    { name: 'Emma Davis', role: 'Project Manager', image: '👩‍💼' },
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About ORBIT DIGITAL</h1>
          <p className="text-xl text-gray-600">Transforming businesses through digital innovation</p>
        </motion.div>
      </div>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2010, ORBIT DIGITAL has been at the forefront of digital innovation. What started as a small team of passionate developers has grown into a comprehensive digital agency serving clients worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We believe that every business deserves world-class digital solutions. Our mission is to empower businesses of all sizes to grow and succeed in the digital age.
            </p>
            <p className="text-lg text-gray-600">
              Today, we're proud to have worked with over 1000 clients, completed 500+ projects, and built a team of 50+ talented professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-sky-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="text-sky-600 flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-sky-600 to-blue-600">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-sky-600">
            Get Started Today
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

export default AboutPage