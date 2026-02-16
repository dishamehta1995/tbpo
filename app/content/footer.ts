const year = new Date().getFullYear();
export const footerContent = {
  columns: [
    {
      title: "Our Company",
      links: [
        { label: "About Us", href: "/aboutus" },
        { label: "Industries", href: "/industries" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/#contact" },
      ],
    },
    {
      title: "Our Services",
      links: [
        {
          label: "Customer Service Management",
          href: "/services/customer-service-management",
        },
        { label: "Cross Sales", href: "/services/cross-sales" },
        { label: "Lead Generation", href: "/services/lead-generation" },
        { label: "Collections", href: "/services/collections" },
        { label: "Dealer Management", href: "/services/dealer-management" },
        { label: "Quality Monitoring", href: "/services/quality-monitoring" },
        { label: "Chatbot & Technology", href: "/services/chatbot-technology" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],

  contact: {
    phone: "+1 (999) 888-77-66",
    email: "hello@taurusbpo.com",
  },

  copyright: `© ${year} Taurus BPO. All Rights Reserved. Designed by AdsCult`,
};
