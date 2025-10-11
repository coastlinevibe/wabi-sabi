'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { GripVertical, Maximize2, Minimize2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface ComparisonImage {
  src: string
  alt: string
  label?: string
}

interface FeatureWithImageComparisonProps {
  badge?: string
  title: string
  description?: string
  before: ComparisonImage
  after: ComparisonImage
}

export function FeatureWithImageComparison({
  badge = 'Transformation',
  title,
  description,
  before,
  after,
}: FeatureWithImageComparisonProps) {
  const [position, setPosition] = useState(80)
  const [isDragging, setIsDragging] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const target = containerRef.current
    if (!target) return

    const rect = target.getBoundingClientRect()
    let clientX = 0

    if ('touches' in event && event.touches.length > 0) {
      clientX = event.touches[0].clientX
    } else if ('clientX' in event) {
      clientX = event.clientX
    }

    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100

    setPosition(Math.max(5, Math.min(95, percentage)))
  }

  const startDrag = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    setIsDragging(true)

    if ('preventDefault' in event) {
      event.preventDefault()
    }
  }

  const stopDrag = () => setIsDragging(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleFullscreen = () => {
    const node = containerRef.current
    if (!node) return

    if (!document.fullscreenElement) {
      node.requestFullscreen?.().catch(() => setIsFullscreen(false))
    } else {
      document.exitFullscreen?.().catch(() => undefined)
    }
  }

  return (
    <div className="w-full py-6">
      <div className="bg-slate-900/60 border border-amber-500/10 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex flex-col gap-3">
          {badge ? <Badge className="w-fit bg-amber-500/20 text-amber-200 border border-amber-400/30">{badge}</Badge> : null}
          <h3 className="text-lg font-semibold text-white font-sora">{title}</h3>
          {description ? <p className="text-sm text-slate-300 leading-relaxed">{description}</p> : null}
        </div>

        <div
          className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl border border-amber-500/20 bg-slate-950"
          ref={containerRef}
          onMouseMove={handlePointerMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchMove={handlePointerMove}
          onTouchEnd={stopDrag}
        >
          <button
            type="button"
            onClick={toggleFullscreen}
            className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-200 shadow-md transition hover:bg-slate-900"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'View comparison in fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          </button>

          <Image
            src={after.src}
            alt={after.alt}
            fill
            priority
            className="object-cover select-none"
            sizes="(min-width: 768px) 50vw, 100vw"
            draggable={false}
          />

          <Image
            src={before.src}
            alt={before.alt}
            fill
            priority
            className="object-cover select-none"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            sizes="(min-width: 768px) 50vw, 100vw"
            draggable={false}
          />

          <div
            className="absolute inset-y-0 w-1 bg-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.5)]"
            style={{ left: `${position}%`, marginLeft: '-0.5px' }}
          >
            <button
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 border border-amber-400/40 text-amber-200 shadow-lg cursor-ew-resize transition duration-200 hover:bg-slate-900"
              onMouseDown={startDrag}
              onTouchStart={startDrag}
              onMouseUp={stopDrag}
              onTouchEnd={stopDrag}
              aria-label="Drag to compare before and after"
            >
              <GripVertical className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute left-4 top-4 z-20">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/85 px-3 py-1 text-sm font-semibold tracking-wide text-amber-200 border border-amber-400/40 shadow-lg shadow-amber-500/10">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
              Before
            </span>
          </div>
          <div className="absolute right-4 top-4 z-20">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/85 px-3 py-1 text-sm font-semibold tracking-wide text-emerald-200 border border-emerald-400/40 shadow-lg shadow-emerald-400/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
              After
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
