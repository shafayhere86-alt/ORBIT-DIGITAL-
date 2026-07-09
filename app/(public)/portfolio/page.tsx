'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const PortfolioPage = () => {
  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'Web Development', image: '🛍️', client: 'TechCorp Inc' },
    { id: 2, title: 'Mobile App', category: 'App Development', image: '📱', client: 'StartupHub' },
    { id: 3, title: 'Brand Identity', category: 'Branding', image: '🎨', client: 'BrandNew LLC' },
    { id: 4, title: 'Marketing Campaign', category: 'Digital Marketing', image: '📈', client: 'Digital Solutions' },
    { id: 5, title: 'Website Redesign', category: 'Web Design', image: '🌐', client: 'Enterprise Co' },
    { id: 6, title: 'Logo Design', category: 'Design', image: '✨', client: 'Creative Minds' },
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600">Showcase of our best work</p>
        </motion.div>
      </div>

      {/* Filter Buttons */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto flex justify-center gap-4 flex-wrap">
          {['All', 'Web Development', 'Design', 'Marketing'].map((cat) => (
            <Button key={cat} variant="outline">{cat}</Button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-sky-100 rounded-2xl overflow-hidden hover:shadow-lg transition group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                {project.image}
              </div>
              <div className="p-6">
                <p className="text-sm text-sky-600 font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">Client: {project.client}</p>
              </div>
            </motion.div>
          ))}
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
          <h2 className="text-4xl font-bold text-white mb-6">Want to see your project here?</h2>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-sky-600">
            Start Your Project Today
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

export default PortfolioPage