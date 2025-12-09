'use client'

import Image from 'next/image'

const websites = [
  { name: 'Blue Wave Zone', portfolio: 'bluewavezone' },
  { name: 'Chatspear', portfolio: 'chatsphear' },
  { name: 'Growithus', portfolio: 'growithus' },
  { name: 'OnSite', portfolio: 'onsite' },
  { name: 'WorkSite Solutions', portfolio: 'worksitesolutions' },
  { name: 'A2Z Sellr', portfolio: 'a2zsellr' },
]

export function WebsiteGallery() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                  className="absolute max-h-48 max-w-24 object-contain -left-8 -bottom-4 transform -rotate-12"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
