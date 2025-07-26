'use client';

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
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
  const target = useMemo(() => {
    if (targetDate) return new Date(targetDate);
    const d = new Date();
    d.setDate(d.getDate() + 2);
    d.setHours(d.getHours() + 10); // mimic original default
    d.setMinutes(d.getMinutes() + 45);
    d.setSeconds(d.getSeconds() + 33);
    return d;
  }, [targetDate]);

  const [time, setTime] = useState(() => getTimeRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="bg-brand-bg flex items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full px-4 py-8 md:p-8">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-hero-mobile md:text-hero-desktop font-bold text-brand-text mb-4 md:mb-6 font-heading">
            Your body is the best guide you never listened to.
          </h1>
          <p className="text-subheading-mobile md:text-subheading-desktop text-brand-text-secondary font-body">
            Let&apos;s change that — in just 10 minutes a day.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              alt="Illustration of a person&apos;s head with a spiral inside and a plant growing beside it."
              className="w-full max-w-xs md:max-w-md h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ7L0qjIJChoDEkIblwjRCCUe36cVGay3mqdSyqkF3i_fTDAATh0I8RswDRjDzumXK5BGzAtEJj-FomAW3TNMLD9ZXk6LuOi3LDOaDH8wtHBjmkjnkpbLM_h54iaFYEohaPFjZpsv3um8aYuQZWhn_gSlIu5lpJdQb-2MD3hmg9Efks4MWv0oEiRmBcNJJl5QR2MSA3nD0_mPcT3jWQvXUmj2a0zxHLNNQics-BNfoAQFQRJkbd-hUOn10l31Ho4IllhHYKKE9upc"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-text mb-1 md:mb-2 font-heading">
              Join The 7-Day Reset
            </h2>
            <p className="text-brand-text-secondary mb-4 md:mb-6 text-scene-desc-mobile md:text-scene-desc-desktop font-body">
              Join 1000+ people who&apos;ve already started their reset.
            </p>
            <div className="space-y-2 md:space-y-3 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col text-brand-text mb-4 md:mb-6">
              <div className="flex items-center">
                <DirectionsWalkIcon className="text-brand-primary mr-2 md:mr-3" fontSize="medium" />
                <p className="text-scene-desc-mobile md:text-scene-desc-desktop font-body">7 days of guided somatic movement</p>
              </div>
              <div className="flex items-center">
                <TimerIcon className="text-brand-primary mr-2 md:mr-3" fontSize="medium" />
                <p className="text-scene-desc-mobile md:text-scene-desc-desktop font-body">Just 10 minutes daily</p>
              </div>
              <div className="flex items-center">
                <AllInclusiveIcon className="text-brand-primary mr-2 md:mr-3" fontSize="medium" />
                <p className="text-scene-desc-mobile md:text-scene-desc-desktop font-body">Lifetime access</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2 md:gap-4 mb-4 md:mb-6 justify-center md:justify-start">
              <span className="text-highlight-mobile md:text-highlight-desktop font-bold text-brand-text font-heading">₹999</span>
              <span className="text-subheading-mobile md:text-subheading-desktop text-brand-text-secondary line-through font-body">₹2499</span>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-2 md:gap-4 mb-6 md:mb-8">
              <div className="text-center">
                <span className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-primary font-heading">{time.days.toString().padStart(2, '0')}</span>
                <p className="text-scene-desc-mobile text-brand-text-secondary font-body">Days</p>
              </div>
              <span className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-primary font-heading">:</span>
              <div className="text-center">
                <span className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-primary font-heading">{time.hours.toString().padStart(2, '0')}</span>
                <p className="text-scene-desc-mobile text-brand-text-secondary font-body">Hours</p>
              </div>
              <span className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-primary font-heading">:</span>
              <div className="text-center">
                <span className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-primary font-heading">{time.minutes.toString().padStart(2, '0')}</span>
                <p className="text-scene-desc-mobile text-brand-text-secondary font-body">Minutes</p>
              </div>
              <span className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-primary font-heading">:</span>
              <div className="text-center">
                <span className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-primary font-heading">{time.seconds.toString().padStart(2, '0')}</span>
                <p className="text-scene-desc-mobile text-brand-text-secondary font-body">Seconds</p>
              </div>
            </div>
            <button className="bg-brand-primary hover:bg-brand-accent text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg flex items-center justify-center shadow-md transition-colors text-scene-desc-mobile md:text-scene-desc-desktop w-full md:w-auto font-body">
              <RocketLaunchIcon className="mr-1 md:mr-2" fontSize="medium" />
              Start Your Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidedSection4;
