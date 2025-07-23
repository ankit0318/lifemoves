
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Your body is the{' '}
              <span className="relative inline-block">
                <span className="relative z-10">best guide</span>
                <motion.div
                  className="absolute -inset-x-2 -inset-y-1 bg-green-200/80 rounded-full -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              {' '}you never listened to.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Let&apos;s change that — in just 10 minutes a day.
            </p>
            <div className="flex justify-center mb-12">
              <div className="w-auto">
                {/* Countdown Timer: clean, professional, sleek */}
                <CountdownTimer />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl mb-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-red-500" />
                <Sparkles className="w-8 h-8 text-purple-500" />
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join 1000+ people who&apos;ve already started their reset
              </h3>
              
              <div className="text-lg text-gray-600 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>7 days of guided somatic movement</span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Just 10 minutes daily</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Lifetime access</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <CheckCircle className="w-6 h-6 mr-3" />
                Join the Reset for ₹999
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
            >
              <p>✨ Instant access • Lifetime guarantee • No monthly fees</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
