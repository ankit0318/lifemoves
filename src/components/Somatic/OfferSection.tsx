'use client';

import React, { useEffect, useState } from "react";
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import TimerIcon from '@mui/icons-material/Timer';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

interface GuidedSection4Props {
  targetDate?: string | Date;
}

function getTimeRemaining(target: Date) {
  const total = target.getTime() - new Date().getTime();
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
  return { total, days, hours, minutes, seconds };
}

const GuidedSection4: React.FC<GuidedSection4Props> = ({ targetDate }) => {
  // Default: 2 days from now
  const defaultTarget = React.useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    d.setHours(d.getHours() + 10); // mimic original default
    d.setMinutes(d.getMinutes() + 45);
    d.setSeconds(d.getSeconds() + 33);
    return d;
  }, []);
  const target = targetDate ? new Date(targetDate) : defaultTarget;

  const [time, setTime] = useState(() => getTimeRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-secondary-50 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full px-6 py-12 md:p-12">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-800 mb-6 md:mb-8 font-heading">
            Your body is the best guide you never listened to.
          </h1>
          <p className="text-xl md:text-2xl text-secondary-700 font-body">
            Let's change that — in just 10 minutes a day.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="md:w-1/2 flex justify-center mb-12 md:mb-0">
            <img
              alt="Illustration of a person's head with a spiral inside and a plant growing beside it."
              className="w-full max-w-sm md:max-w-lg h-auto rounded-2xl shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ7L0qjIJChoDEkIblwjRCCUe36cVGay3mqdSyqkF3i_fTDAATh0I8RswDRjDzumXK5BGzAtEJj-FomAW3TNMLD9ZXk6LuOi3LDOaDH8wtHBjmkjnkpbLM_h54iaFYEohaPFjZpsv3um8aYuQZWhn_gSlIu5lpJdQb-2MD3hmg9Efks4MWv0oEiRmBcNJJl5QR2MSA3nD0_mPcT3jWQvXUmj2a0zxHLNNQics-BNfoAQFQRJkbd-hUOn10l31Ho4IllhHYKKE9upc"
            />
          </div>
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-2 md:mb-4 font-heading">
              Join The 7-Day Reset
            </h2>
            <p className="text-secondary-700 mb-6 md:mb-8 text-lg md:text-xl font-body">
              Join 1000+ people who've already started their reset.
            </p>
            <div className="space-y-3 md:space-y-4 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col text-secondary-800 mb-6 md:mb-8">
              <div className="flex items-center justify-center md:justify-start">
                <DirectionsWalkIcon className="text-accent-600 mr-3 md:mr-4" fontSize="large" />
                <p className="text-base md:text-lg">7 days of guided somatic movement</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <TimerIcon className="text-accent-600 mr-3 md:mr-4" fontSize="large" />
                <p className="text-base md:text-lg">Just 10 minutes daily</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <AllInclusiveIcon className="text-accent-600 mr-3 md:mr-4" fontSize="large" />
                <p className="text-base md:text-lg">Lifetime access</p>
              </div>
            </div>
            <div className="flex items-baseline gap-3 md:gap-6 mb-6 md:mb-8 justify-center md:justify-start">
              <span className="text-4xl md:text-6xl font-bold text-secondary-800">₹999</span>
              <span className="text-xl md:text-3xl text-text-500 line-through">₹2499</span>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-3 md:gap-6 mb-8 md:mb-10">
              <div className="text-center">
                <span className="text-3xl md:text-5xl font-bold text-accent-600">{time.days.toString().padStart(2, '0')}</span>
                <p className="text-sm md:text-base text-secondary-700 font-medium">Days</p>
              </div>
              <span className="text-3xl md:text-5xl font-bold text-accent-600">:</span>
              <div className="text-center">
                <span className="text-3xl md:text-5xl font-bold text-accent-600">{time.hours.toString().padStart(2, '0')}</span>
                <p className="text-sm md:text-base text-secondary-700 font-medium">Hours</p>
              </div>
              <span className="text-3xl md:text-5xl font-bold text-accent-600">:</span>
              <div className="text-center">
                <span className="text-3xl md:text-5xl font-bold text-accent-600">{time.minutes.toString().padStart(2, '0')}</span>
                <p className="text-sm md:text-base text-secondary-700 font-medium">Minutes</p>
              </div>
              <span className="text-3xl md:text-5xl font-bold text-accent-600">:</span>
              <div className="text-center">
                <span className="text-3xl md:text-5xl font-bold text-accent-600">{time.seconds.toString().padStart(2, '0')}</span>
                <p className="text-sm md:text-base text-secondary-700 font-medium">Seconds</p>
              </div>
            </div>
            <button className="bg-accent-600 hover:bg-accent-700 text-background-50 font-bold py-4 md:py-6 px-8 md:px-12 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg md:text-xl w-full md:w-auto">
              <RocketLaunchIcon className="mr-2 md:mr-3" fontSize="large" />
              Start Your Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidedSection4;
