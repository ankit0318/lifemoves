'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Smile, 
  ArrowUp, 
  Heart, 
  Battery, 
  Shield, 
  Sparkles 
} from 'lucide-react';
import Image from 'next/image';

export default function ChallengeOverview() {
  const challengeDays = [
    {
      day: 1,
      title: "Breath Reset",
      description: "Wake up your nervous system from within",
      icon: Zap,
      color: "bg-blue-100 text-blue-600",
      illustration:<Image src="/breath reset.gif" alt="Day 1" width={96} height={96} className="w-32 h-28" />
    },
    {
      day: 2,
      title: "Shoulder Detox",
      description: "Undo 100 Zoom calls",
      icon: Smile,
      color: "bg-green-100 text-green-600",
      illustration:<Image src="/shoulder detox.png" alt="Day 2" width={96} height={96} className="w-32 h-28" />
    },
    {
      day: 3,
      title: "Spine Awakening",
      description: "From slouch to spring",
      icon: ArrowUp,
      color: "bg-purple-100 text-purple-600",
      illustration:<Image src="/i3.jpeg" alt="Day 3" width={96} height={96} className="w-24 h-24" />
    },
    {
      day: 4,
      title: "Emotional Unwinding",
      description: "Release the tight chest energy",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
      illustration:<Image src="/i4.jpeg" alt="Day 4" width={96} height={96} className="w-24 h-24" />
    },
    {
      day: 5,
      title: "Energy Recharge",
      description: "Restore natural stamina",
      icon: Battery,
      color: "bg-yellow-100 text-yellow-600",
      illustration:<Image src="/i5.jpeg" alt="Day 5" width={96} height={96} className="w-24 h-24" />
    },
    {
      day: 6,
      title: "Body Boundaries",
      description: "Learn to say \"no\" with your nervous system",
      icon: Shield,
      color: "bg-red-100 text-red-600",
      illustration:<Image src="/i6.jpeg" alt="Day 6" width={96} height={96} className="w-24 h-24" />
    },
    {
      day: 7,
      title: "Full Integration",
      description: "Feel it all come together — with less effort",
      icon: Sparkles,
      color: "bg-indigo-100 text-indigo-600",
      illustration:<Image src="/i7.jpeg" alt="Day 7" width={96} height={96} className="w-24 h-24" />
    }
  ];


  return (
    <section className="py-20 bg-gradient-to-b from-brand-bg to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-hero-mobile md:text-hero-desktop font-bold text-brand-text mb-6 font-heading">
            The 7-Day Somatic Reset
          </h2>
          <p className="text-subheading-mobile md:text-subheading-desktop text-brand-text-secondary  mb-4 font-body">
            A body-first experiment to help you feel like yourself again.
          </p>
          <div className="inline-flex items-center gap-2 bg-brand-primary px-4 py-2 rounded-full">
            <span className="text-brand-accent font-semibold">
              Just 10 minutes a day. No equipment. No fluff.
            </span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 top-5 w-1 bg-gray-200 h-full -translate-x-1/2 z-0" aria-hidden="true" />
          
          {/* Mobile Timeline vertical line - positioned on the left */}
          <div className="md:hidden absolute left-16 top-2 w-1 bg-gray-200 h-full z-0" aria-hidden="true" />
          
          <div className="flex flex-col gap-12 relative z-10">
            {challengeDays.map((day, index) => {
              const Icon = day.icon;
              const isLeftText = index % 2 === 0;
              return (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 items-center gap-6"
                >
                  {/* Desktop Layout (unchanged) */}
                  {/* Left side: text or illustration */}
                  <div className="hidden md:flex justify-end">
                    {isLeftText ? (
                      <div className="flex flex-col items-end text-right max-w-xs">
                        <h3 className="text-scene-heading-desktop font-bold text-brand-text mb-1 font-heading">
                        {day.title}
                        </h3>
                        <p className="text-scene-desc-desktop text-brand-text-secondary mb-2 font-body">
                          {day.description}
                        </p>
                      </div>
                    ) : (
                      <div className=" ">
                        {day.illustration}
                      </div>
                    )}
                  </div>
                  
                  {/* Desktop Timeline step (center) */}
                  <div className="hidden md:flex flex-col items-center relative z-10">
                    <div className={`w-24 h-12 flex items-center justify-center rounded-4xl border-4 border-white shadow-md ${day.color} font-bold text-lg mb-2`}> 
                      {'Day ' + day.day}
                    </div>
                    {/* Timeline connector */}
                    {index < challengeDays.length - 1 && (
                      <div className="w-1 h-full bg-gray-200 flex-1" />
                    )}
                  </div>
                  
                  {/* Desktop Right side: illustration or text */}
                  <div className="hidden md:flex justify-start">
                    {isLeftText ? (
                      <div className="">
                        {day.illustration}
                      </div>
                    ) : (
                      <div className="flex flex-col items-start text-left max-w-xs">
                        <h3 className="text-scene-heading-desktop font-bold text-brand-text mb-1 font-heading">
                           {day.title}
                        </h3>
                        <p className="text-scene-desc-desktop text-brand-text-secondary mb-2 font-body">
                          {day.description}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Layout - Enhanced with left timeline */}
                  <div className="md:hidden flex items-start gap-6 pl-4 pr-2">
                    {/* Mobile Timeline step (left positioned) */}
                    <div className="flex flex-col items-center relative z-10 flex-shrink-0">
                      <div className="w-24   h-24 rounded-full overflow-hidden border-1  border-white shadow-lg bg-white p-1"> 
                        <div className="w-full h-full rounded-full overflow-hidden justify-center items-center flex">
                          {day.illustration}
                        </div>
                      </div>
                    
                     
                    </div>
                    
                    {/* Mobile Content (right side) */}
                    <div className="flex-1 pt-2 pb-4">
                      <div className="mb-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-3 ${day.color}`}>
                          <Icon className="w-4 h-4" />
                          <span>Day {day.day}</span>
                        </div>
                        <h3 className="text-scene-heading-mobile font-bold text-brand-text mb-2 leading-tight font-heading">
                          {day.title}
                        </h3>
                        <p className="text-scene-desc-mobile text-brand-text-secondary leading-relaxed font-body">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-brand-accent" />
            <span className="text-brand-text font-medium font-body">
              Progressive daily sessions building on each other
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}