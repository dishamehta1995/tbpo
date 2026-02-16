import { ArrowRight } from "lucide-react";
import { howItWorksContent } from "@/content/howItWorks";

type HowItWorksProps = {
  theme: {
    bg: string;
    text: string;
    textSecondary: string;
    primaryText: string;
    card: string;
  };
};

export function HowItWorksV2({ theme }: HowItWorksProps) {
  return (
    <section id="how-it-works" className={`py-20 `}>
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <p className={` text-xl font-semibold uppercase mb-6`}>
          {howItWorksContent.sectionLabel}
        </p>

        {/* Headings */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <h2 className={`text-6xl font-semibold `}>
            {howItWorksContent.headline}
          </h2>
          <div className="flex items-end">
            <p className={`text-2xl `}>{howItWorksContent.subHeadline}</p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}

          <div className={` rounded-2xl p-8`}>
            <img
              src="https://images.unsplash.com/photo-1598520106830-8c45c2035460"
              alt="Discovery & Consultation"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <p className={` text-sm mb-2`}>
              {howItWorksContent.steps[0].label}
            </p>
            <h3 className={`text-3xl font-semibold  mb-4`}>
              {howItWorksContent.steps[0].title}
            </h3>
            <p className="">{howItWorksContent.steps[0].description}</p>
          </div>

          {/* Step 2 */}
          <div className={` rounded-2xl p-8`}>
            <p className={` text-sm mb-2`}>
              {howItWorksContent.steps[1].label}
            </p>
            <h3 className={`text-3xl font-semibold  mb-4`}>
              {howItWorksContent.steps[1].title}
            </h3>

            <p className={` mb-6`}>{howItWorksContent.steps[1].description}</p>

            <ul className="space-y-3">
              {howItWorksContent.steps[1].points?.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-[#c81c27] mt-1 rotate-180" />
                  <span className="">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86"
              alt="Execution & Optimization"
              className="w-full h-full object-cover rounded-2xl max-h-[120px]"
            />
            <div className="absolute inset-0 bg-black/90">
              <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-black">
                <h3 className="text-white text-3xl font-semibold mb-4">
                  {howItWorksContent.steps[2].title}
                </h3>
                <p className="text-white/80 mb-6">
                  {howItWorksContent.steps[2].description}
                </p>
                <button className="inline-flex items-center gap-2 bg-[#c81c27] text-white px-6 py-3 rounded-full hover:bg-[#a01620] transition w-fit">
                  {howItWorksContent.steps[2].cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
