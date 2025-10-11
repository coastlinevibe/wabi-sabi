'use client'

import { motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function ChatFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const defaultMessage = 'Hi! I\'m interested in discussing hidden income flows with Wabi-Sabi'
  const [isScheduling, setIsScheduling] = useState(false)
  const router = useRouter()

  const handleChatClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    router.push(`/chat/wabi-sabi-business?msg=${encodedMessage}`)
  }

  return (
    <>
      {/* Chat Float Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </motion.div>
        </motion.button>

        {/* Pulse Animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full -z-10"
        />
      </motion.div>

      {/* Wabi-Sabi Chat Popup */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 20,
          scale: isOpen ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-24 right-6 z-40 w-80 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 overflow-hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg">👋</span>
            </div>
            <div>
              <h3 className="font-semibold">Wabi-Sabi Support</h3>
              <p className="text-sm opacity-90">Typically replies instantly</p>
            </div>
          </div>
        </div>

        {/* Chat Content */}
        <div className="p-4">
          <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Hi there! 🌿 Ready to reveal hidden income flows? Let's chat about your business!
            </p>
          </div>

          {/* Default quick actions vs Scheduling selector */}
          {!isScheduling ? (
            <div className="space-y-3">
              <button
                onClick={handleChatClick}
                className="w-full text-left p-3 bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-lg transition-colors duration-200 border border-amber-200 dark:border-amber-800"
              >
                <div className="text-sm font-medium text-amber-700 dark:text-amber-300">
                  🌿 Start Wabi-Sabi Chat
                </div>
                <div className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                  Discover hidden income flows
                </div>
              </button>

              <button
                onClick={() => setIsScheduling(true)}
                className="w-full text-left p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-200 border border-blue-200 dark:border-blue-800"
              >
                <div className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  📅 Book Discovery Call
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  Free 30-minute consultation
                </div>
              </button>

              <button
                onClick={() => router.push('/portfolio')}
                className="w-full text-left p-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors duration-200 border border-purple-200 dark:border-purple-800"
              >
                <div className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  📁 View Portfolio & Pricing
                </div>
                <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                  See our work and get a quote
                </div>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">Who would you like to meet with?</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Choose a specialist for your discovery call</div>
                </div>
                <button
                  onClick={() => setIsScheduling(false)}
                  className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  Back
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {/* Nadine */}
                <button
                  onClick={() => {
                    window.open('https://cal.com/nadine-marshall-azjzs9/30min', '_blank')
                  }}
                  className="w-full text-left p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-200 border border-blue-200 dark:border-blue-800 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">N</div>
                  <div>
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Nadine</div>
                    <div className="text-xs text-blue-700/80 dark:text-blue-300/80">Product strategy & client success</div>
                  </div>
                </button>

                {/* Riegal */}
                <button
                  onClick={() => {
                    window.open('https://cal.com/riegal-du-toit/30min', '_blank')
                  }}
                  className="w-full text-left p-3 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg transition-colors duration-200 border border-indigo-200 dark:border-indigo-800 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">R</div>
                  <div>
                    <div className="text-sm font-medium text-indigo-800 dark:text-indigo-200">Riegal</div>
                    <div className="text-xs text-indigo-700/80 dark:text-indigo-300/80">Systems architecture & engineering</div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 pb-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            We'll respond within minutes during business hours
          </div>
        </div>
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
        />
      )}
    </>
  )
}
