"use client";
import { ThemeToggle } from "../ThemeToggle";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { AboutUs } from "../sections/AboutUs";
import { HowItWorks } from "../sections/HowItWorks";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { CareersCTA } from "../sections/CareersCTA";
import { ContactForm } from "../sections/ContactForm";
import { Partners } from "../sections/Partners";
import { getTheme } from "../../utils/theme";
import { HowItWorksV2 } from "../sections/HowItWorksV2";
export function HomePage() {
  const theme = getTheme();

  return (
    <>
      {/* Hero */}
      <section className={`relative ${theme.heroBg} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#c81c27]/10 to-[#0066FF]/10 opacity-50"></div>
        <Hero theme={theme} />
      </section>
      <AboutUs theme={theme} />

      <Services theme={theme} />
      <HowItWorks theme={theme} />
      <WhyChooseUs theme={theme} />
      <CareersCTA theme={theme} />
      <ContactForm theme={theme} />
    </>
  );
}
