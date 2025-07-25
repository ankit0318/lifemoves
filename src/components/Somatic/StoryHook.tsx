
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const scenes = [
  {
    image: '/pose1.png',
    text: 'Constant back pain from sitting all day',
    description: 'Your body aches even when you haven’t moved much.'
  },
  {
    image: '/pose2.png',
    text: 'Tired even after sleeping',
    description: 'Rest doesn’t feel like rest anymore.'
  },
  {
    image: '/pose3.png',
    text: 'Workouts that feel like punishment',
    description: 'Every session drains you instead of lifting you up.'
  },
  {
    image: '/pose4.png',
    text: 'Burnt out and always on edge',
    description: 'Overwhelmed by stress and anxiety that never seems to fully go away.'
  },
  {
    image: '/pose5.png',
    text: 'Tried yoga, gym, HIIT, even meditation—nothing sticks.',
    description: 'You’ve tried everything, but nothing feels sustainable.'
  },
  {
    image: '/pose5.png',
    text: 'Running on low battery all the time.',
    description: 'Drained and sluggish, even after a full night\'s rest.'
  },
];

export default function StoryHook() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const currentScene = scenes[sceneIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setSceneIndex((prev) => (prev + 1) % scenes.length);
    }, 1700); // Change scene every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background-100 text-text-800 font-body min-h-screen py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-text-900 leading-tight font-heading">
            Your body&apos;s been trying <br className="hidden md:block" /> to tell you things.
          </h1>
          <p className="text-xl text-text-500 mt-6 font-body">
            You&apos;ve just been... <span className="text-primary-600 font-semibold">busy.</span>
          </p>
        </div>
        {/* Responsive Layout: Mobile = stacked, Desktop = 3-column */}
        <div className="w-full flex flex-col items-center md:grid md:grid-cols-3 md:gap-12 md:items-stretch">
          {/* Left column: first 3 text+desc */}
          <div className="hidden md:flex flex-col justify-between py-8">
            {scenes.slice(0, 3).map((scene, idx) => (
              <div
                key={scene.text}
                className={`mb-12 last:mb-0 transition-all duration-500 ${sceneIndex === idx ? 'opacity-100' : 'opacity-30'}`}
              >
                <h3 className="text-xl font-semibold mb-3 text-text-900">{scene.text}</h3>
                <p className="text-text-500 text-base leading-relaxed">{scene.description}</p>
              </div>
            ))}
          </div>
          {/* Center column: images */}
          <div className="flex flex-col items-center justify-center relative py-8">
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              {scenes.map((scene, idx) => (
                <Image
                  key={scene.image + idx}
                  src={scene.image}
                  alt={scene.text}
                  width={384}
                  height={384}
                  className={`absolute top-0 left-0 w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-xl transition-all duration-700 ${sceneIndex === idx ? ' z-20' : ' z-10'}`}
                />
              ))}
            </div>
            {/* Mobile: show only current text+desc below image */}
            <div className="md:hidden mt-12 w-full max-w-md">
              <h3 className="text-2xl font-semibold mb-4 text-center text-text-900">{currentScene.text}</h3>
              <p className="text-text-500 text-lg text-center leading-relaxed">{currentScene.description}</p>
            </div>
        </div>
          {/* Right column: last 3 text+desc */}
          <div className="hidden md:flex flex-col justify-between py-8">
            {scenes.slice(3, 6).map((scene, idx) => (
              <div
                key={scene.text}
                className={`mb-12 last:mb-0 transition-all duration-500 ${sceneIndex === idx + 3 ? 'opacity-100' : 'opacity-30'}`}
              >
                <h3 className="text-xl font-semibold mb-3 text-text-900">{scene.text}</h3>
                <p className="text-text-500 text-base leading-relaxed">{scene.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Progress dots for navigation (optional, desktop+mobile) */}
        <div className="flex justify-center gap-3 mt-16">
          {scenes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSceneIndex(idx)}
              className={`w-4 h-4 rounded-full transition-colors duration-200 ${sceneIndex === idx ? 'bg-primary-600' : 'bg-text-300 hover:bg-text-400'}`}
              aria-label={`Go to scene ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
