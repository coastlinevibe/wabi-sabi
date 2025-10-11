'use client'

import Link from 'next/link'

export default function ComponentsOrAppsChooser() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold font-sora mb-4">What would you like to explore?</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Choose between our UI Components library and our ready-to-use Apps. You can switch anytime.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/components"
            className="group rounded-2xl border border-amber-400/30 bg-slate-900/60 p-8 hover:border-amber-400/60 transition-all text-left"
          >
            <div className="text-3xl font-bold">Components</div>
            <p className="mt-2 text-slate-300">Reusable UI building blocks with Wabi-Sabi styling.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-amber-300 group-hover:text-amber-200">
              <span>Browse Components</span>
              <span>→</span>
            </div>
          </Link>

          <Link
            href="/apps"
            className="group rounded-2xl border border-green-400/30 bg-slate-900/60 p-8 hover:border-green-400/60 transition-all text-left"
          >
            <div className="text-3xl font-bold">Apps</div>
            <p className="mt-2 text-slate-300">Pre-built, practical apps you can use and adapt.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-green-300 group-hover:text-green-200">
              <span>Explore Apps</span>
              <span>→</span>
            </div>
          </Link>
        </div>

        <div className="mt-10 text-slate-500 text-sm">You can always return here from the navigation.</div>
      </section>
    </main>
  )
}
