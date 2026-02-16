"use client";

import { Truck, MapPin, Car, Droplet, Store } from "lucide-react";

const items = [
  {
    title: "Milk Delivery",
    description:
      "Offering completely enhanced mobile app solution that meet the challenge of your everyday needs.",
    icon: Truck,
  },
  {
    title: "Cloth Diaper Delivery",
    description:
      "Automate and track cloth diaper subscription business with a single AI platform.",
    icon: MapPin,
  },
  {
    title: "Taxi Booking",
    description: "Make most of your business with a taxi app solution.",
    icon: Car,
  },
  {
    title: "Water Delivery",
    description:
      "A smart water delivery solution that provides the flexibility to scale water delivery business.",
    icon: Droplet,
  },
  {
    title: "Retail & eCommerce",
    description:
      "Complete mobile app development solutions to retail and eCommerce industry.",
    icon: Store,
  },
];

export default function UseCaseLayout() {
  return (
    <section className="bg-[#fbf3ef] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`relative bg-white rounded-2xl px-7 py-8 shadow-sm border border-[#f1e6df]
                ${i % 2 !== 0 ? "md:translate-y-24" : ""}`}
              >
                {/* Soft blob */}
                <div className="absolute -top-5 left-6 h-12 w-12 rounded-full bg-gradient-to-br from-pink-200 to-orange-200 opacity-70 blur-sm" />

                {/* Icon */}
                <div className="relative mb-4">
                  <Icon className="h-9 w-9 text-[#f26a3d]" />
                </div>

                <h3 className="text-[17px] font-semibold text-[#1f2937] mb-2">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-[#6b7280]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
