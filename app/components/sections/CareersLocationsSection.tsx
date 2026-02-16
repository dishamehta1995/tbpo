"use client";

import { fadeUp } from "../constant";

import { useState } from "react";
import { motion } from "framer-motion";

export function CareersLocationsSection({
  theme,
  careersContent,
}: {
  theme: any;
  careersContent: any;
}) {
  const cities = careersContent.locations.cities;

  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <section className="py-20 bg-gradient-3-b overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={`text-5xl font-semibold ${theme.text} text-center mb-6`}
        >
          {careersContent.locations.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={`${theme.textSecondary} text-center mb-12`}
        >
          {careersContent.locations.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* LEFT: City list */}
          <div className="space-y-4">
            {cities.map((city: any) => {
              const isActive = city.city === selectedCity.city;

              return (
                <motion.div
                  key={city.city}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => setSelectedCity(city)}
                  className={`cursor-pointer rounded-2xl p-6 transition border ${
                    isActive
                      ? "border-[#c81c27] bg-[rgba(200,28,39,0.13)]"
                      : `${theme.card} hover:border-[#c81c27]`
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      isActive ? "text-[#c81c27]" : theme.text
                    }`}
                  >
                    {city.city}
                  </h3>
                  <p className={`${theme.textSecondary} text-sm`}>
                    {city.address}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Map */}
          <div className="md:col-span-2  rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              key={selectedCity.city} // forces refresh when city changes
              className="w-full h-full rounded-2xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${selectedCity.address}, ${selectedCity.city}`,
              )}&z=12&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
