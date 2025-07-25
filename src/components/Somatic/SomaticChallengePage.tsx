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
import GuidedSection4 from './GuidedSection4';
import GuideSection5 from './GuideSection5';
import GuideSection6 from './GuideSection6';
// import StepSection from './StepSection';

import SomaticReset7Day from './SomaticReset7Day';

import StepSection from './StepSection';
import MobileGuideSection from './MobileGuideSection';

export default function SomaticChallengePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        
          <ChallengeOverview />
          {/* <StepSection />
          <SomaticReset7Day /> */}
        
        </div>
        <WhoItsFor />
        <div id="testimonials">
          <Testimonials />
        </div>
        <OfferSection />
        {mounted && !isMobile && <GuideSection5 />}
        
        {mounted && <MobileGuideSection />}
        <div id="faq">
          <FAQSection />
        </div>
        <div id="join">
    
        
        <GuideSection6 />
        </div>
        
        {mounted && isMobile && showStickyCTA && <StickyMobileCTA />}
      </div>
    </div>
  );
}