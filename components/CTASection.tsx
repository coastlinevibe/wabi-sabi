'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 sm:px-10 lg:px-16 py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-slate-800 text-slate-200 border border-slate-700 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Business?
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sora text-white mb-6 leading-tight">
              Discover the hidden value in your business.
            </h2>

            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              See it clearly — and grow with balance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/funnel/quiz.html"
                className="group bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3"
              >
                <Sparkles className="w-5 h-5" />
                <span>Take the Wabi-sabi Profit Quiz</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/contact"
                className="group bg-transparent border border-amber-500/50 text-amber-400 px-8 py-4 rounded-xl font-bold text-lg hover:border-amber-400 transition-all duration-300 flex items-center space-x-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Growth Session</span>
              </Link>
            </div>

            <p className="text-sm text-slate-400 mb-10">
              Perfection isn't the goal. Profit with balance is.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
                <p className="text-slate-400 text-sm">MVP in 4-6 weeks, full app in 12-16 weeks</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Premium Quality</h3>
                <p className="text-slate-400 text-sm">95+ Lighthouse score, enterprise grade security</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Results Focused</h3>
                <p className="text-slate-400 text-sm">Conversion-optimized design that drives growth</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
