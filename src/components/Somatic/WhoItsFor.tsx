
'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const WhoItsFor = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const cards = [
    {
      id: 1,
      title: "UNDERSTAND",
      subtitle: "MY BODY",
      description: "I’m ready to",
      image: "/I am ready to understand my body.png"
    },
    {
      id: 2,
      title: "SLEEP",
      subtitle: "DEEPER & WAKE UP ENERGIZED",
      description: "I want to",
      image: "/SLEEP DEEPER & WAKE UP ENERGIZED1.png"
    },
    {
      id: 3,
      title: "FEEL",
      subtitle: "MY EMOTIONS",
      description: "I want to",
      image: "/Feel my emotions.png"
    },
    {
      id: 4,
      title: "MOVE",
      subtitle: "WITHOUT PAIN OR PRESSURE",
      description: "I want to",
      image: "/MOVE WITHOUT PAIN OR PRESSURE.png"
    },
    {
      id: 5,
      title: "RESET",
      subtitle: "MY NERVOUS SYSTEM",
      description: "I want to",
      image: "/Reset Nervous System.png"
    },
    {
      id: 6,
      title: "FEEL",
      subtitle: "GROUNDED & STRONG IN MY BODY",
      description: "I want to",
      image: "/FEEL GROUNDED & STRONG IN MY BODY.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);
    
    if (absIndex === 0) {
      // Main card
      return {
        transform: 'translateX(0%) scale(1)',
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 30
      };
    } else if (absIndex === 1) {
      // Adjacent cards
      return {
        transform: `translateX(${diff > 0 ? '80%' : '-80%'}) scale(0.85)`,
        opacity: 0.6,
        filter: 'blur(2px)',
        zIndex: 20
      };
    } else if (absIndex === 2) {
      // Second level cards
      return {
        transform: `translateX(${diff > 0 ? '140%' : '-140%'}) scale(0.7)`,
        opacity: 0.3,
        filter: 'blur(4px)',
        zIndex: 10
      };
    } else {
      // Hidden cards
      return {
        transform: `translateX(${diff > 0 ? '200%' : '-200%'}) scale(0.6)`,
        opacity: 0,
        filter: 'blur(6px)',
        zIndex: 0
      };
    }
  };

  return (
    <div className="relative w-full  mx-auto  px-4 bg-brand-bg">
      <h2 className="text-hero-mobile md:text-hero-desktop font-bold text-center mb-10 text-brand-text font-heading">This is for you if…</h2>
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute w-72 h-96 transition-all duration-700 ease-out cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-scene-desc-mobile font-medium opacity-90 mb-2 font-body">{card.description}</p>
                  <h2 className="text-scene-heading-mobile font-bold leading-tight font-heading">
                    {card.title}
                  </h2>
                  <h3 className="text-scene-desc-desktop font-bold text-brand-primary font-body">
                    {card.subtitle}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button Group: Previous, Select Path, Next */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-brand-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-secondary/30 transition-colors duration-200 z-40"
        >
          <ChevronLeft className="w-6 h-6 text-brand-text" />
        </button>
        <button className="bg-brand-primary hover:bg-brand-accent text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2">
          <span className="text-scene-desc-desktop font-body">Select path</span>
          <ChevronRight className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-brand-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-secondary/30 transition-colors duration-200 z-40"
        >
          <ChevronRight className="w-6 h-6 text-brand-text" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-brand-primary' : 'bg-brand-text-secondary'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WhoItsFor;
