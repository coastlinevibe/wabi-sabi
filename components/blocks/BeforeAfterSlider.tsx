"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import type { CaseStudyMetric } from "@/data/caseStudies"

export type BeforeAfterPair = {
  before: CaseStudyMetric
  after: CaseStudyMetric
}

export type BeforeAfterSliderProps = {
  baseline: CaseStudyMetric[]
  automation: CaseStudyMetric[]
  accent: {
    valueClass: string
    buttonClass: string
    ringClass?: string
  }
}

export function BeforeAfterSlider({ baseline, automation, accent }: BeforeAfterSliderProps) {
  const pairs = useMemo<BeforeAfterPair[]>(() => {
    if (!baseline?.length || !automation?.length) return []
    return baseline.map((loss, index) => ({
      before: loss,
      after: automation[index % automation.length],
    }))
  }, [automation, baseline])

  const [currentPairIndex, setCurrentPairIndex] = useState(0)

  useEffect(() => {
    if (!pairs.length) {
      setCurrentPairIndex(0)
      return
    }
    setCurrentPairIndex((prev) => (prev >= pairs.length ? 0 : prev))
  }, [pairs])

  if (!pairs.length) return null

  const goToPair = (direction: number) => {
    setCurrentPairIndex((prev) => (prev + direction + pairs.length) % pairs.length)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      goToPair(1)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      goToPair(-1)
    }
  }

  const currentPair = pairs[currentPairIndex]

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_80px_-45px_rgba(16,185,129,0.65)] backdrop-blur"
      role="region"
      aria-label="Before and after automation comparison"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.15),transparent_60%)] opacity-60" />
      <div className="relative grid gap-8 md:grid-cols-2 transition-all duration-500">
        <div
          key={`${currentPairIndex}-before`}
          className="rounded-[22px] border border-white/10 bg-slate-950/80 p-6 transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: "translateX(0)" }}
        >
          <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            <span>Before</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/50">Manual</span>
          </div>
          <p className={`text-4xl font-bold text-white ${accent.valueClass}`}>{currentPair.before.value}</p>
          <h3 className="mt-4 text-lg font-semibold leading-snug text-white">{currentPair.before.label}</h3>
          <p className="mt-2 text-sm text-white/60">{currentPair.before.detail}</p>
        </div>
        <div
          key={`${currentPairIndex}-after`}
          className={`rounded-[22px] border border-white/10 bg-slate-900/80 p-6 ring-1 ${accent.ringClass ?? "ring-white/10"} transition-transform duration-500 ease-out will-change-transform`}
          style={{ transform: "translateX(0)" }}
        >
          <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
            <span>After</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/60">Automated</span>
          </div>
          <p className={`text-4xl font-bold text-white ${accent.valueClass}`}>{currentPair.after.value}</p>
          <h3 className="mt-4 text-lg font-semibold leading-snug text-white">{currentPair.after.label}</h3>
          <p className="mt-2 text-sm text-white/60">{currentPair.after.detail}</p>
        </div>
      </div>

      <div className="relative mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          {pairs.map((pair, index) => {
            const isActive = index === currentPairIndex
            return (
              <button
                key={`${pair.before.label}-${index}`}
                onClick={() => setCurrentPairIndex(index)}
                className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-left transition ${
                  isActive
                    ? "border-white/50 bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
                }`}
                aria-label={`Show transformation ${index + 1}: ${pair.before.label} to ${pair.after.label}`}
              >
                <span
                  className={`flex h-2.5 w-2.5 rounded-full transition ${
                    isActive ? "bg-white" : "bg-white/25 group-hover:bg-white/60"
                  }`}
                />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  {pair.before.label}
                </span>
              </button>
            )
          })}
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/50">
          <span>
            {String(currentPairIndex + 1).padStart(2, "0")} / {String(pairs.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => goToPair(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/70 hover:border-white/35 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> Prev
          </button>
          <button
            onClick={() => goToPair(1)}
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r ${accent.buttonClass} px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_20px_45px_-20px_rgba(16,185,129,0.55)] transition-transform hover:-translate-y-0.5`}
          >
            Next solve <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
