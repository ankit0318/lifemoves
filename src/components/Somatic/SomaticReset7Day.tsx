import React from 'react';

const dayData = [
  {
    day: 1,
    color: 'bg-blue-100 text-blue-800',
    icon: (
      <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v13h3v7l7-12h-4l4-8z" /></svg>
    ),
    title: 'Breath Reset',
    desc: 'Wake up your nervous system from within',
  },
  {
    day: 2,
    color: 'bg-green-100 text-green-800',
    icon: (
      <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.41l-3.3-3.29 1.41-1.42L10 12.17l5.88-5.88 1.41 1.41z" /></svg>
    ),
    title: 'Shoulder Detox',
    desc: 'Undo 100 Zoom calls',
  },
  {
    day: 3,
    color: 'bg-purple-100 text-purple-800',
    icon: (
      <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z" /></svg>
    ),
    title: 'Spine Awakening',
    desc: 'From slouch to spring',
  },
  {
    day: 4,
    color: 'bg-pink-100 text-pink-800',
    icon: (
      <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.1 8.64l-.1.1-.11-.1C10.14 6.6 7.1 7.24 7.1 9.91c0 2.54 3.4 4.73 4.9 5.88 1.5-1.15 4.9-3.34 4.9-5.88 0-2.67-3.04-3.31-4.8-1.27zM12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
    ),
    title: 'Emotional Unwinding',
    desc: 'Release the tight chest energy',
  },
  {
    day: 5,
    color: 'bg-yellow-100 text-yellow-800',
    icon: (
      <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.21 0-4 1.79-4 4v2c0 2.21 1.79 4 4 4s4-1.79 4-4v-2c0-2.21-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
    ),
    title: 'Jaw & Neck Release',
    desc: 'Let go of unspoken words',
  },
  {
    day: 6,
    color: 'bg-indigo-100 text-indigo-800',
    icon: (
      <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7.305 4.5 3.135 7.36 1 12c2.135 4.64 6.305 7.5 11 7.5s8.865-2.86 11-7.5c-2.135-4.64-6.305-7.5-11-7.5zm0 13c-3.59 0-6.71-2.13-8.44-5.5C5.29 8.13 8.41 6 12 6s6.71 2.13 8.44 5.5C18.71 15.37 15.59 17.5 12 17.5zm0-10c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 8.5 12 8.5s2.5 1.12 2.5 2.5S13.38 14.5 12 14.5z" /></svg>
    ),
    title: 'Visual System Reset',
    desc: 'Relax your eyes, calm your mind',
  },
  {
    day: 7,
    color: 'bg-red-100 text-red-800',
    icon: (
      <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22l14-4-4-14-10 10zm16.71-2.29c.39.39 1.02.39 1.41 0l2.29-2.29c.39-.39.39-1.02 0-1.41l-2.29-2.29c-.39-.39-1.02-.39-1.41 0l-2.29 2.29c-.39.39-.39 1.02 0 1.41l2.29 2.29z" /></svg>
    ),
    title: 'Full Body Integration',
    desc: 'Bringing it all together',
  },
];

