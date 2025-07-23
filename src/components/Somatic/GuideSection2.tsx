import Image from 'next/image';

export default function GuideSection2() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column: Text & Stats */}
          <div className="md:w-1/2 text-gray-800 md:pr-16">
            <p className="text-3xl font-bold tracking-widest  text-gray-500 uppercase mb-2">Hello</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">I'M AMAN</h1>
            <p className="text-gray-600 mb-10 text-base md:text-lg leading-relaxed">
            After experiencing chronic pain and stress from years of corporate life, I discovered the transformative power of somatic movement. What started as my personal healing journey has now become my mission to help others in our Indian community.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <svg className="w-9 h-9 text-green-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <div>
                  <p className="text-xl font-bold">15+</p>
                  <p className="text-gray-500 text-xs">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-9 h-9 text-green-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <div>
                  <p className="text-xl font-bold">10,000+</p>
                  <p className="text-gray-500 text-xs">Students Guided</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-9 h-9 text-green-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <div>
                  <p className="text-xl font-bold">Featured</p>
                  <p className="text-gray-500 text-xs">Wellness Publications</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-md">
              <Image
                src="/guide22.png" // Replace with your local image asset
                alt="Portrait of Anthony, a smiling man holding a coffee cup and a notebook"
                width={300}
                height={300}
                className=""
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
