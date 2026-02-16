"use client";

import { ArrowRight } from "lucide-react";
import { howItWorksContent } from "@/content/howItWorks";
import { motion } from "framer-motion";
import { fadeUp, fadeInRight, stagger, fadeInLeft } from "../constant";

type HowItWorksProps = {
  theme: {
    bg: string;
    text: string;
    textSecondary: string;
    primaryText: string;
    card: string;
  };
};

export function HowItWorks({ theme }: HowItWorksProps) {
  return (
    <section id="how-it-works" className={`pb-20 bg-gradient-3-t`}>
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={`${theme.primaryText} text-xl font-semibold tracking-wider uppercase mb-6`}
        >
          {howItWorksContent.sectionLabel}
        </motion.p>

        {/* Header Row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12 mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className={`text-6xl font-semibold ${theme.text}`}
          >
            {howItWorksContent.headline}
          </motion.h2>

          <motion.div variants={fadeUp} className="flex items-end">
            <div className="text-right">
              <p className={`text-2xl ${theme.textSecondary}`}>
                {howItWorksContent.subHeadline}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {/* CARD 1 — LEFT */}
          <motion.div
            variants={fadeInLeft}
            className={`${theme.card} rounded-2xl p-8 shadow-sm`}
          >
            <img
              src="https://images.unsplash.com/photo-1598520106830-8c45c2035460"
              alt="Discovery & Consultation"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <p className={`${theme.primaryText} text-sm mb-2`}>
              {howItWorksContent.steps[0].label}
            </p>
            <h3 className={`text-3xl font-semibold ${theme.text} mb-4`}>
              {howItWorksContent.steps[0].title}
            </h3>
            <p className={theme.textSecondary}>
              {howItWorksContent.steps[0].description}
            </p>
          </motion.div>

          {/* CARD 2 — BOTTOM */}
          <motion.div
            variants={fadeUp}
            className={`${theme.card} rounded-2xl p-8 shadow-sm`}
          >
            <p className={`${theme.primaryText} text-sm mb-2`}>
              {howItWorksContent.steps[1].label}
            </p>
            <h3 className={`text-3xl font-semibold ${theme.text} mb-4`}>
              {howItWorksContent.steps[1].title}
            </h3>

            <p className={`${theme.textSecondary} mb-6`}>
              {howItWorksContent.steps[1].description}
            </p>

            <ul className="space-y-3">
              {howItWorksContent.steps[1].points?.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-[#c81c27] mt-1 rotate-180" />
                  <span className={theme.textSecondary}>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CARD 3 — RIGHT */}
          <motion.div
            variants={fadeInRight}
            className={`relative ${theme.card} rounded-2xl p-8 shadow-sm`}
          >
            <div
              className={`relative z-10 flex flex-col justify-end ${theme.textSecondary}`}
            >
              <p className={`${theme.primaryText} text-sm mb-2`}>
                {howItWorksContent.steps[2].label}
              </p>
              <h3 className="text-3xl font-semibold mb-4 text-left">
                {howItWorksContent.steps[2].title}
              </h3>
              <p className="text-left">
                {howItWorksContent.steps[2].description}
              </p>
            </div>

            <motion.div variants={fadeUp}>
              <img
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86"
                alt="Execution & Optimization"
                className="w-full h-48 object-cover rounded-xl mt-6"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
