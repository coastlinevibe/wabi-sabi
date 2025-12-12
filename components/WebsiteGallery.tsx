'use client'

import { useState } from 'react'

const websites = [
  { name: 'Blue Wave Zone', portfolio: 'bluewavezone' },
  { name: 'Chatspear', portfolio: 'chatsphear' },
  { name: 'Growithus', portfolio: 'growithus' },
  { name: 'OnSite', portfolio: 'onsite' },
  { name: 'WorkSite Solutions', portfolio: 'worksitesolutions' },
  { name: 'A2Z Sellr', portfolio: 'a2zsellr' },
  { name: 'Day1 Health', portfolio: 'day1health' },
  { name: 'Khambi', portfolio: 'khambi' },
  { name: 'Eubiosis', portfolio: 'eubiosis' },
]

export function WebsiteGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % websites.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + websites.length) % websites.length)
  }

  const currentSite = websites[currentIndex]

  return (
    <section id="website-gallery" className="py-16 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide font-sora">
            Website Gallery
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light opacity-80">
            Browse a few recent builds. Hover to peek, tap to open the live experience.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-12">
          {websites.map((site) => (
            <div key={site.portfolio} className="flex items-center justify-center h-96 relative">
              {/* Laptop */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={`/popup-intro-imgs/${site.portfolio}-laptop.png`}
                  alt={`${site.name} laptop`}
                  className="max-h-64 max-w-xs object-contain"
                />
                {/* Phone - overlaid on laptop */}
                <img
                  src={`/popup-intro-imgs/${site.portfolio}-phone.png`}
                  alt={`${site.name} phone`}
                  className="absolute max-h-48 max-w-24 object-contain -left-2 top-12 transform -rotate-12"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex items-center justify-center h-96 relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={`/popup-intro-imgs/${currentSite.portfolio}-laptop.png`}
                alt={`${currentSite.name} laptop`}
                className="max-h-64 max-w-xs object-contain"
              />
              <img
                src={`/popup-intro-imgs/${currentSite.portfolio}-phone.png`}
                alt={`${currentSite.name} phone`}
                className="absolute max-h-48 max-w-24 object-contain -left-2 top-12 transform -rotate-12"
              />
            </div>
          </div>

          <div className="text-center -mt-4">
            <h3 className="text-xl font-light text-white">{currentSite.name}</h3>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full transition"
            >
              ←
            </button>
            <div className="flex gap-2">
              {websites.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentIndex ? 'bg-white' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
