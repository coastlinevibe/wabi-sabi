'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { ScrollXCarousel, ScrollXCarouselContainer, ScrollXCarouselProgress, ScrollXCarouselWrap } from "@/components/ui/scroll-x-carousel"
import {CardHoverReveal, CardHoverRevealContent, CardHoverRevealMain} from '@/components/ui/reveal-on-hover'
import { Badge } from '@/components/ui/badge'

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      id: 'slide-1',
      title: 'Agency Transformation',
      description: 'A profitable creative agency with loyal clients — but manual onboarding, scattered workflows, and a team stretched thin.',
      services: ['automation', 'workflows', 'optimization'],
      type: 'Case Study',
      imageUrl: '/video/wasabi.mp4',
    },
    {
      id: 'slide-2',
      title: 'D2C Brand Growth',
      description: 'An e-commerce brand with strong sales, but flat repeat purchases. Ad spend kept climbing to hold revenue steady.',
      services: ['retention', 'email marketing', 'LTV optimization'],
      type: 'E-commerce',
      imageUrl: '/video/wasabi.mp4',
    },
    {
      id: 'slide-3',
      title: 'SaaS Clarity Unlock',
      description: 'A fast-growing SaaS company with rising revenue, but no clear dashboards. Decisions were driven by instinct, not data.',
      services: ['analytics', 'dashboards', 'data insights'],
      type: 'SaaS',
      imageUrl: '/video/wasabi.mp4',
    },
  ]

  useEffect(() => {
    setMounted(true)
    document.title = 'Portfolio | Wabi-Sabi'
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const portfolioItems = [
    {
      title: "Agency Transformation",
      category: "Case Study 1",
      result: "+42% Profit in 90 Days",
      before: "A profitable creative agency with loyal clients — but manual onboarding, scattered workflows, and a team stretched thin.",
      revealed: [
        "40+ hours per month lost to manual client setup",
        "Missed opportunities for upsell and cross-sell",
        "Processes reliant on a few key people instead of systems"
      ],
      shifts: [
        "Automated client onboarding",
        "Built a retention flow that nurtured accounts",
        "Simplified reporting dashboards for the team"
      ],
      results: [
        "+42% profit in 90 days",
        "80+ hours per month reclaimed",
        "Clients onboarded faster, team freed for strategy"
      ],
      image: "/video/wasabi.mp4"
    },
    {
      title: "D2C Brand (Compounding LTV)",
      category: "Case Study 2", 
      result: "+31% Increase in LTV",
      before: "An e-commerce brand with strong sales, but flat repeat purchases. Ad spend kept climbing to hold revenue steady.",
      revealed: [
        "Underused customer email list",
        "No structured post-purchase experience",
        "Few touchpoints encouraging repeat orders"
      ],
      shifts: [
        "Introduced a retention engine",
        "Added micro-upsells and loyalty offers",
        "Built personalized nurture emails triggered by purchase behavior"
      ],
      results: [
        "+31% increase in LTV",
        "More predictable sales cycles",
        "Growth without additional ad spend"
      ],
      image: "/video/wasabi.mp4"
    },
    {
      title: "SaaS Founder (Clarity Unlock)",
      category: "Case Study 3",
      result: "2x Growth, Same Headcount",
      before: "A fast-growing SaaS company with rising revenue, but no clear dashboards. Decisions were driven by instinct, not data.",
      revealed: [
        "Key churn signals missed",
        "Ops drag slowing client onboarding",
        "Sales pipeline bottlenecks hidden in CRM"
      ],
      shifts: [
        "Introduced clarity dashboards with key metrics",
        "Systemized lead routing and onboarding",
        "Built weekly 'keep/change/kill' reviews for the team"
      ],
      results: [
        "2x growth with the same headcount",
        "CEO moved from firefighting to strategy",
        "Confidence and calm restored across the team"
      ],
      image: "/video/wasabi.mp4"
    }
  ]

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
                <Link href="/quiz" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block text-center">
                  Take the Profit Quiz
                </Link>
                <Link href="/work-with-us" className="border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 inline-block text-center">
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
              {/* 3D Carousel */}
              <div className="relative w-full h-[70vh] flex items-center justify-center" style={{ perspective: '1000px' }}>
                {/* Navigation buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* 3D Carousel Cards */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {slides.map((slide, index) => {
                    const offset = (index - currentIndex + slides.length) % slides.length;
                    const isCenter = offset === 0;
                    const isLeft = offset === slides.length - 1 || (offset < 0 && offset > -slides.length / 2);
                    const isRight = offset === 1 || (offset > 0 && offset < slides.length / 2);
                    
                    let transform = '';
                    let zIndex = 1;
                    let opacity = 0.4;
                    
                    if (isCenter) {
                      transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)';
                      zIndex = 10;
                      opacity = 1;
                    } else if (isLeft) {
                      transform = 'translateX(-180px) translateZ(-100px) rotateY(25deg) scale(0.85)';
                      zIndex = 5;
                      opacity = 0.7;
                    } else if (isRight) {
                      transform = 'translateX(180px) translateZ(-100px) rotateY(-25deg) scale(0.85)';
                      zIndex = 5;
                      opacity = 0.7;
                    } else {
                      transform = 'translateX(0) translateZ(-300px) rotateY(0deg) scale(0.7)';
                      zIndex = 1;
                      opacity = 0.3;
                    }

                    return (
                      <div
                        key={slide.id}
                        className="absolute transition-all duration-700 ease-out"
                        style={{
                          transform,
                          zIndex,
                          opacity
                        }}
                      >
                        <CardHoverReveal className="w-80 shadow-2xl border-0 rounded-2xl overflow-hidden" style={{ height: '584px' }}>
                          <CardHoverRevealMain>
                            <div className="w-full bg-gradient-to-br from-white via-yellow-50 to-green-50 flex flex-col relative" style={{ height: '584px' }}>
                              {/* Wabi-sabi texture overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-yellow-100/30 to-orange-100/25 opacity-70"></div>
                              
                              {/* Image box - top 40% */}
                              <div className="w-full bg-gradient-to-br from-green-200/60 via-yellow-200/50 to-orange-200/40 flex items-center justify-center relative z-10" style={{ height: '234px' }}>
                                {/* Organic shape background */}
                                <div className="absolute inset-4 bg-gradient-to-br from-green-300/30 to-yellow-300/40 rounded-[2rem] transform rotate-1"></div>
                                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center relative z-10 shadow-lg transform -rotate-2">
                                  <span className="text-white text-xl">📊</span>
                                </div>
                              </div>
                              
                              {/* Content area - bottom 60% */}
                              <div className="flex-1 flex items-center justify-center p-6 relative z-10">
                                <div className="text-center space-y-4">
                                  {/* Wabi-sabi styled logo with vibrant colors */}
                                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto flex items-center justify-center shadow-lg transform rotate-1 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full"></div>
                                    <span className="text-white text-lg font-bold relative z-10">MK</span>
                                  </div>
                                  <div className="text-slate-800">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{slide.title}</h3>
                                    <p className="text-green-700 text-sm font-medium bg-green-100/80 px-3 py-1 rounded-full inline-block border border-green-200/50">{slide.type}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHoverRevealMain>
                          <CardHoverRevealContent className="space-y-4 rounded-2xl bg-[rgba(0,0,0,.5)] backdrop-blur-3xl p-4">
                            <div className="space-y-2">
                              <h3 className="text-sm text-white/80">Type</h3>
                              <div className="flex flex-wrap gap-2">
                                <Badge className="capitalize rounded-full bg-indigo-500">
                                  {slide.type}
                                </Badge>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-sm text-white/80">Focus Areas</h3>
                              <div className="flex flex-wrap gap-2">
                                {slide.services.map((service) => (
                                  <Badge
                                    key={service}
                                    className="capitalize rounded-full"
                                    variant={'secondary'}
                                  >
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-2 mt-2">
                              <h3 className="text-white capitalize font-medium">
                                {slide.title}
                              </h3>
                              <p className="text-white/80 text-sm">{slide.description}</p>
                            </div>
                          </CardHoverRevealContent>
                        </CardHoverReveal>
                      </div>
                    );
                  })}
                </div>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-amber-400 scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide font-sora">
              Quiet shifts. Doubled efficiency.
            </h2>
            <p className="text-xl text-slate-300 max-w-xl mx-auto font-light opacity-80">
              Automated flows with simple, reliable precision.
            </p>
          </div>

          <div className="space-y-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-amber-400/20 transition-all duration-500"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="space-y-5">
                    <div>
                      <span className="bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-light mb-3 inline-block tracking-wide">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-light text-white mb-3 tracking-wide font-sora">{item.title}</h3>
                      <div className="text-lg font-light text-green-300 mb-4 opacity-90">{item.result}</div>
                    </div>

                    <div>
                      <h4 className="text-base font-light text-amber-300 mb-2 tracking-wider uppercase opacity-80">Before</h4>
                      <p className="text-slate-200 leading-relaxed font-light text-base opacity-85">{item.before}</p>
                    </div>

                    <div>
                      <h4 className="text-base font-light text-amber-300 mb-2 tracking-wider uppercase opacity-80">What We Revealed</h4>
                      <ul className="space-y-1">
                        {item.revealed.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-slate-200 flex items-start text-base font-light opacity-85">
                            <span className="text-amber-300 mr-2 opacity-60">·</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h4 className="text-base font-light text-amber-300 mb-2 tracking-wider uppercase opacity-80">The Small Shifts</h4>
                      <ul className="space-y-1">
                        {item.shifts.map((shift, shiftIndex) => (
                          <li key={shiftIndex} className="text-slate-200 flex items-start text-base font-light opacity-85">
                            <span className="text-green-300 mr-2 opacity-60">✓</span>
                            {shift}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-light text-amber-300 mb-2 tracking-wider uppercase opacity-80">Result</h4>
                      <ul className="space-y-1">
                        {item.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-green-200 flex items-start font-light text-base">
                            <span className="text-green-300 mr-2 opacity-60">→</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-slate-900/50 relative overflow-hidden rounded-lg border border-slate-700/30">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-slate-400 text-sm font-light opacity-70">
                        📌 Visual reference
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                className="bg-slate-800/20 border border-slate-700/30 rounded-2xl overflow-hidden"
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
            <Link href="/quiz" className="bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 px-6 py-3 rounded-xl font-light text-base transition-colors inline-block border border-amber-400/20">
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
            <Link href="/quiz" className="bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 px-6 py-3 rounded-xl font-light text-base transition-colors border border-amber-400/20">
              Take the Profit Quiz (3 minutes)
            </Link>
            <Link href="/work-with-us" className="bg-transparent border border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white px-6 py-3 rounded-xl font-light text-base transition-colors">
              Book a Growth Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
