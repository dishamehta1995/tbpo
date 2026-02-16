"use client";

import { motion } from "framer-motion";
import React from "react";
import { aboutContent } from "@/content/about";
import { fadeUp } from "../../constant";
import { lightTheme } from "../../../utils/theme";

type Props = {};

export const Story = (props: Props) => {
  const theme = lightTheme;

  return (
    <section className={`py-20 bg-gradient-3-b`}>
      <div className=" mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${theme.text} mb-6 md:mb-8`}
            >
              {aboutContent.story.title}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className={`space-y-4 md:space-y-6 text-base md:text-xl ${theme.textSecondary}`}
            >
              {aboutContent.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden"
          >
            <motion.img
              variants={fadeUp}
              src="https://images.pexels.com/photos/7915239/pexels-photo-7915239.jpeg"
              alt="AI Technology"
              className=" h-full w-auto object-cover rounded-2xl mt-8 aspect-square filter grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              style={{ filter: "grayscale(100%)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "grayscale(0%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "grayscale(100%)")
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
