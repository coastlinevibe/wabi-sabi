'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Phone, Mail } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  type NavItem = { name: string; href: string; external?: boolean }
  const navItems: NavItem[] = [
    { name: 'The System', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Work With Us', href: '/work-with-us#hero' },
    { name: 'Training', href: '/training' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Components / Apps', href: '/components-or-apps' },
  ]

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-amber-500/95 to-orange-600/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/60 shadow-md">
              <Image
                src="/images/av2-small.png"
                alt="Wabi-Sabi logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold font-sora text-white tracking-tight drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-0.5">
              Wabi
              <span className="text-amber-200 ml-1 transition-colors duration-300 group-hover:text-amber-100">
                Sabi
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-9 pl-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-sm tracking-[0.12em] uppercase font-semibold transition-colors duration-200 relative group text-white/90 hover:text-amber-200`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-2 group-hover:w-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300 transition-all duration-300"></span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm tracking-[0.12em] uppercase font-semibold transition-colors duration-200 relative group ${
                      isActive 
                        ? 'text-amber-200' 
                        : 'text-white/90 hover:text-amber-200'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-2 group-hover:w-full'
                    }`}></span>
                  </Link>
                )
              )
            })}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-200" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>
            
            <Link
              href="/work-with-us"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Work With Us
            </Link>
            <a
              href="https://cal.com/riegal-du-toit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-orange-400 text-white px-3.5 py-1.5 rounded-lg font-medium text-xs md:text-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="tracking-[0.08em] uppercase">Book a Growth Session</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-200" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-amber-200 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-t border-gray-200 dark:border-dark-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-medium py-2 transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium py-2 transition-colors duration-200 ${
                      isActive 
                        ? 'text-amber-600 dark:text-amber-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              
              <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                <a
                  href="https://cal.com/riegal-du-toit/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book a Growth Session</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
