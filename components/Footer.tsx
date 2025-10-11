'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'The System', href: '/' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Training', href: '/training' },
      { name: 'Work With Us', href: '/work-with-us' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Components / Apps', href: '/components-or-apps' },
    ],
    resources: [
      { name: 'Take the Profit Quiz', href: '/funnel/quiz.html' },
      { name: 'Growth Insights', href: '/blog' },
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Training Resources', href: '/training' },
      { name: 'Philosophy', href: '/about' },
      { name: 'Privacy Policy', href: '/privacy' },
    ]
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/fWabi-Sabis', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/fWabi-Sabisdev', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/fWabi-Sabisdev', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/fWabi-Sabis.dev', label: 'Instagram' },
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <span className="text-2xl font-bold font-sora text-white">
                Wabi Sabi
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Finding beauty in business simplicity. We reveal hidden profit streams through small shifts, patient analysis, and precise automation that honors what already works.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">Cape Town, South Africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">+27 71 432 9190</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">wabisabiclick2025@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link: { name: string; href: string }) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link: { name: string; href: string }) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Start Your Journey</h3>
            <div className="space-y-4">
              <Link
                href="/funnel/quiz.html"
                className="block bg-gradient-to-r from-amber-500 to-orange-400 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
              >
                Take the Profit Quiz
              </Link>
              <a
                href="https://cal.com/riegal-du-toit/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-amber-500 text-amber-400 px-4 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 text-center"
              >
                Book a Growth Session
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-dark-700"
        >
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Growth Insights</h3>
            <p className="text-gray-300 mb-6">
              Receive mindful business insights and gentle growth strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                disabled
                className="flex-1 px-4 py-3 rounded-xl bg-dark-800 border border-dark-600 text-gray-500 placeholder-gray-500 cursor-not-allowed opacity-60"
              />
              <button 
                disabled
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 px-6 py-3 rounded-xl font-semibold cursor-not-allowed opacity-60"
              >
                Subscribe
              </button>
            </div>
            <p className="text-amber-400 text-sm mt-4 font-medium">Coming Soon</p>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Wabi Sabi. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-400 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
