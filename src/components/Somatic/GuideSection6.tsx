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
    <div className="min-h-screen bg-brand-bg text-brand-text font-body">
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="py-8 px-4 sm:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Centered Heading for Desktop */}
            <div className="mb-8">
              <h1 className="text-hero-mobile sm:text-hero-desktop font-bold leading-tight tracking-tight mb-4 text-center mx-auto font-heading">
                Your Body Is The Best Guide You Never Listened To
              </h1>
              <p className="text-subheading-mobile text-brand-text-secondary mb-6 text-center mx-auto max-w-xl font-body">
                Let's change that — in just 10 minutes a day.
              </p>
            </div>
            {/* Image and Card Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-12 items-center text-center sm:text-left">
              {/* Hero Image */}
              {/* <div className="w-96 max-w-full max-h-96 mb-6 sm:mb-0 flex-shrink-0 flex items-center justify-center">
                <img 
                  alt="Person with a spiral in their head and a plant, symbolizing mental and physical growth." 
                  className="w-full h-full object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 max-h-96" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnOZbN8Ma-kXYuD0RO3D2rGhbuu8RJSFe14FPd8CjL-s3QEGRepcLx6QyU7XTr_4MBY3iqmJ6J3mek1YHtMKjN3DoR_sSn9pYYxvMXqg4KDU8gePydhcKG8h4CfQuiRpHwU3HRuQh7eq6T4_KxmJToxk33iqohlsjGdY3OjelDQZmeufO7OszmCHgELjYy9xYYVuG6VkBdivkSW6R_MwZ-QXOrxl-_ZV6lfWvtOJJGp634SjkOMs7LPABjtpCaZyhxDTPrFfT0muI"
                />
              </div> */}
              {/* Pricing Card */}
              {/* <CountdownTimer /> */}
              <div className="w-96 max-w-full flex flex-col items-center sm:items-start justify-center" id="pricing">
                <div className="bg-brand-bg border border-brand-secondary rounded-2xl p-4 shadow-lg w-full flex flex-col justify-center">
                  <div className="text-center ">
                    <h2 className="text-scene-heading-mobile font-bold mb-2 text-brand-text font-heading">The 7-Day Reset Challenge</h2>
                    <div className="flex items-baseline justify-center  gap-2 mb-2">
                      <span className="text-highlight-mobile font-black text-brand-primary font-heading">₹999</span>
                      <span className="text-subheading-mobile font-semibold text-brand-text-secondary line-through font-body">₹2499</span>
                    </div>
                    {/* Countdown Timer */}
                    
                    {/* Form */}
                    <form className="space-y-3 mt-4" onSubmit={handlePayNow}>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full border border-brand-secondary rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary font-body"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp Number"
                        className="w-full border border-brand-secondary rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary font-body"
                        required
                        value={formData.number}
                        onChange={e => setFormData({ ...formData, number: e.target.value })}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-brand-secondary rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary font-body"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-brand-primary text-brand-text hover:bg-brand-accent transition-all duration-200 font-bold py-3 px-4 rounded-full text-scene-desc-mobile shadow-lg transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:transform-none font-body"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-brand-text border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </div>
                        ) : (
                          'Pay Now'
                        )}
                      </button>
                    </form>
                    {/* Custom Countdown below button */}
                    <div className="mt-4 flex flex-col items-center">
                      <span className="text-xs text-brand-text-secondary mb-1 font-semibold uppercase tracking-wide font-body">Offer ends in</span>
                      <div className="font-mono text-scene-heading-mobile font-bold text-brand-primary flex items-center gap-1 font-heading">
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

        {/* Testimonial Section */}
        {/* <section className="py-8 px-4 bg-white">
          <div className="max-w-sm mx-auto text-center">
            <div className="bg-[#e7f3ef] rounded-xl p-4 mb-4">
              <p className="text-[#0e1b17] italic mb-3">
                "In just one week, I learned to recognize tension I'd been carrying for years. The gentle movements made such a difference."
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-[#14b781] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <span className="text-sm font-semibold text-[#4e977f]">Sarah M.</span>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-brand-secondary">
        <div className="max-w-sm mx-auto px-4 py-6 text-center text-brand-text-secondary font-body">
          <p className="text-scene-desc-mobile">© 2024 Somatic Wellness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SomaticWellnessApp;