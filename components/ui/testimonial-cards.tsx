"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: string;
  id: number;
  author: string;
}

export function TestimonialCard ({ handleShuffle, testimonial, position, id, author }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        const clientX = 'clientX' in e ? e.clientX : e.touches?.[0]?.clientX || 0;
        dragRef.current = clientX;
      }}
      onDragEnd={(e) => {
        const clientX = 'clientX' in e ? e.clientX : e.changedTouches?.[0]?.clientX || 0;
        if (dragRef.current - clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-indigo-400">{author}</span>
    </motion.div>
  );
}

interface ShuffleCardsProps {
  testimonials?: Array<{
    id: number;
    testimonial: string;
    author: string;
  }>;
}

export function ShuffleCards({ testimonials: customTestimonials }: ShuffleCardsProps) {
  const defaultTestimonials = [
    {
      id: 1,
      testimonial: "We reclaimed 80+ hours a month without adding headcount. Wabi-Sabi shifted how we work.",
      author: "Sarah M. - Agency Owner"
    },
    {
      id: 2,
      testimonial: "Profit up, hours down. The system runs calmly now.", 
      author: "Lindwe K. - Retail Founder"
    },
    {
      id: 3,
      testimonial: "Small shifts, massive impact. We found hidden value we didn't know existed.",
      author: "Marcus T. - Professional Services"
    }
  ];

  const testimonials = customTestimonials || defaultTestimonials;
  const [positions, setPositions] = React.useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const poppedItem = newPositions.pop();
    if (poppedItem) {
      newPositions.unshift(poppedItem);
    }
    setPositions(newPositions);
  };

  return (
    <div className="grid place-content-center overflow-hidden px-8 py-24 text-slate-50 h-full w-full">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index] || "back"}
          />
        ))}
      </div>
    </div>
  );
}
