"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { RightCurvedGrid } from "../RightCurvedGrid";

export default function CareersHero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Right curved dotted background */}
      <RightCurvedGrid />
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay filter */}
      //{" "}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
      {/* Hero Content */}
      <div className="relative z-10 px-6 py-20 pt-26">
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight max-w-4xl text-white mb-6">
          Our mission is to build the CRM for the next generation.
        </h1>

        <p className="text-xl text-white max-w-4xl mb-8">
          We’re redefining CRM — shipping powerful, groundbreaking features at
          every turn. Join us to revolutionize the world’s largest software
          category.
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/aboutus")}
            className="bg-[rgba(200,28,39,0.15)] border border-[#c81c27] text-[#c81c27] px-6 py-3 rounded-full flex items-center gap-2 mb-8 hover:bg-[#c81c27] hover:text-white transition"
          >
            Join the team
          </button>
        </div>
      </div>
    </section>
  );
}
