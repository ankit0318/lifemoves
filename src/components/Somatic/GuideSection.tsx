import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Award, Users, CheckCircle, Book, Star } from 'lucide-react';

export default function GuideSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
            Meet Your Guide
          </span>
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Meet Aman - Your Somatic Guide
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            Helping thousands heal chronic pain and stress through gentle, body-based practices
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image and Stats */}
            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/yoga.png"
                  alt="Aman - Professional Wellness Coach"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">50,000+ Lives Transformed</span>
                  </div>
                </div>
              </div>
              
            </div>
            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Namaste, I&apos;m Aman 🙏
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  After experiencing chronic pain and stress from years of corporate life, I discovered the transformative power of somatic movement. What started as my personal healing journey has now become my mission to help others in our Indian community.
                </p>
                
              </div>
              {/* Mission */}
              <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-3xl text-orange-400 font-serif leading-none">“</span>
                  <p className="italic text-gray-700 text-lg">
                    Movement is medicine. But it should never feel like punishment.
                  </p>
                </div>
                <div className="mt-4 text-right text-sm text-gray-500 font-semibold">
                  – Aman
                </div>
              </div>
              {/* Stats Cards - Redesigned */}
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-4 bg-violet-50 rounded-2xl p-6 justify-center items-center">
                {/* Card 1 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="bg-violet-500 rounded-full p-3 mb-2 flex items-center justify-center">
                    <Book className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-gray-500 text-sm">Years Experience</div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="bg-violet-500 rounded-full p-3 mb-2 flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">10,000+</div>
                  <div className="text-gray-500 text-sm">Students Guided</div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="bg-violet-500 rounded-full p-3 mb-2 flex items-center justify-center">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Featured</div>
                  <div className="text-gray-500 text-sm">Wellness Publications</div>
                </div>
              </div>
              {/* Certifications */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  Certifications & Training
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Certified Somatic Movement Educator
                      </div>
                      <div className="text-sm text-gray-500">
                        International Somatic Institute • 2019
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Trauma-Informed Bodywork Practitioner
                      </div>
                      <div className="text-sm text-gray-500">
                        Somatic Experiencing Institute • 2020
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Mindfulness-Based Stress Reduction
                      </div>
                      <div className="text-sm text-gray-500">
                        Center for Mindfulness • 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                >
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
          {/* Experience Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-6 py-3 rounded-full font-semibold">
              <CheckCircle className="w-5 h-5" />
              8+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}