'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need experience?",
      answer: "None. Just a body and some curiosity. This challenge is designed for complete beginners and works with whatever mobility you have."
    },
    {
      question: "Is this therapy?",
      answer: "It's healing — not clinical. Rooted in somatic movement and awareness practices that help you reconnect with your body naturally."
    },
    {
      question: "When does it start?",
      answer: "Immediately. Day 1 drops right after signup. You can start whenever you're ready and go at your own pace."
    },
    {
      question: "How long do I have access?",
      answer: "Lifetime. Once you purchase, you can revisit the challenge anytime you need a reset."
    },
    {
      question: "Will I sweat?",
      answer: "You'll probably laugh more than you sweat. These are gentle, mindful movements focused on awareness rather than intensity."
    },
    {
      question: "What if I miss a day?",
      answer: "No guilt, no pressure. Pick up where you left off whenever you're ready. This is about self-compassion, not perfection."
    }
  ];

  return (
    <section className="bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-hero-mobile md:text-hero-desktop font-bold text-brand-text mb-6 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-subheading-mobile text-brand-text-secondary font-body">
            Everything you need to know before joining
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-secondary/10 transition-colors duration-200"
              >
                <h3 className="text-scene-heading-desktop font-semibold text-brand-text font-heading">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-brand-text-secondary" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-brand-text-secondary leading-relaxed text-scene-desc-mobile font-body">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}