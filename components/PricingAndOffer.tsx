"use client";

import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
import { Check, Sparkles, Star, ArrowRight, Clock } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";

export default function PricingAndOffer() {
  const [showOTO, setShowOTO] = React.useState(false);
  
  const handleFoundationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowOTO(true);
    // Smooth scroll to OTO section
    setTimeout(() => {
      const otoElement = document.getElementById('premium-oto-section');
      if (otoElement) {
        otoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const tiers = [
    {
      name: "Foundation",
      price: "R45,000",
      highlight: false,
      blurb: "For small businesses ready to automate and grow steadily.",
      impl: "30-day implementation",
      shifts: "Includes 3 core shifts/apps",
      examples: ["Client database", "Online payments", "Delivery tracker"],
      retainer: "Optional retainer (hybrid): R7,500 base + 5–10% of profit uplift unlocked",
      cta: { label: "Book a Discovery Session", href: "https://cal.com/riegal-du-toit/30min" },
    },
    {
      name: "Growth",
      price: "R95,000",
      highlight: true,
      blurb: "For scaling businesses with more complex needs.",
      impl: "60-day implementation",
      shifts: "Includes 6 shifts/apps",
      examples: ["CRM automations", "Referral tracking", "Upsell flows", "Customer portal"],
      retainer: "Optional retainer (hybrid): R15,000 base + 5–10% of profit uplift unlocked",
      cta: { label: "Book a Discovery Session", href: "https://cal.com/riegal-du-toit/30min" },
    },
    {
      name: "Scale",
      price: "R180,000",
      highlight: false,
      blurb: "For established businesses aiming for enterprise-level transformation.",
      impl: "90-day implementation",
      shifts: "Includes 12+ shifts/apps",
      examples: ["Multi-team dashboards", "Predictive analytics", "Stock & delivery systems"],
      retainer: "Optional retainer (hybrid): R25,000 base + 5–10% of profit uplift unlocked",
      cta: { label: "Book a Discovery Session", href: "https://cal.com/riegal-du-toit/30min" },
    },
  ];

  const stack = [
    { label: "Instant Profit Assessment", value: "R9,500", desc: "AI-powered analysis of your current systems" },
    { label: "Hidden Value Report", value: "R12,500", desc: "Personalized roadmap to unlock 15–40% more profit" },
    { label: "Implementation Checklist", value: "R8,000", desc: "Step-by-step execution plan for quick wins" },
    { label: "ROI Calculator", value: "R5,000", desc: "Track savings and new revenue unlocked" },
    { label: "30-Day Support Sprint", value: "R15,000", desc: "Hands-on guidance during implementation" },
    { label: "Clarity Dashboard (Lifetime)", value: "R15,000", desc: "One-page live view of where profit flows" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent blur-xl"></div>
          <div className="relative">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 opacity-80">
              Ready to begin
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-sora leading-tight">
              Your Path to{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Clarity
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400/60 via-orange-500/60 to-amber-600/60 blur-sm"></div>
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Choose how you'd like to begin your transformation — with Discovery or fast-track with our One-Time Value Offer.
            </p>
          </div>
        </div>

        {/* Discovery callout */}
        <div className="mb-10 md:mb-14">
          <div className="bg-slate-800/50 backdrop-blur-sm border-2 border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Badge className="bg-amber-100 text-amber-800">Start here</Badge>
                <h3 className="mt-3 text-2xl font-bold text-white">Discovery Session — R5,000</h3>
                <p className="mt-1 text-slate-300">
                  Every engagement begins with Discovery. We reveal hidden profit streams and map 10–15 small shifts with
                  ROI potential. <span className="font-medium text-white">The fee is credited toward any plan you choose.</span>
                </p>
                <div className="mt-3 inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-xl border border-amber-500/30 text-amber-400 font-medium text-sm">
                  <span className="text-amber-400/90 text-sm mr-2">⚡</span>
                  Limited to <span className="text-amber-400 font-semibold mx-1">12 businesses</span> per quarter — We value your time as well as ours.
                </div>
              </div>
              <Button asChild className="mt-2 md:mt-0 bg-green-600 hover:bg-green-700">
                <a href="https://cal.com/riegal-du-toit/30min" target="_blank" rel="noopener noreferrer">
                  Book Discovery <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name}>
              <div className="bg-slate-800/50 backdrop-blur-sm border-2 border-green-500/30 rounded-xl p-6 h-full flex flex-col hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{t.name}</h3>
                    {t.highlight ? (
                      <Badge className="bg-amber-500 text-black">
                        <Star className="mr-1 h-4 w-4" /> Most popular
                      </Badge>
                    ) : null}
                  </div>
                  
                  <div className="mb-4 flex items-end gap-2">
                    <span className="text-3xl font-extrabold text-white">{t.price}</span>
                    <span className="text-sm text-slate-400">once-off</span>
                  </div>
                  
                  <p className="mb-4 text-sm text-slate-300">{t.blurb}</p>

                  <div className="flex items-center gap-2 text-sm mb-4">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-slate-300">{t.impl}</span>
                  </div>

                  <div className="border-t border-slate-700/30 my-4"></div>

                  <div className="mb-4 flex-1">
                    <p className="font-medium text-white mb-2">{t.shifts}</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {t.examples.map((e) => (
                        <li key={e} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-700/30 my-4"></div>

                  <div className="rounded-lg bg-slate-700/40 p-3 mb-6">
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-white">Hybrid retainer option:</span> {t.retainer}.
                    </p>
                  </div>

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all mt-auto">
                    <a href={t.cta.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                      {t.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium One-Time Offer */}
        {showOTO && (
        <section id="premium-oto-section" className="relative mt-16 md:mt-24 overflow-hidden">
          {/* Premium background with subtle patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-500/5 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
              {/* Premium header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-bold text-sm shadow-lg shadow-amber-500/25 mb-8">
                  <Sparkles className="w-4 h-4 mr-2" />
                  🌸 Exclusive One-Time Offer
                  <Sparkles className="w-4 h-4 ml-2" />
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                  Foundation + <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">R20,000</span> 
                  <br className="hidden md:block" />
                  in stacked value — 
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">still R45,000</span>
                </h2>
                
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Skip Discovery and unlock <span className="font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">premium deliverables</span> at Foundation pricing
                </p>
              </div>

              {/* Premium value stack */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                {[
                  { title: "Instant Profit Assessment", desc: "AI-powered analysis of your current systems", value: "R9,500" },
                  { title: "Hidden Value Report", desc: "Personalized roadmap to reveal 15–40% more profit", value: "R12,500" },
                  { title: "Implementation Checklist", desc: "Step-by-step execution plan for quick wins", value: "R8,000" },
                  { title: "ROI Calculator", desc: "Track savings and new revenue unlocked", value: "R5,000" },
                  { title: "30-Day Support Sprint", desc: "Hands-on guidance during implementation", value: "R15,000" },
                  { title: "Clarity Dashboard (Lifetime)", desc: "One-page live view of where profit flows", value: "R15,000" },
                ].map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Card className="relative bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 rounded-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-bl-full"></div>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-slate-900 leading-tight pr-4">{item.title}</h3>
                          <div className="text-right flex-shrink-0">
                            <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                              {item.value}
                            </div>
                            <div className="text-xs text-slate-500 font-medium">VALUE</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Premium pricing section */}
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-3xl"></div>
                <div className="relative p-12 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 font-medium text-sm mb-8">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                    Limited Time: 12 Spots Only
                  </div>
                  
                  <div className="mb-10">
                    <div className="text-3xl text-slate-400 line-through mb-4">Total Stack Value: R65,000+</div>
                    <div className="text-6xl md:text-8xl font-black text-white mb-6">
                      Your Price: <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">R45,000</span>
                    </div>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                      Same Foundation investment — <span className="font-bold text-amber-400">R20,000+ in premium bonuses</span> included
                    </p>
                  </div>

                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <Button className="relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white text-2xl font-bold px-16 py-8 rounded-full shadow-2xl shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-green-500/40">
                      <a href="#one-time-offer-form" className="flex items-center">
                        <Sparkles className="w-6 h-6 mr-3" />
                        Claim My Value Stack
                        <ArrowRight className="w-6 h-6 ml-3" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-slate-400 flex items-center justify-center flex-wrap gap-2">
                    <span className="flex items-center">
                      <span className="w-1 h-1 bg-amber-400 rounded-full mr-2"></span>
                      Available only before Discovery Session
                    </span>
                    <span className="flex items-center">
                      <span className="w-1 h-1 bg-amber-400 rounded-full mr-2"></span>
                      12 businesses per quarter
                    </span>
                  </p>

                  {/* Reverse psychology loss aversion */}
                  <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                    <button 
                      onClick={() => setShowOTO(false)}
                      className="text-red-400 text-sm italic text-center w-full hover:text-red-300 transition-colors cursor-pointer underline"
                    >
                      "No Thank you. I DON'T want R20,000 extra value at the same price."
                    </button>
                  </div>

                  {/* Premium testimonial */}
                  <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <p className="text-lg text-slate-300 italic mb-4">
                      "This one decision saved us 80+ hours per month and revealed hidden revenue streams we never saw."
                    </p>
                    <p className="text-amber-400 font-semibold">— Sarah M., Agency Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
      </div>
    </section>
  );
}
