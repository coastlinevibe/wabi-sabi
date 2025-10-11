import Link from "next/link"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

import { caseStudies } from "@/data/caseStudies"
import type { CaseStudy } from "@/data/caseStudies"

type AccentStyle = {
  badge: string
  dot: string
  value: string
  button: string
  timelineBg: string
  timelineBorder: string
  timelineIcon: string
  heroPrimary: string
  heroGlow: string
  heroRing: string
  heroStatBg: string
}

const ACCENT_STYLES: Record<string, AccentStyle> = {
  emerald: {
    badge: "bg-emerald-500/10 border border-emerald-400/20 text-emerald-400",
    dot: "bg-emerald-400",
    value: "text-emerald-400",
    button: "from-emerald-500 to-emerald-600",
    timelineBg: "bg-emerald-500/20",
    timelineBorder: "border-emerald-400/30",
    timelineIcon: "text-emerald-400",
    heroPrimary: "from-emerald-500/20 via-emerald-400/5 to-transparent",
    heroGlow: "from-emerald-500/40 via-emerald-400/10 to-transparent",
    heroRing: "ring-emerald-400/30",
    heroStatBg: "bg-emerald-500/10",
  },
  rose: {
    badge: "bg-rose-500/10 border border-rose-400/20 text-rose-400",
    dot: "bg-rose-400",
    value: "text-rose-400",
    button: "from-rose-500 to-rose-600",
    timelineBg: "bg-rose-500/20",
    timelineBorder: "border-rose-400/30",
    timelineIcon: "text-rose-400",
    heroPrimary: "from-rose-500/20 via-rose-400/5 to-transparent",
    heroGlow: "from-rose-500/40 via-rose-400/10 to-transparent",
    heroRing: "ring-rose-400/30",
    heroStatBg: "bg-rose-500/10",
  },
  amber: {
    badge: "bg-amber-500/10 border border-amber-400/20 text-amber-400",
    dot: "bg-amber-400",
    value: "text-amber-400",
    button: "from-amber-500 to-amber-600",
    timelineBg: "bg-amber-500/20",
    timelineBorder: "border-amber-400/30",
    timelineIcon: "text-amber-400",
    heroPrimary: "from-amber-500/20 via-amber-400/5 to-transparent",
    heroGlow: "from-amber-500/40 via-amber-400/10 to-transparent",
    heroRing: "ring-amber-400/30",
    heroStatBg: "bg-amber-500/10",
  },
  blue: {
    badge: "bg-blue-500/10 border border-blue-400/20 text-blue-400",
    dot: "bg-blue-400",
    value: "text-blue-400",
    button: "from-blue-500 to-blue-600",
    timelineBg: "bg-blue-500/20",
    timelineBorder: "border-blue-400/30",
    timelineIcon: "text-blue-400",
    heroPrimary: "from-blue-500/20 via-blue-400/5 to-transparent",
    heroGlow: "from-blue-500/40 via-blue-400/10 to-transparent",
    heroRing: "ring-blue-400/30",
    heroStatBg: "bg-blue-500/10",
  },
  green: {
    badge: "bg-green-500/10 border border-green-400/20 text-green-400",
    dot: "bg-green-400",
    value: "text-green-400",
    button: "from-green-500 to-green-600",
    timelineBg: "bg-green-500/20",
    timelineBorder: "border-green-400/30",
    timelineIcon: "text-green-400",
    heroPrimary: "from-green-500/20 via-green-400/5 to-transparent",
    heroGlow: "from-green-500/40 via-green-400/10 to-transparent",
    heroRing: "ring-green-400/30",
    heroStatBg: "bg-green-500/10",
  },
  teal: {
    badge: "bg-teal-500/10 border border-teal-400/20 text-teal-400",
    dot: "bg-teal-400",
    value: "text-teal-400",
    button: "from-teal-500 to-teal-600",
    timelineBg: "bg-teal-500/20",
    timelineBorder: "border-teal-400/30",
    timelineIcon: "text-teal-400",
    heroPrimary: "from-teal-500/20 via-teal-400/5 to-transparent",
    heroGlow: "from-teal-500/40 via-teal-400/10 to-transparent",
    heroRing: "ring-teal-400/30",
    heroStatBg: "bg-teal-500/10",
  },
  purple: {
    badge: "bg-purple-500/10 border border-purple-400/20 text-purple-400",
    dot: "bg-purple-400",
    value: "text-purple-400",
    button: "from-purple-500 to-purple-600",
    timelineBg: "bg-purple-500/20",
    timelineBorder: "border-purple-400/30",
    timelineIcon: "text-purple-400",
    heroPrimary: "from-purple-500/20 via-purple-400/5 to-transparent",
    heroGlow: "from-purple-500/40 via-purple-400/10 to-transparent",
    heroRing: "ring-purple-400/30",
    heroStatBg: "bg-purple-500/10",
  },
  orange: {
    badge: "bg-orange-500/10 border border-orange-400/20 text-orange-400",
    dot: "bg-orange-400",
    value: "text-orange-400",
    button: "from-orange-500 to-orange-600",
    timelineBg: "bg-orange-500/20",
    timelineBorder: "border-orange-400/30",
    timelineIcon: "text-orange-400",
    heroPrimary: "from-orange-500/20 via-orange-400/5 to-transparent",
    heroGlow: "from-orange-500/40 via-orange-400/10 to-transparent",
    heroRing: "ring-orange-400/30",
    heroStatBg: "bg-orange-500/10",
  },
  red: {
    badge: "bg-red-500/10 border border-red-400/20 text-red-400",
    dot: "bg-red-400",
    value: "text-red-400",
    button: "from-red-500 to-red-600",
    timelineBg: "bg-red-500/20",
    timelineBorder: "border-red-400/30",
    timelineIcon: "text-red-400",
    heroPrimary: "from-red-500/20 via-red-400/5 to-transparent",
    heroGlow: "from-red-500/40 via-red-400/10 to-transparent",
    heroRing: "ring-red-400/30",
    heroStatBg: "bg-red-500/10",
  },
  pink: {
    badge: "bg-pink-500/10 border border-pink-400/20 text-pink-400",
    dot: "bg-pink-400",
    value: "text-pink-400",
    button: "from-pink-500 to-pink-600",
    timelineBg: "bg-pink-500/20",
    timelineBorder: "border-pink-400/30",
    timelineIcon: "text-pink-400",
    heroPrimary: "from-pink-500/20 via-pink-400/5 to-transparent",
    heroGlow: "from-pink-500/40 via-pink-400/10 to-transparent",
    heroRing: "ring-pink-400/30",
    heroStatBg: "bg-pink-500/10",
  },
  yellow: {
    badge: "bg-yellow-500/10 border border-yellow-400/20 text-yellow-400",
    dot: "bg-yellow-400",
    value: "text-yellow-400",
    button: "from-yellow-500 to-yellow-600",
    timelineBg: "bg-yellow-500/20",
    timelineBorder: "border-yellow-400/30",
    timelineIcon: "text-yellow-400",
    heroPrimary: "from-yellow-500/20 via-yellow-400/5 to-transparent",
    heroGlow: "from-yellow-500/40 via-yellow-400/10 to-transparent",
    heroRing: "ring-yellow-400/30",
    heroStatBg: "bg-yellow-500/10",
  },
  sky: {
    badge: "bg-sky-500/10 border border-sky-400/20 text-sky-400",
    dot: "bg-sky-400",
    value: "text-sky-400",
    button: "from-sky-500 to-sky-600",
    timelineBg: "bg-sky-500/20",
    timelineBorder: "border-sky-400/30",
    timelineIcon: "text-sky-400",
    heroPrimary: "from-sky-500/20 via-sky-400/5 to-transparent",
    heroGlow: "from-sky-500/40 via-sky-400/10 to-transparent",
    heroRing: "ring-sky-400/30",
    heroStatBg: "bg-sky-500/10",
  },
  default: {
    badge: "bg-emerald-500/10 border border-emerald-400/20 text-emerald-400",
    dot: "bg-emerald-400",
    value: "text-emerald-400",
    button: "from-emerald-500 to-emerald-600",
    timelineBg: "bg-emerald-500/20",
    timelineBorder: "border-emerald-400/30",
    timelineIcon: "text-emerald-400",
    heroPrimary: "from-emerald-500/20 via-emerald-400/5 to-transparent",
    heroGlow: "from-emerald-500/40 via-emerald-400/10 to-transparent",
    heroRing: "ring-emerald-400/30",
    heroStatBg: "bg-emerald-500/10",
  },
}

