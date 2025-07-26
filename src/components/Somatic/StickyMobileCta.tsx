'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-brand-bg border-t border-brand-secondary p-4 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="text-scene-desc-mobile text-brand-text-secondary font-body">7-Day Reset Challenge</div>
            <div className="text-highlight-mobile font-bold text-brand-text font-heading">₹999</div>
          </div>
          <Button
            size="lg"
            className="bg-brand-primary hover:bg-brand-accent text-white px-6 py-3 font-semibold rounded-full shadow-lg text-scene-desc-mobile font-body"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Join Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}