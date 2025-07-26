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
    <div className="bg-brand-bg min-h-screen md:hidden font-body">
    
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="text-center px-6 py-12 bg-white">
          <h1 className="text-scene-heading-mobile font-bold text-brand-text font-heading">Meet Your Somatic Guide</h1>
          <h2 className="text-hero-mobile font-bold text-brand-text mt-2 font-heading">
            I&apos;m <span className="text-brand-primary">Aman</span>
          </h2>
          <p className="text-brand-text-secondary mt-4 text-subheading-mobile font-body">
            Holistic Wellness Professional, Educator &amp; Interdisciplinary Artist
          </p>
        </section>
        {/* Image Section */}
        <section className="px-6 py-12">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-64 h-64 bg-brand-primary/20 rounded-full"></div>
            <img
              alt="Aman, a man with glasses smiling and holding his hands together in a prayer-like gesture."
              className="relative z-10 w-56 h-56 rounded-full object-cover shadow-lg"
              src={amanImg.src}
            />
          </div>
        </section>
        {/* Global Experience Section */}
        <section className="bg-brand-secondary/10 px-6 py-16 text-center">
          <h2 className="text-scene-heading-mobile font-bold text-brand-text font-heading">Global Experience</h2>
          <p className="text-brand-text-secondary mt-2 text-subheading-mobile font-body">Impact across India, Cyprus &amp; Turkey</p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-highlight-mobile font-bold text-brand-primary font-heading">10k+</p>
              <p className="text-brand-text-secondary text-scene-desc-mobile mt-1 font-body">Individuals Taught</p>
            </div>
            <div>
              <p className="text-highlight-mobile font-bold text-brand-primary font-heading">400+</p>
              <p className="text-brand-text-secondary text-scene-desc-mobile mt-1 font-body">Lives Transformed</p>
            </div>
            <div>
              <p className="text-highlight-mobile font-bold text-brand-primary font-heading">10+</p>
              <p className="text-brand-text-secondary text-scene-desc-mobile mt-1 font-body">Years Experience</p>
            </div>
          </div>
        </section>
        {/* Expertise Section */}
        <section className="px-6 py-12">
          <div>
            <h3 className="text-scene-heading-mobile font-bold text-center text-brand-text mb-8 font-heading">My Expertise</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-brand-primary flex-1 w-full max-w-xs">
                <SelfImprovementIcon className="text-brand-primary" style={{ fontSize: 40 }} />
                <h4 className="text-scene-heading-desktop font-semibold text-brand-text mt-2 font-heading">Movement Therapy</h4>
                <p className="text-brand-text-secondary text-scene-desc-mobile mt-1 font-body">Healing through expressive and mindful movement.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-brand-secondary flex-1 w-full max-w-xs">
                <PsychologyIcon className="text-brand-secondary" style={{ fontSize: 40 }} />
                <h4 className="text-scene-heading-desktop font-semibold text-brand-text mt-2 font-heading">Somatic Practices</h4>
                <p className="text-brand-text-secondary text-scene-desc-mobile mt-1 font-body">Connecting body and mind for profound self-awareness.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-brand-accent flex-1 w-full max-w-xs">
                <PaletteIcon className="text-brand-accent" style={{ fontSize: 40 }} />
                <h4 className="text-scene-heading-desktop font-semibold text-brand-text mt-2 font-heading">Interdisciplinary Arts</h4>
                <p className="text-brand-text-secondary text-scene-desc-mobile mt-1 font-body">Fusing various art forms for holistic expression.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-brand-primary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-brand-accent transition duration-300 transform hover:scale-105 text-scene-desc-mobile font-body">
              Start Your Journey
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MobileGuideSection;
