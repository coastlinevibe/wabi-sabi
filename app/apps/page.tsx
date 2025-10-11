import Link from 'next/link'

type AppCard = {
  id: string
  name: string
  summary: string
  highlight: string
  status: 'live' | 'beta' | 'coming'
}

const apps: AppCard[] = [
  {
    id: 'kpi-dashboard',
    name: 'Hidden Profit KPI Dashboard',
    summary: 'See profit leaks and quick wins in one glance with auto-updating signals.',
    highlight: 'Auto-insights, alerts, trend deltas',
    status: 'beta',
  },
  {
    id: 'lead-qualifier',
    name: 'Lead Qualifier + Router',
    summary: 'Qualify, score and route leads instantly to the right channel.',
    highlight: 'Scoring, routing, alerts',
    status: 'live',
  },
  {
    id: 'ops-automation',
    name: 'Ops Automation Hub',
    summary: 'Automate repetitive back-office tasks with approvals and audit trails.',
    highlight: 'Workflows, approvals, logs',
    status: 'beta',
  },
  {
    id: 'reviews-engine',
    name: 'Reviews + Referrals Engine',
    summary: 'Grow trust and referrals with timed review prompts and smart nudges.',
    highlight: 'Sequences, multi-channel, analytics',
    status: 'coming',
  },
  {
    id: 'customer-portal',
    name: 'Customer Portal',
    summary: 'Delight customers with a self-service hub for updates, invoices and files.',
    highlight: 'Auth, notifications, billing',
    status: 'coming',
  },
  {
    id: 'inventory-sync',
    name: 'Inventory Sync + Alerts',
    summary: 'Prevent stockouts and overstock with multi-channel syncing and alerts.',
    highlight: 'Connectors, thresholds, reports',
    status: 'beta',
  },
]

export default function AppsIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-amber-500/15 rounded-xl border border-amber-500/30 mb-6">
          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
          <span className="text-amber-300 text-sm font-medium tracking-wider uppercase">Small Shifts, Real Results</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold font-sora leading-tight">
          Ready-to-Use <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Apps</span>
        </h1>
        <p className="mt-4 text-slate-300 text-lg max-w-3xl mx-auto">
          Practical tools that honor what already works in your business—then gently automate the rest.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://cal.com/riegal-du-toit/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold hover:shadow-lg transition-all"
          >
            Book a Growth Session
          </a>
          <Link href="/work-with-us#hero" className="rounded-xl border border-amber-500/40 px-6 py-3 text-amber-300 hover:bg-amber-500/10 transition-all">
            Talk to Us
          </Link>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <div key={app.id} className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 hover:border-amber-500/50 transition-all">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold font-sora">{app.name}</h3>
                <span
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    app.status === 'live'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/40'
                      : app.status === 'beta'
                      ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-500/40'
                      : 'bg-slate-700 text-slate-300 border border-slate-600'
                  }`}
                >
                  {app.status.toUpperCase()}
                </span>
              </div>
              <p className="mt-2 text-slate-300">{app.summary}</p>
              <div className="mt-3 text-sm text-slate-400">{app.highlight}</div>

              <div className="mt-5 flex gap-2">
                <Link
                  href={`/apps/${app.id}`}
                  className="flex-1 rounded-lg bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700 transition-colors text-center"
                >
                  Learn More
                </Link>
                <a
                  href="https://cal.com/riegal-du-toit/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-amber-500/40 px-4 py-2 text-amber-300 hover:bg-amber-500/10 transition-colors"
                >
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h4 className="text-2xl font-bold font-sora">Not sure which app fits?</h4>
          <p className="mt-2 text-slate-300">We’ll help you choose the smallest change that unlocks the biggest result.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="https://cal.com/riegal-du-toit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-medium hover:shadow-lg transition-all"
            >
              Book a Growth Session
            </a>
            <Link href="/contact" className="rounded-xl bg-slate-800 px-6 py-3 hover:bg-slate-700 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
