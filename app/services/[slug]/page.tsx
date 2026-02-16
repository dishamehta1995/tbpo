"use client";
import { Impact } from "../../components/sections/AboutUs/Impact";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { servicesContent } from "@/content/services";
import { aboutContent } from "@/content/about";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../components/constant";
import * as Icons from "lucide-react";
import { lightTheme } from "../../utils/theme";
import { Navigation } from "../../components/layout/Navigation";
import { Footer } from "../../components/layout/Footer";
import Hero from "@/components/sections/AboutUs/Hero";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ServiceDetailPage() {
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
      <div className={theme.bg}>
        <Navigation theme={theme} />
        <main className="py-20 text-center">
          <p className={theme.text}>Service not found</p>
        </main>
        <Footer theme={theme} />
      </div>
    );
  }

  return (
    <div className={theme.bg}>
      <Navigation theme={theme} />
      <main className="bg-white">
        {/* HERO */}
        <Hero
          bgImage={service.page.image}
          title={service.page.hero}
          subtitle={service.page.intro}
        />

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
                          <Icon
                            className={`w-6 h-6 ${
                              isColorA ? "text-[#c81c27]" : "text-black"
                            }`}
                          />
                        </div>
                      )}
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg text-black">
                          {point.text}
                        </h3>
                        {(point as any).subtext && (
                          <p className="text-sm text-gray-500 mt-1">
                            {(point as any).subtext}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        {(service.page as any).features && (
          <section className="py-20 bg-gradient-3-t">
            <div className="container mx-auto px-6">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className={`text-5xl font-semibold ${theme.text} mb-12 text-center`}
              >
                Key Features
              </motion.h2>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                className="grid md:grid-cols-2 gap-8"
              >
                {(service.page as any).features.map((feature: any) => (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    className={`${theme.card} rounded-2xl p-8`}
                  >
                    <h3 className={`text-2xl font-semibold ${theme.text} mb-4`}>
                      {feature.title}
                    </h3>
                    <p className={theme.textSecondary}>{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 text-center bg-gradient-2">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-5xl font-semibold text-white mb-6"
          >
            Ready to get started?
          </motion.h2>

          <motion.a
            variants={fadeUp}
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#c81c27] text-white px-8 py-4 rounded-full hover:bg-[#a01620] transition"
          >
            Get in Touch
            <ArrowRight />
          </motion.a>
        </section>
      </main>
      <ContactForm theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