export function createCaseStudyPage(caseStudyId: CaseStudy["id"]) {
  const caseStudy = caseStudies.find((study) => study.id === caseStudyId)

  return function CaseStudyPage() {
    if (!caseStudy) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold">Case study not found</h1>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      )
    }

    const accent = ACCENT_STYLES[caseStudy.accent] ?? ACCENT_STYLES.default
    const metrics = caseStudy.metrics
    const topResults = metrics.measuredResults.slice(0, 3)
    const architecture = caseStudy.architecture
    const testimonial = caseStudy.testimonial

    return (
      <article className="min-h-screen bg-slate-950 text-white">
        <section className="px-6 pt-24 pb-12">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-[14px] border border-emerald-400/45 bg-gradient-to-r from-emerald-600/18 via-emerald-500/10 to-emerald-400/4 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100 shadow-[0_16px_28px_-18px_rgba(16,185,129,0.45)] backdrop-blur-sm">
              <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
              {caseStudy.hero.badge}
            </div>
            <header className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{caseStudy.hero.tagline}</h1>
              <p className="text-lg text-slate-300 sm:text-xl">{caseStudy.hero.summary}</p>
            </header>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-[18px] border border-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_45px_-18px_rgba(249,115,22,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-20px_rgba(249,115,22,0.6)]"
              >
                Start Profit Quiz
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio#case-studies"
                className="inline-flex items-center gap-2 rounded-[18px] border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400 transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Case Studies
              </Link>
            </div>
            {topResults.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-3">
                {topResults.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[14px] border border-white/15 bg-gradient-to-br from-emerald-600/20 via-emerald-500/10 to-emerald-400/5 px-5 py-4 text-left shadow-[0_16px_28px_-18px_rgba(16,185,129,0.45)] backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">{item.label}</p>
                    <p className={`mt-3 text-2xl font-semibold text-white ${accent.value}`}>{item.value}</p>
                    <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-semibold">Where systems leaked profit before Wabi-Sabi</h2>
            <p className="text-base text-slate-200 leading-relaxed">
              These are the everyday snags that cost the team money and time before we stepped in.
            </p>
            <ul className="space-y-5">
              {metrics.baselineLosses.map((loss) => (
                <li key={loss.label} className="flex gap-4">
                  <span className={`text-2xl font-semibold ${accent.value}`}>{loss.value}</span>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-white">{loss.label}</p>
                    <p className="text-base text-slate-300 leading-relaxed">{loss.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-semibold">How Wabi-Sabi fixed it</h2>
            <p className="text-base text-slate-200 leading-relaxed">
              Small shifts replaced the manual grind. Each one plugs a gap the team raised during week one.
            </p>
            <ul className="space-y-5">
              {metrics.automationShifts.map((shift) => (
                <li key={shift.label} className="flex gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Fix</span>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-white">{shift.label}</p>
                    <p className="text-base text-slate-300 leading-relaxed">{shift.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-semibold">How we rolled it out</h2>
            <ol className="space-y-6">
              {caseStudy.timeline.map((step, index) => (
                <li key={step.title} className="border-l border-white/15 pl-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/40">Phase {index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-base text-slate-200 leading-relaxed">{step.summary}</p>
                  <p className="mt-1 text-base text-slate-400 leading-relaxed">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {architecture && architecture.nodes.length > 0 && (
          <section className="border-t border-white/5 px-6 py-12">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">How the system runs behind the scenes</h2>
                <p className="text-base text-slate-200 leading-relaxed">{architecture.subheadline}</p>
              </div>
              <div className="space-y-4">
                {architecture.nodes.map((node) => (
                  <div key={node.title} className="space-y-1">
                    {node.caption && (
                      <p className="text-xs uppercase tracking-[0.32em] text-white/40">{node.caption}</p>
                    )}
                    <p className="text-base font-semibold text-white">{node.title}</p>
                    <p className="text-base text-slate-300 leading-relaxed">{node.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-white/5 px-6 py-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-semibold">What the business gained</h2>
            <ul className="space-y-4">
              {metrics.measuredResults.map((result) => (
                <li key={result.label} className="flex gap-4">
                  <span className={`text-2xl font-semibold ${accent.value}`}>{result.value}</span>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-white">{result.label}</p>
                    <p className="text-base text-slate-300 leading-relaxed">{result.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {testimonial && (
          <section className="border-t border-white/5 px-6 py-12">
            <div className="mx-auto max-w-3xl space-y-4">
              <div className="flex items-center gap-3 text-white/50">
                <Quote className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.32em]">Client voice</span>
              </div>
              <blockquote className="space-y-4">
                <p className="text-2xl font-semibold leading-snug">“{testimonial.quote}”</p>
                <footer className="text-sm text-slate-400">
                  {testimonial.name} · {testimonial.role}
                </footer>
              </blockquote>
            </div>
          </section>
        )}

        <section className="border-t border-white/5 px-6 py-16">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-semibold">Ready to automate your operations?</h2>
            <p className="text-base text-slate-300">
              Discover how Wabi-Sabi can mirror this rollout for your team.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`https://wa.me/27714329190?text=${encodeURIComponent("Hi! I'd like to book a working session about automating our operations.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r ${accent.button} px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white`}
              >
              	Book a working session
              </a>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/70 hover:text-white"
              >
                Start profit quiz
              </Link>
            </div>
          </div>
        </section>
      </article>
    )
  }
}
