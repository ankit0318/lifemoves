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
    <>
      {/* Hero content with gradient background */}
      <div className="relative z-10 min-h-screen w-full max-sm:pt-5">
        <div className="absolute inset-0 md:h-2/3 h-3/4" style={{
          background: 'linear-gradient(180deg, rgba(75, 0, 130, 1) 13%, rgba(190, 181, 242, 1) 99%)',
        }}></div>
        <div className="relative z-20 container mx-auto px-6 text-center py-16 md:py-24">
      {/* Badge */}
      <div className="inline-flex items-center bg-white shadow-lg rounded-full px-4 py-2 mb-6 ">
        <Sparkles className="text-brand-hero mr-2 w-5 h-5" />
        <span className="font-body text-base max-sm:text-md text-brand-hero font-extrabold">7-Day Somatic Challenge</span>
      </div>

      {/* Main Heading */}
      <h1 className="font-heading font-bold text-5xl md:text-7xl text-white leading-tight">
        Feel better <span className="inline-block text-white ">in your</span>{" "}<span className="inline-block text-white italic">
        Body
        </span>

      </h1>
      <p className="font-heading text-2xl md:text-4xl text-white  mt-4">
        in Just <span className="font-bold md:text-5xl">10 Minutes</span> a Day
      </p>
      <p className="font-body text-sm max-sm:font-bold md:text-2xl tracking-wider md:leading-relaxed text-white mt-4">
        Without the Gym, the Grind, or Guilt
      </p>

      {/* CTA Button */}
      <button
        onClick={onJoinClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mt-8 bg-white text-brand-hero font-extrabold py-4 px-8 rounded-full text-xl inline-flex items-center hover:opacity-90 transition-opacity"
      >
        Join Now for ₹999
        <ArrowRight className={`ml-2 w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
      </button>

      {/* Video Section */}
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
    </>
  );
}

export default HeroSection;
