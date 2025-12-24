'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

export default function TheSystemPage() {
  return <TheSystemPageClient />
}

function TheSystemPageClient() {
  useEffect(() => {
    document.title = 'The System | Wabi-Sabi'
  }, [])

  const approach = [
    {
      step: "🌱",
      title: "See What's Hidden",
      body: "Uncover profit hidden inside systems, offers, and flows. Like a bonsai master sees potential in raw material, we reveal value that's already there, waiting to be shaped."
    },
    {
      step: "🌿", 
      title: "Shape Growth Wisely",
      body: "Faster processes, smoother flow — more profit at less cost. We help you build systems that strengthen your roots, not drain your branches."
    },
    {
      step: "🌸",
      title: "Build Profit That Lasts", 
      body: "Small shifts, seen and applied, to strengthen profit flow. Create clarity and balance that compound over time with discipline and patience."
    }
  ]

  const stories = [
    {
      name: "Sarah M.",
      company: "Agency Owner",
      result: "We reclaimed 80+ hours/month without adding headcount.",
      detail: "Hidden workflow bottlenecks were costing us 2 full-time employees worth of productivity."
    },
    {
      name: "Lindiwe K.", 
      company: "Retail Founder",
      result: "Profit up, hours down. The system runs calmly now.",
      detail: "Three small shifts in our inventory flow increased margins by 31% while reducing my daily involvement."
    },
    {
      name: "James P.",
      company: "SaaS CEO", 
      result: "They revealed value we'd overlooked for years.",
      detail: "A simple change to our onboarding sequence increased LTV by 42% in 90 days."
    }
  ]

  const principles = [
    "Your competitors perfected it. Why not you?",
    "Small shifts, high impact, hidden in your systems.",
    "Patience and skill create lasting profit.",
    "Growth gets easier, not heavier, when done right."
  ]

  return (
    <div className="overflow-hidden bg-slate-950">
      {/* Hero Section - Using Funnel Copy Strength */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="hero-bg absolute inset-0 z-1">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 opacity-90 z-2"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-30" 
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop')"}}></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-wide text-amber-400 mb-3">Profit hides in plain sight</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4">
            Like a <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">bonsai</span>, strong businesses take patience and skill to grow.
          </h1>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-amber-400">Your competitors perfected it. Why not you?</h2>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            You don't need perfection—you need clarity. At Wabi-Sabi, we reveal hidden value in your existing systems so growth gets easier, not heavier.
          </p>
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <Link href="/work-with-us" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all">
              Book a Growth Session
            </Link>
            <div className="inline-flex items-center px-6 py-4 bg-slate-900/80 border border-slate-700 text-slate-100 text-sm font-medium rounded-xl">
              ⚡ Limited to 12 businesses per quarter
            </div>
          </div>
        </motion.div>
      </section>

      {/* Business Strength Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Your efforts created a business that should run without excuses:</h2>
              <ul className="space-y-4">
                {[
                  "Workflows that move smoothly, without bottlenecks",
                  "Teams that know their role and deliver with pride", 
                  "Systems that stay reliable instead of breaking down",
                  "Always on time, customer satisfaction",
                  "Finances managed with clarity, no hidden leaks",
                  "A company admired for its consistency and trusted for its strength"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <p className="text-xl text-slate-300 mb-2">Your effort shows. Your business is proof of it.</p>
                <p className="text-lg text-slate-400 mb-4">But does every part run as smoothly as you imagine?</p>
                <p className="text-xl text-slate-300 mb-4">Others saw small shifts bring surprising results.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Growth Method */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Wabi-Sabi Way</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every business has hidden potential beneath the surface. Through mindful strategy and systems design, we help you:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center hover:border-amber-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Founders Say</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from businesses that found their hidden value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-950/80 border border-slate-700 rounded-2xl p-6"
              >
                <blockquote className="mb-4">
                  <p className="text-slate-100 font-medium text-lg mb-3">"{story.result}"</p>
                  <p className="text-slate-300 text-sm">{story.detail}</p>
                </blockquote>
                <footer className="text-slate-400 text-sm">
                  — {story.name}, {story.company}
                </footer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wabi-Sabi Philosophy Deep Dive */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-amber-50/10 to-orange-50/10 rounded-2xl p-8 border border-amber-400/20 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Philosophy: Imperfection as Opportunity</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We don't believe growth comes from perfection. It comes from finding beauty and opportunity in what already exists. 
              At Wabi-Sabi, we help businesses uncover hidden value in their current systems, shape growth with discipline, and create profits that endure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-4"
                >
                  <div className="flex items-start">
                    <span className="text-amber-400 text-lg mr-3 mt-1">🌿</span>
                    <p className="text-slate-300">{principle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-amber-50/10 to-orange-50/10 rounded-2xl p-8 border border-amber-400/20 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To help businesses find profit in imperfection, so owners can spend fewer hours grinding and more time living.
            </p>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
