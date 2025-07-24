
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
        {/* Responsive Layout: Mobile = stacked, Desktop = 3-column */}
        <div className="w-full flex flex-col items-center md:grid md:grid-cols-3 md:gap-8 md:items-stretch">
          {/* Left column: first 3 text+desc */}
          <div className="hidden md:flex flex-col justify-between py-4">
            {scenes.slice(0, 3).map((scene, idx) => (
              <div
                key={scene.text}
                className={`mb-8 last:mb-0 transition-all duration-500 ${sceneIndex === idx ? 'opacity-100' : 'opacity-10'}`}
              >
                <h3 className="text-xl font-semibold mb-2">{scene.text}</h3>
                <p className="text-gray-500 text-base">{scene.description}</p>
              </div>
            ))}
          </div>
          {/* Center column: images */}
          <div className="flex flex-col items-center justify-center relative py-4">
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              {scenes.map((scene, idx) => (
                <Image
                  key={scene.image + idx}
                  src={scene.image}
                  alt={scene.text}
                  width={320}
                  height={320}
                  className={`absolute top-0 left-0 w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg transition-all duration-700 ${sceneIndex === idx ? ' z-20' : ' z-10'}`}
                />
              ))}
            </div>
            {/* Mobile: show only current text+desc below image */}
            <div className="md:hidden mt-8 w-full">
              <h3 className="text-2xl font-semibold mb-2 text-center">{currentScene.text}</h3>
              <p className="text-gray-500 text-lg text-center">{currentScene.description}</p>
            </div>
        </div>
          {/* Right column: last 3 text+desc */}
          <div className="hidden md:flex flex-col justify-between py-4">
            {scenes.slice(3, 6).map((scene, idx) => (
              <div
                key={scene.text}
                className={`mb-8 last:mb-0 transition-all duration-500 ${sceneIndex === idx + 3 ? 'opacity-100' : 'opacity-10'}`}
              >
                <h3 className="text-xl font-semibold mb-2">{scene.text}</h3>
                <p className="text-gray-500 text-base">{scene.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Progress dots for navigation (optional, desktop+mobile) */}
        <div className="flex justify-center gap-2 mt-8">
          {scenes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSceneIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${sceneIndex === idx ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to scene ${idx + 1}`}
            />
          ))}
        </div>
      </div>
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
  );
}
