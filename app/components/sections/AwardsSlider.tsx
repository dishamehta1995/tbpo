"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function AwardsSlider({ theme, awards }: { theme: any; awards: any }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={16}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      autoHeight
      className="w-full"
    >
      {awards.map((award: any, index: number) => (
        <SwiperSlide key={index} className="py-6 sm:py-8 md:py-10">
          <h3
            className={`text-lg sm:text-2xl md:text-3xl font-semibold ${theme.text} mb-3 sm:mb-4 leading-snug`}
          >
            {award.title}
          </h3>

          <p
            className={`${theme.textSecondary} text-xs sm:text-sm md:text-base`}
          >
            {award.event} · {award.year}
          </p>

          <p
            className={`${theme.textSecondary} mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base`}
          >
            Sponsored by {award.sponsor}
          </p>

          <div className="bg-gray-200 h-48 sm:h-64 md:h-96 mt-6 sm:mt-7 md:mt-8 mb-8 sm:mb-10 md:mb-12 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
