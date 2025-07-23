"use client";
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import StoryHook from './StoryHook';
import ChallengeOverview from './ChallengeOverview';
import WhoItsFor from './WhoItsFor';
import Testimonials from './Testimonials';
import OfferSection from './OfferSection';
import GuideSection from './GuideSection';
import FAQSection from './FAQSection';
import FinalCTA from './FinalCta';
import StickyMobileCTA from './StickyMobileCta';
import Navbar from './Navbar';
import GuideSection2 from './GuideSection2';
import GuideSection3 from './GuideSection3';

export default function SomaticChallengePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setShowStickyCTA(rect.bottom <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <div className="relative pt-2 md:pt-8">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <div id="challenge">
          <StoryHook />
          {/* <StoryHook2 /> */}
          <ChallengeOverview />
        </div>
        <WhoItsFor />
        <div id="testimonials">
          <Testimonials />
        </div>
        <OfferSection />
        <GuideSection />
        <GuideSection2 />
        <GuideSection3 />
        <div id="faq">
          <FAQSection />
        </div>
        <div id="join">
          <FinalCTA />
        </div>
        
        {isMobile && showStickyCTA && <StickyMobileCTA />}
      </div>
    </div>
  );
}