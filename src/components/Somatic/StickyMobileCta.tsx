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
      <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="text-sm text-gray-600">7-Day Reset Challenge</div>
            <div className="text-lg font-bold text-gray-900">₹999</div>
          </div>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-semibold rounded-full shadow-lg"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Join Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}