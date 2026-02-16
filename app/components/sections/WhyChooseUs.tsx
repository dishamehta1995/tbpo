"use client";

import { ArrowRight, CircleDot } from "lucide-react";
import { whyChooseUsContent } from "@/content/whyChooseUs";
import { AwardsSlider } from "./AwardsSlider";
import { motion } from "framer-motion";
import { fadeUp, fadeInRight, stagger } from "../constant";

type WhyChooseUsProps = {
  theme: {
    bg: string;
    text: string;
    textSecondary: string;
    primaryText: string;
    card: string;
  };
};

export function WhyChooseUs({ theme }: WhyChooseUsProps) {
  return (
    <section className={`py-12 md:py-20 bg-gradient-3-b`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            className=""
          >
            <motion.h2
              variants={fadeUp}
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${theme.text} mb-4`}
            >
              {whyChooseUsContent.headline}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className={`text-lg sm:text-xl md:text-2xl ${theme.text} mb-6`}
            >
              {whyChooseUsContent.subHeadline}
            </motion.p>

            <motion.span
              variants={fadeUp}
              className="inline-block bg-[#c81c27] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full mb-6 text-xs md:text-sm"
            >
              {whyChooseUsContent.badge}
            </motion.span>

            <motion.p
              variants={fadeUp}
              className={`${theme.textSecondary} text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed`}
            >
              {whyChooseUsContent.description}
            </motion.p>

            {/* REASONS */}
            <motion.div
              variants={stagger}
              className="space-y-4 md:space-y-6 mb-8 md:mb-10"
            >
              {whyChooseUsContent.reasons.map((reason) => (
                <motion.div
                  key={reason.title}
                  variants={fadeUp}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <CircleDot className="w-4 md:w-5 h-4 md:h-5 text-[#c81c27] rotate-180 mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <h3
                      className={`text-base md:text-lg font-semibold ${theme.text}`}
                    >
                      {reason.title}
                    </h3>
                    <p
                      className={`${theme.textSecondary} text-sm md:text-base mt-1`}
                    >
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              variants={fadeUp}
              className={`${theme.card} mt-6 border border-gray-300 ${theme.textSecondary} px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center md:justify-start gap-2 hover:border-[#c81c27] transition w-full md:w-auto text-sm md:text-base`}
            >
              Start Your Journey Now!
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 bg-[#c81c27] text-white rounded-full p-1" />
            </motion.button>
          </motion.div>

          {/* RIGHT AWARD CARD */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            className={`${theme.card} rounded-2xl p-6 md:p-8 shadow-sm w-full`}
          >
            <p
              className={`${theme.primaryText} uppercase text-xs md:text-sm mb-4 md:mb-6`}
            >
              Awards & Recognition
            </p>

            <AwardsSlider theme={theme} awards={whyChooseUsContent.award} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
