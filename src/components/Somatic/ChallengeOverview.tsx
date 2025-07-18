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

export default function ChallengeOverview() {
  const challengeDays = [
    {
      day: 1,
      title: "Breath Reset",
      description: "Wake up your nervous system from within",
      icon: Zap,
      color: "bg-blue-500 text-white"
    },
    {
      day: 2,
      title: "Shoulder Detox",
      description: "Undo 100 Zoom calls",
      icon: Smile,
      color: "bg-green-500 text-white"
    },
    {
      day: 3,
      title: "Spine Awakening",
      description: "From slouch to spring",
      icon: ArrowUp,
      color: "bg-purple-500 text-white"
    },
    {
      day: 4,
      title: "Emotional Unwinding",
      description: "Release the tight chest energy",
      icon: Heart,
      color: "bg-pink-500 text-white"
    },
    {
      day: 5,
      title: "Energy Recharge",
      description: "Restore natural stamina",
      icon: Battery,
      color: "bg-yellow-500 text-white"
    },
    {
      day: 6,
      title: "Body Boundaries",
      description: "Learn to say \"no\" with your nervous system",
      icon: Shield,
      color: "bg-red-500 text-white"
    },
    {
      day: 7,
      title: "Full Integration",
      description: "Feel it all come together — with less effort",
      icon: Sparkles,
      color: "bg-indigo-500 text-white"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The 7-Day Somatic Reset
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            A body-first experiment to help you feel like yourself again.
          </p>
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
            <span className="text-purple-800 font-semibold">
              Just 10 minutes a day. No equipment. No fluff.
            </span>
          </div>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400 h-full rounded-full"></div>
          
          {challengeDays.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center mb-12 last:mb-0"
            >
              {/* Icon Circle */}
              <div className="relative z-10">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${day.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                  <day.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                {/* Day Number Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-600">{day.day}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-20 md:top-24 text-center max-w-xs md:max-w-sm">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {day.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {day.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-green-100 px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-gray-800 font-medium">
              Progressive daily sessions building on each other
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}