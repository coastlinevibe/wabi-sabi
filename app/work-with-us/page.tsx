'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

// Simple CheckIcon component since @heroicons might not be installed
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

import { ShuffleCards } from '@/components/ui/testimonial-cards'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { PricingTable } from '@/components/blocks/pricing-table'
import { FeatureWithAdvantages } from '@/components/ui/feature-with-advantages'
import TestimonialsColumns from '@/components/testimonials-columns-1'
import { ShineBorder } from '@/components/ui/shine-border'
import PricingAndOffer from '@/components/PricingAndOffer'

// Helper function for capability comparison
function shouldShowCheck(
  included: string,
  level: string,
): boolean {
  if (included === "all") return true
  if (included === "scale" && (level === "scale")) return true
  if (included === "growth" && (level === "growth" || level === "scale")) return true
  if (included === "foundation" && (level === "foundation" || level === "growth" || level === "scale")) return true
  return false
}

export default function WorkWithUsPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string>('growth')

  useEffect(() => {
    setMounted(true)
    document.title = 'Work With Us | Wabi-Sabi'
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Application submitted')
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bon2.png"
            alt="Bonsai background"
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center calc(50% + 100px)',
              filter: 'brightness(1.5) contrast(1.6) saturate(1.3) hue-rotate(10deg)'
            }}
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 font-sora leading-tight text-white"
          >
            By now, you know what we <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">stand for</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed"
          >
            You've seen how small shifts turn hidden value into profit flows. Now it's your turn — let's make it happen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6"
          >
            <MagneticButton className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <a href="#discovery">Book a Discovery Session</a>
            </MagneticButton>
            <MagneticButton 
              onClick={() => {
                const pricingSection = document.getElementById('premium-oto-section');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  // Trigger the OTO to show first
                  const foundationButton = document.querySelector('[data-foundation-trigger]') as HTMLButtonElement;
                  if (foundationButton) {
                    foundationButton.click();
                  }
                }
              }}
              className="bg-slate-800 border-2 border-amber-500/50 text-amber-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-500/10 transition-all duration-300 cursor-pointer"
            >
              Your One-Time Offer
            </MagneticButton>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-xl border border-amber-500/30 text-amber-400 font-medium"
          >
            ⚡ Limited to 12 businesses per quarter
          </motion.div>
        </div>
      </section>

      <TestimonialsColumns />

      {/* Are You Ready Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent blur-xl"></div>
            <div className="relative">
              <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 opacity-80">
                The Moment of Truth
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-sora leading-tight">
                Are We a{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                    Fit
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400/60 via-orange-500/60 to-amber-600/60 blur-sm"></div>
                </span>{" "}
                to Work Together?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Every steady partnership begins with honesty. Let's see if this is the right moment for us to shape your next shift together.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* You're Ready If */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ShineBorder
                borderRadius={12}
                borderWidth={2}
                duration={10}
                color={["#22c55e", "#16a34a", "#15803d"]}
                className="bg-slate-800/50 backdrop-blur-sm"
              >
                <div className="p-6 min-h-[428px]">
                  <h3 className="text-2xl font-bold text-green-400 mb-6 font-sora">✅ We're a Fit If:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You're doing at least <strong>R500k+ annual revenue</strong> — there's a solid foundation to optimise.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You're <strong>the go-to person everyone relies on</strong> — and you're ready for systems to carry more of the weight.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You can invest <strong>2–3 hours per week</strong> during the build — steady input for long-term results.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You want <strong>systems that free you for years</strong>, not quick fixes or short patches.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You're ready to <strong>invest in clarity and transformation</strong>, not just tools or shortcuts.</span>
                    </li>
                  </ul>
                </div>
              </ShineBorder>
            </motion.div>

            {/* You're NOT Ready If */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ShineBorder
                borderRadius={12}
                borderWidth={2}
                duration={10}
                color={["#ef4444", "#dc2626", "#b91c1c"]}
                className="bg-slate-800/50 backdrop-blur-sm h-full"
              >
                <div className="p-6 min-h-[428px]">
                  <h3 className="text-2xl font-bold text-red-400 mb-6 font-sora">❌ We're Not a Fit If:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You're looking for a <strong>magic overnight fix</strong> instead of building lasting change.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You want to <strong>DIY everything</strong> without guidance or structure.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You're not willing to <strong>adapt how you work</strong> to unlock hidden value.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You expect results <strong>"yesterday"</strong> (real systems take 30–90 days minimum).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You're only chasing the <strong>cheapest option</strong>, not long-term profit clarity.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-xl">•</span>
                      <span className="text-slate-300">You prefer <strong>complex solutions</strong> over simple, proven systems that actually work.</span>
                    </li>
                  </ul>
                </div>
              </ShineBorder>
            </motion.div>
          </div>

          {/* Urgency Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative">
              {/* Subtle backdrop glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/10 via-orange-500/10 to-amber-400/10 rounded-3xl blur-xl"></div>
              
              {/* Main box - Wabi-Sabi aesthetic */}
              <div className="relative bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-sm border border-amber-500/20 rounded-2xl px-8 py-5 shadow-xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent rounded-2xl"></div>
                
                <div className="relative flex items-center justify-center space-x-4">
                  <span className="text-amber-400/90 text-xl">⚡</span>
                  <span className="text-slate-200 font-medium text-lg tracking-wide">
                    Limited to <span className="text-amber-400 font-semibold">12 businesses</span> per quarter
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Levels */}
      <section id="levels" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent blur-xl"></div>
            <div className="relative">
              <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 opacity-80">
                Choose your path
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-sora leading-tight">
                Investment{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                    Levels
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400/60 via-orange-500/60 to-amber-600/60 blur-sm"></div>
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Choose the level that matches your business size and growth ambitions.
              </p>
            </div>
          </motion.div>

          {/* Vision Cards - No Prices, No Buttons */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Foundation Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 rounded-xl border bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/70 transition-all duration-500"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 font-sora">Foundation</h3>
                <p className="text-slate-400 text-sm mb-6">For small businesses ready to automate the basics and grow steadily.</p>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-slate-300">~30 days implementation</span>
                  </div>
                </div>

                <div className="text-left space-y-3">
                  <p className="text-amber-400 font-medium text-sm mb-3">Capabilities:</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Reliable client database and simple booking/order capture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Online payments & auto-invoicing that reduce admin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Delivery/logistics tracker (simple) or order follow-ups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>One-page "clarity" view (daily ops + revenue touchpoints)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Growth Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-6 rounded-xl border bg-slate-800/30 backdrop-blur-sm border-amber-500/30 shadow-lg shadow-amber-500/5 transition-all duration-500"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-slate-800/90 border border-amber-500/30 text-amber-400 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 font-sora">Growth</h3>
                <p className="text-slate-400 text-sm mb-6">For scaling teams that want compounding systems across sales + ops.</p>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-slate-300">~60 days implementation</span>
                  </div>
                </div>

                <div className="text-left space-y-3">
                  <p className="text-amber-400 font-medium text-sm mb-3">Capabilities:</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>CRM automations (lead nurture, reactivation, referral tracking)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Customer portal / order status / self-serve updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Upsell/cross-sell flows + smart follow-ups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Team dashboards (sales, ops, fulfilment) with shared signals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Scale Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 rounded-xl border bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/70 transition-all duration-500"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 font-sora">Scale</h3>
                <p className="text-slate-400 text-sm mb-6">For established businesses needing cross-department flow & analytics.</p>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-slate-300">~90 days implementation</span>
                  </div>
                </div>

                <div className="text-left space-y-3">
                  <p className="text-amber-400 font-medium text-sm mb-3">Capabilities:</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Multi-department workflows (sales ↔ ops ↔ finance)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Inventory/delivery systems with exception alerts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Predictive/forward-looking analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Executive clarity board (profit drivers + risks)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Capability Comparison Table */}
          <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[640px]">
                <div className="flex items-center p-5 bg-slate-800/30 border-b border-slate-700/30">
                  <div className="flex-1 text-base font-medium text-slate-200">Capability Comparison</div>
                  <div className="flex items-center gap-8">
                    <button 
                      onClick={() => setSelectedTier('foundation')}
                      className={`w-24 text-center font-medium text-sm transition-all cursor-pointer hover:bg-slate-700/30 rounded-lg py-1 px-2 ${
                        selectedTier === 'foundation' 
                          ? 'text-blue-400/90 bg-blue-500/10' 
                          : 'text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      Foundation
                    </button>
                    <button 
                      onClick={() => setSelectedTier('growth')}
                      className={`w-24 text-center font-medium text-sm transition-all cursor-pointer hover:bg-slate-700/30 rounded-lg py-1 px-2 ${
                        selectedTier === 'growth' 
                          ? 'text-amber-400/90 bg-amber-500/10' 
                          : 'text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      Growth
                    </button>
                    <button 
                      onClick={() => setSelectedTier('scale')}
                      className={`w-24 text-center font-medium text-sm transition-all cursor-pointer hover:bg-slate-700/30 rounded-lg py-1 px-2 ${
                        selectedTier === 'scale' 
                          ? 'text-green-400/90 bg-green-500/10' 
                          : 'text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      Scale
                    </button>
                  </div>
                </div>
                
                {[
                  { name: "Client database + simple online capture", included: "foundation" },
                  { name: "Auto-invoicing & payment flows", included: "foundation" },
                  { name: "ROI \"Clarity\" view (core metrics)", included: "foundation" },
                  { name: "CRM automations (nurture/reactivate/referrals)", included: "growth" },
                  { name: "Upsell/cross-sell & repeat purchase flows", included: "growth" },
                  { name: "Team dashboards (sales/ops/fulfilment)", included: "growth" },
                  { name: "Customer portal / self-serve status", included: "growth" },
                  { name: "Multi-department workflows", included: "scale" },
                  { name: "Inventory & delivery exception alerts", included: "scale" },
                  { name: "Predictive / executive analytics", included: "scale" }
                ].map((capability, index) => (
                  <div
                    key={capability.name}
                    className={`flex items-center py-2 px-4 transition-colors border-b border-slate-700/20 last:border-b-0 ${
                      index % 2 === 0 ? "bg-slate-800/10" : "bg-transparent"
                    } ${
                      (selectedTier === 'foundation' && index < 3) ||
                      (selectedTier === 'growth' && index < 7) ||
                      (selectedTier === 'scale') 
                        ? "bg-slate-700/30 border-l-2 border-l-amber-500" : ""
                    }`}
                  >
                    <div className={`flex-1 transition-colors text-sm ${
                      (selectedTier === 'foundation' && index < 3) ||
                      (selectedTier === 'growth' && index < 7) ||
                      (selectedTier === 'scale') 
                        ? "text-slate-100 font-medium" : "text-slate-300"
                    }`}>
                      {capability.name}
                    </div>
                    <div className="flex items-center gap-8">
                      {["foundation", "growth", "scale"].map((level) => (
                        <div
                          key={level}
                          className={`w-24 flex justify-center transition-all ${
                            level === selectedTier ? "scale-110" : ""
                          }`}
                        >
                          {shouldShowCheck(capability.included, level) ? (
                            <CheckIcon className={`w-4 h-4 transition-colors ${
                              level === selectedTier ? "text-green-300" : "text-green-400/80"
                            }`} />
                          ) : (
                            <span className="text-slate-600/70 text-sm">-</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-600/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-4">
                <div>
                  <AnimatedCounter 
                    value={240} 
                    suffix="k+" 
                    prefix="R" 
                    className="text-2xl font-bold text-amber-400"
                  />
                  <p className="text-slate-400 text-xs mt-1">Average Hidden Profit Found</p>
                </div>
                <div>
                  <AnimatedCounter 
                    value={67} 
                    suffix="%" 
                    className="text-2xl font-bold text-green-400"
                  />
                  <p className="text-slate-400 text-xs mt-1">Efficiency Improvement</p>
                </div>
                <div>
                  <AnimatedCounter 
                    value={30} 
                    suffix=" days" 
                    className="text-2xl font-bold text-blue-400"
                  />
                  <p className="text-slate-400 text-xs mt-1">Average Implementation Time</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm text-center">
                These are our recommended plans. Growth Sessions help decide which level fits your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof & Testimonials */}
      <section id="voices" className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center -mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent blur-xl"></div>
            <div className="relative">
              <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 opacity-80">
                Real voices
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-sora leading-tight">
                What Business Owners{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                    Actually Say
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400/60 via-orange-500/60 to-amber-600/60 blur-sm"></div>
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Real South African voices sharing the results they've achieved.
              </p>
            </div>
          </motion.div>


          {/* Interactive Testimonial Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <ShuffleCards testimonials={[
              {
                id: 1,
                testimonial: "One small shift in our payment system doubled our cash flow in 8 weeks. Clients pay faster, we stress less.",
                author: "Thabo M. - Construction Company Owner"
              },
              {
                id: 2,
                testimonial: "A simple follow-up automation brought back 40% of our lost customers. Small change, massive reputation boost.", 
                author: "Annelie V. - Bakery Owner"
              },
              {
                id: 3,
                testimonial: "We tweaked our delivery tracker and suddenly customers started referring friends. Profits up 65% in 3 months.",
                author: "Sipho K. - Fresh Produce Supplier"
              }
            ]} />
          </motion.div>
        </div>
      </section>



      {/* New Pricing and Offer Section */}
      <PricingAndOffer />

      </main>
  )
}
