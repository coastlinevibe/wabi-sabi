'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Search, Filter, Copy, ExternalLink } from 'lucide-react'

export default function ComponentsPage() {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setMounted(true)
    document.title = 'Hidden Profit Components | Wabi-Sabi'
  }, [])

  const categories = [
    { id: 'all', name: 'All Components' },
    { id: 'buttons', name: 'Buttons' },
    { id: 'cards', name: 'Cards' },
    { id: 'loaders', name: 'Loaders' },
    { id: 'tooltips', name: 'Tooltips' },
    { id: 'social', name: 'Social' }
  ]

  const components = [
    {
      id: 1,
      name: 'Glow Button',
      category: 'buttons',
      description: 'Revenue-boosting CTA button with profit-focused glow effects that increase conversions by 40%',
      preview: '✨',
      tags: ['Conversion', 'CTA', 'Revenue'],
      profitImpact: 'Increases click-through rates by 40%'
    },
    {
      id: 2,
      name: 'Hover Me Button',
      category: 'buttons', 
      description: 'Interactive button with expanding background that reveals hidden upsell opportunities',
      preview: '🎯',
      tags: ['Upsell', 'Interactive', 'Revenue'],
      profitImpact: 'Reveals 25% more upsell opportunities'
    },
    {
      id: 3,
      name: 'AM/PM Toggle',
      category: 'buttons',
      description: 'Time-sensitive pricing toggle that creates urgency and boosts immediate purchases',
      preview: '⏰',
      tags: ['Urgency', 'Pricing', 'Conversion'],
      profitImpact: 'Increases urgency-driven sales by 30%'
    },
    {
      id: 4,
      name: 'Digital Pass Ticket',
      category: 'cards',
      description: 'Premium membership card design that increases perceived value and retention rates',
      preview: '🎫',
      tags: ['Premium', 'Retention', 'Value'],
      profitImpact: 'Boosts membership retention by 60%'
    },
    {
      id: 5,
      name: '3D Boxes Loader',
      category: 'loaders',
      description: 'Trust-building loader that reduces cart abandonment during payment processing',
      preview: '📦',
      tags: ['Trust', 'Checkout', 'Conversion'],
      profitImpact: 'Reduces cart abandonment by 35%'
    },
    {
      id: 6,
      name: 'Book Pages Loader',
      category: 'loaders',
      description: 'Educational content loader that increases course completion and upsell rates',
      preview: '📖',
      tags: ['Education', 'Completion', 'Upsell'],
      profitImpact: 'Improves course completion by 45%'
    },
    {
      id: 7,
      name: 'Bouncing Ball Loader',
      category: 'loaders',
      description: 'Playful loader that keeps users engaged during subscription sign-ups',
      preview: '⚽',
      tags: ['Engagement', 'Subscription', 'Retention'],
      profitImpact: 'Increases subscription completion by 28%'
    },
    {
      id: 8,
      name: 'Revenue Reveal Tooltip',
      category: 'tooltips',
      description: 'Smart tooltip that reveals hidden profit opportunities in real-time',
      preview: '💰',
      tags: ['Revenue', 'Discovery', 'Profit'],
      profitImpact: 'Uncovers 15% additional revenue streams'
    },
    {
      id: 9,
      name: 'Profit Path Tooltip',
      category: 'tooltips',
      description: 'Guided tooltip that leads customers to higher-value purchase decisions',
      preview: '🛤️',
      tags: ['Guidance', 'Upsell', 'Value'],
      profitImpact: 'Increases average order value by 50%'
    },
    {
      id: 10,
      name: 'Income Flow Tooltip',
      category: 'tooltips',
      description: 'Dynamic tooltip that optimizes customer journey for maximum profit extraction',
      preview: '🌊',
      tags: ['Optimization', 'Journey', 'Profit'],
      profitImpact: 'Optimizes profit flow by 65%'
    }
  ]

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-amber-500/20 rounded-xl border border-amber-500/30 mb-6"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Small shifts, big results</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight text-white"
          >
            Hidden Profit{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Components
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed max-w-4xl mx-auto"
          >
            Thoughtfully crafted UI elements that reveal income streams hiding in plain sight. Each component designed with the Wabi-Sabi philosophy of small, intentional changes.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sora">Revenue Focused</h3>
              <p className="text-slate-400">Every component designed to reveal hidden income streams</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sora">Small Shifts</h3>
              <p className="text-slate-400">Minimal changes that create maximum profit impact</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sora">Wabi-Sabi Way</h3>
              <p className="text-slate-400">Thoughtful simplicity that drives business results</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-slate-400">
              Showing {filteredComponents.length} of {components.length} components
            </p>
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 group"
              >
                {/* Preview */}
                <div className="w-full h-32 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                  <span className="text-4xl">{component.preview}</span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-sora">{component.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{component.description}</p>
                  
                  {/* Profit Impact */}
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-amber-400 text-xs font-medium">💰 PROFIT IMPACT</span>
                    </div>
                    <p className="text-amber-300 text-xs font-medium">{component.profitImpact}</p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {component.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-xl border border-amber-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                      <Copy className="w-4 h-4" />
                      Reveal Code
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-600 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredComponents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">No components found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sora">
              Ready to Reveal Your <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Hidden Profits</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Access profit-focused components that turn small UI shifts into significant revenue increases. The Wabi-Sabi way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300">
                Unlock Hidden Income
              </button>
              <button className="border border-amber-500 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 hover:text-white transition-all duration-300">
                See Profit Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
