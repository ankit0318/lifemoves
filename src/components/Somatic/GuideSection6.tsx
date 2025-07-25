'use client';

import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

const SomaticWellnessApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
  });

  // Custom countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
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

  const handleJoinReset = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      alert('Welcome to the 7-Day Reset! Check your email for next steps.');
    }, 2000);
  };

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      alert('Payment successful! Check your email for next steps.');
      // Optionally, redirect or show a success message
    }, 2000);
  };

  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    if (pricing) {
      pricing.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50 text-text-900">
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="py-12 px-6 sm:py-16">
          <div className="max-w-5xl mx-auto">
            {/* Centered Heading for Desktop */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-6 text-center mx-auto font-heading">
                Your Body Is The Best Guide You Never Listened To
              </h1>
              <p className="text-xl text-secondary-700 mb-8 text-center mx-auto max-w-2xl font-body">
                Let's change that — in just 10 minutes a day.
              </p>
            </div>
            {/* Image and Card Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-16 items-center text-center sm:text-left">
              {/* Pricing Card */}
              <div className="w-full max-w-md flex flex-col items-center sm:items-start justify-center" id="pricing">
                <div className="bg-background-50 border-2 border-secondary-200 rounded-3xl p-8 shadow-2xl w-full flex flex-col justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 text-text-900 font-heading">The 7-Day Reset Challenge</h2>
                    <div className="flex items-baseline justify-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-secondary-600">₹999</span>
                      <span className="text-2xl font-semibold text-text-500 line-through">₹2499</span>
                    </div>
                    {/* Countdown Timer */}
                    
                    {/* Form */}
                    <form className="space-y-4 mt-6" onSubmit={handlePayNow}>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full border-2 border-secondary-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-secondary-600 text-text-900 font-body"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp Number"
                        className="w-full border-2 border-secondary-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-secondary-600 text-text-900 font-body"
                        required
                        value={formData.number}
                        onChange={e => setFormData({ ...formData, number: e.target.value })}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-2 border-secondary-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-secondary-600 text-text-900 font-body"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-secondary-600 text-background-50 hover:bg-secondary-700 active:bg-secondary-800 transition-all duration-300 font-bold py-4 px-6 rounded-2xl text-xl shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:transform-none"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-6 h-6 border-2 border-background-50 border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </div>
                        ) : (
                          'Pay Now'
                        )}
                      </button>
                    </form>
                    {/* Custom Countdown below button */}
                    <div className="mt-6 flex flex-col items-center">
                      <span className="text-sm text-secondary-700 mb-2 font-semibold uppercase tracking-wide">Offer ends in</span>
                      <div className="font-mono text-3xl font-bold text-secondary-600 flex items-center gap-2">
                        <span>{formatTime(timeLeft.hours)}</span>
                        <span>:</span>
                        <span>{formatTime(timeLeft.minutes)}</span>
                        <span>:</span>
                        <span>{formatTime(timeLeft.seconds)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-50 border-t-2 border-secondary-200">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-secondary-700">
          <p className="text-base font-body">© 2024 Somatic Wellness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SomaticWellnessApp;