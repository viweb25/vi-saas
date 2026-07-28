"use client";

import Link from "next/link";
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiClock,
  FiShield,
  FiAward,
  FiHome,
  FiBriefcase,
  FiChevronRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Terrace & Roof", href: "/services#terrace" },
    { label: "Basement & Foundation", href: "/services#basement" },
    { label: "Bathroom & Wet Areas", href: "/services#bathroom" },
    { label: "Water Tanks", href: "/services#water-tanks" },
    { label: "External Walls", href: "/services#walls" },
    { label: "Expansion Joints", href: "/services#expansion-joints" },
  ];

  return (
    <footer className="bg-[#1B1F1E] text-[#ECE6D8] border-t-2 border-[#E3982F]/20 overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#4A5A56]/40">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#E3982F] border-2 border-[#1B1F1E] flex items-center justify-center text-[#1B1F1E] font-['Archivo_Black'] text-lg">
                S
              </div>
              <div>
                <span className="font-['Archivo_Black'] text-xl tracking-[-.01em] text-[#ECE6D8]">
                  STRATA
                </span>
                <span className="block text-[10px] font-['IBM_Plex_Mono'] text-[#E3982F] tracking-[.14em] uppercase">
                  Waterproofing
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-[#C9D3D1] leading-relaxed font-['Work_Sans']">
              Managed by <strong className="text-[#ECE6D8] font-semibold">R. Rajendran</strong>. Delivering premium waterproofing solutions for residential, commercial, and industrial buildings with trusted quality, durability, and professional workmanship.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full border border-[#4A5A56] flex items-center justify-center text-[#C9D3D1] hover:text-[#E3982F] hover:border-[#E3982F] transition-all duration-200"
                aria-label="Facebook"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full border border-[#4A5A56] flex items-center justify-center text-[#C9D3D1] hover:text-[#E3982F] hover:border-[#E3982F] transition-all duration-200"
                aria-label="Instagram"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full border border-[#4A5A56] flex items-center justify-center text-[#C9D3D1] hover:text-[#E3982F] hover:border-[#E3982F] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full border border-[#4A5A56] flex items-center justify-center text-[#C9D3D1] hover:text-[#E3982F] hover:border-[#E3982F] transition-all duration-200"
                aria-label="YouTube"
              >
                <FiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-['IBM_Plex_Mono'] font-bold tracking-[.14em] text-[#E3982F] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-[#C9D3D1] hover:text-[#E3982F] transition-colors"
                  >
                    <FiChevronRight className="w-3.5 h-3.5 text-[#E3982F] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-['IBM_Plex_Mono'] font-bold tracking-[.14em] text-[#E3982F] uppercase">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-[#C9D3D1] hover:text-[#E3982F] transition-colors"
                  >
                    <FiChevronRight className="w-3.5 h-3.5 text-[#E3982F] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-5">
            <h3 className="text-xs font-['IBM_Plex_Mono'] font-bold tracking-[.14em] text-[#E3982F] uppercase">
              Contact Us
            </h3>
            
            {/* Address */}
            <div className="flex gap-3">
              <FiMapPin className="w-5 h-5 text-[#E3982F] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[#C9D3D1] leading-relaxed">
                  No. 1/312 Saravanan Street,<br />
                  Jalladianpet, Pallikaranai,<br />
                  Chennai - 600100
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <FiMail className="w-5 h-5 text-[#E3982F] flex-shrink-0 mt-0.5" />
              <div>
                <a 
                  href="mailto:R.RajendraRamaswamy@gmail.com" 
                  className="text-sm text-[#C9D3D1] hover:text-[#E3982F] transition-colors break-all"
                >
                  R.RajendraRamaswamy@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <FiPhone className="w-5 h-5 text-[#E3982F] flex-shrink-0 mt-0.5" />
              <div>
                <a 
                  href="tel:+918939083310" 
                  className="text-sm text-[#C9D3D1] hover:text-[#E3982F] transition-colors"
                >
                  +91 89390 83310
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-3">
              <FiClock className="w-5 h-5 text-[#E3982F] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[#C9D3D1]">
                  Mon–Sat, 9am – 7pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-8 flex flex-wrap justify-center gap-6 md:gap-12 border-b border-[#4A5A56]/40">
          <div className="flex items-center gap-3">
            <FiShield className="w-5 h-5 text-[#E3982F]" />
            <span className="text-xs font-['IBM_Plex_Mono'] text-[#C9D3D1] tracking-[.04em] uppercase">
              Certified Applicators
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FiAward className="w-5 h-5 text-[#E3982F]" />
            <span className="text-xs font-['IBM_Plex_Mono'] text-[#C9D3D1] tracking-[.04em] uppercase">
              5–10 Year Warranty
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FiHome className="w-5 h-5 text-[#E3982F]" />
            <span className="text-xs font-['IBM_Plex_Mono'] text-[#C9D3D1] tracking-[.04em] uppercase">
              Residential & Commercial
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FiBriefcase className="w-5 h-5 text-[#E3982F]" />
            <span className="text-xs font-['IBM_Plex_Mono'] text-[#C9D3D1] tracking-[.04em] uppercase">
              1,200+ Sites Treated
            </span>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-xs font-['IBM_Plex_Mono'] text-[#6d7d7a]">
          <p>
            © {currentYear} STRATA Waterproofing. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#E3982F] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#E3982F] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#4A5A56]">|</span>
            <span className="text-[#6d7d7a]">*Zero callback leaks since 2019</span>
          </div>
        </div>

      </div>
    </footer>
  );
}