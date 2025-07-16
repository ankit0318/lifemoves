
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WhoItsFor = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const cards = [
    {
      id: 1,
      title: "CAREER",
      subtitle: "GROWTH",
      description: "I'm seeking",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
    },
    {
      id: 2,
      title: "GROW MY",
      subtitle: "BUSINESS",
      description: "I'm looking to",
      image: "https://images.unsplash.com/photo-1494790108755-2616c79e4fb9?w=500&h=600&fit=crop"
    },
    {
      id: 3,
      title: "MASTER",
      subtitle: "MY BODY",
      description: "I'm looking to",
      image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&h=600&fit=crop"
    },
    {
      id: 4,
      title: "TRANSITION",
      subtitle: "IN LIFE",
      description: "I'm going through a",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop"
    },
    {
      id: 5,
      title: "LOVE",
      subtitle: "CONNECTION",
      description: "I'm looking for",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop"
    },
    {
      id: 6,
      title: "SPIRITUAL",
      subtitle: "SEEKING",
      description: "I am",
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&h=600&fit=crop"
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
    <div className="relative w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">This is for you if…</h2>
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute w-72 h-80 transition-all duration-700 ease-out cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium opacity-90 mb-2">{card.description}</p>
                  <h2 className="text-3xl font-bold leading-tight">
                    {card.title}
                  </h2>
                  <h3 className="text-2xl font-bold text-purple-300">
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
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 z-40"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2">
          <span>Select path</span>
          <ChevronRight className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 z-40"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WhoItsFor;
