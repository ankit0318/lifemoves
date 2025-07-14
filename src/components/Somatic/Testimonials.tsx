
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarti",
      role: "Graphic Designer",
      text: "This made my body feel soft and strong at the same time. And weirdly, I stopped yelling at my Wi-Fi.",
      rating: 5
    },
    {
      name: "Pranav",
      role: "Consultant",
      text: "10 minutes a day? Life. Changed.",
      rating: 5
    },
    {
      name: "Krutika",
      role: "Product Manager",
      text: "I laughed, I cried, I actually slept after Day 4.",
      rating: 5
    },
    {
      name: "Sanya",
      role: "Illustrator",
      text: "Perfect for people like me who hate routines. I looked forward to it.",
      rating: 5
    },
    {
      name: "Arjun",
      role: "Entrepreneur",
      text: "My lower back pain eased. And I didn't even move much.",
      rating: 5
    },
    {
      name: "Leela",
      role: "Therapist",
      text: "It gave me a way back to my body after burnout.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Real People Are Saying
          </h2>
          <p className="text-xl text-gray-600">
            Honest reviews from people just like you
          </p>
        </motion.div>

        <motion.div
          className="flex gap-6 pb-4 -mx-4 px-4 overflow-x-auto"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group flex-shrink-0 w-[80vw] md:w-[400px]"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6 flex-grow">
                    <Quote className="w-8 h-8 text-purple-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic text-lg relative z-10">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-full px-6 py-3 inline-flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-gray-800 font-medium">
              Join 1000+ people who've already transformed their daily routine
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
