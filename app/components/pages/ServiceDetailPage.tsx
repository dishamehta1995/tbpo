("use client");
import { Impact } from "./../sections/AboutUs/Impact";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { servicesContent } from "@/content/services";
import { aboutContent } from "@/content/about";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../constant";
import * as Icons from "lucide-react";
import { lightTheme } from "../../utils/theme";

export function ServiceDetailPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const theme = lightTheme;

  const service = servicesContent.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <p className={theme.text}>Service not found</p>
      </div>
    );
  }

  return (
    <main className="bg-gradient-3-b">
      {/* HERO */}
      <section className="py-20 bg-gradient-2">
        <div className=" mx-auto px-6  text-center py-20">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`text-6xl font-semibold  mb-6 text-white`}
          >
            {service.page.hero}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={`text-white text-xl opacity-50`}
          >
            {service.page.intro}
          </motion.p>
        </div>
      </section>
      <section className="py-20 ">
        <div className="container mx-auto px-6 ">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className={`text-5xl font-semibold ${theme.text} mb-12 text-center`}
          >
            {service.title}
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl"
          >
            {service.page.points.map((point, index) => {
              const patternIndex = index % 4;
              const isColorA = patternIndex === 0 || patternIndex === 3;

              const Icon = (Icons as any)[point.icon];

              return (
                <motion.div
                  key={point.text}
                  variants={fadeUp}
                  className={`rounded-2xl p-6 shadow-lg  gap-4 
                  bg-white text-black`}
                >
                  <div className="flex items-start">
                    {Icon && (
                      <div
                        className={`p-2 py-1 rounded-lg ${
                          isColorA ? "bg-white/10" : "bg-black/5"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                    )}

                    <p className={`px-2 text-xl font-semibold `}>
                      {point.text}
                    </p>
                  </div>
                  <br />
                  <hr />
                  <br />
                  <p className="text-sm ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/*          <motion.div
            variants={fadeUp}
            className={`${theme.card} rounded-2xl p-8 mt-12`}
          >
            <p className={`${theme.text} text-xl font-semibold mb-2`}>
              Business Impact
            </p>
            <p className={theme.textSecondary}>{service.page.outcome}</p>
          </motion.div>  */}
        </div>
      </section>
      <Impact />
      <section className="py-24 text-center bg-gradient-3-b">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={`text-5xl font-semibold ${theme.text} mb-6`}
        >
          {aboutContent.pageCta.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={`${theme.textSecondary} text-xl mb-10 max-w-3xl mx-auto`}
        >
          {aboutContent.pageCta.description}
        </motion.p>

        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          href={aboutContent.pageCta.href}
          className="inline-flex items-center gap-2 bg-[#c81c27] text-white px-10 py-4 rounded-full transition"
        >
          {aboutContent.pageCta.button}
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </section>
    </main>
  );
}
