import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-purple-100">
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Timer className="w-4 h-4 text-purple-600" />
        </motion.div>
        <span className="text-xs text-gray-500">Offer Ends in:</span>
        <div className="flex items-center gap-1 font-mono font-bold text-purple-600">
          <span>{formatTime(timeLeft.hours)}</span>
          <span className="text-purple-400">:</span>
          <span>{formatTime(timeLeft.minutes)}</span>
          <span className="text-purple-400">:</span>
          <span>{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>
    </div>
  );
}