"use client";
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/Somatic/HeroSection';
import StoryHook from '../components/Somatic/StoryHook';
import ChallengeOverview from '../components/Somatic/ChallengeOverview';
import WhoItsFor from '../components/Somatic/WhoItsFor';
import Testimonials from '../components/Somatic/Testimonials';
import OfferSection from '../components/Somatic/OfferSection';
import GuideSection from '../components/Somatic/GuideSection';
import FAQSection from '../components/Somatic/FAQSection';
import FinalCTA from '../components/Somatic/FinalCta';
import StickyMobileCTA from '../components/Somatic/StickyMobileCta';

export default function SomaticChallenge() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="relative">
        <HeroSection />
        <StoryHook />
        <ChallengeOverview />
        <WhoItsFor />
        <Testimonials />
        <OfferSection />
        <GuideSection />
        <FAQSection />
        <FinalCTA />
        
        {isMobile && <StickyMobileCTA />}
      </div>
    </div>
  );
}