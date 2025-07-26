"use client";
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import StoryHook from './StoryHook';
import ChallengeOverview from './ChallengeOverview';
import WhoItsFor from './WhoItsFor';
import Testimonials from './Testimonials';
import OfferSection from './OfferSection';

import FAQSection from './FAQSection';

import StickyMobileCTA from './StickyMobileCta';
import Navbar from './Navbar';

import GuideSection5 from './GuideSection5';
import FinalCta from './FinalCta';


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
    <div className="min-h-screen ">
      <Navbar />
      <div className="relative ">
        <div ref={heroRef} className="section-spacing">
          <HeroSection />
        </div>
        <div className="section-spacing">
          <StoryHook />
        </div>
        <div id="challenge " className="section-spacing">
          <ChallengeOverview />
        </div>
        <div id="testimonials" className="section-spacing">
          <WhoItsFor />
        </div>
        <div id="testimonials" className="section-spacing">
          <Testimonials />
        </div>
        <div id="offer" className="section-spacing">
          <OfferSection />
        </div>
        {mounted && !isMobile && (
          <div className="section-spacing">
            <GuideSection5 />
          </div>
        )}

        {mounted && (
          <div className="section-spacing">
            <MobileGuideSection />
          </div>
        )}
        <div id="faq" className="section-spacing">
          <FAQSection />
        </div>
        <div id="join" >


          <FinalCta />
        </div>

        {mounted && isMobile && showStickyCTA && <StickyMobileCTA />}
      </div>
    </div>
  );
}