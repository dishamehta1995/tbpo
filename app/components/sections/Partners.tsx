"use client";

import { collaboration } from "@/content/partners";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export const Partners = () => {
  const partners = collaboration.partners;

  const controls = useAnimation();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;

    controls.start({
      x: [-0, -trackWidth],
      transition: {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* LEFT FADE */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 10,
            height: "100%",
            width: "64px",
            background:
              "linear-gradient(to right, var(--background), transparent)",
          }}
        />

        {/* RIGHT FADE */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 10,
            height: "100%",
            width: "64px",
            background:
              "linear-gradient(to left, var(--background), transparent)",
          }}
        />

        {/* TRACK */}
        <motion.div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            x,
          }}
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={startAnimation}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              style={{
                minWidth: "220px",
                padding: "1.5rem 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: "#e5e7eb",
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "var(--foreground)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.background = "#525252";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "#e5e7eb";
              }}
            >
              {partner.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
