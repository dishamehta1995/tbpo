"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../constant";

const timelineData = [
  {
    label: "2010",
    title: "Foundation",
    description:
      "Taurus BPO was established with a focus on reliability, performance, and long-term partnerships.",
  },
  {
    label: "2015",
    title: "Growth & Expansion",
    description:
      "Expanded service offerings and strengthened operational capabilities across processes.",
  },
  {
    label: "2020+",
    title: "Technology-Driven Scale",
    description:
      "Adoption of automation and innovation to support scalable, high-performance delivery.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-semibold"
        >
          Our Journey
        </motion.h3>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {timelineData.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="rounded-2xl border p-8"
            >
              <p className="text-sm uppercase tracking-widest mb-2">
                {item.label}
              </p>
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-sm opacity-80">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
