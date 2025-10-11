'use client'

import { useEffect, useMemo, useState } from 'react'

type GalleryItem = {
  name: string
  description: string
  largeImage: string
  thumbImage?: string
  ctaHref: string
  isIntro?: boolean
}

const INTRO_HEADLINES = [
  'Is your amazing app next?',
  'Hidden profits waiting to be revealed?',
]

const INTRO_SUBTEXT =
  "At Wabi-Sabi Systems, every business has hidden value. Some unlock it with audits. Others with apps that transform profits. We've built both."

const INTRO_ROTATE_INTERVAL = 3800

const GALLERY_ITEMS: GalleryItem[] = [
  {
    name: 'Welcome',
    description: 'Cinematic greeting slide',
    largeImage:
      'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0',
    ctaHref: '#',
    isIntro: true,
  },
  {
    name: 'Scotland',
    description:
      'Experience the mystical Highlands under twilight skies and misty lochs.',
    largeImage: '/images/hov1a.jpg',
    thumbImage: '/images/hov1b.jpg',
    ctaHref: 'https://github.com/MDJAmin',
  },
  {
    name: 'BlueWave Zone',
    description: 'Resonate with wellness seekers through a vibrant aquatic experience.',
    largeImage: '/images/hov2a.jpg',
    thumbImage: '/images/hov2b.jpg',
    ctaHref: 'https://github.com/MDJAmin',
  },
  {
    name: 'Vivid Launch',
    description: 'Lean into energetic gradients and bold typography for product momentum.',
    largeImage: '/images/hov3a.jpg',
    thumbImage: '/images/hov3b.jpg',
    ctaHref: 'https://github.com/MDJAmin',
  },
  {
    name: 'Aurora Skies',
    description: 'A serene, high-contrast landing page for immersive travel narratives.',
    largeImage: '/images/hov4a.jpg',
    thumbImage: '/images/hov4b.jpg',
    ctaHref: 'https://github.com/MDJAmin',
  },
  {
    name: 'Norway',
    description:
      'Chase the Northern Lights under star-lit skies along scenic fjord roads.',
    largeImage: '/images/hov5a.jpg',
    thumbImage: '/images/hov5b.jpg',
    ctaHref: 'https://github.com/MDJAmin',
  },
  {
    name: 'New Zealand',
    description:
      'Wander dramatic, mist-laden mountain paths that feel straight out of a dream.',
    largeImage: '/images/hov6a.jpg',
    thumbImage: '/images/hov6b.jpg',
    ctaHref: 'https://github.com/MDJAmin',
  },
  {
    name: 'Japan',
    description:
      'Discover serene mountain temples shrouded in dusk and ancient forest trails.',
    largeImage: '/images/hov7a.jpg',
    thumbImage: '/images/hov7b.jpg',
    ctaHref: 'https://github.com/MDJAmin',
  },
]

