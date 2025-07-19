
import React, { useState, useEffect } from 'react';
import {
  Coffee,
  Moon,
  Dumbbell,
  Brain,
  Smile,
  ArrowRight,
} from 'lucide-react';
import { Poppins } from 'next/font/google';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
//   variable: '--font-poppins',
// });

const problems = [
  {
    icon: Coffee,
    text: 'Sitting too long but stretching feels like solving equations',
    bg: 'bg-orange-100',
    color: 'text-orange-500',
  },
  {
    icon: Moon,
    text: 'Tired even after sleeping',
    bg: 'bg-blue-100',
    color: 'text-blue-500',
  },
  {
    icon: Dumbbell,
    text: 'Workouts that feel like punishment',
    bg: 'bg-red-100',
    color: 'text-red-500',
  },
  {
    icon: Brain,
    text: 'Meditation makes you itch',
    bg: 'bg-purple-100',
    color: 'text-purple-500',
  },
  {
    icon: Smile,
    text: 'Yoga is for your cousin... not you',
    bg: 'bg-green-100',
    color: 'text-green-500',
  },
];

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
            Your body's been trying <br className="hidden md:block" /> to tell you things.
          </h1>
          <p className="text-xl text-gray-500 mt-4 font-[Poppins]">
            You've just been... <span className="text-purple-600 font-semibold">busy.</span>
          </p>
        </div>
        <div className="flex flex-col items-center w-full">
          <img
            src={currentScene.image}
            alt="Person stretching"
            className="mx-auto w-96 h-auto transition-opacity duration-500 ease-in-out"
            style={{ objectFit: 'cover' }}
          />
          <p
            className="mt-8 text-2xl md:text-3xl font-semibold rounded-3xl font-sans text-black text-center px-6 py-4 transition-opacity duration-500 ease-in-out"
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
