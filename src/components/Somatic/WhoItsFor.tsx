
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Coffee, Heart, Target, Zap } from 'lucide-react';

export default function WhoItsFor() {
  const reasons = [
    {
      text: "You've googled \"why am I tired after 8 hours of sleep?\"",
      icon: Coffee,
      color: "text-amber-600"
    },
    {
      text: "You want better posture — but you also want snacks.",
      icon: Heart,
      color: "text-red-600"
    },
    {
      text: "You've bailed on routines by Day 3.",
      icon: Target,
      color: "text-blue-600"
    },
    {
      text: "You want something weirdly enjoyable that actually works.",
      icon: Zap,
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            This is for you if…
          </h2>
          <p className="text-xl text-gray-600">
            Sound familiar? Welcome to the club.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-gray-50 ${reason.color}`}>
                  <reason.icon className="w-8 h-8 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-gray-800 font-medium text-lg">
                      {reason.text}
                    </p>
                  </div>
                </div>
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
          <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              If you nodded along to any of these...
            </h3>
            <p className="text-lg text-gray-700">
              You're exactly who this challenge was designed for. 
              <span className="font-semibold"> Real people, real problems, real solutions.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
