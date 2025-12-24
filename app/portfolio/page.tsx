import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import InlineCaseStudyGallery, { InlineGalleryItem } from '@/components/InlineCaseStudyGallery'
import { WebsiteGallery } from '@/components/WebsiteGallery'
import { Stethoscope, PawPrint, Building2 } from 'lucide-react'
import { Hero3DCarousel, HeroCarouselSlide } from '@/components/Hero3DCarousel'
import { websiteShowcases, type WebsiteShowcase } from '@/data/websiteShowcases'
import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Portfolio - Case Studies & Projects',
  description: 'Explore our portfolio of successful business transformations. See how we help dentists, veterinarians, real estate agents, and more unlock hidden profit flows.',
  path: '/portfolio',
  keywords: ['portfolio', 'case studies', 'business transformation', 'success stories', 'project showcase'],
  ogType: 'website',
})

export default function PortfolioPage() {
  return <PortfolioPageClient />
}

'use client'

function PortfolioPageClient() {
  const [mounted, setMounted] = useState(false)

  const slides: HeroCarouselSlide[] = [
    {
      id: 'slide-1',
      title: 'Dentist Scheduling Calm',
      label: 'Dentists · Hidden chair-hours recovered',
      description: 'Smart automations stop no-shows and refill empty chairs before the day is lost.',
      services: ['automation', 'workflows', 'optimization'],
      type: 'Case Study',
      imageUrl: '/images/dentists.jpg',
      initials: 'AT',
      icon: '🦷',
      highlights: ['12 chair-hours reclaimed weekly'],
      hoverTitle: 'Dentists steady their schedule',
      hoverSummary: 'Automated recalls and comeback offers keep the roster full without frantic phone calls.',
      hoverHighlights: ['12 chair-hours back each week'],
      nicheDetail: 'Patients confirm from their phones, and last-minute gaps backfill automatically.',
      badgeIcon: <Stethoscope className="h-10 w-10 text-white" strokeWidth={2.6} />
    },
    {
      id: 'slide-2',
      title: 'Veterinarian Loyalty Loop',
      label: 'Veterinarians · Boosters caught on time',
      description: 'Automated wellness reminders stop boosters from slipping and keep pet parents engaged.',
      services: ['retention', 'reminders', 'customer success'],
      type: 'Case Study',
      imageUrl: '/images/veterinarians.jpg',
      initials: 'VT',
      icon: '🐾',
      highlights: ['+24% referral completion'],
      hoverTitle: 'Veterinary teams keep every booster booked',
      hoverSummary: 'Segmented reminders and one-tap booking links keep booster appointments locked in.',
      hoverHighlights: ['Waitlists fill cancelled slots within hours'],
      nicheDetail: 'Nurses start the day with boosters already confirmed and queues calm.',
      badgeIcon: <PawPrint className="h-10 w-10 text-white" strokeWidth={2.6} />
    },
    {
      id: 'slide-3',
      title: 'Real Estate Pipeline Clarity',
      label: 'Real Estate · Hot leads nurtured',
      description: 'Deal rooms and automated nudges keep agents focused on closings, not spreadsheets.',
      services: ['deal flow', 'crm automation', 'analytics'],
      type: 'Case Study',
      imageUrl: '/images/Real-Estate-Agents.jpg',
      initials: 'RE',
      icon: '🏡',
      highlights: ['3x faster lead response'],
      hoverTitle: 'Real estate teams work only the deals that matter',
      hoverSummary: 'Responsive automations qualify leads, tee up showings, and hand agents tidy daily priorities.',
      hoverHighlights: ['Pipeline dashboards show cash-ready buyers'],
      nicheDetail: 'Agents arrive to confirmed showings while nurtures run quietly in the background.',
      badgeIcon: <Building2 className="h-10 w-10 text-white" strokeWidth={2.6} />
    },
  ]

  const websiteGalleryItems: InlineGalleryItem[] = websiteShowcases.map((project: WebsiteShowcase) => ({
    id: project.id,
    name: project.name,
    icon: project.icon,
    accent: project.accent,
    tagline: project.tagline,
    href: project.href,
    image: project.image,
    ctaLabel: project.ctaLabel,
  }))

  useEffect(() => {
    setMounted(true)
    document.title = 'Portfolio | Wabi-Sabi'
  }, [])

  const scrollToHash = useCallback(() => {
    if (typeof window === 'undefined') return
    const { hash } = window.location
    if (!hash) return
    const target = document.querySelector(hash)
    if (target instanceof HTMLElement) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
      })
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    scrollToHash()
  }, [mounted, scrollToHash])

  useEffect(() => {
    window.addEventListener('hashchange', scrollToHash)
    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [scrollToHash])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section - Algolia Style Layout */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-green-500/5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white font-sora">
                  Strong businesses.{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                    Stable profits.
                  </span>
                </h1>
                
                <div className="mt-6">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent font-sora">
                    Yet still… <span className="whitespace-nowrap">hidden value.</span>
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light">
                  Deploy fast and scalable profit discovery anywhere with Wabi-Sabi's systems-first design
                </p>
                
                <p className="text-lg text-slate-200 leading-loose font-light">
                  Our clients weren't struggling — they were <span className="italic text-amber-200">already thriving</span>. But wise leaders know profit often hides <span className="italic text-amber-300">in plain sight</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/funnel/quiz.html" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block text-center">
                  Take the Profit Quiz
                </Link>
                <Link href="/work-with-us" className="border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 inline-block text-center">
                  Work With Us
                </Link>
              </div>
            </motion.div>

            {/* Right Visual - Portfolio Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Hero3DCarousel slides={slides} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* RollerDeck Case Studies */}
      <section id="case-studies" className="py-16 bg-slate-950 scroll-mt-32 lg:scroll-mt-48">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide font-sora">
              Quiet shifts. Doubled efficiency.
            </h2>
            <p className="text-xl text-slate-300 max-w-xl mx-auto font-light opacity-80">
              Automated flows with simple, reliable precision.
            </p>
          </div>

          <InlineCaseStudyGallery />
        </div>
      </section>

      <WebsiteGallery />

      {/* Video Testimonials Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide font-sora">
              Gentle reminders from fellow founders
            </h2>
            <p className="text-lg text-slate-300 max-w-lg mx-auto font-light opacity-80">
              Brief moments of clarity shared.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We thought we were efficient — but the quiz showed hidden leaks that changed everything.",
                author: "Sarah M.",
                title: "Agency Owner",
                video: "/video/testimonial1.mp4"
              },
              {
                quote: "Profit up, hours down. Our system runs smoothly now. The calm clarity we needed.",
                author: "LinkedIn SaaS Founder",
                title: "SaaS Company",
                video: "/video/testimonial2.mp4"
              },
              {
                quote: "We didn't need a revolution, just small shifts. That shifted our entire business.",
                author: "D2C Brand Owner",
                title: "E-Commerce Brand",
                video: "/video/testimonial3.mp4"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/20 border border-slate-700/30 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800/30 to-slate-900/30 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-amber-400/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-400/40 transition-colors">
                      <svg className="w-4 h-4 text-amber-300 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-slate-400 text-sm font-light opacity-60">📌 Brief video moment</p>
                  </div>
                </div>
                <div className="p-5">
                  <blockquote className="text-slate-200 italic mb-3 leading-relaxed font-light text-base opacity-90">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-amber-300 font-light text-base font-sora">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm font-light opacity-70">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Metrics Strip */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-light text-amber-300">75+</div>
              <div className="text-slate-300 text-sm font-light opacity-80">Businesses Impacted</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-light text-green-300">98%</div>
              <div className="text-slate-300 text-sm font-light opacity-80">Profit Lifts Through Clarity</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-light text-blue-300">3M+</div>
              <div className="text-slate-300 text-sm font-light opacity-80">Nurtured Leads Without Extra Ad Spend</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/funnel/quiz.html" className="bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 px-6 py-3 rounded-md font-light text-base transition-colors inline-block border border-amber-400/20">
              Take the Profit Shift Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-6 leading-relaxed tracking-wide">
            Even strong businesses have <span className="text-amber-300 font-normal">hidden value</span>.
          </h2>
          <p className="text-lg text-slate-200 mb-10 leading-loose max-w-2xl mx-auto font-light opacity-90">
            The Wabi-Sabi Way isn't about chasing more — it's about uncovering what's already there and shaping it wisely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/funnel/quiz.html" className="bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 px-6 py-3 rounded-md font-light text-base transition-colors border border-amber-400/20">
              Take the Profit Quiz (3 minutes)
            </Link>
            <Link href="/work-with-us" className="bg-transparent border border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white px-6 py-3 rounded-md font-light text-base transition-colors">
              Book a Growth Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


