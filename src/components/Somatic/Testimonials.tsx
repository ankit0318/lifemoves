import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const selectTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="container mx-auto max-w-6xl relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-30">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-200 to-gray-200"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl  md:text-5xl  font-bold text-gray-800 md:mb-16 mb-10 max-sm:leading-16 text-left">
          What they say about us
        </h1>

        <div className="flex flex-col lg:flex-row items-start md:gap-12 gap-7">
          {/* Mobile Quote Bubble (above image) */}
          <div className="block lg:hidden w-full md:mb-6">
            <div className="relative bg-white p-8 rounded-3xl shadow-lg md:mb-8">
              <p className="text-gray-700 text-lg max-sm:text-2xl leading-relaxed max-sm:leading-8">
                "{current.quote.split('Thank you').map((part, index) => 
                  index === 0 ? part : (
                    <span key={index}>
                      <span className="font-bold text-indigo-600">Thank you</span>
                      {part}
                    </span>
                  )
                )}"
              </p>
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-4 max-sm:hidden left-8 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
            <div className="border-2 md:hidden absolute  right-2 bottom-80 flex justify-center items-center border-indigo-600 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
                {currentTestimonial + 1} / {testimonials.length}
              </div>
            
          </div>
          
         
          {/* Profile Card Section */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              {/* Main Profile Card */}
              <div className="bg-gradient-to-br from-purple-200 via-purple-100 to-gray-200 p-2 rounded-3xl max-sm:rounded-full shadow-xl">
                <div className="bg-white rounded-2xl overflow-hidden max-sm:rounded-full">
                  <img 
                    alt={`${current.name}, ${current.title}`}
                    className="w-full h-36 md:h-64 object-cover"
                    src={current.image}
                  />
                </div>
                <h3 className="font-bold max-sm:hidden text-gray-800 text-center mt-2">{current.name}</h3>
                <p className="text-sm max-sm:hidden text-gray-600 text-center">{current.title}</p>
              </div>
              {/* Profile Info Badge */}
              <div className="md:hidden pt-3">
                <h3 className="font-bold text-2xl text-gray-800 text-center">{current.name}</h3>
                <p className="text-md text-gray-600 text-center">{current.title}</p>
              </div>
            </div>
          </div>
          {/* Testimonial Content Section */}
          <div className="w-full lg:w-2/3 md:mt-12 lg:mt-0">
            {/* Navigation Controls */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <button 
                onClick={prevTestimonial}
                className="bg-gray-200 text-gray-600 p-3 rounded-full hover:bg-gray-300 transition-colors duration-300 mr-4 hover:shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 hover:shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {/* Desktop Quote Bubble (original place) */}
            <div className="hidden lg:block">
              <div className="relative bg-white p-8 rounded-3xl shadow-lg mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  "{current.quote.split('Thank you').map((part, index) => 
                    index === 0 ? part : (
                      <span key={index}>
                        <span className="font-bold text-indigo-600">Thank you</span>
                        {part}
                      </span>
                    )
                  )}"
                </p>
                {/* Speech Bubble Tail */}
                <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>
            {/* Pagination and Thumbnails */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Page Indicator */}
              <div className="border-2 max-sm:hidden  border-indigo-600 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
                {currentTestimonial + 1} / {testimonials.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className=" space-x-3 hidden md:flex">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => selectTestimonial(index)}
                    className={`w-16 h-16 rounded-xl border-2 p-1 transition-all duration-300 hover:scale-105 ${
                      index === currentTestimonial 
                        ? 'border-indigo-600 shadow-lg' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    aria-label={`View testimonial from ${testimonial.name}`}
                  >
                    <img 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-lg"
                      src={testimonial.image}
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