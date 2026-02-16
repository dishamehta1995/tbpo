"use client";

import {
  Landmark,
  HeartPulse,
  Home,
  Wifi,
  Car,
  Tv,
  ShieldCheck,
  CreditCard,
  Users,
  ShoppingCart,
  Refrigerator,
  Wheat,
} from "lucide-react";

const industries = [
  {
    title: "BFSI",
    description:
      "Secure, scalable process solutions for banking, financial services, and insurance operations.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Health Care",
    description:
      "Streamlined support services to improve patient engagement and operational efficiency.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Housing",
    description:
      "Technology-enabled solutions to simplify housing finance and customer service workflows.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Telecom",
    description:
      "Customer lifecycle management and support solutions for telecom service providers.",
    icon: Wifi,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Automobiles",
    description:
      "Dealer management, customer support, and sales process optimization for auto brands.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "D2H",
    description:
      "End-to-end customer service and subscription management for D2H service providers.",
    icon: Tv,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Insurance",
    description:
      "Claims processing, policy servicing, and customer engagement solutions for insurers.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Payment Solutions",
    description:
      "Transaction support, fraud prevention, and customer assistance for digital payments.",
    icon: CreditCard,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "HRO",
    description:
      "HR outsourcing services to manage payroll, employee support, and back-office operations.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "FMCG",
    description:
      "Sales support, distributor management, and customer engagement for FMCG brands.",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Consumer Durables",
    description:
      "After-sales support, service management, and customer experience solutions.",
    icon: Refrigerator,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Agriculture",
    description:
      "Digital enablement and support services for agribusinesses and rural operations.",
    icon: Wheat,
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function IndustriesLayout() {
  return (
    <section className="pb-20 mb-20">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          {industries.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`relative bg-white rounded-2xl px-7 py-8 shadow-sm border border-[#f1e6df]
                ${i % 2 !== 0 ? "md:translate-y-24" : ""}`}
              >
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 w-full object-cover"
                  />
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
