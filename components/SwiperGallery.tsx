'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { swiperSlides } from './swiper-data'
import './swiper-gallery.css'

export function SwiperGallery() {
  const router = useRouter()
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const visible = pathname === '/' && !isClosed
    setIsVisible(visible)
    if (visible) {
      document.documentElement.classList.add('swiper-active')
    } else {
      document.documentElement.classList.remove('swiper-active')
    }
  }, [pathname, isClosed])
  useEffect(() => {
    // Load Swiper CSS
    const swiperLink = document.createElement('link')
    swiperLink.rel = 'stylesheet'
    swiperLink.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
    document.head.appendChild(swiperLink)

    // Load Animate.css
    const animateLink = document.createElement('link')
    animateLink.rel = 'stylesheet'
    animateLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    document.head.appendChild(animateLink)

    // Load Swiper JS
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
    script.onload = () => {
      setTimeout(() => {
        if ((window as any).Swiper) {
          const progressCircle = document.querySelectorAll('.autoplay-progress')
          const progressBar = document.querySelectorAll('.autoplay-progress-bar')

          const restartAnimations = () => {
            const activeSlide = document.querySelector('.swiper-slide-active')
            if (activeSlide) {
              const cardContent = activeSlide.querySelector('.card-content') as HTMLElement
              const cardGhostInfo = activeSlide.querySelector('.card-ghost-info') as HTMLElement
              const cardCta = activeSlide.querySelector('.card-cta') as HTMLElement

              if (cardContent) {
                cardContent.classList.remove('animate-active')
                void cardContent.offsetWidth
                cardContent.classList.add('animate-active')
              }
              if (cardGhostInfo) {
                cardGhostInfo.classList.remove('animate-active')
                void cardGhostInfo.offsetWidth
                cardGhostInfo.classList.add('animate-active')
              }
              if (cardCta) {
                cardCta.classList.remove('animate-active')
                void cardCta.offsetWidth
                cardCta.classList.add('animate-active')
              }
            }
          }

          const changeBackground = (swiperInstance: any) => {
            const getProgressColor = swiperInstance.slides[swiperInstance.activeIndex].getAttribute('data-progress-color')
            document.body.style.setProperty('--progress-color', getProgressColor)
          }

          new (window as any).Swiper('.swiper', {
            lazy: true,
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            effect: 'coverflow',
            speed: 1500,
            coverflowEffect: {
              rotate: 100,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
            mousewheel: true,
            keyboard: { enabled: true },
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: false,
              clickable: true,
            },
            navigation: {
              nextEl: '.slider-button-next',
              prevEl: '.slider-button-prev',
            },
            on: {
              autoplayTimeLeft(_s: any, time: any, progress: any) {
                progressCircle.forEach((pc) => {
                  const svg = pc.querySelector('svg') as unknown as HTMLElement
                  const span = pc.querySelector('span') as HTMLElement
                  if (svg) svg.style.setProperty('--progress', String(1 - progress))
                  if (span) span.textContent = `${Math.ceil(time / 1000)}s`
                })
                progressBar.forEach((pb) => {
                  (pb as HTMLElement).style.setProperty('--progress', `${(1 - progress) * 100}%`)
                })
              },
              init(swiperInstance: any) {
                changeBackground(swiperInstance)
                setTimeout(() => restartAnimations(), 100)
              },
              slideChange(swiperInstance: any) {
                changeBackground(swiperInstance)
                restartAnimations()
              },
              touchEnd(swiperInstance: any) {
                const bullets = document.querySelectorAll('.swiper-pagination-bullet')
                bullets.forEach((bullet: any, index: number) => {
                  if (index === swiperInstance.activeIndex) {
                    bullet.classList.add('swiper-pagination-bullet-active')
                  } else {
                    bullet.classList.remove('swiper-pagination-bullet-active')
                  }
                })
              },
            },
          })
        }
      }, 100)
    }
    document.head.appendChild(script)
  }, [])

  if (!isVisible) return null

  return (
    <div className="swiper-gallery-wrapper">
      <div className="close-popup" onClick={() => setIsClosed(true)}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10L30 30M30 10L10 30" stroke="#ff0000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="autoplay-progress-bar"></div>
      <div className="container">
        <div className="swiper">
          <div className="slide-container swiper-wrapper">
            {swiperSlides.map((slide) => (
              <div key={slide.id} className="slide swiper-slide" data-progress-color={slide.progressColor} data-bg-color={slide.bgColor}>
                <div className={`card slide-${slide.id}`}>
                  <div className="svg-wrapper">
                    {slide.portfolio ? (
                      <>
                        <img src={`/popup-intro-imgs/${slide.portfolio}-phone.png`} alt="Phone view" className="portfolio-phone" />
                        <img src={`/popup-intro-imgs/${slide.portfolio}-laptop.png`} alt="Laptop view" className="portfolio-laptop" />
                      </>
                    ) : (
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="80" fill={slide.infoColor} opacity="0.8"/></svg>
                    )}
                  </div>
                  <div className="card-content animate-active">
                    <div className="card-sub-title" style={{ '--color': slide.id === 1 ? '#553d36' : slide.id === 2 ? '#1a1a1a' : slide.id === 3 ? '#f58327' : slide.id === 4 ? '#f25c05' : slide.id === 5 ? '#1875ff' : slide.id === 6 ? '#22c55e' : slide.id === 7 ? '#16a34a' : slide.id === 8 ? '#b48b49' : slide.id === 9 ? '#3a9e92' : slide.buttonColor } as any}>{slide.subTitle}</div>
                    <h2 className="card-title" data-text={slide.title} style={{ '--color': slide.id === 1 ? '#553d36' : slide.id === 2 ? '#1a1a1a' : slide.id === 3 ? '#f58327' : slide.id === 4 ? '#f25c05' : slide.id === 5 ? '#1875ff' : slide.id === 6 ? '#22c55e' : slide.id === 7 ? '#16a34a' : slide.id === 8 ? '#b48b49' : slide.id === 9 ? '#3a9e92' : '#fff' } as any}>{slide.title}</h2>
                    <p className="card-description" style={{ '--color': slide.id === 1 ? '#553d36' : slide.id === 2 ? '#1a1a1a' : slide.id === 3 ? '#f58327' : slide.id === 4 ? '#f25c05' : slide.id === 5 ? '#1875ff' : slide.id === 6 ? '#22c55e' : slide.id === 7 ? '#16a34a' : slide.id === 8 ? '#b48b49' : slide.id === 9 ? '#3a9e92' : '#fff' } as any}>{slide.description}</p>
                    <div className="card-cta animate-active">
                      <a href="/portfolio" className="cta-button" style={{ '--color': slide.buttonColor } as any}>View Portfolio</a>
                      <a href={slide.url} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ '--color': slide.buttonColor } as any}>View Site</a>
                    </div>
                  </div>
                  <div className="card-ghost-info animate-active" style={{ color: slide.id === 1 ? '#553d36' : slide.id === 2 ? '#1a1a1a' : slide.id === 3 ? '#f58327' : slide.id === 4 ? '#f25c05' : slide.id === 5 ? '#1875ff' : slide.id === 6 ? '#22c55e' : slide.id === 7 ? '#16a34a' : slide.id === 8 ? '#b48b49' : slide.id === 9 ? '#3a9e92' : '#ffffff' }}>
                    <span style={{ '--color': slide.infoColor } as any}></span>
                    <div className="ghost-name">{slide.ghostName}</div>
                    <div>{slide.ghostTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>

          <div className="slider-button-next slider-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
              <g className="slider-svg-wrap">
                <g className="slider-svg-circle-wrap"><circle cx="42" cy="42" r="40"></circle></g>
                <path className="slider-svg-arrow" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"></path>
                <path className="slider-svg-line" d="M80,0H0"></path>
              </g>
            </svg>
          </div>

          <div className="slider-button-prev slider-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
              <g className="slider-svg-wrap">
                <g className="slider-svg-circle-wrap"><circle cx="42" cy="42" r="40"></circle></g>
                <path className="slider-svg-arrow" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"></path>
                <path className="slider-svg-line" d="M80,0H0"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="autoplay-progress">
        <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20"></circle></svg>
        <span></span>
      </div>

      <div className="mouse-scroll">
        <div className="mouse"><div className="roll"></div><div className="rollshadow"></div></div>
        scroll for next ghost
      </div>
    </div>
  )
}
