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
    <section className="py-24 bg-gradient-to-b from-background-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-900 mb-8 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-600 font-body">
            Everything you need to know before joining
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-50 rounded-2xl shadow-xl overflow-hidden border border-text-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-text-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-text-900 font-heading">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-text-500" />
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
                    <div className="px-8 pb-6">
                      <p className="text-text-700 leading-relaxed text-lg font-body">
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