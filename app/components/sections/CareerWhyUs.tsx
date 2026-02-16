import React from "react";

export default function CareerWhyUs() {
  return (
    <section className="bg-gradient-3-b py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#262138] max-w-4xl mb-6">
          Here’s Why <span className="opacity-60">You Need To Choose Us</span>
        </h2>

        <p className="text-xl text-[#4a4363] max-w-4xl mb-12">
          At Taurus every employee has a sense of accomplishment. The dynamic,
          progressive and inclusive work atmosphere makes working at Taurus a
          great experience for all. We value our employees’ diversity, team
          spirit, innovative ideas and aspirations to grow and develop. We
          believe the best investment can be in the human resource and thus we
          provide our employees and members with proper training and positive
          work environment.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
          {/* Card 1 */}
          <div className="p-8 border-b md:border-r border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Exponential Growth</h3>
            <p className="text-[#4a4363]">
              With us you can hone your skills, explore your interests and work
              on varied projects with giants and industry leaders.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 border-b border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Rewards & Recognition
            </h3>
            <p className="text-[#4a4363]">
              We recognize efforts and celebrate achievements to keep teams
              motivated and inspired.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border-b md:border-r border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Rigorous Training</h3>
            <p className="text-[#4a4363]">
              Continuous learning through structured training programs and
              mentorship to help you grow.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 border-b border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Youthful Culture</h3>
            <p className="text-[#4a4363]">
              A vibrant, energetic and inclusive culture that makes work
              engaging and collaborative.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-8 md:border-r border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Multi Industry Exposure
            </h3>
            <p className="text-[#4a4363]">
              Gain experience working across multiple industries and domains.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Fair Pay Policies</h3>
            <p className="text-[#4a4363]">
              Transparent and fair compensation structures aligned with
              performance and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
