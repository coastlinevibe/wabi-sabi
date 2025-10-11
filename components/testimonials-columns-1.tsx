"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "More customers paying on time — I'm not running a bank here.",
    name: "Pieter",
    role: "Construction",
    image: "/api/placeholder/40/40"
  },
  {
    text: "If my regulars just came back every month without me phoning, I'd sleep better.",
    name: "Thandi",
    role: "Salon Owner",
    image: "/api/placeholder/40/40"
  },
  {
    text: "More referrals. You'd think if you do good work people would spread the word — but they don't.",
    name: "Riaan",
    role: "Plumbing Services",
    image: "/api/placeholder/40/40"
  },
  {
    text: "Extra income from upsells… imagine clients adding boerie rolls to their catering orders without me asking.",
    name: "Lebo",
    role: "Catering",
    image: "/api/placeholder/40/40"
  },
  {
    text: "I need more feet through the door. Simple as that.",
    name: "Zanele",
    role: "Clothing Boutique",
    image: "/api/placeholder/40/40"
  },
  {
    text: "How do I reach more clients without spending all day on Facebook?",
    name: "Yusuf",
    role: "Auto Repairs",
    image: "/api/placeholder/40/40"
  },
  {
    text: "The paperwork is killing me. I need one system that just runs.",
    name: "Mariam",
    role: "Accounting Firm",
    image: "/api/placeholder/40/40"
  },
  {
    text: "A proper customer database — I don't even know who bought what last month.",
    name: "Sipho",
    role: "Electronics Store",
    image: "/api/placeholder/40/40"
  },
  {
    text: "A website that actually brings in sales, not just sits there.",
    name: "Annelie",
    role: "Bakery",
    image: "/api/placeholder/40/40"
  },
  {
    text: "Managing deliveries better. Half my stress is drivers, not customers.",
    name: "Themba",
    role: "Fresh Produce Supplier",
    image: "/api/placeholder/40/40"
  },
  {
    text: "Show my daily products to my customers without WhatsApping each one.",
    name: "Kayla",
    role: "Florist",
    image: "/api/placeholder/40/40"
  },
  {
    text: "Find the best suppliers — I waste hours chasing ingredients and stock.",
    name: "Johan",
    role: "Restaurant Owner",
    image: "/api/placeholder/40/40"
  }
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials?: typeof testimonials;
  duration?: number;
}) => {
  const testimonialsToUse = props.testimonials || testimonials;
  
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonialsToUse.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-xl bg-slate-800 border border-slate-600 max-w-sm w-full" key={i}>
                  <div className="text-white italic mb-4">"{text}"</div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">
                      {name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-amber-300">{name}</div>
                      <div className="text-slate-400 text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function TestimonialsColumns() {
  return (
    <section className="pt-8 pb-0 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/3 to-transparent blur-xl"></div>
          <div className="relative">
            <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 text-xs font-medium tracking-wider uppercase">
              Real voices
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                Straight From Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Discovery Sessions
              </span>
            </h2>
          </div>
        </div>
        <div className="mt-2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent blur-sm"></div>
          <div className="relative px-8 py-4">
            <div className="text-center space-y-1">
              <p className="text-lg text-slate-400 font-light italic">
                The question we ask every business owner:
              </p>
              <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                "What would make the biggest difference 
                <br className="hidden sm:block" />
                to your business, if you could have it 
                <span className="relative inline-block mx-2">
                  <span className="text-amber-400 font-bold">NOW</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400/60"></div>
                </span>?"
              </blockquote>
              <div className="flex justify-center mt-2">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden max-h-[600px]">
          <TestimonialsColumn 
            testimonials={testimonials.slice(0, 4)}
            duration={20}
            className="hidden md:block"
          />
          <TestimonialsColumn 
            testimonials={testimonials.slice(4, 8)}
            duration={25}
            className="hidden md:block"
          />
          <TestimonialsColumn 
            testimonials={testimonials.slice(8, 12)}
            duration={18}
            className="hidden md:block"
          />
          
          {/* Mobile: Show static cards */}
          <div className="md:hidden grid gap-6">
            {testimonials.slice(0, 6).map(({ text, name, role }, i) => (
              <div className="p-8 rounded-xl bg-slate-800 border border-slate-600" key={i}>
                <div className="text-white italic mb-4">"{text}"</div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">
                    {name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-amber-300">{name}</div>
                    <div className="text-slate-400 text-sm">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}