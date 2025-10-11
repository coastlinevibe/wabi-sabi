'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Activity,
  Beef,
  Calculator,
  CarFront,
  ClipboardList,
  Coffee,
  DraftingCompass,
  Dumbbell,
  HeartPulse,
  Home,
  Leaf,
  PawPrint,
  Scale,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  Zap,
} from 'lucide-react'

import { caseStudies } from '@/data/caseStudies'
import type { CaseStudyIconName } from '@/data/caseStudies'

const ICON_MAP: Record<CaseStudyIconName, JSX.Element> = {
  stethoscope: <Stethoscope className="w-5 h-5" />,
  beef: <Beef className="w-5 h-5" />,
  clipboardList: <ClipboardList className="w-5 h-5" />,
  activity: <Activity className="w-5 h-5" />,
  heartPulse: <HeartPulse className="w-5 h-5" />,
  pawPrint: <PawPrint className="w-5 h-5" />,
  scale: <Scale className="w-5 h-5" />,
  calculator: <Calculator className="w-5 h-5" />,
  shieldCheck: <Sparkles className="w-5 h-5" />,
  home: <Home className="w-5 h-5" />,
  draftingCompass: <DraftingCompass className="w-5 h-5" />,
  utensilsCrossed: <UtensilsCrossed className="w-5 h-5" />,
  coffee: <Coffee className="w-5 h-5" />,
  dumbbell: <Dumbbell className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  carFront: <CarFront className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
}

const ACCENT_COLORS = {
  emerald: { bg: 'from-emerald-500/15 to-emerald-600/5', border: 'border-emerald-400/20', icon: 'text-emerald-400' },
  rose: { bg: 'from-rose-500/15 to-rose-600/5', border: 'border-rose-400/20', icon: 'text-rose-400' },
  amber: { bg: 'from-amber-500/15 to-amber-600/5', border: 'border-amber-400/20', icon: 'text-amber-400' },
  blue: { bg: 'from-blue-500/15 to-blue-600/5', border: 'border-blue-400/20', icon: 'text-blue-400' },
  green: { bg: 'from-green-500/15 to-green-600/5', border: 'border-green-400/20', icon: 'text-green-400' },
  teal: { bg: 'from-teal-500/15 to-teal-600/5', border: 'border-teal-400/20', icon: 'text-teal-400' },
  purple: { bg: 'from-purple-500/15 to-purple-600/5', border: 'border-purple-400/20', icon: 'text-purple-400' },
  orange: { bg: 'from-orange-500/15 to-orange-600/5', border: 'border-orange-400/20', icon: 'text-orange-400' },
  red: { bg: 'from-red-500/15 to-red-600/5', border: 'border-red-400/20', icon: 'text-red-400' },
  pink: { bg: 'from-pink-500/15 to-pink-600/5', border: 'border-pink-400/20', icon: 'text-pink-400' },
  slate: { bg: 'from-slate-500/15 to-slate-600/5', border: 'border-slate-400/20', icon: 'text-slate-400' },
}

export type InlineGalleryItem = {
  id: string
  name: string
  icon: CaseStudyIconName
  accent: keyof typeof ACCENT_COLORS
  tagline: string
  href: string
  image?: string
  ctaLabel?: string
}

type InlineCaseStudyGalleryProps = {
  items?: InlineGalleryItem[]
  title?: string
  subtitle?: string
  searchPlaceholder?: string
  ctaLabel?: string
}

