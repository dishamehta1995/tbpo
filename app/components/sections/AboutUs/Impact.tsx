import React from "react";
import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { fadeUp, stagger } from "../../constant";
import { StatNumber } from "../../StatNumber";
import { lightTheme } from "../../../utils/theme";

type Props = {
  bgColor?: string;
};

export const Impact = ({ bgColor = "bg-gradient" }: Props) => {
  return (
    <>
      <section className={`${bgColor} py-20`}>
        <div className=" mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-5xl font-semibold text-white mb-12"
          >
            {aboutContent.impact.title}
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-4 gap-10"
          >
            {aboutContent.impact.stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <p className="text-5xl font-semibold text-white">
                  <StatNumber value={stat.value} />
                </p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Impact;
