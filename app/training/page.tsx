import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Hero3DCarousel, HeroCarouselSlide } from '@/components/Hero3DCarousel'
import { Bot, Workflow, Sparkles } from 'lucide-react'
import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Training & Empowerment - Business Growth',
  description: 'Learn AI essentials, workflow automation, and business systems. Empower your team with training that drives sustainable growth and profit optimization.',
  path: '/training',
  keywords: ['training', 'business education', 'AI essentials', 'workflow automation', 'team empowerment'],
  ogType: 'website',
})

export default function Training() {
  return <TrainingClient />
}

'use client'

function TrainingClient() {
  const [mounted, setMounted] = useState(false)

  const slides: HeroCarouselSlide[] = [
    {
      id: 'training-branch-1',
      title: 'AI Essentials',
      label: 'Branch 1 · Everyday Adoption',
      description:
        "Gentle introduction to working with what you have — finding overlooked potential in day-to-day processes and team rhythms.",
      services: ['prompts', 'automation', 'productivity'],
      type: 'Branch 1',
      imageUrl: '/images/bon2.png',
      initials: 'B1',
      icon: '🤖',
      highlights: ['Applied in daily workflows'],
      hoverTitle: 'AI essentials unlock everyday leverage',
      hoverSummary: 'Hands-on rituals keep daily AI use calm and compliant.',
      hoverHighlights: [
        'POPIA-ready prompts',
        'Reports out in minutes',
      ],
      nicheDetail: 'Format: 1 day or 3×2h • From R12k',
      imageHeadline: 'AI Essentials',
      imageBadge: 'Branch 1',
      badgeIcon: <Bot className="h-10 w-10 text-white" strokeWidth={2.6} />,
    },
    {
      id: 'training-branch-2',
      title: 'Growth in Operations',
      label: 'Branch 2 · Workflow Craft',
      description:
        'Patient cultivation of your existing workflows — accepting imperfections while shaping them into resilient systems.',
      services: ['workflows', 'integration', 'optimization'],
      type: 'Branch 2',
      imageUrl: '/images/bon2.png',
      initials: 'B2',
      icon: '🔁',
      highlights: ['Automation confidence gained'],
      hoverTitle: 'Operations teams build calm, automated loops',
      hoverSummary: 'Turn repetitive work into gentle automations everyone trusts.',
      hoverHighlights: [
        'Map tasks → calm AI loops',
        'Track ROI per process',
      ],
      nicheDetail: 'Format: 2 days • From R35k',
      imageHeadline: 'Growth in Operations',
      imageBadge: 'Branch 2',
      badgeIcon: <Workflow className="h-10 w-10 text-white" strokeWidth={2.6} />,
    },
    {
      id: 'training-branch-3',
      title: 'Leadership Development',
      label: 'Branch 3 · Executive Stewardship',
      description:
        'Leadership through the lens of impermanence — building cultures that embrace change and find strength in clarity.',
      services: ['strategy', 'governance', 'leadership'],
      type: 'Branch 3',
      imageUrl: '/images/bon2.png',
      initials: 'B3',
      icon: '✨',
      highlights: ['Strategic AI roadmap framed'],
      hoverTitle: 'Leaders steward responsible AI transformation',
      hoverSummary: 'Give leaders crisp guardrails for policy, people, and investment.',
      hoverHighlights: [
        'Strategy for SA conditions',
        'Roadmap with quick-win pilots',
      ],
      nicheDetail: 'Format: Half- or full-day • From R25k',
      imageHeadline: 'Leadership Development',
      imageBadge: 'Branch 3',
      badgeIcon: <Sparkles className="h-10 w-10 text-white" strokeWidth={2.6} />,
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-green-500/5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 mt-[50px]"
            >
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white font-sora"
                >
                  Learn With Us —{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                    Find the Small Shifts,
                  </span>
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6"
                >
                  <p className="text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent font-sora">
                    Shape Them <span className="whitespace-nowrap">Yourself</span>
                  </p>
                </motion.div>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light">
                  Discover gentle ways to shape what you already have with Wabi-Sabi's patient approach to growth
                </p>
                
                <p className="text-lg text-slate-200 leading-loose font-light">
                  Our learners weren't broken — they were <span className="italic text-amber-200">already capable</span>. But wise leaders know potential often emerges <span className="italic text-amber-300">through small shifts</span>.
                </p>
              </div>

              
            </motion.div>
            
            {/* Right Visual - 3D Training Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <Hero3DCarousel slides={slides} autoRotateInterval={4000} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light">
                Growth is a discipline, not a one-time act. Our training teaches the <span className="italic text-amber-200">Wabi-Sabi way</span> — finding beauty in what's imperfect, working with what you already have, and letting small, patient shifts create lasting change.
              </p>

              <div>
                <p className="text-lg md:text-xl text-slate-200 font-medium">
                  <strong className="text-amber-400">Your business isn't broken. It's beautifully incomplete.</strong>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-slate-300">
                  We don't tear down and rebuild. We <span className="italic text-amber-300">nurture what exists</span>, accept the flaws, and gently shape them into strengths.
                </p>
                <p className="text-lg text-slate-300">
                  When leaders embraced this <span className="text-amber-400 font-semibold">patient approach</span>, they discovered that their greatest weaknesses held their most valuable opportunities.
                </p>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#programs" className="bg-slate-800/50 text-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-700/50 transition-all border border-slate-700">
                Explore Programs
              </Link>
              <a
                href="https://cal.com/riegal-du-toit/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Book a Growth Session
              </a>
            </div>

            <div className="text-slate-500 text-sm">
              On-site: Cape Town • Johannesburg • Durban • Virtual nationwide
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why AI Training Matters Now */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-sora">
              Why the <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Wabi-Sabi Way</span> Matters Now
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              In today's economy, everyone chases perfection and efficiency. But Wabi-Sabi teaches us that true strength comes from accepting imperfection, embracing transience, and finding profound beauty in what others overlook. Your flaws aren't failures — they're features waiting to be discovered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Embrace Imperfection</h3>
              <p className="text-slate-300">Find beauty and opportunity in what others see as flaws or inefficiencies.</p>
            </div>

            <div className="text-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Accept Transience</h3>
              <p className="text-slate-300">Work with change, not against it. Build systems that flow and adapt naturally.</p>
            </div>

            <div className="text-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Nurture What Exists</h3>
              <p className="text-slate-300">Start with what you have. Small, patient improvements create profound transformation.</p>
            </div>

            <div className="text-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Find Authentic Simplicity</h3>
              <p className="text-slate-300">Strip away complexity to reveal the essential beauty underneath.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-sora">
              Programs That <span className="bg-gradient-to-r from-amber-400 via-green-400 to-amber-300 bg-clip-text text-transparent">Shape Growth</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Like branches on a tree, each program grows from your current foundation. We don't replace what you've built — we help it evolve naturally. Choose the path that honors where you are now, while gently guiding you toward where you want to be.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Branch 1: Essentials of Growth */}
            <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-green-400/50 transition-all">
              <div className="text-xs uppercase tracking-wide text-green-400 mb-2">🌱 Branch 1</div>
              <h3 className="text-2xl font-bold text-white mb-4">Essentials of Growth</h3>
              <p className="text-slate-300 mb-6">Gentle introduction to working with what you have — finding the overlooked potential in your current processes and team rhythms.</p>
              
              <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-6">
                <span className="bg-slate-800 px-3 py-1 rounded-xl">1 day or 3×2h</span>
                <span className="bg-slate-800 px-3 py-1 rounded-xl">On-site • Virtual</span>
                <span className="bg-slate-800 px-3 py-1 rounded-xl">From R12k</span>
              </div>

              <ul className="space-y-3 text-slate-300 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Create better, safer prompts (POPIA-aware)
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Draft reports, emails & proposals in minutes
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Summarise docs, meetings & research
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Personal AI toolkit for everyday productivity
                </li>
              </ul>

              <a href="/training/ai-essentials" className="block w-full bg-gradient-to-r from-green-400 to-amber-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center">
                View Outline
              </a>
            </div>

            {/* Branch 2: Growth in Operations */}
            <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all">
              <div className="text-xs uppercase tracking-wide text-amber-400 mb-2">🌿 Branch 2</div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth in Operations</h3>
              <p className="text-slate-300 mb-6">Patient cultivation of your existing workflows — accepting their current imperfections while gradually shaping them into something more beautiful and effective.</p>
              
              <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-6">
                <span className="bg-slate-800 px-3 py-1 rounded-xl">2 days</span>
                <span className="bg-slate-800 px-3 py-1 rounded-xl">On-site • Virtual</span>
                <span className="bg-slate-800 px-3 py-1 rounded-xl">From R35k</span>
              </div>

              <ul className="space-y-3 text-slate-300 mb-8">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Map repetitive tasks → build AI workflows
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Integrate email, sheets, CRM with GPT
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Customer support assistants & knowledge bases
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Measure ROI: time saved, cost per process
                </li>
              </ul>

              <a href="/training/ai-ops" className="block w-full bg-gradient-to-r from-amber-400 to-green-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center">
                See Modules
              </a>
            </div>

            {/* Branch 3: Leadership for Lasting Growth */}
            <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-green-400/50 transition-all">
              <div className="text-xs uppercase tracking-wide text-green-400 mb-2">🌸 Branch 3</div>
              <h3 className="text-2xl font-bold text-white mb-4">Leadership for Lasting Growth</h3>
              <p className="text-slate-300 mb-6">Leadership through the lens of impermanence — building resilient cultures that embrace change, find strength in vulnerability, and lead with authentic wisdom.</p>
              
              <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-6">
                <span className="bg-slate-800 px-3 py-1 rounded-xl">Half-day / Full-day</span>
                <span className="bg-slate-800 px-3 py-1 rounded-xl">Boardroom • Virtual</span>
                <span className="bg-slate-800 px-3 py-1 rounded-xl">From R25k</span>
              </div>

              <ul className="space-y-3 text-slate-300 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  AI strategy aligned to tough SA conditions
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  POPIA, data governance & model risk
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Capability roadmap & talent upskilling
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Investment cases & quick-win pilots
                </li>
              </ul>

              <a href="/training/ai-leadership" className="block w-full bg-gradient-to-r from-green-400 via-amber-400 to-green-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center">
                Book Briefing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              The <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Wabi-Sabi</span> Transformation
            </h2>
          </div>

          <div className="bg-slate-900/60 rounded-2xl p-8 border border-slate-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 rounded-lg border-l-4 border-amber-400">
                <h4 className="text-lg font-semibold text-white mb-2">Embrace your current imperfections</h4>
                <p className="text-slate-300">Stop fighting what is. Start working with what you have, beautifully.</p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg border-l-4 border-amber-400">
                <h4 className="text-lg font-semibold text-white mb-2">Find beauty in the overlooked</h4>
                <p className="text-slate-300">Discover hidden value in processes others dismiss as broken or outdated.</p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg border-l-4 border-amber-400">
                <h4 className="text-lg font-semibold text-white mb-2">Accept the temporary nature of all systems</h4>
                <p className="text-slate-300">Build with change in mind. Create resilience through flexibility, not rigidity.</p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg border-l-4 border-amber-400">
                <h4 className="text-lg font-semibold text-white mb-2">Cultivate authentic simplicity</h4>
                <p className="text-slate-300">Strip away the unnecessary. Reveal the essential beauty that was always there.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Questions We <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Often Hear</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Do we need to be technical to learn this?</h4>
              <p className="text-slate-300">Not at all. We focus on practical, no-code approaches that any team member can apply immediately. The emphasis is on mindset and workflow, not technical complexity.</p>
            </div>

            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Is this compliant and safe for my team?</h4>
              <p className="text-slate-300">Absolutely. We include comprehensive safe-use policies, data handling guidelines, and POPIA-compliant configuration patterns to protect your business and customers.</p>
            </div>

            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Will this work in my industry?</h4>
              <p className="text-slate-300">Yes. We customize training for finance/insurance, retail, healthcare, agriculture, energy, and public sector. Each program reflects your industry's unique challenges and opportunities.</p>
            </div>

            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Can we learn remotely or on-site?</h4>
              <p className="text-slate-300">Both options are available. We offer on-site training in Cape Town, Johannesburg & Durban, or virtual sessions that work seamlessly across South Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book-training" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Cultivate Growth</span> in Your Team?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Choose a path that honors your current reality while gently guiding transformation. We don't force change — we cultivate it, with patience and wisdom, until it blooms naturally from within.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#programs" className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all">
              Explore Programs
            </a>
            <a href="https://cal.com/riegal-du-toit/30min" target="_blank" rel="noopener noreferrer" className="bg-slate-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-600 transition-all">
              Book a Growth Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
