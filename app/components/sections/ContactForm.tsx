"use client";

import { contactContent } from "@/content/contact";
import { motion } from "framer-motion";
import { fadeUp, stagger, fadeInLeft } from "../constant";

type ContactFormProps = {
  theme: {
    bg: string;
    text: string;
    textSecondary: string;
    card: string;
    primary: string;
  };
};

export function ContactForm({ theme }: ContactFormProps) {
  return (
    <section id="contact" className={`py-20 bg-gradient-3-b`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT — VISUAL BLOCK (UNCHANGED CSS) */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            className="bg-gray-300 h-60 md:h-80 rounded-2xl order-2 md:order-1"
          >
            <img
              src="https://images.pexels.com/photos/8866726/pexels-photo-8866726.jpeg"
              alt="contact"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            className="order-1 md:order-2"
          >
            <motion.h2
              variants={fadeUp}
              className={`text-3xl md:text-5xl font-semibold ${theme.text} mb-4 md:mb-6`}
            >
              {contactContent.headline}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className={`${theme.textSecondary} text-base md:text-xl mb-6 md:mb-8`}
            >
              {contactContent.description}
            </motion.p>

            <motion.form
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {contactContent.fields.map((field) => (
                <motion.input
                  key={field.name}
                  variants={fadeUp}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`${theme.card} px-4 md:px-6 py-3 md:py-4 rounded-full ${theme.textSecondary} focus:outline-none focus:ring-2 focus:ring-[#c81c27] text-sm md:text-base`}
                />
              ))}

              <motion.textarea
                variants={fadeUp}
                placeholder={contactContent.messagePlaceholder}
                rows={4}
                className={`sm:col-span-2 ${theme.card} px-4 md:px-6 py-3 md:py-4 rounded-2xl ${theme.textSecondary} focus:outline-none focus:ring-2 focus:ring-[#c81c27] text-sm md:text-base`}
              />

              <motion.div
                variants={fadeUp}
                className="sm:col-span-2 mt-2 md:mt-4"
              >
                <button
                  type="submit"
                  className={`${theme.primary} hover:bg-[#a01620] text-white px-8 md:px-10 py-3 md:py-4 rounded-full transition w-full md:w-auto text-sm md:text-base`}
                >
                  {contactContent.submitLabel}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
