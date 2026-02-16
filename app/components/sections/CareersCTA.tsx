"use client";

import { ArrowRight } from "lucide-react";
import { careersContentSection } from "@/content/careers";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../constant";

type CareersCTAProps = {
  theme: {
    bg: string;
    text: string;
    textSecondary: string;
    card: string;
  };
};

export function CareersCTA({ theme }: CareersCTAProps) {
  return (
    <section className={`py-20 bg-gradient-3-t`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT — Text */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible">
            <motion.h2
              variants={fadeUp}
              className={`text-5xl font-semibold ${theme.text} mb-6`}
            >
              {careersContentSection.headline}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className={`${theme.textSecondary} text-xl mb-8`}
            >
              {careersContentSection.subHeadline}
            </motion.p>

            <motion.div variants={stagger} className="flex gap-4">
              <motion.a
                variants={fadeUp}
                href={careersContentSection.cta.href}
                className="bg-[#c81c27] hover:bg-[#a01620] text-white px-8 py-4 rounded-full transition"
              >
                {careersContentSection.cta.label}
              </motion.a>

              <motion.button
                variants={fadeUp}
                className={`${theme.card} border border-gray-300 ${theme.textSecondary} px-8 py-4 rounded-full flex items-center gap-2 hover:border-[#c81c27] transition`}
              >
                More
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT — Visual placeholders (UNCHANGED CSS) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="w-full aspect-square bg-gray-300 rounded-full"
              >
                <img
                  src={`/leader${i}.jpg`}
                  className="w-full bg-gray-300 rounded-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
