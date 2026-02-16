"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, fadeInRight } from "../components/constant";
import { aboutContent } from "@/content/about";
import ProcessSection from "../components/sections/ProcessSection";
import Story from "../components/sections/AboutUs/Story";
import Hero from "../components/sections/AboutUs/Hero";
import Impact from "../components/sections/AboutUs/Impact";
import { AwardsSlider } from "../components/sections/AwardsSlider";
import { whyChooseUsContent } from "@/content/whyChooseUs";
import { lightTheme } from "../utils/theme";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";

const steps = [
  {
    number: "1",
    title: "Discovery & Analysis",
    description:
      "Party we years to order allow asked of. We so opinion friends me message as delight.",
  },
  {
    number: "2",
    title: "Strategy Development",
    description:
      "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
  },
  {
    number: "3",
    title: "Implementation & Delivery",
    description:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
  },
];

const heroContent = {
  label: "Stockie Operation Across the world",
  heading: "We have best team and best process",
  description:
    "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.",
};

export default function AboutUsPage() {
  const theme = lightTheme;

  return (
    <div className={theme.bg}>
      <Navigation theme={theme} />

      <main>
        {/* HERO */}
        <Hero
          bgImage={aboutContent.pageHero.backgroundImage}
          title={aboutContent.pageHero.title}
          subtitle={aboutContent.pageHero.subtitle}
        />

        {/* STORY */}
        <Story />

        {/* IMPACT */}
        <Impact />

        {/* AWARDS */}
        <section className="py-12 md:py-24 bg-gradient-3-b">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
            >
              <motion.p
                variants={fadeUp}
                className={`${theme.primaryText} uppercase tracking-wider mb-3 text-sm`}
              >
                Awards & Recognition
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className={`text-2xl sm:text-3xl md:text-5xl font-semibold ${theme.text} mb-4 md:mb-6`}
              >
                Recognized for Excellence in Service Delivery
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className={`${theme.textSecondary} text-sm sm:text-base md:text-xl max-w-xl`}
              >
                Our commitment to quality, compliance, and performance has been
                recognized by leading industry bodies and business platforms.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              className={`${theme.card} rounded-2xl p-4 sm:p-6 md:p-8`}
            >
              <AwardsSlider theme={theme} awards={whyChooseUsContent.award} />
            </motion.div>
          </div>
        </section>

        {/* VISION / MISSION / VALUES */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className={`text-2xl sm:text-3xl md:text-5xl font-semibold ${theme.text} text-center mb-8 md:mb-12`}
            >
              Our Vision, Mission & Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {aboutContent.principles.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  className={`${theme.card} rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-xl transition`}
                >
                  <h3
                    className={`text-lg md:text-2xl font-semibold ${theme.text} mb-3 md:mb-4`}
                  >
                    {item.title}
                  </h3>
                  <p className={theme.textSecondary}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM CULTURE */}
        <section className="py-12 md:py-24 bg-gradient-3-t">
          <div className="container mx-auto px-4 md:px-6">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className={`${theme.primaryText} text-sm md:text-xl font-semibold uppercase mb-3 md:mb-4`}
            >
              {aboutContent.teamCulture.label}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className={`text-2xl sm:text-3xl md:text-5xl font-semibold ${theme.text} mb-4 md:mb-6`}
            >
              {aboutContent.teamCulture.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className={`${theme.textSecondary} text-sm sm:text-base md:text-xl max-w-3xl mb-6 md:mb-12`}
            >
              {aboutContent.teamCulture.description}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {aboutContent.teamCulture.points.map((point, index) => (
                <motion.div
                  key={`${point.title}-${index}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  className={`${theme.card} rounded-2xl p-5 md:p-6`}
                >
                  <h3
                    className={`text-base md:text-xl font-semibold ${theme.text} mb-2 md:mb-3`}
                  >
                    {point.title}
                  </h3>
                  <p className={theme.textSecondary}>{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="py-12 md:py-24 bg-gradient-3-t">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className={`text-2xl sm:text-3xl md:text-5xl font-semibold ${theme.text} text-center mb-8 md:mb-12`}
            >
              Industry Insights & Media Mentions
            </motion.h2>

            <div className="space-y-10 md:space-y-20">
              {aboutContent.insights.map((insight, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={insight.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
                  >
                    {/* IMAGE */}
                    <div className={isEven ? "md:order-1" : "md:order-2"}>
                      <div className="w-full bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
                        <img
                          src={insight.image}
                          alt={insight.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className={isEven ? "md:order-2" : "md:order-1"}>
                      <p
                        className={`${theme.primaryText} uppercase tracking-wider text-xs md:text-sm mb-2`}
                      >
                        {insight.source}
                      </p>

                      <h3
                        className={`text-lg sm:text-xl md:text-4xl font-semibold ${theme.text} mb-3 md:mb-4`}
                      >
                        {insight.title}
                      </h3>

                      <p
                        className={`${theme.textSecondary} text-sm md:text-lg mb-4 md:mb-6 leading-relaxed`}
                      >
                        {insight.description}
                      </p>

                      <a
                        href={insight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 md:px-8 py-2 md:py-3 rounded-full border border-[#c81c27] text-[#c81c27] hover:bg-[#c81c27] hover:text-white transition text-sm md:text-base"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <ProcessSection steps={steps} heroContent={heroContent} />
      </main>

      <Footer theme={theme} />
    </div>
  );
}
