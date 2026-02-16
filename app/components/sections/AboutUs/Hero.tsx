import React from "react";
import { motion } from "framer-motion";

import { fadeUp } from "../../constant";
import { lightTheme } from "../../../utils/theme";

type Props = {
  bgImage: string;
  title: string;
  subtitle: string;
};

export const Hero = ({ bgImage, title, subtitle }: Props) => {
  return (
    <section
      className="relative h-[75vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        height: "75vh",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl pt-35 pb-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 text-center"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-gray-200 max-w-3xl opacity-5 text-center m-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
