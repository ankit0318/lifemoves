import React from 'react';
// If using @mui/icons-material, import icons below. Otherwise, use inline SVGs or a suitable icon library.
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PaletteIcon from '@mui/icons-material/Palette';

// Use local images if available, otherwise fallback to the provided URLs
import amanImg from '../../../public/aman.jpg';
import logoImg from '../../../public/lifemoves.svg';

const MobileGuideSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen md:hidden font-[Poppins]">
    
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="text-center px-6 py-12 bg-white">
          <h1 className="text-3xl font-bold text-gray-800">Meet Your Somatic Guide</h1>
          <h2 className="text-5xl font-bold text-gray-900 mt-2">
            I&apos;m <span className="text-yellow-500">Aman</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Holistic Wellness Professional, Educator &amp; Interdisciplinary Artist
          </p>
        </section>
        {/* Image Section */}
        <section className="px-6 py-12">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-64 h-64 bg-purple-100 rounded-full"></div>
            <img
              alt="Aman, a man with glasses smiling and holding his hands together in a prayer-like gesture."
              className="relative z-10 w-56 h-56 rounded-full object-cover shadow-lg"
              src={amanImg.src}
            />
          </div>
        </section>
        {/* Global Experience Section */}
        <section className="bg-purple-50 px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Global Experience</h2>
          <p className="text-gray-700 mt-2 text-lg">Impact across India, Cyprus &amp; Turkey</p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-4xl font-bold text-purple-600">10k+</p>
              <p className="text-gray-600 text-sm mt-1">Individuals Taught</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600">400+</p>
              <p className="text-gray-600 text-sm mt-1">Lives Transformed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600">10+</p>
              <p className="text-gray-600 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </section>
        {/* Expertise Section */}
        <section className="px-6 py-12">
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">My Expertise</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-purple-500 flex-1 w-full max-w-xs">
                <SelfImprovementIcon className="text-purple-500" style={{ fontSize: 40 }} />
                <h4 className="text-lg font-semibold text-gray-800 mt-2">Movement Therapy</h4>
                <p className="text-gray-600 text-sm mt-1">Healing through expressive and mindful movement.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-yellow-500 flex-1 w-full max-w-xs">
                <PsychologyIcon className="text-yellow-500" style={{ fontSize: 40 }} />
                <h4 className="text-lg font-semibold text-gray-800 mt-2">Somatic Practices</h4>
                <p className="text-gray-600 text-sm mt-1">Connecting body and mind for profound self-awareness.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-green-500 flex-1 w-full max-w-xs">
                <PaletteIcon className="text-green-500" style={{ fontSize: 40 }} />
                <h4 className="text-lg font-semibold text-gray-800 mt-2">Interdisciplinary Arts</h4>
                <p className="text-gray-600 text-sm mt-1">Fusing various art forms for holistic expression.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-yellow-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MobileGuideSection;
