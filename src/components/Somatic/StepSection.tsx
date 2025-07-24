import React from 'react';

// Inline SVG for Material Icons (for demo, you may want to use a React icon library in production)
const icons = {
  bolt: (
    <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v13h3v7l7-12h-4l4-8z" /></svg>
  ),
  check_circle_outline: (
    <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.41l-3.3-3.29 1.41-1.42L10 12.17l5.88-5.88 1.41 1.41z" /></svg>
  ),
  arrow_upward: (
    <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z" /></svg>
  ),
  favorite_border: (
    <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.1 8.64l-.1.1-.11-.1C10.14 6.6 7.1 7.24 7.1 9.91c0 2.54 3.4 4.73 4.9 5.88 1.5-1.15 4.9-3.34 4.9-5.88 0-2.67-3.04-3.31-4.8-1.27zM12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
  ),
  self_improvement: (
    <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.21 0-4 1.79-4 4v2c0 2.21 1.79 4 4 4s4-1.79 4-4v-2c0-2.21-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
  ),
  visibility: (
    <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7.305 4.5 3.135 7.36 1 12c2.135 4.64 6.305 7.5 11 7.5s8.865-2.86 11-7.5c-2.135-4.64-6.305-7.5-11-7.5zm0 13c-3.59 0-6.71-2.13-8.44-5.5C5.29 8.13 8.41 6 12 6s6.71 2.13 8.44 5.5C18.71 15.37 15.59 17.5 12 17.5zm0-10c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 8.5 12 8.5s2.5 1.12 2.5 2.5S13.38 14.5 12 14.5z" /></svg>
  ),
  celebration: (
    <svg className="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22l14-4-4-14-10 10zm16.71-2.29c.39.39 1.02.39 1.41 0l2.29-2.29c.39-.39.39-1.02 0-1.41l-2.29-2.29c-.39-.39-1.02-.39-1.41 0l-2.29 2.29c-.39.39-.39 1.02 0 1.41l2.29 2.29z" /></svg>
  ),
};

const days = [
  {
    day: 1,
    icon: 'bolt',
    color: 'bg-blue-100 text-blue-800',
    title: 'Breath Reset',
    desc: 'Wake up your nervous system from within',
  },
  {
    day: 2,
    icon: 'check_circle_outline',
    color: 'bg-green-100 text-green-800',
    title: 'Shoulder Detox',
    desc: 'Undo 100 Zoom calls',
  },
  {
    day: 3,
    icon: 'arrow_upward',
    color: 'bg-purple-100 text-purple-800',
    title: 'Spine Awakening',
    desc: 'From slouch to spring',
  },
  {
    day: 4,
    icon: 'favorite_border',
    color: 'bg-pink-100 text-pink-800',
    title: 'Emotional Unwinding',
    desc: 'Release the tight chest energy',
  },
  {
    day: 5,
    icon: 'self_improvement',
    color: 'bg-yellow-100 text-yellow-800',
    title: 'Jaw & Neck Release',
    desc: 'Let go of unspoken words',
  },
  {
    day: 6,
    icon: 'visibility',
    color: 'bg-indigo-100 text-indigo-800',
    title: 'Visual System Reset',
    desc: 'Relax your eyes, calm your mind',
  },
  {
    day: 7,
    icon: 'celebration',
    color: 'bg-red-100 text-red-800',
    title: 'Full Body Integration',
    desc: 'Bringing it all together',
  },
];

// Leaf SVG as a React component
const Leaf = ({ className }: { className: string }) => (
  <div
    className={`leaf pointer-events-none absolute ${className}`}
    aria-hidden="true"
    style={{ width: 50, height: 50 }}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M50,0 C65,20 80,45 100,50 C80,55 65,80 50,100 C35,80 20,55 0,50 C20,45 35,20 50,0 Z" fill="#d8b4fe" fillOpacity="0.8" />
    </svg>
  </div>
);

// Hand-drawn line SVG
const HandDrawnLine = ({ className, path, style }: { className?: string; path: string; style?: React.CSSProperties }) => (
  <svg className={`hand-drawn-line absolute ${className || ''}`} style={style} viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
    <path d={path} stroke="#d8b4fe" strokeWidth={2} strokeDasharray="6 6" />
  </svg>
);

