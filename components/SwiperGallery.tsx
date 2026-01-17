'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { swiperSlides } from './swiper-data'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function SwiperGallery() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const visible = pathname === '/' && !isClosed
    setIsVisible(visible)
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [pathname, isClosed])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % swiperSlides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + swiperSlides.length) % swiperSlides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  if (!isVisible) return null

  const currentSlide = swiperSlides[currentIndex]

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-500">
      {/* Close Button */}
      <button
        onClick={() => setIsClosed(true)}
        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-white/10 hover:bg-red-500/90 backdrop-blur-lg border border-white/20 hover:border-red-500 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 active:scale-95 group animate-in slide-in-from-top-right duration-700"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white transition-colors" />
      </button>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl h-[90vh] sm:h-[85vh] bg-gradient-to-br from-white to-slate-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-visible animate-in zoom-in-95 slide-in-from-bottom-8 duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8 md:p-12 pb-20 sm:pb-24 h-full overflow-y-auto">
          {/* Left: Images */}
          <div className="flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 relative overflow-hidden group min-h-[200px] sm:min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img
              key={`laptop-${currentIndex}`}
              src={`/popup-intro-imgs/${currentSlide.portfolio}-laptop.png`}
              alt={`${currentSlide.ghostName} laptop`}
              className="w-full max-w-[250px] sm:max-w-md object-contain relative z-10 animate-in fade-in slide-in-from-right-8 duration-700 hover:scale-105 transition-transform duration-500"
              style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))' }}
            />
            <img
              key={`phone-${currentIndex}`}
              src={`/popup-intro-imgs/${currentSlide.portfolio}-phone.png`}
              alt={`${currentSlide.ghostName} phone`}
              className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-20 sm:w-28 md:w-36 object-contain shadow-2xl rounded-lg sm:rounded-xl z-20 animate-in fade-in slide-in-from-left-8 duration-700 delay-150 hover:scale-110 hover:-rotate-6 transition-all duration-500"
              style={{ filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.25))' }}
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-3 sm:space-y-5">
            <div 
              className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100" 
              style={{ color: currentSlide.buttonColor }}
            >
              {currentSlide.subTitle}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              {currentSlide.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              {currentSlide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
              <a
                href="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group text-center"
                style={{ backgroundColor: currentSlide.buttonColor }}
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a
                href={currentSlide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-opacity-10 relative overflow-hidden group text-center"
                style={{ 
                  borderColor: currentSlide.buttonColor, 
                  color: currentSlide.buttonColor,
                }}
              >
                <span className="relative z-10">View Site</span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: currentSlide.buttonColor }}
                ></div>
              </a>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 pt-2 sm:pt-4 space-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
              <div className="font-bold text-slate-800 text-sm sm:text-base">{currentSlide.ghostName}</div>
              <div className="text-slate-600">{currentSlide.ghostTitle}</div>
            </div>
          </div>
        </div>

        {/* Navigation - Bottom Center with Dots - Half In/Half Out */}
        <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2.5 sm:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600 bg-white/90 backdrop-blur-md px-4 sm:px-4 py-2.5 sm:py-2.5 rounded-[11px] shadow-2xl z-50 border border-slate-200">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-9 h-9 sm:w-9 sm:h-9 flex items-center justify-center bg-white hover:bg-slate-50 rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-200 hover:border-orange-500 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 text-slate-700 group-hover:text-orange-500 transition-colors" />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-1.5 sm:gap-1.5">
            {swiperSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  index === currentIndex 
                    ? 'bg-orange-500 w-6 sm:w-6 h-2.5 sm:h-2.5 shadow-md shadow-orange-500/50' 
                    : 'bg-slate-300 hover:bg-slate-400 w-2.5 sm:w-2.5 h-2.5 sm:h-2.5 hover:scale-125'
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-9 h-9 sm:w-9 sm:h-9 flex items-center justify-center bg-white hover:bg-slate-50 rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-200 hover:border-orange-500 group"
          >
            <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 text-slate-700 group-hover:text-orange-500 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  )
}
