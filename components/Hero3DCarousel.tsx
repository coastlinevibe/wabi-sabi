'use client'

import { useEffect, useState, ReactNode } from 'react'
import Image from 'next/image'
import { CardHoverReveal, CardHoverRevealContent, CardHoverRevealMain } from '@/components/ui/reveal-on-hover'
import { cn } from '@/lib/utils'

type PremiumImageProps = {
  src: string
  alt: string
  headline?: string
  badge?: string
}

function PremiumImageFrame({ src, alt, headline = 'Spotlight', badge = 'Case Study' }: PremiumImageProps) {
  return (
    <div className="relative h-[210px]">
      <div
        className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/20 via-amber-200/10 to-emerald-200/10 opacity-60 blur-xl"
        aria-hidden
      />
      <div className="absolute inset-[10px] rounded-[28px] border border-white/10 bg-white/5/50 backdrop-blur-xl shadow-[0_25px_45px_-20px_rgba(15,23,42,0.55)]" />
      <div className="absolute inset-[14px] rounded-[24px] overflow-hidden shadow-[0_35px_55px_-25px_rgba(15,23,42,0.65)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="320px"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white">
          <span className="truncate text-xs font-semibold tracking-[0.12em] uppercase text-white/80">
            {headline}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            {badge}
          </span>
        </div>
      </div>
    </div>
  )
}

export type HeroCarouselSlide = {
  id: string
  title: string
  label?: string
  description: string
  services: string[]
  type: string
  imageUrl: string
  nicheDetail?: string
  initials: string
  icon?: string
  highlights?: string[]
  hoverTitle?: string
  hoverSummary?: string
  hoverHighlights?: string[]
  badgeIcon?: ReactNode
  imageHeadline?: string
  imageBadge?: string
}

type Hero3DCarouselProps = {
  slides: HeroCarouselSlide[]
  autoRotateInterval?: number
  className?: string
  cardHeight?: number
}

export function Hero3DCarousel({
  slides,
  autoRotateInterval = 6000,
  className,
  cardHeight = 526,
}: Hero3DCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, autoRotateInterval)
    return () => clearInterval(timer)
  }, [autoRotateInterval, isPaused, slides.length])

  return (
    <div
      className={cn('relative w-full h-[70vh] flex items-center justify-center', className)}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => {
          const offset = (index - currentIndex + slides.length) % slides.length
          const isCenter = offset === 0
          const isLeft = offset === slides.length - 1 || (offset < 0 && offset > -slides.length / 2)
          const isRight = offset === 1 || (offset > 0 && offset < slides.length / 2)

          let transform = ''
          let zIndex = 1
          let opacity = 0.4

          if (isCenter) {
            transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)'
            zIndex = 10
            opacity = 1
          } else if (isLeft) {
            transform = 'translateX(-180px) translateZ(-100px) rotateY(25deg) scale(0.85)'
            zIndex = 5
            opacity = 0.7
          } else if (isRight) {
            transform = 'translateX(180px) translateZ(-100px) rotateY(-25deg) scale(0.85)'
            zIndex = 5
            opacity = 0.7
          } else {
            transform = 'translateX(0) translateZ(-300px) rotateY(0deg) scale(0.7)'
            zIndex = 1
            opacity = 0.3
          }

          return (
            <div
              key={slide.id}
              className="absolute transition-all duration-700 ease-out"
              style={{
                transform,
                zIndex,
                opacity,
              }}
            >
              <CardHoverReveal
                className="w-72 border-0 rounded-lg overflow-hidden shadow-[0_22px_48px_-32px_rgba(15,23,42,0.6)]"
                style={{ height: `${cardHeight}px` }}
              >
                <CardHoverRevealMain>
                  <div
                    className="w-full bg-gradient-to-br from-white via-yellow-50 to-green-50 flex flex-col relative"
                    style={{ height: `${cardHeight}px` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-yellow-100/30 to-orange-100/25 opacity-70" />

                    <PremiumImageFrame
                      src={slide.imageUrl}
                      alt={slide.title}
                      headline={slide.imageHeadline ?? (slide.type === 'Case Study' ? 'Spotlight' : slide.label ?? slide.title)}
                      badge={slide.imageBadge ?? slide.type ?? 'Case Study'}
                    />

                    <div className="flex-1 flex items-center justify-center p-6 relative z-10">
                      <div className="text-center space-y-3">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mx-auto flex items-center justify-center shadow-lg relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                          {slide.badgeIcon && <span className="relative z-10 text-white">{slide.badgeIcon}</span>}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.32em] text-slate-500">
                            {slide.icon && <span className="text-base tracking-normal">{slide.icon}</span>}
                            <span>{slide.type}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900">{slide.label ?? slide.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHoverRevealMain>
                <CardHoverRevealContent className="flex h-[288px] flex-col gap-4 rounded-lg bg-[rgba(0,0,0,.68)] backdrop-blur-3xl p-5">
                  <div className="space-y-1">
                    <h3 className="text-xs uppercase tracking-[0.32em] text-white/45">Glance</h3>
                    <p className="text-white text-base font-semibold leading-snug">{slide.hoverTitle ?? slide.label ?? slide.title}</p>
                  </div>

                  <div className="flex-1 space-y-3 text-sm text-white/80 leading-relaxed">
                    <p>{slide.hoverSummary ?? slide.description}</p>
                    {slide.hoverHighlights && slide.hoverHighlights.length > 0 && (
                      <ul className="space-y-2">
                        {slide.hoverHighlights.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-[4px] inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-emerald-300/90 ring-2 ring-emerald-300/20" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {slide.nicheDetail && (
                    <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-xs text-white/65">{slide.nicheDetail}</div>
                  )}
                </CardHoverRevealContent>
              </CardHoverReveal>
            </div>
          )
        })}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentIndex ? 'bg-amber-400 scale-125' : 'bg-white/30 hover:bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  )
}
