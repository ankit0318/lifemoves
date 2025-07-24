import React from "react";

const GuideSection5: React.FC = () => {
  return (
    <div className="bg-white font-[Poppins]">
      {/* Added heading section */}
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mt-6 md:text-5xl font-bold text-gray-900 text-center ">
          Meet Your Somatic Guide
        </h2>
      </div>
      {/* End heading section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
            I'm <span className="text-orange-600">Aman</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mt-4">
            Holistic Wellness Professional, Educator &amp; Interdisciplinary Artist
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="w-full md:w-1/4 text-center md:text-right px-8 order-3 md:order-1 ">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800">Movement Therapy</h3>
              <p className="text-gray-600 text-sm">Healing through expressive and mindful movement.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800">Somatic Practices</h3>
              <p className="text-gray-600 text-sm">Connecting body and mind for profound self-awareness.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Interdisciplinary Arts</h3>
              <p className="text-gray-600 text-sm">Fusing various art forms for holistic expression.</p>
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
              <h3 className="text-lg font-semibold text-gray-800">Special Needs Wellness</h3>
              <p className="text-gray-600 text-sm">Tailored programs for individuals with special needs.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800">Corporate Programs</h3>
              <p className="text-gray-600 text-sm">Bringing wellness and balance to the workplace.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Life Changing</h3>
              <p className="text-gray-600 text-sm">Aman's unique fusion of art and wellness has deeply transformed our team's approach to well-being - truly life-changing!</p>
            </div>
          </div>
        </div>
        <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Global Experience: Impact across India, Cyprus & Turkey</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg">
          <p className="text-5xl font-bold text-indigo-600">10,000+</p>
          <p className="mt-2 text-gray-600">Individuals Taught through workshops, classes & intensives</p>
        </div>
        <div className="p-6 rounded-lg">
          <p className="text-5xl font-bold text-indigo-600">400+</p>
          <p className="mt-2 text-gray-600">Lives Deeply Transformed through 1:1 and long-term programs</p>
        </div>
        <div className="p-6 rounded-lg">
          <p className="text-5xl font-bold text-indigo-600">10+</p>
          <p className="mt-2 text-gray-600">Years Experience</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default GuideSection5;
