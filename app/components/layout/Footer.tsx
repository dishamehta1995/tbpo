import { footerContent } from "@/content/footer";
import { Facebook, Linkedin } from "lucide-react";

type FooterProps = {
  theme: {
    footerBg: string;
  };
  className?: string;
};

export function Footer({ theme, className = "bg-white" }: FooterProps) {
  return (
    <footer
      className={`relative overflow-hidden py-16 ${className} border-t border-[#c81c27]/30`}
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#c81c27]/5 to-transparent" />

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Columns */}
          {footerContent.columns.map((column, index) => (
            <div key={column.title} className="flex flex-col">
              {index === 0 && (
                <a href="/" className="mb-6 inline-block">
                  <img
                    src="/logo-black.png"
                    alt="Logo"
                    className="w-28 md:w-32"
                  />
                </a>
              )}

              <p className="font-semibold mb-4">{column.title}</p>

              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block opacity-80 mb-2 hover:opacity-100 hover:text-[#c81c27] transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          {/* Contact + Socials */}
          <div className="text-left sm:text-left lg:text-right">
            <p className="font-semibold mb-4">Contact</p>
            <p className="opacity-80 mb-2">{footerContent.contact.phone}</p>
            <p className="opacity-80">{footerContent.contact.email}</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 lg:justify-end">
              <a
                href="https://www.facebook.com/taurusbpoindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b12b30]  transition"
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://www.linkedin.com/company/taurus-bpo-services-india-llp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b12b30]  transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px my-8 bg-gradient-to-r from-transparent via-[#c81c27]/30 to-transparent" />

        {/* Bottom */}
        <div className="text-center opacity-60 text-sm">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}
