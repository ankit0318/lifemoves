'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jim Corner",
      title: "CEO, Victonary Co.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHLZ8bZPcuAaHR6V9FwkwddNrdnCM-JEPbpyVZeF7PE1Z6YTVy0kNZP_sc6ZH9v1bt0OL41d2vVf9qhhwx8IKNq7qgX_61PTaD1GM0B4NvlbdNvxwYkEEJpGH1i8ixo1_efUr0FqLZTePR8XJiNSonc3kcQk3iC1LcgQyjv0vGwTgjNIs5Gpm7JtO_5GRRAfjJBJjs50__zK5Fo535HEZd8imBU3hM7sJutkjFnx6vvRZEgu-txH2T7qC-HD82COzq0tf6N726HDpx",
      quote: "I would like to say a big Thank you for your immense effort and support. In addition, I have feeling that our further events are going to be Great as well, good luck to the team."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Marketing Director, Tech Solutions",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB72xGuWM0HYtZ19IKJk22Feuo2vnLoYr6M2JYfwKPML-1S4zuqIdQTPBgcV2xLksNaOJZteWt5FXr-VqLkTiqUJR4ixcl9CFsQx0fwOJG68QuRKww9wExwMEL6YMmgCIa11Z5pETRocwdxko517c_5UgogHN-GuRbsqhdbxKsCXISYtLjvXV0kJlrsqlSs-01VTruS-3J9oUSjN2QG3jCNujI3aWbO05VeC0vVYfOmvwboa2epuyQ0hVIW7rHWoaap6oBpQrbwUGK3",
      quote: "Outstanding service and incredible attention to detail. The team exceeded our expectations in every way possible."
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Product Manager, Innovation Labs",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkLIrpMVdUSIesaG8ibmRBhiXFHRVi-8viZ0jnN_BzsKwf5T__89xts93R-WemBhNQdH7vmRov3HWeQi5uSSXLkDAgi1WnRyuPD4oUSEaC5bVbb-1eTMSDaCpD0RAzhLlRY6aec2bn0Wq--7CzEnLdlCpA2Y1q4XZUU7r_O91hls_z33COr6a8hwNWJCU0fZbtxnTnK3NLL-ulrxma6bocKF60kwbTSZgTRPx5KSEpDwZC0Vi7nBtd4Nq6d8YG9-FVZQg1c8H73ixV",
      quote: "Professional, reliable, and innovative. They delivered exactly what we needed, when we needed it."
    },
    {
      id: 4,
      name: "David Miller",
      title: "Operations Lead, StartupCorp",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOOOrFNDt4eI2jUKEhn2gebc9c6Fn_PO6Tw9PlHcgnnojzBxFKWk1srD8sYCtI0lXxVFmagNTwYBdhk0QHvvutbYX6MZgDUx5tPVY2KfsVmrXZlhLCjapqIW_UxJJ7Ou_k8OCLtxbKMRyHn4r1OHKd_AXOmWCN1wAPMNtU5iPo2qQwAZfEhjVp_M0ThW69w6IIKhdDP5Qs439lNRsp0agYaUImELb-Ym7313WSLKDZk1GBVsjIOwBUNNfbpfT9ahi2k2pAesP1DOq",
      quote: "Exceptional results and seamless collaboration. I highly recommend their services to anyone looking for quality."
    },
    {
      id: 5,
      name: "Alex Rodriguez",
      title: "CTO, Digital Ventures",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfWm9YQJ-JRnwa2Rck3Zcjm74QMxrQUx99hPbaM7PVBRKuUgQO0A6PvxP6WIRbeWcy_ZQkrrUWwYLGXq2aiNwJTiQy9qqxyZowiwqAviFpK7o3_C5GBcuk2cR8gcunXaloqMX6-uDfj-mAmO_blQgHna_LpxfwMyPNUMOb2hJJDTnq_zrkLSlGR_EFtjwPVmyaDr99m4dTCPAOXzVFJm4XTJj5aIuqRbqSWvy9qy-HcDJusq8T4QR3iWANgGohW1h4QLVv-aKlBeUp",
      quote: "A truly remarkable experience from start to finish. The team's dedication and expertise are unmatched."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const selectTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="bg-background-100 min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-7xl relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-30">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-text-900 md:mb-20 mb-12 text-center font-heading">
          What they say about us
        </h1>

        <div className="flex flex-col lg:flex-row items-start md:gap-16 gap-10">
          {/* Mobile Quote Bubble (above image) */}
          <div className="block lg:hidden w-full md:mb-8">
            <div className="relative bg-background-50 p-8 rounded-3xl shadow-xl md:mb-10">
              <p className="text-text-700 text-lg max-sm:text-xl leading-relaxed">
                &quot;{current.quote.split('Thank you').map((part, index) => 
                  index === 0 ? part : (
                    <span key={index}>
                      <span className="font-bold text-primary-600">Thank you</span>
                      {part}
                    </span>
                  )
                )}&quot;
              </p>
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-4 max-sm:hidden left-8 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-background-50"></div>
            </div>
            {/* Testimonial Image, Name, and Title (Mobile Only) */}
            <div className="flex flex-col items-center mt-8 mb-6">
              <div className="bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-200 p-2 rounded-full shadow-lg">
                <div className="bg-background-50 rounded-full overflow-hidden">
                  <Image 
                    alt={`${current.name}, ${current.title}`}
                    className="object-cover w-44 h-44"
                    src={current.image}
                    width={176}
                    height={176}
                  />
                </div>
              </div>
              <h3 className="font-bold text-text-800 text-center mt-3 text-xl">{current.name}</h3>
              <p className="text-base text-text-600 text-center">{current.title}</p>
            </div>
            <div className="border-2 md:hidden absolute right-4 bottom-80 flex justify-center items-center border-primary-600 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                {currentTestimonial + 1} / {testimonials.length}
              </div>
            
          </div>
          
          {/* Desktop Layout: Image + Quote Card Side by Side */}
          <div className="hidden lg:flex w-full justify-center items-center gap-16 mb-0">
            {/* Profile Card */}
            <div className="w-1/3 flex justify-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-200 p-3 rounded-3xl shadow-2xl">
                  <div className="bg-background-50 rounded-2xl overflow-hidden">
                    <Image 
                      alt={`${current.name}, ${current.title}`}
                      className="w-full h-72 object-cover"
                      src={current.image}
                      width={288}
                      height={288}
                    />
                  </div>
                  <h3 className="font-bold text-text-800 text-center mt-3 text-lg">{current.name}</h3>
                  <p className="text-base text-text-600 text-center">{current.title}</p>
                </div>
              </div>
            </div>
            {/* Quote Card */}
            <div className="w-1/2 flex flex-col items-center">
              <div className="relative bg-background-50 p-10 rounded-3xl shadow-2xl mb-6 lg:max-w-lg w-full">
                <p className="text-text-700 text-lg leading-relaxed">
                  &quot;{current.quote.split('Thank you').map((part, index) => 
                    index === 0 ? part : (
                      <span key={index}>
                        <span className="font-bold text-primary-600">Thank you</span>
                        {part}
                      </span>
                    )
                  )}&quot;
                </p>
                {/* Speech Bubble Tail */}
                <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-background-50"></div>
              </div>
              {/* Navigation + Numbering Row */}
              <div className="flex w-full items-center justify-between mb-6">
                <div className="flex items-center">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-text-200 text-text-600 p-4 rounded-full hover:bg-text-300 transition-colors duration-300 mr-6 hover:shadow-lg"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="bg-primary-600 text-background-50 p-4 rounded-full hover:bg-primary-700 transition-colors duration-300 hover:shadow-lg"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full text-base font-semibold">
                  {currentTestimonial + 1} / {testimonials.length}
                </div>
              </div>
              {/* Pagination and Thumbnails */}
              <div className="flex items-center justify-center w-full">
                <div className="space-x-4 hidden md:flex">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      onClick={() => selectTestimonial(index)}
                      className={`w-18 h-18 rounded-full border-3 p-1 transition-all duration-300 hover:scale-105 ${
                        index === currentTestimonial
                          ? 'border-primary-600 shadow-xl' 
                          : 'border-text-300 hover:border-text-400'
                      }`}
                      aria-label={`View testimonial from ${testimonial.name}`}
                    >
                      <Image 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                        src={testimonial.image}
                        width={72}
                        height={72}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Original Desktop Content Section (hidden on lg) */}
          <div className="w-full lg:hidden">
            {/* Navigation Controls */}
            <div className="flex items-center justify-center lg:justify-start mb-10">
              <button 
                onClick={prevTestimonial}
                className="bg-text-200 text-text-600 p-4 rounded-full hover:bg-text-300 transition-colors duration-300 mr-6 hover:shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-primary-600 text-background-50 p-4 rounded-full hover:bg-primary-700 transition-colors duration-300 hover:shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {/* Desktop Quote Bubble (original place) */}
            <div className="hidden lg:block">
              <div className="relative bg-background-50 p-10 rounded-3xl shadow-2xl mb-10 lg:max-w-lg">
                <p className="text-text-700 text-lg leading-relaxed">
                  &quot;{current.quote.split('Thank you').map((part, index) => 
                    index === 0 ? part : (
                      <span key={index}>
                        <span className="font-bold text-primary-600">Thank you</span>
                        {part}
                      </span>
                    )
                  )}&quot;
                </p>
                {/* Speech Bubble Tail */}
                <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-background-50"></div>
              </div>
            </div>
            {/* Pagination and Thumbnails */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              {/* Page Indicator */}
              <div className="border-2 max-sm:hidden border-primary-600 text-primary-600 px-6 py-3 rounded-full text-base font-semibold">
                {currentTestimonial + 1} / {testimonials.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className="space-x-4 hidden md:flex">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => selectTestimonial(index)}
                    className={`w-18 h-18 rounded-full border-3 p-1 transition-all duration-300 hover:scale-105 ${
                      index === currentTestimonial 
                        ? 'border-primary-600 shadow-xl' 
                        : 'border-text-300 hover:border-text-400'
                    }`}
                    aria-label={`View testimonial from ${testimonial.name}`}
                  >
                    <Image 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                      src={testimonial.image}
                      width={72}
                      height={72}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;