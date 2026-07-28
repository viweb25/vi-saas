"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMessageCircle, 
  FiX, 
  FiPhone, 
  FiMail, 
  FiDownload,
  FiArrowRight,
  FiSend,
  FiChevronRight,
  FiClock
} from "react-icons/fi";

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappNumber = "918939083310";
  const whatsappMessage = encodeURIComponent(
    "Hello STRATA Waterproofing, I would like to inquire about your waterproofing services and solutions."
  );

  // Hide widget when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const contactOptions = [
    {
      id: "phone",
      label: "Call Us",
      subLabel: "Quick support",
      icon: FiPhone,
      href: "tel:+918939083310",
      color: "#E3982F",
      bgColor: "bg-[#E3982F]/10",
      hoverBg: "hover:bg-[#E3982F]/20",
      borderColor: "border-[#E3982F]/30",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      subLabel: "Instant chat",
      icon: FiSend,
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      color: "#25D366",
      bgColor: "bg-emerald-500/10",
      hoverBg: "hover:bg-emerald-500/20",
      borderColor: "border-emerald-500/30",
      external: true,
    },
    {
      id: "email",
      label: "Email Us",
      subLabel: "Get a quote",
      icon: FiMail,
      href: "mailto:R.RajendraRamaswamy@gmail.com",
      color: "#2E9E92",
      bgColor: "bg-teal-500/10",
      hoverBg: "hover:bg-teal-500/20",
      borderColor: "border-teal-500/30",
    },
    {
      id: "catalog",
      label: "Download Catalog",
      subLabel: "See our solutions",
      icon: FiDownload,
      href: "/catalog.pdf",
      color: "#6B7280",
      bgColor: "bg-gray-500/10",
      hoverBg: "hover:bg-gray-500/20",
      borderColor: "border-gray-500/30",
      external: true,
    },
  ];

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 font-sans transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      {/* --- POPUP MODAL CARD --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-[#1B1F1E] border border-[#4A5A56] rounded-2xl shadow-2xl p-5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#4A5A56]/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E3982F]/20 border border-[#E3982F]/30 flex items-center justify-center">
                  <FiMessageCircle className="w-5 h-5 text-[#E3982F]" />
                </div>
                <div>
                  <h4 className="font-['Work_Sans'] font-bold text-sm text-[#ECE6D8]">
                    Quick Connect
                  </h4>
                  <p className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] tracking-[.04em]">
                    We're here to help
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-[#173339] border border-[#4A5A56] hover:border-[#E3982F] text-[#9FB0AD] hover:text-[#E3982F] flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Close"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Options */}
            <div className="space-y-2.5">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <a
                    key={option.id}
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-3 p-3 rounded-xl ${option.bgColor} ${option.hoverBg} border ${option.borderColor} transition-all duration-200 group`}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${option.color}20`, border: `2px solid ${option.color}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: option.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-['Work_Sans'] font-semibold text-sm text-[#ECE6D8] group-hover:text-[#E3982F] transition-colors">
                        {option.label}
                      </p>
                      <p className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD]">
                        {option.subLabel}
                      </p>
                    </div>
                    <FiChevronRight className="w-4 h-4 text-[#4A5A56] group-hover:text-[#E3982F] group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-[#4A5A56]/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FiClock className="w-3 h-3 text-[#9FB0AD]" />
                <span className="font-['IBM_Plex_Mono'] text-[9px] text-[#9FB0AD]">
                  Response within 24 hrs
                </span>
              </div>
              <span className="font-['IBM_Plex_Mono'] text-[9px] text-[#E3982F]">
                ★ 4.9/5
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ALWAYS VISIBLE FLOATING BUTTON --- */}
      <div className="relative">
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#E3982F] opacity-30 animate-ping pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-[#E3982F] opacity-20 animate-pulse pointer-events-none" />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#E3982F] to-[#c9892a] text-[#1B1F1E] shadow-xl shadow-[#E3982F]/40 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-[#E3982F]/60 focus:outline-none focus:ring-2 focus:ring-[#E3982F]/50"
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <div className="relative">
              <FiMessageCircle className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#1B1F1E] animate-pulse" />
            </div>
          )}
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1B1F1E] border border-[#4A5A56] rounded-lg px-3 py-1.5 animate-pulse">
            <span className="font-['IBM_Plex_Mono'] text-[9px] text-[#ECE6D8] tracking-[.04em]">
              Need Help? 👋
            </span>
            {/* Triangle pointer */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1B1F1E] border-r border-b border-[#4A5A56] rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
}