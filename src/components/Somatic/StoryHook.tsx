
import React from 'react';
import {
  Coffee,
  Moon,
  Dumbbell,
  Brain,
  Smile,
  ArrowRight,
} from 'lucide-react';

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
    text: 'Yoga is for your cousin… not you',
    bg: 'bg-green-100',
    color: 'text-green-500',
  },
];

export default function StoryHook() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800 font-sans">
      <main className="py-16 px-4 md:px-6 flex-1">
        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight font-[Poppins]">
            Your body's been trying to tell you things.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 font-medium font-[Poppins]">
            You've just been... <span className="font-semibold italic text-purple-700">busy.</span>
          </p>
        </header>
        <div className="max-w-3xl mx-auto space-y-5">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${problem.bg} p-3 rounded-full`}>
                <problem.icon className={`w-7 h-7 ${problem.color}`} aria-hidden="true" />
              </div>
              <p className="text-gray-700 flex-1 text-base md:text-lg font-[Poppins] font-medium tracking-normal">
                {problem.text}
              </p>
            </div>
          ))}

          {/* Solution Card Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-auto mt-10">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-[Poppins]">
                So what do you do when your body's clearly done, but you're not sure what will actually help?
              </h2>
            </div>
            <div className="space-y-4">
              <a className="flex items-center p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300 group cursor-pointer" tabIndex={0}>
                <ArrowRight className="w-6 h-6 text-indigo-500 mr-4 group-hover:translate-x-1 transition-transform duration-200" />
                <span className="text-gray-700 font-medium font-[Poppins]">You stop outsourcing your wellbeing.</span>
              </a>
              <a className="flex items-center p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300 group cursor-pointer" tabIndex={0}>
                <ArrowRight className="w-6 h-6 text-indigo-500 mr-4 group-hover:translate-x-1 transition-transform duration-200" />
                <span className="text-gray-700 font-medium font-[Poppins]">You tune in.</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
