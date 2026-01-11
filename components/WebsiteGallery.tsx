'use client'

import { useState } from 'react'

const websites = [
  { name: 'Blue Wave Zone', portfolio: 'bluewavezone', url: 'https://bluewavezone.co.za/' },
  { name: 'Chatspear', portfolio: 'chatsphear', url: 'https://chatsphearsolutions.framer.website/' },
  { name: 'Growithus', portfolio: 'growithus', url: 'https://growithus11.framer.website/' },
  { name: 'OnSite', portfolio: 'onsite', url: 'https://onsite-theta.vercel.app/' },
  { name: 'WorkSite Solutions', portfolio: 'worksitesolutions', url: 'https://worksitesolutions.vercel.app/' },
  { name: 'A2Z Sellr', portfolio: 'a2zsellr', url: 'https://www.a2zsellr.life/' },
  { name: 'Day1 Health', portfolio: 'day1health', url: 'https://www.day1health.co.za/' },
  { name: 'Khambi', portfolio: 'khambi', url: '#' },
  { name: 'Eubiosis', portfolio: 'eubiosis', url: 'https://www.eubiosis.pro/' },
  { name: 'Majestic Cars', portfolio: 'majestic-cars', url: 'https://majesticars.com/' },
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
            <a key={site.portfolio} href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-96 relative cursor-pointer hover:opacity-80 transition-opacity">
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
            </a>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <a href={currentSite.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-96 relative cursor-pointer hover:opacity-80 transition-opacity block">
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
          </a>

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