const StepSection: React.FC = () => {
  return (
    <section className="hidden md:block relative bg-white py-10 lg:py-16 w-full overflow-hidden">
      {/* Decorative Leaves */}
      {/* <Leaf className="one top-[10%] left-[5%] scale-80 -rotate-15" />
      <Leaf className="two top-[20%] right-[10%] scale-120 rotate-10" />
      <Leaf className="three top-[50%] left-[15%] scale-90 rotate-25" />
      <Leaf className="four top-[70%] right-[5%] scale-110 -rotate-5" />
      <Leaf className="five top-[85%] left-[10%] scale-70 rotate-35" />
      <Leaf className="six top-[35%] right-[15%] scale-100 -rotate-20" /> */}

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
            {/* Downward Arrow SVG */}
            <svg
              className="absolute left-1/2 z-20"
              style={{
                top: '130px', // adjust as needed to start below the title
                transform: 'translateX(-50%)',
                height: '80px', // adjust height as needed
                width: '20px',
              }}
              viewBox="0 0 24 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="12"
                y1="0"
                x2="12"
                y2="65"
                stroke="#d8b4fe"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
              <polyline
                points="6,65 12,78 18,65"
                fill="none"
                stroke="#d8b4fe"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Day 1, 3, 5: Left arrow formation */}
          {/* Day 1 */}
          <div className="absolute" style={{ left: '8%', top: '12%' }}>
            <div className="timeline-content bg-white p-4 rounded-lg shadow-2xl" style={{ width: '190px', maxWidth: '100%' }}>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${days[0].color} mb-1.5`}>
                {icons[days[0].icon as keyof typeof icons]} Day 1
              </span>
              <h3 className="text-base font-semibold text-gray-900">{days[0].title}</h3>
              <p className="mt-0.5 text-gray-600 text-xs">{days[0].desc}</p>
            </div>
          </div>
          {/* Day 3 */}
          <div className="absolute" style={{ left: '23%', top: '38%' }}>
            <div className="timeline-content bg-white p-4 rounded-lg shadow-2xl" style={{ width: '190px', maxWidth: '100%' }}>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${days[2].color} mb-1.5`}>
                {icons[days[2].icon as keyof typeof icons]} Day 3
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{days[2].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{days[2].desc}</p>
            </div>
          </div>

     
          {/* Day 5 */}
          <div className="absolute" style={{ left: '3%', top: '62%' }}>
            <div className="timeline-content bg-white p-4 rounded-lg shadow-2xl" style={{ width: '216px', maxWidth: '100%' }}>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${days[4].color} mb-1.5`}>
                {icons[days[4].icon as keyof typeof icons]} Day 5
              </span>
              <h3 className="text-base font-semibold text-gray-900">{days[4].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{days[4].desc}</p>
            </div>
          </div>

          {/* Day 2, 4, 6: Right arrow formation */}
          {/* Day 2 */}
          <div className="absolute" style={{ right: '10%', top: '14%' }}>
            <div className="timeline-content bg-white p-4 rounded-lg shadow-2xl" style={{ width: '190px', maxWidth: '100%' }}>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${days[1].color} mb-1.5`}>
                {icons[days[1].icon as keyof typeof icons]} Day 2
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{days[1].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{days[1].desc}</p>
            </div>
          </div>
          {/* Day 4 */}
          <div className="absolute" style={{ right: '20%', top: '38%' }}>
            <div className="timeline-content bg-white p-4 rounded-lg shadow-2xl" style={{ width: '190px', maxWidth: '100%' }}>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${days[3].color} mb-1.5`}>
                {icons[days[3].icon as keyof typeof icons]} Day 4
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{days[3].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{days[3].desc}</p>
            </div>
          </div>
          {/* Day 6 */}
          <div className="absolute" style={{ right: '3%', top: '66%' }}>
            <div className="timeline-content bg-white p-4 rounded-lg shadow-2xl" style={{ width: '216px', maxWidth: '100%' }}>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${days[5].color} mb-1.5`}>
                {icons[days[5].icon as keyof typeof icons]} Day 6
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{days[5].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{days[5].desc}</p>
            </div>
          </div>

          {/* Day 7: Centered below the quote */}
          <div className="absolute left-1/2" style={{ top: '68%', transform: 'translateX(-50%)' }}>
            <div className="timeline-content bg-white p-4 rounded-lg shadow-2xl" style={{ width: '190px', maxWidth: '100%' }}>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${days[6].color} mb-1.5`}>
                {icons[days[6].icon as keyof typeof icons]} Day 7
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{days[6].title}</h3>
              <p className="mt-1 text-gray-600 text-xs">{days[6].desc}</p>
            </div>
          </div>

          {/* Upward Arrow SVG (reverse of the downward arrow) */}
          <svg
            className="absolute left-1/2 z-20"
            style={{
              top: '58%', // Adjust this value so the arrow starts just above Day 7 card
              transform: 'translateX(-50%) rotate(180deg)',
              height: '80px',
              width: '20px',
            }}
            viewBox="0 0 24 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="65"
              stroke="#d8b4fe"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
            <polyline
              points="6,65 12,78 18,65"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
          </svg>
        </main>
      </div>

      {/* Animation styles for leaves */}
      <style jsx>{`
        .leaf {
          opacity: 0.2;
          animation: float 10s ease-in-out infinite;
        }
        .one { animation-delay: 0s; }
        .two { animation-delay: -2s; }
        .three { animation-delay: -5s; }
        .four { animation-delay: -7s; }
        .five { animation-delay: -9s; }
        .six { animation-delay: -1s; }
        @keyframes float {
          0% { transform: translateY(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(-20px) scale(1) rotate(5deg); }
          100% { transform: translateY(0px) scale(1) rotate(0deg); }
        }
        .scale-80 { transform: scale(0.8) var(--tw-transform); }
        .scale-90 { transform: scale(0.9) var(--tw-transform); }
        .scale-100 { transform: scale(1) var(--tw-transform); }
        .scale-110 { transform: scale(1.1) var(--tw-transform); }
        .scale-120 { transform: scale(1.2) var(--tw-transform); }
        .-rotate-15 { transform: rotate(-15deg) var(--tw-transform); }
        .rotate-10 { transform: rotate(10deg) var(--tw-transform); }
        .rotate-25 { transform: rotate(25deg) var(--tw-transform); }
        .-rotate-5 { transform: rotate(-5deg) var(--tw-transform); }
        .rotate-35 { transform: rotate(35deg) var(--tw-transform); }
        .-rotate-20 { transform: rotate(-20deg) var(--tw-transform); }
      `}</style>
    </section>
  );
};
export default StepSection;
