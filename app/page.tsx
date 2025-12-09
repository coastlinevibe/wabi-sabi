'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    document.title = 'The System | Wabi-Sabi'
  }, [])

  return (
    <div className="overflow-hidden bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="hero-bg absolute inset-0 z-1">
          <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover opacity-80" style={{zIndex: 0}}>
            <source src="/funnel/wasabi.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-950/60 z-2"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-30" 
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop')", zIndex: -2}}></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4 font-sora">
            Like a <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">bonsai</span>, strong businesses take patience and skill to grow.
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-amber-400">Progress comes from clarity, not perfection.</h2>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
Hidden value flows quietly through your business, waiting to be discovered and shaped with care.
          </p>
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <Link href="/funnel/quiz.html" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all">
              Take the Profit Quiz
            </Link>
            <Link href="/work-with-us" className="inline-flex items-center px-6 py-4 bg-slate-900/80 border border-slate-700 text-slate-100 text-sm font-medium rounded-xl hover:bg-slate-800 transition-all">
              See How the System Works
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Proof Metrics */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sora">
              Steady Growth, Lasting Results
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">75+</div>
              <div className="text-sm text-slate-400">companies — refined flow, strong gains</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-sm text-slate-400">profit lifts — clarity that compounds into growth</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">3M+</div>
              <div className="text-sm text-slate-400">nurtured leads — relationships built with calm precision</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-sm text-slate-400">systems — profit that doesn't depend on you</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Hard Work Trap */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-sora mb-8">
              Strong roots aren't built overnight.
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed">
              <p>They're shaped by small shifts, carefully tended over time.</p>
              <p>Many leaders try to force growth, only to feel stretched and uncertain.</p>
              <p>But strength comes from clarity — seeing the profit already within reach, waiting to be shaped.</p>
            </div>
            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-bold text-amber-400">It's not about doing more. It's about growing wisely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Wabi-Sabi Way (3 Pillars) */}
      <section id="system-works" className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-6">
              Finding hidden value — and profit — in what you already have.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-xl border border-amber-500/20 bg-slate-900/50 text-center hover:border-amber-500/50 transition-all"
            >
              <div className="text-4xl mb-4">
                <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-4">Reveal Hidden Value</h3>
              <p className="text-slate-300">Find opportunities in your existing systems, offers, and flows you already own.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-xl border border-amber-500/20 bg-slate-900/50 text-center hover:border-amber-500/50 transition-all"
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-amber-400 mb-4">Shape Growth Wisely</h3>
              <p className="text-slate-300">Replace busy grind with smoother flows that scale calmly and efficiently.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-xl border border-amber-500/20 bg-slate-900/50 text-center hover:border-amber-500/50 transition-all"
            >
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="text-xl font-semibold text-amber-400 mb-4">Profit with Clarity</h3>
              <p className="text-slate-300">Small shifts applied steadily, strengthening the roots of profit.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Growth Toolkit */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-6">
              The Wabi-Sabi growth system
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Just as every branch strengthens the tree, your business grows steadier when the right systems are cultivated with care and clarity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-xl border border-amber-500/20 bg-slate-950/50 hover:bg-slate-950/70 transition-all duration-300"
            >
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Strategy & Signals</h3>
              <p className="text-slate-300">Simple dashboards that show where profit flows smoothly — and where it doesn't.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-xl border border-amber-500/20 bg-slate-950/50 hover:bg-slate-950/70 transition-all duration-300"
            >
              <div className="text-2xl mb-3">💻</div>
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Digital Platforms</h3>
              <p className="text-slate-300">Websites, apps, and funnels built to reveal and guide hidden value.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-xl border border-amber-500/20 bg-slate-950/50 hover:bg-slate-950/70 transition-all duration-300"
            >
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Flow Systems</h3>
              <p className="text-slate-300">Reliable processes that ease friction and free your time.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-xl border border-amber-500/20 bg-slate-950/50 hover:bg-slate-950/70 transition-all duration-300"
            >
              <div className="text-2xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Smart Campaigns</h3>
              <p className="text-slate-300">Targeted offers and nurturing that grow quietly in the background.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-xl border border-amber-500/20 bg-slate-950/50 hover:bg-slate-950/70 transition-all duration-300"
            >
              <div className="text-2xl mb-3">🎓</div>
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Training & Empowerment</h3>
              <p className="text-slate-300">Clear steps for your team to maintain and extend growth.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 rounded-xl border border-amber-500/20 bg-slate-950/50 hover:bg-slate-950/70 transition-all duration-300"
            >
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-amber-400 mb-3">AI & Automation</h3>
              <p className="text-slate-300">Support that lightens the load and keeps growth consistent.</p>
            </motion.div>
          </div>
          <div className="text-center">
            <Link href="/work-with-us#top" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-500 transition-all duration-300">
              Explore Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sora">
              Stories of Transformation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
            >
              <blockquote className="mb-4">
                <p className="text-slate-100 font-medium text-lg mb-3">"We reclaimed 80+ hours a month without adding headcount. Wabi-Sabi shifted how we work."</p>
              </blockquote>
              <footer className="text-slate-400 text-sm">
                — Sarah M., Agency Owner
              </footer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
            >
              <blockquote className="mb-4">
                <p className="text-slate-100 font-medium text-lg mb-3">"Our system runs smoothly now. Hours down, profit up. The calm clarity we needed."</p>
              </blockquote>
              <footer className="text-slate-400 text-sm">
                — Lindiwe K., Retail Founder
              </footer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
            >
              <blockquote className="mb-4">
                <p className="text-slate-100 font-medium text-lg mb-3">"They revealed value we'd overlooked for years. Small shifts, big results."</p>
              </blockquote>
              <footer className="text-slate-400 text-sm">
                — James P., SaaS CEO
              </footer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sora">
              Discover the hidden value in your business.
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Every knot, crack, and uneven branch carries potential. See it clearly — and grow with balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/funnel/quiz.html"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Take the Profit Quiz (3 minutes)
              </Link>
              <a
                href={`/chat/wabi-sabi-business?msg=${encodeURIComponent("Hi! I'm interested in discovering the hidden value in my business.")}`}
                className="inline-flex items-center px-8 py-4 border border-amber-500/30 text-amber-400 rounded-xl font-semibold hover:bg-amber-500/10 transition-all duration-300"
              >
                Begin a Conversation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
