"use client";

import { ArrowRight } from "lucide-react";
import { aboutContent } from "@/content/about";
import { motion } from "framer-motion";
import { fadeInRight, fadeUp, stagger } from "../constant";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { StatNumber } from "../StatNumber";

type AboutUsProps = {
  theme: {
    bg: string;
    text: string;
    textSecondary: string;
    card: string;
    primaryText: string;
  };
};

export function AboutUs({ theme }: AboutUsProps) {
  const router = useRouter(); // ✅ Next.js router

  return (
    <section id="about" className={`py-20 bg-gradient-3-t`}>
      <div className="container mx-auto px-6">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className={`${theme.primaryText} text-xl font-semibold tracking-wider uppercase mb-6`}
        >
          {aboutContent.sectionLabel}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.h2
              variants={fadeUp}
              className={`text-5xl font-semibold mb-6 ${theme.text}`}
            >
              <span className={theme.primaryText}>
                {aboutContent.headline.primary}
              </span>{" "}
              {aboutContent.headline.secondary}
            </motion.h2>

            {/* ✅ Next Image */}
            <motion.div variants={fadeUp} className="mt-8">
              <Image
                src="https://images.pexels.com/photos/7915239/pexels-photo-7915239.jpeg"
                alt="AI Technology"
                width={500}
                height={500}
                className="rounded-2xl aspect-5/6 object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out w-full"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`${theme.card} rounded-2xl p-8 shadow-lg `}
          >
            <motion.p
              variants={fadeUp}
              className={`${theme.textSecondary} text-xl mb-8`}
            >
              {aboutContent.description}
            </motion.p>

            {/* ✅ Navigation fixed */}
            <motion.button
              variants={fadeUp}
              onClick={() => router.push("/aboutus")}
              className="bg-[rgba(200,28,39,0.15)] border border-[#c81c27] text-[#c81c27] px-6 py-3 rounded-full flex items-center gap-2 mb-8 hover:bg-[#c81c27] hover:text-white transition"
            >
              {aboutContent.cta.label}
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Highlights */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="space-y-6"
            >
              {aboutContent.highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <ArrowRight
                    className={`w-5 h-5 ${theme.primaryText} rotate-180`}
                  />
                  <div>
                    <h3 className={`text-2xl font-semibold ${theme.text} mb-1`}>
                      {item.title}
                    </h3>
                    <p className={theme.textSecondary}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="grid grid-cols-2">
                {aboutContent.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className={`
                      flex flex-col
                      ${
                        index % 2 === 0
                          ? "pr-8 border-r border-gray-300"
                          : "pl-8"
                      }
                      ${index < 2 ? "pb-8 border-b border-gray-300" : "pt-8"}
                    `}
                  >
                    <p className={`text-4xl font-semibold ${theme.text}`}>
                      <StatNumber value={stat.value} />
                    </p>
                    <p className={theme.textSecondary}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
