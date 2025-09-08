"use client";

import { motion } from "framer-motion";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureWithAdvantagesProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

export function FeatureWithAdvantages({ title, subtitle, features }: FeatureWithAdvantagesProps) {
  return (
    <div className="w-full bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30">
      <div className="mb-8 text-center">
        <div className="inline-block bg-amber-500 text-slate-900 px-3 py-1 rounded text-sm font-medium mb-4">
          Real-Life Pain Points
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sora">{title}</h2>
        <p className="text-slate-300 text-lg">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="mb-2">
                <h3 className="font-semibold text-white text-base leading-tight">
                  <span 
                    className="italic" 
                    dangerouslySetInnerHTML={{
                      __html: feature.title.replace(/"([^"]+)"/g, '<em>"$1"</em>')
                    }}
                  />
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FeatureWithAdvantages;