export function PrelaunchGallery() {
  const [items, setItems] = useState(GALLERY_ITEMS)
  const [isOpen, setIsOpen] = useState(false)
  const [introHeadlineIndex, setIntroHeadlineIndex] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const dismissed = sessionStorage.getItem('prelaunchGalleryDismissed')
    if (!dismissed) {
      setIsOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    if (typeof window === 'undefined') return

    const interval = window.setInterval(() => {
      setIntroHeadlineIndex((prev) => (prev + 1) % INTRO_HEADLINES.length)
    }, INTRO_ROTATE_INTERVAL)

    return () => window.clearInterval(interval)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const handleNext = () => {
    setItems((prev) => {
      if (prev.length === 0) return prev
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }

  const handlePrev = () => {
    setItems((prev) => {
      if (prev.length === 0) return prev
      const last = prev[prev.length - 1]
      return [last, ...prev.slice(0, prev.length - 1)]
    })
  }

  const handleEnterSite = () => {
    sessionStorage.setItem('prelaunchGalleryDismissed', 'true')
    setIsOpen(false)
  }

  const renderedItems = useMemo(
    () =>
      items.map((item, index) => {
        const useLargeImage = index < 2
        const backgroundImage = useLargeImage
          ? item.largeImage
          : item.thumbImage ?? item.largeImage

        if (item.isIntro) {
          return (
            <div
              key={`${item.name}-${index}`}
              className="item intro-item"
            >
              <div
                className="intro-backdrop"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
              />
              <div className="intro-overlay" />
              <div className="intro-content">
                <div className="intro-frame">
                  <div className="intro-headline-wrapper">
                    <span key={introHeadlineIndex} className="intro-headline">
                      {INTRO_HEADLINES[introHeadlineIndex]}
                    </span>
                  </div>
                  <p className="intro-subtext">{INTRO_SUBTEXT}</p>
                  <div className="intro-progress">
                    <span className="intro-progress-bar" />
                  </div>
                </div>
              </div>
            </div>
          )
        }

        const isFeaturedSlide = item.largeImage === '/images/hov1a.jpg'

        return (
          <div
            key={`${item.name}-${index}`}
            className="item"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          >
            {isFeaturedSlide && (
              <div className="featured-content">
                <div className="featured-frame">
                  <div className="featured-headline-wrapper">
                    <span className="featured-headline">Recent Projects</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      }),
    [items, introHeadlineIndex]
  )

  if (!isOpen) {
    return null
  }

  return (
    <div className="prelaunch-gallery-overlay">
      <div className="container">
        <div className="slide">{renderedItems}</div>
        <div className="button">
          <button className="prev" onClick={handlePrev} aria-label="Previous slide">
            ◁
          </button>
          <button className="next" onClick={handleNext} aria-label="Next slide">
            ▷
          </button>
        </div>
        <button className="enter-site-button" onClick={handleEnterSite}>
          Enter Site
        </button>
      </div>
      <div className="MDJAminDiv">
        <a className="MDJAmin" href="https://github.com/MDJAmin" target="_blank" rel="noreferrer">
          MDJAmin
        </a>
      </div>

      <style jsx global>{`
        .prelaunch-gallery-overlay {
          position: fixed;
          inset: 0;
          background: rgba(18, 24, 40, 0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .prelaunch-gallery-overlay *,
        .prelaunch-gallery-overlay *::before,
        .prelaunch-gallery-overlay *::after {
          box-sizing: border-box;
        }

        .prelaunch-gallery-overlay .container {
          position: relative;
          width: min(85vw, 900px);
          height: min(85vh, 600px);
          background: #f5f5f5;
          box-shadow: 0 30px 50px #dbdbdb;
          border-radius: 20px;
          overflow: hidden;
        }

        .prelaunch-gallery-overlay .slide {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }

        .prelaunch-gallery-overlay .slide .item {
          width: 200px;
          height: 250px;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 20px;
          box-shadow: 0 30px 50px #505050;
          background-position: 50% 50%;
          background-size: cover;
          display: inline-block;
          transition: all 0.5s;
        }

        .prelaunch-gallery-overlay .slide .item:nth-child(1),
        .prelaunch-gallery-overlay .slide .item:nth-child(2) {
          top: 0;
          left: 0;
          transform: translate(0, 0);
          border-radius: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          transition: all 0.5s;
        }

        .prelaunch-gallery-overlay .slide .intro-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: clamp(64px, 16vw, 220px);
          padding-right: clamp(8px, 3vw, 36px);
          overflow: hidden;
          background: #0b0f1a;
        }

        .prelaunch-gallery-overlay .slide .intro-item .intro-backdrop {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.45);
          transform: scale(1.05);
        }

        .prelaunch-gallery-overlay .slide .intro-content {
          position: relative;
          z-index: 2;
          width: 420px;
          max-width: 100%;
          overflow: hidden;
          transform: translateX(-210px);
        }

        .prelaunch-gallery-overlay .slide .intro-frame {
          position: relative;
          width: 100%;
          height: 420px;
          padding: 44px 44px 80px;
          display: flex;
          flex-direction: column;
        }

        .prelaunch-gallery-overlay .featured-content {
          position: absolute;
          top: clamp(98px, 14vh, 130px);
          left: clamp(338px, 32vw, 410px);
          right: clamp(48px, 8vw, 120px);
          z-index: 2;
          overflow: visible;
        }

        .prelaunch-gallery-overlay .featured-frame {
          position: relative;
          width: 100%;
          overflow: visible;
        }

        .prelaunch-gallery-overlay .intro-headline-wrapper {
          position: relative;
          height: 140px;
          min-height: 90px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
          padding-top: 10px;
          font-family: 'Sora', 'Inter', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #f8fafc;
        }

        .prelaunch-gallery-overlay .featured-headline-wrapper {
          position: relative;
          height: auto;
          width: auto;
          overflow: visible;
          display: inline-block;
          padding: 0;
          margin: 0;
          padding-left: 2em;
          font-family: 'Sora', 'Inter', sans-serif;
          font-size: clamp(28px, 3.9vw, 46px);
          font-weight: 400;
          font-style: italic;
          letter-spacing: -0.025em;
          color: #f8fafc;
        }

        .prelaunch-gallery-overlay .intro-headline {
          position: absolute;
          inset: 0;
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          line-height: 1.15;
          padding: 0 8px 0 0;
          white-space: normal;
        }

        .prelaunch-gallery-overlay .featured-headline {
          display: block;
          line-height: 1.1;
          white-space: nowrap;
          text-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4);
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
        }

        .prelaunch-gallery-overlay .intro-headline {
          animation: introHeadlineFade ${INTRO_ROTATE_INTERVAL}ms ease-in-out forwards;
        }

        .prelaunch-gallery-overlay .intro-subtext {
          margin-top: 28px;
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.6;
          color: rgba(226, 232, 240, 0.88);
          font-family: 'Nunito Sans', sans-serif;
        }

        .prelaunch-gallery-overlay .intro-progress {
          margin-top: auto;
          height: 3px;
          width: 100%;
          background: rgba(148, 163, 184, 0.25);
          border-radius: 9999px;
          overflow: hidden;
        }

        .prelaunch-gallery-overlay .intro-progress-bar {
          display: block;
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, rgba(52, 211, 153, 0.85), rgba(251, 191, 36, 0.9));
          transform-origin: left;
          animation: introProgress ${INTRO_ROTATE_INTERVAL}ms linear infinite;
        }

        @media (max-width: 768px) {
          .prelaunch-gallery-overlay .slide .intro-item {
            padding-left: clamp(32px, 12vw, 96px);
            padding-right: clamp(12px, 6vw, 40px);
          }

          .prelaunch-gallery-overlay .slide .intro-content {
            width: min(360px, 86vw);
            transform: translateX(0);
          }

          .prelaunch-gallery-overlay .slide .intro-frame {
            height: 400px;
            padding: 36px 26px 64px;
          }

          .prelaunch-gallery-overlay .intro-headline-wrapper {
            height: 126px;
            font-size: clamp(24px, 6vw, 34px);
          }

          .prelaunch-gallery-overlay .featured-content {
            top: clamp(32px, 8vh, 60px);
            left: clamp(94px, 12vw, 140px);
            right: clamp(24px, 6vw, 80px);
          }

          .prelaunch-gallery-overlay .featured-headline-wrapper {
            font-size: clamp(22px, 6.4vw, 38px);
            padding-left: 1.5em;
          }

          .prelaunch-gallery-overlay .intro-subtext {
            font-size: clamp(15px, 4vw, 17px);
          }
        }

        @keyframes introHeadlineFade {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          12% {
            opacity: 1;
            transform: translateY(0);
          }
          88% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-8px);
          }
        }

        @keyframes introProgress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .prelaunch-gallery-overlay .slide .item:nth-child(3) {
          left: 55%;
        }
        .prelaunch-gallery-overlay .slide .item:nth-child(4) {
          left: calc(55% + 220px);
        }
        .prelaunch-gallery-overlay .slide .item:nth-child(5) {
          left: calc(55% + 440px);
        }

        .prelaunch-gallery-overlay .slide .item:nth-child(n + 6) {
          left: calc(55% + 660px);
          opacity: 0;
        }

        .prelaunch-gallery-overlay .item::after {
          content: '';
        }

        .prelaunch-gallery-overlay .button {
          display: flex;
          flex-direction: row;
          gap: 24px;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: absolute;
          bottom: 72px;
        }

        .prelaunch-gallery-overlay .button button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          margin: 0 5px;
          border: 3px solid rgba(255, 255, 255, 0.45);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85));
          color: #f8fafc;
          box-shadow: 0 18px 35px rgba(15, 23, 42, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .prelaunch-gallery-overlay .button button:hover {
          transform: translateY(-3px) scale(1.05);
          border-color: rgba(248, 250, 252, 0.9);
          box-shadow: 0 24px 45px rgba(15, 23, 42, 0.55);
        }

        .prelaunch-gallery-overlay .button button:focus {
          transform: translateY(-2px) scale(1.03);
          outline: none;
          border-color: rgba(248, 250, 252, 0.95);
          box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.35), 0 20px 40px rgba(15, 23, 42, 0.5);
        }

        .prelaunch-gallery-overlay .button button:active {
          transform: translateY(0) scale(0.98);
        }

        .prelaunch-gallery-overlay .next {
          padding-left: 2px;
        }
        .prelaunch-gallery-overlay .prev {
          padding-right: 2px;
        }

        .prelaunch-gallery-overlay .enter-site-button {
          position: absolute;
          bottom: 24px;
          right: 32px;
          padding: 12px 28px;
          border: 3px solid rgba(255, 255, 255, 0.45);
          border-radius: 9999px;
          background: linear-gradient(90deg, #1f2937, #111827);
          color: #f8fafc;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.35);
        }

        .prelaunch-gallery-overlay .enter-site-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.45);
          border-color: rgba(248, 250, 252, 0.9);
        }

        .prelaunch-gallery-overlay .MDJAminDiv {
          position: absolute;
          bottom: 5%;
          left: 2%;
        }

        .prelaunch-gallery-overlay .MDJAmin {
          text-decoration: none;
          border-bottom: 1px dashed rgb(44, 44, 44);
          border-top: 1px dashed rgb(44, 44, 44);
          padding: 4px 0;
          color: rgba(44, 44, 44, 0.525);
          font-family: monospace;
          font-style: italic;
          font-size: 1.1em;
          transition: all 0.5s;
        }

        .prelaunch-gallery-overlay .MDJAmin:hover {
          color: #000000;
        }

        @media (max-width: 768px) {
          .prelaunch-gallery-overlay .container {
            width: min(90vw, 480px);
            height: min(80vh, 520px);
          }

          .prelaunch-gallery-overlay .slide .item:nth-child(3) {
            left: 60%;
          }
          .prelaunch-gallery-overlay .slide .item:nth-child(4) {
            left: calc(60% + 200px);
          }
          .prelaunch-gallery-overlay .slide .item:nth-child(5) {
            left: calc(60% + 400px);
          }

          .prelaunch-gallery-overlay .button {
            bottom: 96px;
          }
        }
      `}</style>
    </div>
  )
}
