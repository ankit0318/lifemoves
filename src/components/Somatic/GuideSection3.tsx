import Image from 'next/image';

const GuideSection3 = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white text-gray-800">
    <div className="text-center mb-16">
      <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">— HELLO THERE!</p>
      <h1 className="text-6xl sm:text-7xl font-bold text-gray-900">I'm Aman</h1>
      <p className="mt-4 text-lg text-gray-600">Holistic Wellness Professional | Educator | Interdisciplinary Artist</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-24">
      <div className="md:col-span-2 relative">
        <span className="absolute -top-4 -left-6 text-6xl text-gray-200 font-serif">“</span>
        <p className="text-lg text-gray-600 leading-relaxed z-10 relative">
          Aman is a visionary wellness leader with over 8 years of experience at the intersection of movement therapy, somatic practices, yoga, and the arts.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/aman.jpg"
          alt="Aman, a man in a brown shirt, standing in a yoga studio with his hands open, demonstrating a pose."
          width={256}
          height={256}
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
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
);

export default GuideSection3;
