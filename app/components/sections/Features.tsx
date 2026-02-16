import { ArrowRight } from "lucide-react";
import { featuresContent } from "@/content/features";

type FeaturesProps = {
  theme: {
    bg: string;
    text: string;
    textSecondary: string;
    card: string;
    primaryText: string;
    cardBorder: string;
  };
};

export function Features({ theme }: FeaturesProps) {
  return (
    <section id="features" className={`py-20 ${theme.bg}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <p
          className={`${theme.primaryText} text-xl font-semibold uppercase mb-6`}
        >
          {featuresContent.sectionLabel}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <h2 className={`text-6xl font-semibold ${theme.text}`}>
            {featuresContent.headline}
          </h2>

          <div className="flex items-end justify-end">
            <a
              href={featuresContent.cta.href}
              className="bg-[#c81c27] hover:bg-[#a01620] text-white px-8 py-4 rounded-full flex items-center gap-2 transition"
            >
              {featuresContent.cta.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-4 mb-12">
          {featuresContent.tags.map((tag) => (
            <span
              key={tag}
              className={`${theme.card} px-6 py-3 rounded-full ${theme.textSecondary} border-gray-200`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuresContent.features.map((feature) =>
            feature.isCta ? (
              <div
                key={feature.title}
                className="bg-[#c81c27] rounded-2xl p-8 text-white flex flex-col justify-between "
              >
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mb-6">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Learn More</h3>
              </div>
            ) : (
              <div
                key={feature.title}
                className={`${theme.card} border ${theme.cardBorder} rounded-2xl p-8`}
              >
                <h3 className={`text-2xl font-semibold ${theme.text} mb-4`}>
                  {feature.title}
                </h3>
                <p className={theme.textSecondary}>{feature.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
