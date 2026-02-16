import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { navigationContent } from "@/content/navigation";
import { useEffect, useState } from "react";

type NavigationProps = {
  theme: any;
};

export function Navigation({ theme }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* Full-width background layer */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "backdrop-blur-md bg-black/70 border-b border-white/10 shadow-lg shadow-black/40"
              : "bg-transparent"
          }
        `}
      >
        {/* Nav container */}
        <nav
          className={`container mx-auto ${
            scrolled ? "px-4 md:px-6 py-3 md:py-4" : "px-4 md:px-6 py-4 md:py-8"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className={`transition-all duration-300 ${
                  scrolled ? "w-14 md:w-16" : "w-16 md:w-20"
                }`}
              />
            </a>

            {/* Desktop Links */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-colors ${
                scrolled ? "text-white/90" : "text-white"
              }`}
            >
              {navigationContent.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#c81c27] transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href={navigationContent.cta.href}
              className={`${theme.primary} hidden md:flex hover:bg-[#a01620] text-white px-6 py-2 rounded-full items-center gap-2 transition`}
            >
              {navigationContent.cta.label}
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden transition ${
                scrolled ? "text-white" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } ${
            scrolled
              ? "backdrop-blur-md bg-black/80 border-t border-white/10"
              : "bg-gradient-2"
          }`}
        >
          <div className="px-6 py-6 space-y-4 text-white">
            {navigationContent.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-white/10 hover:text-[#c81c27] transition"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href={navigationContent.cta.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`${theme.primary} mt-4 inline-flex hover:bg-[#a01620] text-white px-6 py-3 rounded-full items-center gap-2 transition`}
            >
              {navigationContent.cta.label}
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
