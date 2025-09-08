"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsColumnsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: React.ReactNode;
}

export function TestimonialsColumns({ testimonials, title, subtitle }: TestimonialsColumnsProps) {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-8"
          >
            {title}
          </motion.h2>
        )}
        
        {subtitle && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-xl text-white font-semibold mb-12"
          >
            {subtitle}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={`bg-slate-800 rounded-xl p-6 shadow ${
                index === testimonials.length - 1 && testimonials.length % 2 === 1 
                  ? 'md:col-span-2' 
                  : ''
              }`}
            >
              <p className="italic text-white mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-amber-300">— {testimonial.author}, {testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
