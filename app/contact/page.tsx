import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, Leaf } from 'lucide-react'
import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - Reveal Hidden Income Flows',
  description: 'Small shifts reveal hidden income streams. Contact Wabi-Sabi to discover profit flows hiding in plain sight. Free consultation available.',
  path: '/contact',
  keywords: ['contact', 'business consultation', 'hidden income', 'profit optimization', 'business growth'],
  ogType: 'website',
})

export default function ContactPage() {
  return (
    <ContactPageClient />
  )
}

'use client'

function ContactPageClient() {
  useEffect(() => {
    document.title = 'Reveal Hidden Income | Wabi-Sabi'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Small shifts reveal hidden income flows. Discover profit streams hiding in plain sight. The Wabi-Sabi way.')
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showScheduler, setShowScheduler] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Submission failed')
      }

      setIsSubmitted(true)
    } catch (err: any) {
      setSubmitError(err?.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Direct Line',
      details: '+27 71 432 9190',
      description: 'Immediate clarity, Mon-Fri 8am-6pm'
    },
    {
      icon: Mail,
      title: 'Thoughtful Inquiry',
      details: 'wabisabiclick2025@gmail.com',
      description: 'Considered responses within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Presence',
      details: 'Cape Town, South Africa',
      description: 'Where mountains meet ocean'
    },
    {
      icon: Leaf,
      title: 'Natural Rhythm',
      details: 'Mon-Fri: 8am-6pm SAST',
      description: 'Balanced availability'
    }
  ]

  const pathHelp: Record<string, string> = {
    'hidden-income-audit': 'Reveal profit streams hiding in your current operations.',
    'flow-systems': 'Small automation shifts that unlock recurring revenue.',
    'profit-paths': 'Customer journey tweaks that double conversion rates.',
    'complete-transformation': 'Full income flow optimization from foundation up.'
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Thank You!
          </h2>
          <p className="text-slate-300 mb-8">
            We've received your message and will get back to you within 24 hours. 
            In the meantime, feel free to check out our portfolio or follow us on social media.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                projectType: '',
                budget: '',
                timeline: '',
                message: ''
              })
            }}
            className="bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold border border-slate-700 hover:bg-slate-700 transition-colors duration-200"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
                Ready to begin
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reveal{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Hidden Income Flows
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Small shifts unlock profit streams hiding in plain sight. Share your business story, and let's discover the income flows waiting to be revealed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Where Are Your Hidden Profits?
                </h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Small shifts reveal income streams you never knew existed.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-amber-300 tracking-wide mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-400/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-300/70 bg-slate-900/40 text-white placeholder:text-slate-400 shadow-inner"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-300 tracking-wide mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-400/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-300/70 bg-slate-900/40 text-white placeholder:text-slate-400 shadow-inner"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-amber-300 tracking-wide mb-2">
                        Your Business
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-400/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-300/70 bg-slate-900/40 text-white placeholder:text-slate-400 shadow-inner"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-300 tracking-wide mb-2">
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-400/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-300/70 bg-slate-900/40 text-white placeholder:text-slate-400 shadow-inner"
                        placeholder="+27 12 345 6789"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-amber-300 tracking-wide mb-2">
                        Which Income Flows Need Revealing? *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-400/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-300/70 bg-slate-900/60 text-white"
                      >
                        <option value="">Choose Your Focus</option>
                        <option value="hidden-income-audit">Hidden Income Audit</option>
                        <option value="flow-systems">Revenue Flow Systems</option>
                        <option value="profit-paths">Profit Path Optimization</option>
                        <option value="complete-transformation">Complete Income Transformation</option>
                      </select>
                      <p className="mt-2 text-xs text-amber-200/80">
                        {formData.projectType ? pathHelp[formData.projectType] : 'Choose the path that resonates — share more below.'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-300 tracking-wide mb-2">
                        Budget Range (approximate — where do you sit today?)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-400/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-300/70 bg-slate-900/40 text-white"
                      >
                        <option value="">Select Budget</option>
                        <option value="under-50k">Under R50,000</option>
                        <option value="50k-100k">R50,000 - R100,000</option>
                        <option value="100k-250k">R100,000 - R250,000</option>
                        <option value="250k-500k">R250,000 - R500,000</option>
                        <option value="over-500k">Over R500,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-amber-300 tracking-wide mb-2">
                      When Would You Like to Begin?
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-400/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-300/70 bg-slate-900/40 text-white"
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-amber-300 tracking-wide mb-2">
                      Where Do You Suspect Hidden Income Exists? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-400/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-300/70 bg-slate-900/60 text-white placeholder:text-slate-400"
                      placeholder="Tell us: What revenue streams feel untapped? Where do you sense money is being left on the table? What small changes might unlock bigger profits?"
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-400">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Reveal My Hidden Income</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Let's Uncover Your Hidden Profits
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Small shifts reveal income streams hiding in plain sight. We specialize in finding the profit flows you never knew existed. Reach out and let's discover what's waiting to be unlocked.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-slate-200 font-semibold mb-1">{info.details}</p>
                    <p className="text-slate-400 text-sm">{info.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 relative">
                <h3 className="text-lg font-bold text-white">Quick Actions</h3>
                {/* Click-to-open selector overlay */}
                {showScheduler && (
                  <>
                    {/* Backdrop inside Quick Actions area */}
                    <div
                      className="absolute inset-0 bg-black/30 rounded-xl z-10"
                      onClick={() => setShowScheduler(false)}
                    />
                    <div className="absolute left-0 right-0 top-10 z-20">
                      <div className="bg-slate-900 border border-amber-500/20 rounded-xl p-4 space-y-3 shadow-2xl">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-semibold text-white">Who would you like to meet with?</div>
                            <div className="text-xs text-slate-400">Choose a specialist for your 30-minute call</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowScheduler(false)}
                            className="text-xs text-slate-400 hover:text-slate-200"
                          >
                            Close
                          </button>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          <a
                            href="https://cal.com/nadine-marshall-azjzs9/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500/40 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">N</div>
                            <div>
                              <div className="text-sm font-medium text-white">Nadine</div>
                              <div className="text-xs text-slate-300">Product strategy & client success</div>
                            </div>
                          </a>
                          <a
                            href="https://cal.com/riegal-du-toit/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500/40 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">R</div>
                            <div>
                              <div className="text-sm font-medium text-white">Riegal</div>
                              <div className="text-xs text-slate-300">Systems architecture & engineering</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
                <a
                  href="tel:+27714329190"
                  className="flex items-center space-x-3 bg-slate-900 hover:bg-slate-800 p-4 rounded-xl transition-colors duration-200 border border-amber-500/20 hover:border-amber-500/40"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="font-semibold text-slate-200">Call Now</div>
                    <div className="text-sm text-slate-400">Speak directly with our team</div>
                  </div>
                </a>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowScheduler(true)}
                    className="w-full flex items-center space-x-3 bg-slate-900 hover:bg-slate-800 p-4 rounded-xl transition-colors duration-200 border border-amber-500/20 hover:border-amber-500/40 text-left"
                  >
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="font-semibold text-slate-200">Book a Discovery Call</div>
                      <div className="text-sm text-slate-400">Free 30-minute consultation</div>
                    </div>
                  </button>
                </div>

                <a
                  href="/chat/wabi-sabi-business?msg=Hi! I'm interested in starting my Wabi-sabi growth journey."
                  className="flex items-center space-x-3 bg-slate-900 hover:bg-slate-800 p-4 rounded-xl transition-colors duration-200 border border-amber-500/20 hover:border-amber-500/40"
                >
                  <div className="w-5 h-5 text-amber-400">🌿</div>
                  <div>
                    <div className="font-semibold text-slate-200">Wabi-Sabi Chat</div>
                    <div className="text-sm text-slate-400">Start a private conversation</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Simple CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Reveal Hidden Income?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Small shifts. Hidden profit flows revealed. Your income transformation starts with one conversation.
            </p>
            <a
              href="tel:+27123456789"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
