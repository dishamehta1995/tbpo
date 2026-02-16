"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RightCurvedGrid } from "../RightCurvedGrid";

const industries = [
  "BFSI",
  "Health Care",
  "Housing",
  "Telecom",
  "Automobiles",
  "D2H",
  "Insurance",
  "Payment Solutions",
  "HRO",
  "FMCG",
  "Consumer Durables",
  "Agriculture",
];

// constant.ts

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function IndustriesSection() {
  return (
    <section className="relative min-h-screen bg-gradient-3-t overflow-hidden py-26 py-20 bg-gradient-3-b">
      {/* Right curved dotted background */}

      <div className="container mx-auto px-6 mt-12 mb-12">
        {/* Header */}
        <div className="relative">
          <RightCurvedGrid />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mb-12 mt-12 py-16 relative"
          >
            <motion.h2
              variants={fadeUp}
              className="text-5xl font-semibold text-[#262138] mb-4"
            >
              Industries We Serve
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[#4a4363] text-xl mb-6">
              Taurus BPO brings deep domain and industry experience to build
              unique perspectives and meet the challenging requirements of
              clients from diverse industries. Leveraging our triple bottom line
              approach, we drive growth, innovation, and measurable business
              outcomes.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#c81c27] text-white px-6 py-3 rounded-full hover:bg-[#a01620] transition"
            >
              Let’s Talk
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry}
              variants={fadeUp}
              className={`rounded-2xl p-8 shadow-lg bg-white flex flex-col justify-between min-h-[180px] ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[rgba(200,28,39,0.15)] mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#c81c27]" />
                </div>

                <h3 className="text-2xl font-semibold text-[#262138] mb-2">
                  {industry}
                </h3>

                <p className="text-[#4a4363] text-sm">
                  Domain-specific operations, customer engagement, and process
                  optimization tailored for {industry.toLowerCase()} businesses.
                </p>
              </div>

              <span className="text-[#c81c27] mt-6 inline-flex items-center gap-2 font-medium">
                Explore solutions <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mt-12 text-center pt-8"
        >
          <h3 className="text-3xl font-semibold text-[#262138] mb-4">
            Let’s Get Started
          </h3>

          <p className="text-[#4a4363] mb-8">
            Leave a message and we’ll connect to discuss your digital needs.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#c81c27] text-white px-8 py-3 rounded-full hover:bg-[#a01620] transition"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
