"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../components/constant";
import { ArrowRight } from "lucide-react";
import { RightCurvedGrid } from "../components/RightCurvedGrid";
import { lightTheme } from "../utils/theme";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import UseCasesGrid from "@/components/UseCaseGrid";
import IndustriesLayout from "@/components/IndustriesLayout";
import Hero from "../components/sections/AboutUs/Hero";

const industries = [
  "BFSI",
  "Health Care",
  "Housing",
  "Telecom",
  "Automobiles",
  "D2H",
  "Insurance",
  "Payment Solutions",
  "HRO",
  "FMCG",
  "Consumer Durables",
  "Agriculture",
];

export default function IndustriesSection() {
  const theme = lightTheme;
  return (
    <div className={theme.bg}>
      <Navigation theme={theme} />
      <Hero
        bgImage={
          "https://images.unsplash.com/photo-1480944657103-7fed22359e1d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={"Industries We Serve"}
        subtitle={
          "Delivering excellence across diverse sectors with tailored BPO solutions"
        }
      />

      <IndustriesLayout />
      <ContactForm theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
