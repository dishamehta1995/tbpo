"use client";

import { ArrowRight } from "lucide-react";
import { careersContent } from "@/content/careers";
import { motion } from "framer-motion";
import { fadeUp } from "../constant";
import CareersHero from "../sections/CareerHero";
import CareerWhyUs from "../sections/CareerWhyUs";
import { CareersGrowthSection } from "../sections/CareersGrowthSection";
import ProcessSection from "../sections/ProcessSection";
import { CareersLocationsSection } from "../sections/CareersLocationsSection";
import { lightTheme } from "../../utils/theme";

export function CareersPage() {
  const theme = lightTheme;

  const steps = [
    {
      number: "20",
      title: "750+ Employees",
      description: "Joined our company",
    },
    {
      number: "21",
      title: "1200+ Employees",
      description: "Rapid expansion phase",
    },
    {
      number: "22",
      title: "2000+ Employees",
      description: "Scaled across India",
    },
  ];

  const heroContent = {
    label: "Our Growth",
    heading: "Here’s how we have grown!",
    description: "Great vision with great people. It matters a lot to us!",
  };

  return (
    <main className={theme.bg}>
      {/* HERO */}
      <CareersHero />

      {/* WHY US */}
      <CareerWhyUs />

      {/* GROWTH / PROCESS */}
      <ProcessSection steps={steps} heroContent={heroContent} />

      {/* LOCATIONS MAP / CARDS */}
      <CareersLocationsSection careersContent={careersContent} theme={theme} />

      {/* LOCATIONS LIST */}
      <section className="py-12 md:py-20 bg-gradient-3-b">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className={`text-2xl sm:text-3xl md:text-5xl font-semibold ${theme.text} text-center mb-4 md:mb-6`}
          >
            {careersContent.locations.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={`${theme.textSecondary} text-sm md:text-base text-center mb-8 md:mb-12`}
          >
            {careersContent.locations.subtitle}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {careersContent.locations.cities.map((city) => (
              <motion.div
                key={city.city}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className={`${theme.card} rounded-2xl p-4 md:p-6`}
              >
                <h3
                  className={`text-lg md:text-xl font-semibold ${theme.text} mb-2`}
                >
                  {city.city}
                </h3>
                <p className={`${theme.textSecondary} text-sm md:text-base`}>
                  {city.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-20 text-center bg-black">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 md:mb-4 text-white"
        >
          {careersContent.finalCta.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base md:text-xl mb-6 md:mb-10 text-white/80"
        >
          {careersContent.finalCta.subtitle}
        </motion.p>

        <motion.a
          variants={fadeUp}
          href={careersContent.finalCta.href}
          target="_blank"
          className="inline-flex items-center gap-2 bg-[#c81c27] text-white px-6 md:px-8 py-2.5 my-6 md:my-8 rounded-full hover:bg-[#a01620] transition text-sm md:text-base"
        >
          {careersContent.finalCta.button}
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </section>
    </main>
  );
}
