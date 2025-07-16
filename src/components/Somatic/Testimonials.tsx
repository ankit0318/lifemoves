import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    text: "Soft AND strong. Also, I stopped yelling at my Wi-Fi.",
    name: "Aarti",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b589?w=100&h=100&fit=crop&crop=face"
  },
  {
    text: "I met my body again. 10 minutes is all it took.",
    name: "Rohan",
    role: "Editor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    text: "Laughed. Cried. Slept like a log.",
    name: "Krutika",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    text: "Better than therapy. And cheaper.",
    name: "Arjun",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    text: "Didn't sweat, but I felt lighter instantly.",
    name: "Leela",
    role: "Therapist",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
  },
  {
    text: "The most enjoyable 'reset' I've ever done.",
    name: "Sanya",
    role: "Illustrator",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F3F5F7] to-[#E5E7FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 gradient-text">
            What Real People Are Saying:
          </h2>
          <p className="text-xl text-gray-600">
            Honest reviews from people just like you
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="hidden md:flex rounded-full bg-white/50 hover:bg-white/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-6 overflow-hidden" style={{ width: `${visibleCards * 320}px` }}>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`w-80 rounded-3xl transition-all duration-700 flex-shrink-0 ${
                    index >= currentIndex && index < currentIndex + visibleCards
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform translate-x-10'
                  }`}
                  style={{
                    transform: `translateX(-${(currentIndex * 320) + (currentIndex * 24)}px)`
                  }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg font-inter text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold font-poppins text-[#5758A6]">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="hidden md:flex rounded-full bg-white/50 hover:bg-white/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white/50 hover:bg-white/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white/50 hover:bg-white/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
          </div>
          <p className="text-gray-800 font-medium">
              Join 1000+ people who've already transformed their daily routine
            </p>
        </div>
      </div>
    </section>
  );
}