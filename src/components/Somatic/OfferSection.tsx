
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Target, Star } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function OfferSection() {
  const features = [
    "Daily 10-minute videos",
    "No scheduling — watch anytime",
    "Body-first method (no fluff)",
    "Yours forever"
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
            7 Days. ₹999. One Weird Reset Button.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to feel like yourself again
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included:
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 font-medium">
                        {feature === "Yours forever" ? (
                          <span className="relative">
                            {feature}
                            <motion.div 
                              className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-200/80"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                              viewport={{ once: true }}
                              style={{ transformOrigin: 'left' }}
                            />
                          </span>
                        ) : (
                          feature
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-xl p-6 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Normally <span className="line-through">₹1999</span></div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 relative inline-block">
                    <span className="text-2xl">₹</span>999
                    <motion.div 
                      className="absolute -inset-2 bg-green-200/50 rounded-full -z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 100, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    Today Only Special Price
                  </div>
                </div>

                <div className="mb-6">
                  <CountdownTimer />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Join Now for ₹999
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Instant Access</h4>
              <p className="text-sm text-gray-600">Start immediately after purchase</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Target className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Lifetime Access</h4>
              <p className="text-sm text-gray-600">Keep it forever, repeat anytime</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">No Risk</h4>
              <p className="text-sm text-gray-600">100% satisfaction guarantee</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
