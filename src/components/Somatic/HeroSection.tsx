
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Timer, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-green-50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/60" />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-green-200 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Video Play Button */}
          <motion.div
            className="relative mx-auto mb-8 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            <Play className="w-8 h-8 text-purple-600 ml-1" />
            <motion.div
              className="absolute inset-0 bg-purple-600 rounded-full opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Main Headlines */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Feel Better in Your Body in Just{' '}
            <span className="text-purple-600 relative">
              10 Minutes a Day
              <motion.div
                className="absolute -inset-x-2 -inset-y-1 bg-purple-200/50 rounded-full -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 150 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Without the Gym, the Grind, or Guilt
          </motion.p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-lg font-semibold text-gray-700">
                The 7-Day Somatic Reset Challenge
              </span>
            </div>
            <p className="text-gray-500 mt-2">
              For tired humans, desk zombies & anti-routine rebels
            </p>
          </motion.div>

          {/* CTA Button with Price and Timer */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Join Now for ₹999
            </Button>
            
            <CountdownTimer />
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>1000+ people have already joined</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
