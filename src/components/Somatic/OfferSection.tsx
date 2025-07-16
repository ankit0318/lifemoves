
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function OfferSection() {
  const features = [
    "Daily 10-minute videos",
    "No scheduling — watch anytime",
    "Body-first method (no fluff)",
    "Yours forever"
  ];

  // Custom countdown logic (48 hours from first render)
  const getTimeLeft = () => {
    const end = new Date(Date.now() + 48 * 60 * 60 * 1000);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 px-2 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-10">
        {/* Left: Features (desktop only) */}
        <div className=" md:flex flex-1 flex-col gap-6 justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">7 Days. ₹997. One Reset Button.</h2>
          <p className="text-lg text-gray-700 mb-6">Everything you need to feel like yourself again</p>
          {/* <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </li>
            ))}
          </ul> */}
        </div>
        {/* Offer Card */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-lg bg-[#6C63FF] rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center"
          >
            {/* Limited Time Offer Badge */}
            <div className="mb-3 w-full flex justify-center">
              <span className="flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.3"/><path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Limited Time Offer
              </span>
            </div>
            {/* Price Row */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white/80 text-lg line-through">₹2,497</span>
              <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">60% OFF</span>
            </div>
            <div className="text-4xl font-extrabold text-white mb-1">₹997</div>
            <div className="text-white/90 text-sm mb-2">One-time payment · Lifetime access</div>
            <div className="text-white/80 text-xs mb-4">Only 48 hours left at this price!</div>
            {/* Custom Countdown Timer */}
            <div className="mb-5 w-full flex justify-center">
              <div className="w-full max-w-[420px]">
                <div className="w-full flex justify-center">
                  <div className="grid grid-cols-4 gap-2 w-full">
                    {timeUnits.map((unit) => (
                      <div
                        key={unit.label}
                        className="flex flex-col items-center border border-white/40 rounded-lg px-0 py-2 min-w-0 bg-transparent"
                      >
                        <span className="text-2xl font-bold text-white tracking-tight">
                          {unit.value.toString().padStart(2, '0')}
                        </span>
                        <span className="text-xs text-white/80 font-medium mt-1">
                          {unit.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full bg-white text-[#6C63FF] hover:bg-purple-100 font-bold text-lg py-4 rounded-xl shadow-lg mb-6 transition-all duration-300"
            >
              Enroll Now
            </Button>
            {/* Features List (mobile) */}
            <ul className="space-y-3 w-full mb-2 md:hidden">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-white/95 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
