"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Clock } from "lucide-react";

export default function PricingAndOffer() {
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
              Choose the investment level that matches your business size and growth ambitions.
            </p>
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
                      <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        ⭐ Most popular
                      </span>
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
      </div>
    </section>
  );
}