export default function InlineCaseStudyGallery({
  items,
  title = 'Case Study Niches',
  subtitle = 'Hover to preview each niche and click to dive into the flows.',
  searchPlaceholder = 'Search niches',
  ctaLabel,
}: InlineCaseStudyGalleryProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const defaultItems = React.useMemo<InlineGalleryItem[]>(
    () =>
      caseStudies.map((study) => ({
        id: study.id,
        name: study.name,
        icon: study.icon,
        accent: (study.accent as keyof typeof ACCENT_COLORS) ?? 'emerald',
        tagline: study.hero.tagline,
        href: `/case-studies/${study.id}`,
        image: study.carouselImage,
        ctaLabel: 'Read case study',
      })),
    []
  )

  const galleryItems = React.useMemo<InlineGalleryItem[]>(
    () => items ?? defaultItems,
    [items, defaultItems]
  )

  const filteredItems = React.useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return galleryItems
    return galleryItems.filter((item) =>
      item.name.toLowerCase().includes(term) ||
      item.tagline.toLowerCase().includes(term)
    )
  }, [galleryItems, searchTerm])

  React.useEffect(() => {
    setCurrentIndex((prev) => {
      if (filteredItems.length === 0) return 0
      if (prev >= filteredItems.length) return 0
      return prev
    })
  }, [filteredItems.length])

  const handleNext = () => {
    if (filteredItems.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const handlePrev = () => {
    if (filteredItems.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const visibleStudies = filteredItems.length <= 3
    ? filteredItems
    : filteredItems
        .slice(currentIndex, currentIndex + 3)
        .concat(filteredItems.slice(0, Math.max(0, currentIndex + 3 - filteredItems.length)))

  return (
    <section className="w-full">
      {/* Compact Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
              {title}
            </h2>
            <p className="text-sm text-white/70 sm:text-base">
              {subtitle}
            </p>
          </div>
          
          {/* Compact Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/60 border border-white/10 rounded-xl text-sm text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-400/50 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Inline Horizontal Scroll Gallery */}
      <div className="relative">
        {/* Navigation Buttons */}
        {filteredItems.length > 3 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-slate-800/80 transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-slate-800/80 transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Cards Container */}
        <div className="overflow-hidden px-6 sm:px-10">
          <div className="flex gap-4 transition-transform duration-300">
            {visibleStudies.map((item, index) => {
              const colors = ACCENT_COLORS[item.accent] || ACCENT_COLORS.emerald
              const icon = ICON_MAP[item.icon] || <Sparkles className="w-5 h-5" />
              
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80"
                >
                  {/* Compact Card */}
                  <div className={`
                    relative h-40 rounded-2xl border ${colors.border} 
                    bg-gradient-to-br ${colors.bg} backdrop-blur-sm
                    transition-all duration-300 ease-out
                    hover:scale-[1.02] hover:shadow-lg
                    overflow-hidden group
                  `}>
                    {item.image && (
                      <div className="absolute inset-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
                      </div>
                    )}
                    {/* Content */}
                    <div className="relative h-full flex p-4">
                      {/* Left Side - Icon & Info */}
                      <div className="flex-1 flex flex-col">
                        {/* Icon */}
                        <div className={`
                          w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm
                          flex items-center justify-center mb-3
                          ${colors.icon} transition-transform duration-300
                          group-hover:scale-110
                        `}>
                          {icon}
                        </div>

                        {/* Badge */}
                        <div className="text-xs uppercase tracking-wider text-white/50 mb-1 font-medium">
                          Spotlight
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-semibold text-white mb-2 leading-tight">
                          {item.name}
                        </h3>

                        {/* Tagline */}
                        <p className="text-xs text-white/60 leading-relaxed flex-grow">
                          {item.tagline}
                        </p>
                      </div>

                      {/* Right Side - CTA */}
                      <div className="flex items-end ml-3">
                        <Link
                          href={item.href}
                          className={`
                            inline-flex items-center gap-1.5 px-3 py-2 rounded-lg
                            bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400
                            text-xs font-semibold text-white
                            shadow-md shadow-orange-500/20
                            transition-all duration-300
                            hover:shadow-lg hover:shadow-orange-500/30
                            hover:scale-105
                            focus:outline-none focus:ring-1 focus:ring-amber-400/50
                            group/btn
                          `}
                        >
                          {item.ctaLabel ?? ctaLabel ?? 'Read case study'}
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`
                      absolute inset-0 rounded-2xl opacity-0 
                      bg-gradient-to-br ${colors.bg}
                      transition-opacity duration-300
                      group-hover:opacity-40 pointer-events-none
                    `} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        {filteredItems.length > 1 && (
          <div className="flex justify-center mt-4 gap-1">
            {Array.from({ length: Math.ceil(filteredItems.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / 3) === index
                    ? 'bg-emerald-400 scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center">
            <Search className="w-6 h-6 text-white/30" />
          </div>
          <h3 className="text-base font-medium text-white mb-1">No case studies found</h3>
          <p className="text-sm text-white/60">Try adjusting your search terms</p>
        </div>
      )}
    </section>
  )
}
