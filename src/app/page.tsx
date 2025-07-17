"use client";
import React, { useState, useEffect, useRef } from 'react';
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
import Navbar from '../components/Somatic/Navbar';

export default function SomaticChallenge() {
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
      <div className="relative pt-16">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <div id="challenge">
          <StoryHook />
          <ChallengeOverview />
        </div>
        <WhoItsFor />
        <div id="testimonials">
          <Testimonials />
        </div>
        <OfferSection />
        <GuideSection />
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