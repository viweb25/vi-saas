'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FiMenu, 
  FiX, 
  FiPhoneCall, 
  FiArrowRight,
  FiHome,
  FiLayers,
  FiBriefcase,
  FiInfo,
  FiImage,
  FiHelpCircle,
  FiMail
} from "react-icons/fi";

// Navigation items
const navItems = [
  { name: "Home", href: "/", icon: FiHome },
  { name: "Services", href: "/services", icon: FiLayers },
  { name: "Projects", href: "/projects", icon: FiBriefcase },
  { name: "About", href: "/about", icon: FiInfo },
  { name: "Gallery", href: "/gallery", icon: FiImage },
  { name: "FAQ", href: "/faq", icon: FiHelpCircle },
  { name: "Contact", href: "/contact", icon: FiMail },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#ECE6D8]/95 backdrop-blur-md shadow-lg border-b-2 border-[#1B1F1E] py-2"
          : "bg-[#ECE6D8] py-3 sm:py-4"
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo - STRATA with mark */}
        <Link 
          href="/" 
          className="flex items-center group py-1 flex-shrink-0"
          aria-label="STRATA - Home"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 bg-[#E3982F] border-2 border-[#1B1F1E] inline-block"></span>
            <span className="font-['Archivo_Black'] text-[21px] tracking-[-.01em] text-[#1B1F1E]">
              STRATA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden lg:flex items-center gap-8"
          aria-label="Main navigation"
          role="navigation"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-['IBM_Plex_Mono'] text-[13px] tracking-[.03em] uppercase transition-all duration-200 relative pb-1 ${
                  isActive 
                    ? "text-[#E3982F]" 
                    : "text-[#1B1F1E] hover:text-[#E3982F]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3982F] rounded-full transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:+919876543210"
            className="font-['IBM_Plex_Mono'] text-[13.5px] text-[#1B1F1E] hover:text-[#E3982F] transition-colors"
            aria-label="Call us at +91 98765 43210"
          >
            +91 98765 43210
          </a>

          <Link
            href="/contact"
            className="btn inline-flex items-center gap-2.5 font-['IBM_Plex_Mono'] text-[13.5px] tracking-[.04em] uppercase px-6 py-3.5 border-2 border-[#1B1F1E] bg-[#1B1F1E] text-[#ECE6D8] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
          >
            Get Inspection
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#DFD6C1] border-2 border-[#1B1F1E] text-[#1B1F1E] hover:text-[#E3982F] hover:border-[#E3982F] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E3982F]/50 flex-shrink-0"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX className="w-5 h-5" aria-hidden="true" />
          ) : (
            <FiMenu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="bg-[#1B1F1E] border-b-2 border-[#4A5A56] shadow-2xl p-5">
          <nav className="grid grid-cols-4 gap-2.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const IconComponent = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-200 gap-1.5 ${
                    isActive 
                      ? "bg-[#E3982F] text-[#1B1F1E] shadow-lg shadow-[#E3982F]/30" 
                      : "bg-[#173339] border border-[#4A5A56] text-[#ECE6D8] hover:bg-[#2E4A4F] hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <IconComponent 
                    className={`w-5 h-5 ${isActive ? "text-[#1B1F1E]" : "text-[#E3982F]"}`} 
                    aria-hidden="true" 
                  />
                  <span className="text-[10px] font-['IBM_Plex_Mono'] font-bold tracking-tight truncate w-full text-center">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Contact Actions */}
          <div className="pt-4 mt-4 border-t border-[#4A5A56] flex flex-col gap-2.5">
            <a
              href="tel:+919876543210"
              className="w-full text-center py-2.5 rounded-xl border-2 border-[#4A5A56] bg-[#173339] text-[#ECE6D8] font-['IBM_Plex_Mono'] text-xs font-semibold flex items-center justify-center gap-2 hover:border-[#E3982F] hover:text-[#E3982F] transition-colors"
              aria-label="Call us at +91 98765 43210"
            >
              <FiPhoneCall className="w-3.5 h-3.5 text-[#E3982F]" aria-hidden="true" />
              <span>+91 98765 43210</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-[#E3982F] hover:bg-[#c9892a] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border-2 border-[#E3982F]"
            >
              <span>Get Inspection</span>
              <FiArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}