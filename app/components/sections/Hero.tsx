import { ArrowRight } from "lucide-react";
import { heroContent } from "@/content/hero";
import { AnimatedNumber } from "./AnimatedNumber";

type HeroProps = {
  theme: {
    heroBg: string;
    primary: string;
  };
};

export function Hero({ theme }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative ${theme.heroBg} overflow-hidden pt-12 md:pt-8`}
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-30 md:opacity-40"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Brand gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c81c27]/20 to-[#0066FF]/20" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 md:mb-8 leading-tight">
            {heroContent.headline.line1}
            <br />
            {heroContent.headline.line2}
          </h1>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 md:mb-12">
            <a
              href={heroContent.primaryCta.href}
              className={`${theme.primary} hover:bg-[#a01620] text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 transition w-full sm:w-auto justify-center sm:justify-start text-sm md:text-base`}
            >
              {heroContent.primaryCta.label}
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
            </a>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
            {heroContent.pills.map((pill) => (
              <span
                key={pill}
                className="border border-[#c81c27] text-white/90 px-3 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm backdrop-blur-sm bg-white/5"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-12 text-white text-sm md:text-base">
            {heroContent.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 md:gap-12"
              >
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
                    <AnimatedNumber value={stat.value} />
                  </p>
                  <p className="text-xs md:text-sm opacity-80">{stat.label}</p>
                </div>

                {i < heroContent.stats.length - 1 && (
                  <div className="h-6 md:h-8 w-px bg-white/30 hidden sm:block" />
                )}
              </div>
            ))}

            {/* Side link */}
            <div className="sm:ml-auto mt-4 sm:mt-0">
              <p className="text-sm uppercase opacity-80 mb-2">
                {heroContent.sideNote.label}
              </p>
              <button className="text-white flex items-center gap-2 hover:text-[#c81c27] transition">
                {heroContent.sideNote.linkLabel}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Metric (desktop only) */}
        <div className="hidden lg:block absolute right-12 top-32 bg-[rgba(200,28,39,0.13)] backdrop-blur-sm border border-[rgba(200,28,39,0.3)] rounded-3xl p-6 max-w-xs">
          <p className="text-white text-3xl font-light mb-1">
            {heroContent.profit.value}
          </p>
          <p className="text-white text-sm mb-4">{heroContent.profit.label}</p>

          <div className="flex items-end gap-1 h-16">
            {heroContent.profit.bars.map((h, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-[rgba(200,28,39,0.64)] to-transparent rounded flex-1"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
