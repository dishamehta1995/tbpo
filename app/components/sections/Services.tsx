"use client";

import { useRouter } from "next/navigation"; // ✅ changed
import { ArrowRight } from "lucide-react";
import { servicesContent } from "@/content/services";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeInRight, fadeUp, stagger } from "../constant";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Partners } from "./Partners";
import { style } from "framer-motion/client";

type ServicesProps = {
  theme: {
    bg: string;
    card: string;
    text: string;
    textSecondary: string;
    primaryText: string;
    cardBorder: string;
  };
};

export function Services({ theme }: ServicesProps) {
  const router = useRouter(); // ✅ Next router

  return (
    <div className={`bg-gradient-3-b`}>
      <Partners />

      <section id="service" className={`py-20 bg-gradient-3-b`}>
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className={`${theme.primaryText} text-base md:text-xl font-semibold uppercase mb-4`}
          >
            {servicesContent.sectionLabel}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className={`text-3xl md:text-5xl font-semibold ${theme.text} mb-4`}
          >
            {servicesContent.sectionTitle}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className={`${theme.textSecondary} text-base md:text-xl max-w-3xl mb-8 md:mb-12`}
          >
            {servicesContent.sectionDescription}
          </motion.p>

          {/* Swiper */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <Swiper
              modules={[Pagination]}
              spaceBetween={24}
              pagination={{ clickable: true }}
              className="py-14 pt-8 [&_.swiper-pagination-bullet-active]:bg-[#c81c27]"
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {servicesContent.services.map((service) => (
                <SwiperSlide
                  key={service.title}
                  className="h-auto pt-8 pb-16"
                  style={{ height: "auto" }}
                >
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`bg-white shadow-xl rounded-2xl p-8 flex flex-col h-full`}
                  >
                    <h3
                      className={`text-lg md:text-2xl font-semibold ${theme.text} mb-4`}
                    >
                      {service.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${theme.textSecondary} border border-gray-300 px-3 py-1 rounded-full text-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className={`${theme.textSecondary} mb-6`}>
                      {service.description}
                    </p>

                    {/* CTA */}
                    <button
                      onClick={() => router.push(`/services/${service.slug}`)}
                      className="mt-auto flex items-center gap-2 text-[#c81c27] hover:gap-3 transition cursor-pointer"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
