
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  Moon, 
  Dumbbell, 
  Brain, 
  Smile, 
  ArrowRight 
} from 'lucide-react';

export default function StoryHook() {
  const problems = [
    {
      icon: Coffee,
      text: "Sitting too long but stretching feels like solving equations",
      color: "text-amber-600"
    },
    {
      icon: Moon,
      text: "Tired even after sleeping",
      color: "text-blue-600"
    },
    {
      icon: Dumbbell,
      text: "Workouts that feel like punishment",
      color: "text-red-600"
    },
    {
      icon: Brain,
      text: "Meditation makes you itch",
      color: "text-purple-600"
    },
    {
      icon: Smile,
      text: "Yoga is for your cousin… not you",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your body's been trying to tell you things.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            You've just been…{' '}
            <span className="relative inline-block">
              <span className="italic relative z-10">busy</span>.
            </span>
          </p>
          <motion.div
            className="absolute -inset-x-2 -inset-y-0 bg-amber-200/70 rounded-full -z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'left', pointerEvents: 'none' }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-gray-50 ${problem.color}`}>
                  <problem.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-800 font-medium">{problem.text}</p>
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
          className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              So what do you do when your body's clearly done, but you're not sure what will actually help?
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">You stop outsourcing your wellbeing.</span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">You tune in.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
