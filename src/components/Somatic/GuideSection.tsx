import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

export default function GuideSection() {
  const credentials = [
    {
      icon: Award,
      title: "Certified Somatic Educator",
      description: "Professional training in body-based healing"
    },
    {
      icon: Users,
      title: "1000+ People Helped",
      description: "Professionals, artists, and everyday people"
    },
    {
      icon: Clock,
      title: "10+ Years Experience",
      description: "Decade of wellness and movement practice"
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Mind-body connection specialist"
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
            Meet Aman — Your Somatic Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The person who'll help you reconnect with your body, one breath at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <div className="w-full h-64 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-purple-600">A</span>
                    </div>
                    <p className="text-lg font-semibold">Aman</p>
                    <p className="text-sm opacity-90">Somatic Movement Guide</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Aman is a certified somatic movement educator and wellness facilitator with 10+ years of experience helping people reconnect to their bodies through intuitive movement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                He's worked with professionals, artists, and everyday people to release tension, restore energy, and reclaim joy — one breath and micro-movement at a time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <credential.icon className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">{credential.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{credential.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}