'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { 
  Mail, 
  Globe, 
  Wrench, 
  Bot, 
  Zap, 
  Database,
  CheckCircle2,
  MessageCircle,
  Clock,
  Shield,
  TrendingUp,
  FileText,
  Calendar,
  Users
} from 'lucide-react'
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/constants'

export default function SupportDeskPage() {
  useEffect(() => {
    document.title = 'Digital Support Desk | Wabi-Sabi'
  }, [])

  const whatsappLink = getWhatsAppLink(WHATSAPP_MESSAGES.supportDesk)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(251 191 36 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-sora leading-tight">
              Your Digital <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Support Desk</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everyday IT, website, email, AI and automation support for small businesses, from <span className="text-amber-400 font-semibold">R1000/month</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Book Free Checkup on WhatsApp
              </a>
              
              <a
                href="#whats-included"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 text-slate-100 font-medium rounded-xl hover:bg-slate-700 transition-all"
              >
                See What's Included
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-12 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Already have systems in place?</h3>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Our <strong className="text-amber-400">Support Desk</strong> keeps your existing systems running smoothly with everyday IT, website, and automation help.
            </p>
            <div className="border-t border-slate-700/50 my-6"></div>
            <p className="text-slate-400 mb-4">
              Need to <strong className="text-white">build or transform</strong> your business systems?
            </p>
            <a
              href="/work-with-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-amber-500/30 text-amber-400 font-medium rounded-lg hover:bg-slate-700 hover:border-amber-500/50 transition-all"
            >
              Explore Our Consulting Services (from R45k)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sora">
              Small business tech problems should not slow down your day.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Mail className="w-8 h-8 text-amber-400" />,
                title: "Email and domain issues",
                description: "Emails not sending, domain renewals, DNS confusion"
              },
              {
                icon: <Globe className="w-8 h-8 text-amber-400" />,
                title: "Website changes",
                description: "Small updates, broken links, content edits that take forever"
              },
              {
                icon: <Wrench className="w-8 h-8 text-amber-400" />,
                title: "Software setup",
                description: "New tools that need configuring but no time to learn"
              },
              {
                icon: <Bot className="w-8 h-8 text-amber-400" />,
                title: "AI tools confusion",
                description: "ChatGPT, automation tools - where do you even start?"
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-400" />,
                title: "Admin bottlenecks",
                description: "Manual tasks eating hours that could be automated"
              },
              {
                icon: <Database className="w-8 h-8 text-amber-400" />,
                title: "Customer follow-up gaps",
                description: "Leads slipping through, no system to track conversations"
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/30 transition-all"
              >
                <div className="mb-4">{problem.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-slate-400 text-sm">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Offer Section */}
      <section id="whats-included" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sora">
              Starter Support: <span className="text-amber-400">R1000/month</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 border border-amber-500/20 rounded-2xl p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "2 remote support hours per month",
                "WhatsApp support channel",
                "Email and domain support",
                "Website updates and small fixes",
                "Google Workspace / Microsoft 365 help",
                "AI tool setup guidance",
                "Basic automation support",
                "Monthly digital health check"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <p className="text-amber-200 text-sm">
                <strong>Note:</strong> Extra work is quoted separately, so you stay in control of costs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sora">
              How it works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Message us on WhatsApp",
                description: "Quick, easy, no forms to fill"
              },
              {
                step: "2",
                title: "Free 20-minute digital checkup",
                description: "We identify your biggest tech pain point"
              },
              {
                step: "3",
                title: "We fix or recommend the first priority",
                description: "Get immediate value, see how we work"
              },
              {
                step: "4",
                title: "Choose monthly support or custom build",
                description: "Flexible options that fit your business"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sora">
              What we can help with
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email, domains and hosting",
                description: "Setup, troubleshooting, migrations"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Website edits and landing pages",
                description: "Content updates, new pages, fixes"
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Forms and enquiry flows",
                description: "Contact forms, lead capture, integrations"
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Customer databases and spreadsheets",
                description: "Organization, automation, cleanup"
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "AI tools and prompts",
                description: "ChatGPT, automation, workflow optimization"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Admin automations",
                description: "Zapier, Make, workflow automation"
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Booking and quote systems",
                description: "Calendars, scheduling, quote generation"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "CRM and follow-up workflows",
                description: "Customer tracking, email sequences"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sora">
              Choose your support level
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Starter Support</h3>
              <div className="text-4xl font-bold text-amber-400 mb-4">R1000<span className="text-lg text-slate-400">/month</span></div>
              <p className="text-slate-300 mb-6">Best for small businesses needing everyday digital support.</p>
              <div className="mb-6">
                <p className="text-slate-400 text-sm">Includes <strong className="text-white">2 support hours/month</strong></p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Book on WhatsApp
              </a>
            </motion.div>

            {/* Priority Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 border-2 border-amber-500/50 rounded-2xl p-8 relative transform md:scale-105 shadow-xl"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Priority Support</h3>
              <div className="text-4xl font-bold text-amber-400 mb-4">R2500<span className="text-lg text-slate-400">/month</span></div>
              <p className="text-slate-300 mb-6">Best for businesses that need regular updates, automations and priority support.</p>
              <div className="mb-6">
                <p className="text-slate-400 text-sm">Includes <strong className="text-white">5 support hours/month</strong></p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Book on WhatsApp
              </a>
            </motion.div>

            {/* Custom Build */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Custom Build</h3>
              <div className="text-4xl font-bold text-amber-400 mb-4">Quoted</div>
              <p className="text-slate-300 mb-6">Best for websites, dashboards, CRM systems, automations, AI assistants and full business systems.</p>
              <div className="mb-6">
                <p className="text-slate-400 text-sm">Tailored to your specific needs</p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Book on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety / Boundaries Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sora">
              Clear support. No nasty surprises.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <div className="space-y-4">
              {[
                "The monthly plan is not unlimited IT support.",
                "Included hours are clearly defined.",
                "Bigger tasks are quoted before work starts.",
                "Support is mainly remote.",
                "Emergency onsite work, hardware purchases and third-party fees are excluded unless agreed."
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Services Cross-Link */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-green-500/30 rounded-2xl p-10 text-center"
          >
            <div className="text-4xl mb-4">🌱</div>
            <h2 className="text-3xl font-bold text-white mb-4 font-sora">
              Ready for Business Transformation?
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              If you need more than support — if you're ready to <strong className="text-amber-400">build complete business systems</strong>, automate workflows, and unlock hidden revenue — our consulting services are designed for that.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
              <div className="bg-slate-950/50 rounded-lg p-4">
                <div className="text-amber-400 font-semibold mb-2">Foundation</div>
                <div className="text-2xl font-bold text-white mb-1">R45k</div>
                <div className="text-sm text-slate-400">30-day implementation</div>
              </div>
              <div className="bg-slate-950/50 rounded-lg p-4 border border-amber-500/30">
                <div className="text-amber-400 font-semibold mb-2">Growth</div>
                <div className="text-2xl font-bold text-white mb-1">R95k</div>
                <div className="text-sm text-slate-400">60-day implementation</div>
              </div>
              <div className="bg-slate-950/50 rounded-lg p-4">
                <div className="text-amber-400 font-semibold mb-2">Scale</div>
                <div className="text-2xl font-bold text-white mb-1">R180k</div>
                <div className="text-sm text-slate-400">90-day implementation</div>
              </div>
            </div>
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.discovery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg"
            >
              Explore Consulting Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sora">
              Need a reliable digital support partner?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Start with a free 20-minute checkup and see where your business is losing time, leads or money.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Book Free Checkup on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
