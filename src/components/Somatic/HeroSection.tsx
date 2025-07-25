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
    <div className="relative min-h-screen bg-gradient-to-br from-background-50 via-background-100 to-primary-50 overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="min-h-screen flex flex-col justify-center items-center py-16 lg:py-24">
          <div className="text-center mb-16">
             {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-background-50/90 backdrop-blur-sm border border-primary-200 rounded-full shadow-lg mb-8">
              <Sparkles className="w-5 h-5 text-primary-600" />
              <span className="text-base font-semibold text-primary-700 tracking-wide">7-Day Somatic Challenge</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-text-900 leading-tight mb-6">
              Feel Better <span className="font-heading italic">in Your</span> <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent font-heading italic">Body</span>
            </h1>
            <p className="text-2xl md:text-3xl text-text-700 mb-4">in Just <span className="font-bold text-text-900">10 Minutes</span> a Day</p>
            <p className="text-lg text-text-500">Without the Gym, the Grind, or Guilt</p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <button 
                onClick={onJoinClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative bg-gradient-to-r from-primary-600 to-secondary-600 text-background-50 font-bold py-6 px-16 rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:-translate-y-2 text-xl lg:text-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Join Now for ₹999
                  <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto mt-16">
            <div 
              ref={videoRef}
              className="relative w-full aspect-video group cursor-pointer"
              onClick={onPlayClick}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-secondary-100 group-hover:shadow-3xl transition-all duration-500">
                <Image 
                  src='/yoga.png' 
                  alt='Somatic movement demonstration' 
                  width={800}
                  height={450}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90"></div>
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-background-50 text-sm font-bold px-4 py-2 rounded-full border border-white/20">
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
                <div className="absolute bottom-8 left-8 right-8 text-background-50">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Your Journey to Wellness</h3>
                  <p className="text-base lg:text-lg opacity-95 leading-relaxed">
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