const SomaticReset7Day: React.FC = () => {
  return (
    <section className="hidden xl:block relative bg-white py-10 lg:py-16 w-full overflow-hidden">
      {/* Centered Text Block */}
      <div className="absolute inset-0 -top-8 flex flex-col items-center justify-center z-20 pointer-events-none">
        <div className="inline-block bg-purple-100 text-purple-700 font-medium py-1.5 px-5 rounded-lg text-center text-base md:text-lg shadow-md">
          Just 10 minutes a day.<br />No equipment. No fluff.
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full" style={{ height: '600px' }}>
        <main className="relative w-full h-full">
          {/* Title and Subtitle */}
          <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10 mb-8" style={{ width: '60%' }}>
            <header className="relative">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight text-center">The 7-Day Somatic <br/>Reset</h1>
            </header>
          
          </div>
          {/* Cards Layout (absolute positioning for desktop) */}
          {/* Left column: Day 1, 3, 5 */}
          <div className="absolute" style={{ left: '8%', top: '12%' }}>
            <div className="bg-white p-4 rounded-lg shadow-2xl w-[190px] max-w-full">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1.5">
                {dayData[0].icon} Day 1
              </span>
              <h3 className="text-base font-semibold text-gray-900">{dayData[0].title}</h3>
              <p className="mt-0.5 text-gray-600 text-xs">{dayData[0].desc}</p>
            </div>
          </div>
          <div className="absolute" style={{ left: '23%', top: '38%' }}>
            <div className="bg-white p-4 rounded-lg shadow-2xl w-[190px] max-w-full">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-1.5">
                {dayData[2].icon} Day 3
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{dayData[2].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{dayData[2].desc}</p>
            </div>
          </div>
          <div className="absolute" style={{ left: '3%', top: '62%' }}>
            <div className="bg-white p-4 rounded-lg shadow-2xl w-[216px] max-w-full">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-1.5">
                {dayData[4].icon} Day 5
              </span>
              <h3 className="text-base font-semibold text-gray-900">{dayData[4].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{dayData[4].desc}</p>
            </div>
          </div>
          {/* Right column: Day 2, 4, 6 */}
          <div className="absolute" style={{ right: '10%', top: '14%' }}>
            <div className="bg-white p-4 rounded-lg shadow-2xl w-[190px] max-w-full">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1.5">
                {dayData[1].icon} Day 2
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{dayData[1].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{dayData[1].desc}</p>
            </div>
          </div>
          <div className="absolute" style={{ right: '20%', top: '38%' }}>
            <div className="bg-white p-4 rounded-lg shadow-2xl w-[190px] max-w-full">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mb-1.5">
                {dayData[3].icon} Day 4
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{dayData[3].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{dayData[3].desc}</p>
            </div>
          </div>
          <div className="absolute" style={{ right: '3%', top: '66%' }}>
            <div className="bg-white p-4 rounded-lg shadow-2xl w-[216px] max-w-full">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-1.5">
                {dayData[5].icon} Day 6
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{dayData[5].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{dayData[5].desc}</p>
            </div>
          </div>
          {/* Centered Day 7 */}
          <div className="absolute left-1/2" style={{ top: '68%', transform: 'translateX(-50%)' }}>
            <div className="bg-white p-4 rounded-lg shadow-2xl w-[190px] max-w-full">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-1.5">
                {dayData[6].icon} Day 7
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{dayData[6].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{dayData[6].desc}</p>
            </div>
          </div>
          
        </main>
        {/* Decorative Arrows (responsive for xl+) */}
        {/* Arrow 1: Down and curved from Day 1 to Day 3 area */}
        <svg className="hidden xl:block absolute left-[24%] top-[23%] w-[6vw] h-[5vw] min-w-[60px] min-h-[48px] max-w-[90px] max-h-[72px]" viewBox="0 0 67 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0V2ZM59.7071 73.7071C59.3166 74.0976 58.6834 74.0976 58.2929 73.7071L51.9289 67.3431C51.5384 66.9526 51.5384 66.3195 51.9289 65.9289C52.3195 65.5384 52.9526 65.5384 53.3431 65.9289L59 71.5858L64.6569 65.9289C65.0474 65.5384 65.6805 65.5384 66.0711 65.9289C66.4616 66.3195 66.4616 66.9526 66.0711 67.3431L59.7071 73.7071ZM1 1V0H6.25V1V2H1V1ZM16.75 1V0H22V1V2H16.75V1ZM22 1V0C23.2565 0 24.4991 0.061022 25.7249 0.180316L25.628 1.17561L25.5312 2.17091C24.3697 2.05787 23.1917 2 22 2V1ZM32.7442 2.58409L33.0341 1.62705C35.4379 2.35533 37.7409 3.31529 39.9169 4.48082L39.4448 5.36234L38.9726 6.24385C36.9114 5.13983 34.7304 4.23076 32.4542 3.54113L32.7442 2.58409ZM45.4729 9.39752L46.1077 8.62486C48.0305 10.2046 49.7954 11.9695 51.3751 13.8923L50.6025 14.5271L49.8298 15.1619C48.3327 13.3398 46.6602 11.6673 44.8381 10.1702L45.4729 9.39752ZM54.6377 20.5552L55.5192 20.0831C56.6847 22.2591 57.6447 24.5621 58.3729 26.9659L57.4159 27.2558L56.4589 27.5458C55.7692 25.2696 54.8602 23.0886 53.7561 21.0274L54.6377 20.5552ZM58.8244 34.372L59.8197 34.2751C59.939 35.5009 60 36.7435 60 38H59H58C58 36.8083 57.9421 35.6303 57.8291 34.4688L58.8244 34.372ZM59 38H60V42.375H59H58V38H59ZM59 51.125H60V59.875H59H58V51.125H59ZM59 68.625H60V73H59H58V68.625H59Z" fill="#8F47C4"/>
        </svg>
        {/* Arrow 2: From Day 5 to Day 3 */}
        <svg className="hidden xl:block absolute left-[20%] top-[60%] w-[6vw] h-[5vw] min-w-[60px] min-h-[48px] max-w-[90px] max-h-[72px]" viewBox="0 0 67 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 72C0.447715 72 0 72.4477 0 73C0 73.5523 0.447715 74 1 74V72ZM59.7071 0.292893C59.3166 -0.0976311 58.6834 -0.0976311 58.2929 0.292893L51.9289 6.65685C51.5384 7.04738 51.5384 7.68054 51.9289 8.07107C52.3195 8.46159 52.9526 8.46159 53.3431 8.07107L59 2.41421L64.6569 8.07107C65.0474 8.46159 65.6805 8.46159 66.0711 8.07107C66.4616 7.68054 66.4616 7.04738 66.0711 6.65685L59.7071 0.292893ZM1 73V74H6.25V73V72H1V73ZM16.75 73V74H22V73V72H16.75V73ZM22 73V74C23.2565 74 24.4991 73.939 25.7249 73.8197L25.628 72.8244L25.5312 71.8291C24.3697 71.9421 23.1917 72 22 72V73ZM32.7442 71.4159L33.0341 72.373C35.4379 71.6447 37.7409 70.6847 39.9169 69.5192L39.4448 68.6377L38.9726 67.7561C36.9114 68.8602 34.7304 69.7692 32.4542 70.4589L32.7442 71.4159ZM45.4729 64.6025L46.1077 65.3751C48.0305 63.7954 49.7954 62.0305 51.3751 60.1077L50.6025 59.4729L49.8298 58.8381C48.3327 60.6602 46.6602 62.3327 44.8381 63.8298L45.4729 64.6025ZM54.6377 53.4448L55.5192 53.9169C56.6847 51.7409 57.6447 49.4379 58.3729 47.0341L57.4159 46.7442L56.4589 46.4542C55.7692 48.7304 54.8602 50.9114 53.7561 52.9726L54.6377 53.4448ZM58.8244 39.628L59.8197 39.7249C59.939 38.4991 60 37.2565 60 36H59H58C58 37.1917 57.9421 38.3697 57.8291 39.5312L58.8244 39.628ZM59 36H60V31.625H59H58V36H59ZM59 22.875H60V14.125H59H58V22.875H59ZM59 5.375H60V1H59H58V5.375H59Z" fill="#8F47C4"/>
        </svg>
        {/* Arrow 3: From Day 4 to Day 6 */}
        <svg className="hidden xl:block absolute right-[10%] top-[65%] w-[6vw] h-[5vw] min-w-[60px] min-h-[48px] max-w-[90px] max-h-[72px]" viewBox="0 0 67 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M66 72C66.5523 72 67 72.4477 67 73C67 73.5523 66.5523 74 66 74V72ZM7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.0711 6.65685C15.4616 7.04738 15.4616 7.68054 15.0711 8.07107C14.6805 8.46159 14.0474 8.46159 13.6569 8.07107L8 2.41421L2.34315 8.07107C1.95262 8.46159 1.31946 8.46159 0.928932 8.07107C0.538408 7.68054 0.538408 7.04738 0.928932 6.65685L7.29289 0.292893ZM66 73V74H60.75V73V72H66V73ZM50.25 73V74H45V73V72H50.25V73ZM45 73V74C43.7435 74 42.5009 73.939 41.2751 73.8197L41.372 72.8244L41.4688 71.8291C42.6303 71.9421 43.8083 72 45 72V73ZM34.2558 71.4159L33.9659 72.373C31.5621 71.6447 29.2591 70.6847 27.0831 69.5192L27.5552 68.6377L28.0274 67.7561C30.0886 68.8602 32.2696 69.7692 34.5458 70.4589L34.2558 71.4159ZM21.5271 64.6025L20.8923 65.3751C18.9695 63.7954 17.2046 62.0305 15.6249 60.1077L16.3975 59.4729L17.1702 58.8381C18.6673 60.6602 20.3398 62.3327 22.1619 63.8298L21.5271 64.6025ZM12.3623 53.4448L11.4808 53.9169C10.3153 51.7409 9.35533 49.4379 8.62705 47.0341L9.58409 46.7442L10.5411 46.4542C11.2308 48.7304 12.1398 50.9114 13.2439 52.9726L12.3623 53.4448ZM8.17561 39.628L7.18032 39.7249C7.06102 38.4991 7 37.2565 7 36H8H9C9 37.1917 9.05787 38.3697 9.17091 39.5312L8.17561 39.628ZM8 36H7V31.625H8H9V36H8ZM8 22.875H7V14.125H8H9V22.875H8ZM8 5.375H7V1H8H9V5.375H8Z" fill="#8F47C4"/>
        </svg>
        {/* Arrow 4: From Day 2 to Day 4 */}
        <svg className="hidden xl:block absolute right-[18%] top-[20%] w-[6vw] h-[5vw] min-w-[60px] min-h-[48px] max-w-[90px] max-h-[72px]" viewBox="0 0 67 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M66 2C66.5523 2 67 1.55228 67 1C67 0.447715 66.5523 0 66 0V2ZM7.29289 73.7071C7.68342 74.0976 8.31658 74.0976 8.70711 73.7071L15.0711 67.3431C15.4616 66.9526 15.4616 66.3195 15.0711 65.9289C14.6805 65.5384 14.0474 65.5384 13.6569 65.9289L8 71.5858L2.34315 65.9289C1.95262 65.5384 1.31946 65.5384 0.928932 65.9289C0.538408 66.3195 0.538408 66.9526 0.928932 67.3431L7.29289 73.7071ZM66 1V0H60.75V1V2H66V1ZM50.25 1V0H45V1V2H50.25V1ZM45 1V0C43.7435 0 42.5009 0.061022 41.2751 0.180316L41.372 1.17561L41.4688 2.17091C42.6303 2.05787 43.8083 2 45 2V1ZM34.2558 2.58409L33.9659 1.62705C31.5621 2.35533 29.2591 3.31529 27.0831 4.48082L27.5552 5.36234L28.0274 6.24385C30.0886 5.13983 32.2696 4.23076 34.5458 3.54113L34.2558 2.58409ZM21.5271 9.39752L20.8923 8.62486C18.9695 10.2046 17.2046 11.9695 15.6249 13.8923L16.3975 14.5271L17.1702 15.1619C18.6673 13.3398 20.3398 11.6673 22.1619 10.1702L21.5271 9.39752ZM12.3623 20.5552L11.4808 20.0831C10.3153 22.2591 9.35533 24.5621 8.62705 26.9659L9.58409 27.2558L10.5411 27.5458C11.2308 25.2696 12.1398 23.0886 13.2439 21.0274L12.3623 20.5552ZM8.17561 34.372L7.18032 34.2751C7.06102 35.5009 7 36.7435 7 38H8H9C9 36.8083 9.05787 35.6303 9.17091 34.4688L8.17561 34.372ZM8 38H7V42.375H8H9V38H8ZM8 51.125H7V59.875H8H9V51.125H8ZM8 68.625H7V73H8H9V68.625H8Z" fill="#8F47C4"/>
        </svg>
        {/* Center Connecting Lines */}
        <svg className="hidden xl:block absolute left-1/2 top-[24%] -translate-x-1/2 w-[2vw] h-[7vw] min-w-[16px] min-h-[60px] max-w-[32px] max-h-[120px]" viewBox="0 0 16 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.05345 81.2126C7.44762 81.5994 8.08075 81.5935 8.4676 81.1994L14.7717 74.7761C15.1585 74.3819 15.1526 73.7488 14.7584 73.3619C14.3643 72.9751 13.7311 72.981 13.3443 73.3752L7.74066 79.0847L2.03108 73.4811C1.63691 73.0943 1.00378 73.1002 0.616927 73.4944C0.230078 73.8885 0.236007 74.5217 0.630172 74.9085L7.05345 81.2126ZM7 0L6.00004 0.00936501L6.75395 80.5083L7.75391 80.4989L8.75386 80.4895L7.99996 -0.00936501L7 0Z" fill="#BF8AE5"/>
        </svg>
        <svg className="hidden xl:block absolute left-1/2 top-[55%] -translate-x-1/2 w-[2vw] h-[7vw] min-w-[15px] min-h-[60px] max-w-[30px] max-h-[120px]" viewBox="0 0 15 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.20267 0.288481C7.80972 -0.0995949 7.17656 -0.0956377 6.78849 0.29732L0.464425 6.70093C0.0763487 7.09389 0.0803059 7.72704 0.473263 8.11512C0.866221 8.50319 1.49937 8.49924 1.88745 8.10628L7.50884 2.41418L13.2009 8.03557C13.5939 8.42364 14.227 8.41969 14.6151 8.02673C15.0032 7.63377 14.9992 7.00062 14.6063 6.61254L8.20267 0.288481ZM8 81L8.99998 80.9938L8.49998 0.993743L7.5 0.999993L6.50002 1.00624L7.00002 81.0062L8 81Z" fill="#CB8BF8"/>
        </svg>
      </div>
    </section>
  );
};

export default SomaticReset7Day;
