'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Play, Sparkles } from 'lucide-react'

interface HeroSectionProps {
  videoSrc?: string
  onJoinClick?: () => void
  onPlayClick?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({
  videoSrc = '/placeholder-video.mp4',
  onJoinClick,
  onPlayClick
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 54
  })

  const [leftContentHeight, setLeftContentHeight] = useState<number | undefined>(undefined)
  const [leftContentTop, setLeftContentTop] = useState<number | undefined>(undefined)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const updateHeight = () => {
      if (leftContentRef.current && sectionRef.current) {
        setLeftContentHeight(leftContentRef.current.offsetHeight)
        setLeftContentTop(leftContentRef.current.offsetTop)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, '0')
  }

  const userAvatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCaZ9zcNs9mCvftJU3dsS2JlGdwNUcPGZQ3clXbfFQBEuycilXnCcdn4NBiKLcxlM3BWDWeUInfMTQQf85831khwkDLKv-xXwVwE1-jhSN8p3oQnYk7xBCGqXXRXyeKY9TgLfB7afDg2NEUfQaPQxXL3YTeUSepfPHufQrxX-j2C_gkxkI1eaDvDOul6FRfztEer4yzBdfH47Mmz3mRgiuIHFAfDbSRvyg_yPVlSuKLngIRkGRqO9tX6Qo7oNXXN-95njeusmAMx8Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAICgIMuBNYFwccRCKjIuzppdwFIpL_KdGZeMyfnYNW-MP2W26_o-1B9Ce5LfbSVt-8VtnLZfCZuGZ2t0USL_E5N1WoZeT75tGBUyhtOuGaCnK0I5ksmqvMyutIXnenOo7TeUI4ElR7BVft993S5YlssXlULAHM9nTB4y2ebYFLLGb_gPYRP3ErSxLm-orMofH2tDJPJanZORXoFVyqKdQFT7JkFb7A3qf1jID5cm88AdbjEdXapnyr07jUp6_dRD4RY1lujbZfpKg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBRzj854ZhBthjuWKRhEKil21M-3mb3NYMs-qZsHXk1x-M6ddWiOfhFsWD57aLerTeSBPLAe1_BQgZSwPoKVSm-KktTVALDioN45BQrRCpozK4Z0G34VJQqmlqiICW011adNqpwHxb3vuutezu9EuKAM_y4pkO5R7PPt6WCFp7Gxm3qXPKtIUptbpQ2NMkEEPX0n_DfoziGGwDegpH1eVJFKChgD4W1DfPoPo0HJyOUou3twd9MqYfcKyYtxN8mbdN9nHshTQhUrEg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_rNSMUzT5JArlT1ETjo53rE6PrKqIoNw64S5Jce72yqyOU3yuySclfmYYtBdamrrDt1Yz70Q_GAPdMrrO_HHFdHwWvLlYa11p-BWa0M3BiGoMFc636VZAkF1Bn4atKEXrBwC02KGnq7MC3B9gvdxZ466qC5yDzbuZGcQpOKJzIWlBOQbwrs3fNeV4f7Vk9076aoCWLH2m3kE2fesBXTDcKpWqkOtSG_hTReL5kzDfFTFkbITaS2YyMBW6DEB-6Lt4QAYTPg2abIU"
  ]

  return (
    <div ref={sectionRef} className="relative  flex items-center justify-center py-20 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-green-100 rounded-full opacity-30 blur-3xl translate-x-1/4 translate-y-1/4"></div>
      
      

      <div className="max-w-6xl mx-auto z-10 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
          {/* Left content */}
          <div ref={leftContentRef} className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Feel Better in Your Body in Just{' '}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                10 Minutes a Day
              </span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Without the Gym, the Grind, or Guilt
            </p>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-3 inline-flex items-center space-x-3 shadow-md">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-gray-800 text-base">The 7-Day Somatic Reset Challenge</span>
            </div>
            
            <p className="text-gray-500 text-base">For tired humans, desk zombies & anti-routine rebels</p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button 
                onClick={onJoinClick}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-lg"
              >
                Join Now for ₹999
              </button>
              
              <div className="bg-purple-50 border border-purple-200 text-purple-800 text-sm font-medium px-5 py-2 rounded-full flex items-center gap-2">
                <span>Offer Ends in:</span>
                <span className="font-bold tracking-widest">
                  {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {userAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    alt={`User ${index + 1}`}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={avatar}
                  />
                ))}
                <div className="h-10 w-10 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
                  +F
                </div>
              </div>
              <p className="text-gray-600 font-medium text-sm">1000+ people have already joined</p>
            </div>
          </div>

          {/* Right video section */}
          <div className="flex justify-center lg:static">
            {/* On desktop, absolutely position the video to align with left content */}
            <div
              className="relative w-full max-w-sm lg:max-w-md"
              style={
                leftContentHeight && leftContentTop !== undefined && window.innerWidth >= 1024
                  ? {
                      position: 'absolute',
                      top: leftContentTop,
                      height: leftContentHeight,
                      right: 0,
                      left: 'auto',
                      width: '100%',
                      maxWidth: '28rem', // Tailwind's max-w-md
                    }
                  : leftContentHeight
                  ? { height: leftContentHeight }
                  : {}
              }
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img src='/yoga.png' alt='yoga' className='w-full h-full object-cover' />
                {/* Video Overlay */}
                <div className="absolute inset-0  backdrop-blur-xs flex flex-col justify-center items-center text-white p-8">
                  {/* Timer badge */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs font-mono px-2 py-1 rounded-md">
                    00:59
                  </div>
                  {/* Play button */}
                  <button
                    className=" bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-300"
                    onClick={onPlayClick}
                    aria-label="Play video"
                  >
                    <Play className="text-white w-12 h-12" />
                  </button>
                  {/* Overlay text */}
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold">Watch: Your Journey to Wellness</h3>
                    <p className="text-sm opacity-80">See how the 7-day program transforms lives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection