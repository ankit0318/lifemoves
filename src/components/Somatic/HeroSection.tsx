'use client'

import React, { useState, useRef } from 'react'
import { Play, Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image';

interface HeroSectionProps {
  onJoinClick?: () => void
  onPlayClick?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onJoinClick,
  onPlayClick
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col justify-center items-center py-12 lg:py-20">
          <div className="text-center mb-12">
             {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border border-indigo-200 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-base font-semibold text-indigo-700 tracking-wide">7-Day Somatic Challenge</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Feel Better <span className="fancy-font italic">in Your</span> <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent fancy-font italic">Body</span>
            </h1>
            <p className="mt-4 text-2xl md:text-3xl text-gray-700">in Just <span className="font-bold text-gray-900">10 Minutes</span> a Day</p>
            <p className="mt-2 text-lg text-gray-500">Without the Gym, the Grind, or Guilt</p>
          </div>
          <div className="space-y-8 ">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              <button 
                onClick={onJoinClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black py-5 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:-translate-y-2 text-xl lg:text-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Join Now for ₹999
                  <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              {/* <div className="bg-white/95 backdrop-blur-sm border-2 border-indigo-200 text-indigo-800 px-8 py-4 rounded-2xl shadow-xl">
                <div className="flex items-center justify-center gap-3 text-sm font-semibold mb-2">
                  <Clock className="w-5 h-5" />
                  <span>Offer ends in:</span>
                </div>
                <div className="font-black text-2xl lg:text-3xl tracking-widest text-center">
                  {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto mt-12">
            <div 
              ref={videoRef}
              className="relative w-full aspect-video group cursor-pointer"
              onClick={onPlayClick}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:shadow-3xl transition-all duration-500">
                <Image 
                  src='/yoga.png' 
                  alt='Somatic movement demonstration' 
                  width={800}
                  height={450}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90"></div>
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full border border-white/20">
                  02:34
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/35 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                      <Play className="text-white w-10 h-10 ml-1" fill="white" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border border-white/40 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3">Your Journey to Wellness</h3>
                  <p className="text-base lg:text-lg opacity-95 leading-relaxed font-medium">
                    Discover how 10 minutes of somatic movement can transform your daily life and reconnect you with your body
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;