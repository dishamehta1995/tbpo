"use client";

import { heroContent } from "@/content/hero";
import { ArrowRight } from "lucide-react";
import { careersContent } from "@/content/careers";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../components/constant";
import CareersHero from "../components/sections/CareerHero";
import CareerWhyUs from "../components/sections/CareerWhyUs";
import { CareersGrowthSection } from "../components/sections/CareersGrowthSection";
import ProcessSection from "../components/sections/ProcessSection";
import { CareersLocationsSection } from "../components/sections/CareersLocationsSection";
import { lightTheme } from "../utils/theme";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import Hero from "@/components/sections/AboutUs/Hero";

export default function CareersPage() {
  const theme = lightTheme;

  const steps = [
    {
      number: "20",
      title: "750+ Employees",
      description: "Joined our company",
    },
    {
      number: "21",
      title: "1200+ Employees",
      description: "Rapid expansion phase",
    },
    {
      number: "22",
      title: "2000+ Employees",
      description: "Scaled across India",
    },
  ];

  const heroContent = {
    label: "Our Growth",
    heading: "Here's how we have grown!",
    description: "Great vision with great people. It matters a lot to us!",
  };

  return (
    <div className={theme.bg}>
      <Navigation theme={theme} />
      <main>
        {/* HERO */}
        <Hero
          bgImage="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Build the CRM for the next generation"
          subtitle="We’re redefining CRM — shipping powerful, groundbreaking features at
          every turn. Join us to revolutionize the world’s largest software
          category."
        />
        <CareerWhyUs />
        <ProcessSection steps={steps} heroContent={heroContent} />
        <CareersLocationsSection
          careersContent={careersContent}
          theme={theme}
        />

        {/* FINAL CTA */}
        <section className="py-20 text-center  ">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-5xl font-semibold mb-4"
          >
            {careersContent.finalCta.title}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl  mb-10">
            {careersContent.finalCta.subtitle}
          </motion.p>

          <motion.a
            variants={fadeUp}
            href={careersContent.finalCta.href}
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#c81c27] text-white px-8 py-2 my-8 rounded-full hover:bg-[#a01620] transition"
          >
            {careersContent.finalCta.button}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </section>
      </main>
      <Footer theme={theme} />
    </div>
  );
}
