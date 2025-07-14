import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Play, 
//   Clock, 
//   CheckCircle, 
//   Users, 
//   Star, 
//   Calendar,
//   Heart,
//   Zap,
//   Shield,
//   ArrowRight,
//   ChevronDown,
//   ChevronUp,
//   Timer,
//   Sparkles,
//   Target,
//   Coffee,
//   Moon,
//   Smile
// } from 'lucide-react';

import HeroSection from '../components/Somatic/HeroSection';
import StoryHook from '../components/Somatic/StoryHook';
import ChallengeOverview from '../components/Somatic/ChallangeOverview';
import WhoItsFor from '../components/Somatic/WhoItsFor';
import Testimonials from '../components/Somatic/Testimonials';
import OfferSection from '../components/Somatic/OfferSection';
import GuideSection from '../components/Somatic/GuideSection';
import FAQSection from '../components/Somatic/FAQSection';
import FinalCTA from '../components/Somatic/FinalCta';
import StickyMobileCTA from '../components/Somatic/StickyMobileCta';

export default function SomaticChallenge() {
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(prev => ({
        ...prev,
        [section.dataset.section]: isVisible
      }));
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    
    return () => window.removeEventListener('scroll', handleScroll);
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