import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ElectriciansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <Link
          href="/portfolio"
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Electrical Contractor Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Safety inspections get postponed indefinitely.
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              An electrical contractor needed safety inspection reminders and code compliance tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Baseline Losses */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The Hidden Leaks</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Manual safety tracking and compliance management were creating liability risks and lost revenue.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">68%</div>
              <div className="text-lg font-semibold text-white mb-3">Overdue inspections</div>
              <p className="text-slate-400 text-sm leading-relaxed">Safety inspections lapsed without automated reminders.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">R89k</div>
              <div className="text-lg font-semibold text-white mb-3">Compliance penalties</div>
              <p className="text-slate-400 text-sm leading-relaxed">Code violations resulted in fines and project delays.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">34 hrs/week</div>
              <div className="text-lg font-semibold text-white mb-3">Manual paperwork</div>
              <p className="text-slate-400 text-sm leading-relaxed">Compliance documentation consumed billable hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Shifts */}
      <section className="px-6 py-16 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Small Shifts, Big Impact</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Automated compliance tracking eliminated safety risks and streamlined operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-600/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Auto-scheduled</div>
              <div className="text-lg font-semibold text-white mb-3">Safety inspections</div>
              <p className="text-slate-400 text-sm leading-relaxed">Inspections schedule automatically based on code requirements.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-600/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Digital tracking</div>
              <div className="text-lg font-semibold text-white mb-3">Compliance records</div>
              <p className="text-slate-400 text-sm leading-relaxed">All safety documentation stored and tracked digitally.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-600/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Real-time alerts</div>
              <div className="text-lg font-semibold text-white mb-3">Code updates</div>
              <p className="text-slate-400 text-sm leading-relaxed">Team receives notifications when electrical codes change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measured Results */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Measured Results</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Clear metrics showing improved safety compliance and operational efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">+94%</div>
              <div className="text-lg font-semibold text-white mb-3">Inspection compliance</div>
              <p className="text-slate-400 text-sm leading-relaxed">Automated scheduling ensures safety inspections stay current.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">-100%</div>
              <div className="text-lg font-semibold text-white mb-3">Code violations</div>
              <p className="text-slate-400 text-sm leading-relaxed">Zero compliance penalties since automation implementation.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">+28 hrs</div>
              <div className="text-lg font-semibold text-white mb-3">Billable time recovered</div>
              <p className="text-slate-400 text-sm leading-relaxed">Digital compliance frees up time for revenue-generating work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to automate your electrical compliance?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover how automation can eliminate safety risks and increase billable hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Take the Profit Quiz
            </Link>
            <Link
              href="/work-with-us"
              className="border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
