
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';


const scenes = [
  {
    image: '/pose1.png',
    text: 'Constant back pain from sitting all day',
  },
  {
    image: '/pose2.png',
    text: 'Tired even after sleeping',
  },
  {
    image: '/pose3.png',
    text: 'Workouts that feel like punishment',
  },
  {
    image: '/pose4.png',
    text: 'Burnt out and always on edge',
  },
  {
    image: '/pose5.png',
    text: 'Tried yoga, gym, HIIT, even meditation—nothing sticks.',
  },
  {
    image: '/pose6.png',
    text: 'Running on low battery all the time.',
  },
];

export default function StoryHook() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const currentScene = scenes[sceneIndex];

  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setSceneIndex((prev) => (prev + 1) % scenes.length);
    }, 1700); // Change scene every 3 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const goToNext = () => {
    setSceneIndex((prev) => (prev + 1) % scenes.length);
  };

  const goToPrevious = () => {
    setSceneIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const goToScene = (index: number) => {
    setSceneIndex(index);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling]);

  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins] min-h-screen py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight font-poppins">
            Your body&apos;s been trying <br className="hidden md:block" /> to tell you things.
          </h1>
          <p className="text-xl text-gray-500 mt-4 font-[Poppins]">
            You&apos;ve just been... <span className="text-purple-600 font-semibold">busy.</span>
          </p>
        </div>
        
        {/* Image Viewer Container */}
        <div className="relative flex flex-col items-center w-full">
         

          {/* Image */}
          <Image
            src={currentScene.image}
            alt="Person stretching"
            width={384}
            height={384}
            className="mx-auto w-96 h-auto"
            style={{ objectFit: 'cover' }}
          />
          
          {/* Description */}
          <p
            className="mt-8 text-2xl md:text-3xl font-semibold rounded-3xl font-sans text-black text-center px-6 py-4"
            style={{
              letterSpacing: '0.01em',
              textShadow: '0 2px 8px rgba(80, 0, 80, 0.08)',
              maxWidth: '32rem',
              backdropFilter: 'blur(2px)',
              whiteSpace: 'pre-line',
            }}
          >
            {currentScene.text}
          </p>

          {/* Progress Dots and Navigation Buttons */}
          <div className="absolute top-full w-full max-w-md flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={goToPrevious}
                className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {scenes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToScene(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === sceneIndex 
                        ? 'bg-purple-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
           
          </div>
        </div>

        {/* Problems Card */}
        {/* <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 mb-6 last:mb-0`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${problem.bg}`}>
                  <problem.icon className={`w-7 h-7 ${problem.color}`} aria-hidden="true" />
                </div>
                <p className="text-lg text-gray-700 font-[Poppins]">{problem.text}</p>
              </div>
            ))}
          </div> */}
        {/* Solution Card */}
        {/* <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-[Poppins]">
              So what do you do when your body's clearly done, but you're not sure what will actually help?
            </h2>
            <a className="group flex items-center justify-between w-full bg-gray-100 hover:bg-gray-200 text-gray-800 p-4 rounded-xl mb-4 transition-colors cursor-pointer" tabIndex={0}>
              <span className="text-lg font-[Poppins]">You stop outsourcing your wellbeing.</span>
              <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-gray-800 transition-colors" />
            </a>
            <a className="group flex items-center justify-between w-full bg-gray-100 hover:bg-gray-200 text-gray-800 p-4 rounded-xl transition-colors cursor-pointer" tabIndex={0}>
              <span className="text-lg font-[Poppins]">You tune in.</span>
              <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-gray-800 transition-colors" />
            </a>
          </div> */}
      </div>
    </div>
  );
}
