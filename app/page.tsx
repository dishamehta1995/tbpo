"use client";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { HowItWorks } from "./components/sections/HowItWorks";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { CareersCTA } from "./components/sections/CareersCTA";
import { ContactForm } from "./components/sections/ContactForm";
import { Partners } from "./components/sections/Partners";
import { HowItWorksV2 } from "./components/sections/HowItWorksV2";
import { lightTheme } from "./utils/theme";
import { AboutUs } from "./components/sections/AboutUs";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";

export default function HomePage() {
  const theme = lightTheme;

  return (
    <div>
      {/* Hero */}
      <Navigation theme={theme} />
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
      <Footer theme={theme} />
    </div>
  );
}
