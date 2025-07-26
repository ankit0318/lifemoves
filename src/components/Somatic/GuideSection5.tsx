import React from "react";

const GuideSection5: React.FC = () => {
  return (
    <div className="bg-brand-bg font-body">
      {/* Added heading section */}
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-hero-mobile md:text-hero-desktop mt-6 font-bold text-brand-text text-center font-heading">
          Meet Your Somatic Guide
        </h2>
      </div>
      {/* End heading section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-hero-mobile md:text-hero-desktop font-bold text-brand-text font-heading">
            I'm <span className="text-brand-primary">Aman</span>
          </h1>
          <p className="text-subheading-mobile md:text-subheading-desktop text-brand-text-secondary mt-4 font-body">
            Holistic Wellness Professional, Educator &amp; Interdisciplinary Artist
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="w-full md:w-1/4 text-center md:text-right px-8 order-3 md:order-1 ">
            <div className="mb-8">
              <h3 className="text-scene-heading-desktop font-semibold text-brand-text font-heading">Movement Therapy</h3>
              <p className="text-brand-text-secondary text-scene-desc-mobile font-body">Healing through expressive and mindful movement.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-scene-heading-desktop font-semibold text-brand-text font-heading">Somatic Practices</h3>
              <p className="text-brand-text-secondary text-scene-desc-mobile font-body">Connecting body and mind for profound self-awareness.</p>
            </div>
            <div>
              <h3 className="text-scene-heading-desktop font-semibold text-brand-text font-heading">Interdisciplinary Arts</h3>
              <p className="text-brand-text-secondary text-scene-desc-mobile font-body">Fusing various art forms for holistic expression.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center my-8 md:my-0 order-1 md:order-2">
            <div className="relative">
              
              <img
                alt="Aman, a man with glasses and a warm smile, with his hands in a prayer position."
                className="relative  w-80 h-80 md:w-96 md:h-96 object-cover "
                src="/aman22.png"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 hidden md:block text-center md:text-left px-8 order-2 md:order-3">
            <div className="mb-8">
              <h3 className="text-scene-heading-desktop font-semibold text-brand-text font-heading">Special Needs Wellness</h3>
              <p className="text-brand-text-secondary text-scene-desc-mobile font-body">Tailored programs for individuals with special needs.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-scene-heading-desktop font-semibold text-brand-text font-heading">Corporate Programs</h3>
              <p className="text-brand-text-secondary text-scene-desc-mobile font-body">Bringing wellness and balance to the workplace.</p>
            </div>
            <div>
              <h3 className="text-scene-heading-desktop font-semibold text-brand-text font-heading">Life Changing</h3>
              <p className="text-brand-text-secondary text-scene-desc-mobile font-body">Aman's unique fusion of art and wellness has deeply transformed our team's approach to well-being - truly life-changing!</p>
            </div>
          </div>
        </div>
        <div className="text-center">
      <h2 className="text-scene-heading-mobile md:text-scene-heading-desktop font-bold text-brand-text mb-12 font-heading">Global Experience: Impact across India, Cyprus & Turkey</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg">
          <p className="text-highlight-mobile md:text-highlight-desktop font-bold text-brand-primary font-heading">10,000+</p>
          <p className="mt-2 text-brand-text-secondary text-scene-desc-mobile font-body">Individuals Taught through workshops, classes & intensives</p>
        </div>
        <div className="p-6 rounded-lg">
          <p className="text-highlight-mobile md:text-highlight-desktop font-bold text-brand-primary font-heading">400+</p>
          <p className="mt-2 text-brand-text-secondary text-scene-desc-mobile font-body">Lives Deeply Transformed through 1:1 and long-term programs</p>
        </div>
        <div className="p-6 rounded-lg">
          <p className="text-highlight-mobile md:text-highlight-desktop font-bold text-brand-primary font-heading">10+</p>
          <p className="mt-2 text-brand-text-secondary text-scene-desc-mobile font-body">Years Experience</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default GuideSection5;
