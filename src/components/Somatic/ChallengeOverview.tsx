
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
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
      color: "bg-blue-100 text-blue-600"
    },
    {
      day: 2,
      title: "Shoulder Detox",
      description: "Undo 100 Zoom calls",
      icon: Smile,
      color: "bg-green-100 text-green-600"
    },
    {
      day: 3,
      title: "Spine Awakening",
      description: "From slouch to spring",
      icon: ArrowUp,
      color: "bg-purple-100 text-purple-600"
    },
    {
      day: 4,
      title: "Emotional Unwinding",
      description: "Release the tight chest energy",
      icon: Heart,
      color: "bg-pink-100 text-pink-600"
    },
    {
      day: 5,
      title: "Energy Recharge",
      description: "Restore natural stamina",
      icon: Battery,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      day: 6,
      title: "Body Boundaries",
      description: "Learn to say \"no\" with your nervous system",
      icon: Shield,
      color: "bg-red-100 text-red-600"
    },
    {
      day: 7,
      title: "Full Integration",
      description: "Feel it all come together — with less effort",
      icon: Sparkles,
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
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

        <div className="max-w-2xl mx-auto space-y-4 mb-8">
          {challengeDays.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group w-full"
              whileHover={{ scale: 1.02 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-400">
                <CardContent className="p-4 sm:p-6 flex items-start gap-4 sm:gap-6">
                  <div className={`p-3 sm:p-4 rounded-full ${day.color} flex-shrink-0`}>
                    <day.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {day.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
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
