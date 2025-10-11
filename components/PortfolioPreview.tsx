'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function PortfolioPreview() {
  const projects = [
    {
      title: 'From time-strapped to time-free',
      category: 'Growth Story',
      description: 'Net profit doubled with smarter nurture systems that work while you sleep.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tags: ['Lead Nurture', 'Automation', 'Profit Growth'],
      stats: { profit: '2x', time: '50%', growth: '180%' },
      color: 'from-amber-500 to-orange-400'
    },
    {
      title: 'From scattered to focused',
      category: 'Growth Story',
      description: 'Hidden revenue unlocked with analytics that revealed overlooked opportunities.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      tags: ['Analytics', 'Revenue Discovery', 'Focus'],
      stats: { revenue: '3x', clarity: '90%', efficiency: '200%' },
      color: 'from-amber-500 to-orange-400'
    },
    {
      title: 'From grind to growth',
      category: 'Growth Story',
      description: 'A legacy business built to last, with systems that compound value over time.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      tags: ['Legacy Building', 'Sustainable Growth', 'Systems'],
      stats: { legacy: '∞', balance: '95%', impact: '300%' },
      color: 'from-amber-500 to-orange-400'
    }
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-sora text-white mb-4">
            Businesses We've Helped <span className="text-amber-400">Flourish</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real transformations from businesses that embraced the Wabi-sabi approach to growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-slate-900 rounded-2xl overflow-hidden transition-all duration-300 border border-slate-800"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-semibold rounded-xl`}>
                  {project.category}
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-slate-900/90 border border-slate-700 rounded-full hover:bg-slate-900 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 text-slate-300" />
                  </button>
                  <button className="p-2 bg-slate-900/90 border border-slate-700 rounded-full hover:bg-slate-900 transition-colors duration-200">
                    <Github className="w-4 h-4 text-slate-300" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-slate-800">
                  <div className="text-center">
                    <div className="text-sm font-bold text-amber-400">
                      {Object.values(project.stats)[0]}
                    </div>
                    <div className="text-xs text-slate-400">{Object.keys(project.stats)[0]}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-amber-400">
                      {Object.values(project.stats)[1]}
                    </div>
                    <div className="text-xs text-slate-400">{Object.keys(project.stats)[1]}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-amber-400">
                      {Object.values(project.stats)[2]}
                    </div>
                    <div className="text-xs text-slate-400">{Object.keys(project.stats)[2]}</div>
                  </div>
                </div>

                {/* View Case Study Link */}
                <Link
                  href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent hover:underline transition-all duration-300`}
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            See the Stories of Growth
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
