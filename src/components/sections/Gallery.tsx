"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  FiShield, 
  FiDroplet, 
  FiTool, 
  FiLayers, 
  FiCheckCircle,
  FiAward,
  FiBox,
  FiThermometer,
  FiZap
} from "react-icons/fi";

// Ecosystem data categorized specifically for waterproofing integration
const ecosystemRows = [
  {
    id: "membranes",
    title: "Membrane Systems",
    subtitle: "Liquid PU · EPDM · APP",
    icon: FiLayers,
    items: [
      { name: "Sika" },
      { name: "Fosroc" },
      { name: "Pidilite" },
      { name: "Dr. Fixit" },
      { name: "BASF" },
      { name: "Asian Paints" },
    ],
  },
  {
    id: "injection",
    title: "Crystalline & Grouts",
    subtitle: "PU Grout · Negative Side",
    icon: FiDroplet,
    items: [
      { name: "Xypex" },
      { name: "Sika" },
      { name: "Fosroc" },
      { name: "BASF" },
      { name: "Dr. Fixit" },
      { name: "Crystalline" },
    ],
  },
  {
    id: "sealants",
    title: "Sealants & Adhesives",
    subtitle: "PU Sealant · Epoxy Grout",
    icon: FiTool,
    items: [
      { name: "Dow Corning" },
      { name: "Sika" },
      { name: "Wacker" },
      { name: "Pidilite" },
      { name: "Fosroc" },
      { name: "Dr. Fixit" },
    ],
  },
];

export default function Gallery() {
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    trackRefs.current.forEach((track, index) => {
      if (!track) return;

      const scrollSpeed = index === 0 ? 1 : index === 1 ? 1.2 : 0.8;

      const interval = setInterval(() => {
        if (track) {
          track.scrollLeft += scrollSpeed;
          if (track.scrollLeft >= track.scrollWidth / 2) {
            track.scrollLeft = 0;
          }
        }
      }, 30);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="ecosystem" className="bg-[#ECE6D8] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
            <span className="font-['IBM_Plex_Mono'] text-xs tracking-[.14em] text-[#E3982F] uppercase">
              Industry Standards
            </span>
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
          </div>
          
          <h2 className="font-['Archivo_Black'] text-3xl sm:text-4xl lg:text-5xl text-[#1B1F1E] leading-tight">
            Built with{' '}
            <span className="text-[#E3982F]">Trusted Partners</span>
          </h2>
          
          <p className="mt-6 text-lg text-[#4A5A56] font-['Work_Sans'] leading-relaxed">
            We partner with certified global manufacturers to ensure lifetime durability and zero-leak guarantees.
          </p>
        </motion.div>

        {/* --- ECOSYSTEM ROWS --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 max-w-5xl mx-auto"
        >
          {ecosystemRows.map((row, index) => {
            const Icon = row.icon;
            return (
              <motion.div
                key={row.id}
                variants={itemVariants}
                className="group bg-[#1B1F1E] border-2 border-[#4A5A56] rounded-2xl hover:border-[#E3982F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row items-stretch p-4 lg:p-5 gap-4 lg:gap-0">
                  
                  {/* Left - Category Info */}
                  <div className="lg:w-64 flex items-center gap-4 lg:gap-5 lg:border-r lg:border-[#4A5A56] lg:pr-6 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#E3982F]/10 border border-[#E3982F]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#E3982F]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-['Work_Sans'] font-bold text-sm text-[#ECE6D8] leading-tight">
                        {row.title}
                      </h3>
                      <p className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em]">
                        {row.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right - Auto-Scrolling Brands */}
                  <div className="flex-1 relative overflow-hidden flex items-center min-h-[52px]">
                    
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#1B1F1E] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#1B1F1E] to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Track */}
                    <div
                      ref={(el) => {
                        trackRefs.current[index] = el;
                      }}
                      className="flex items-center gap-3 overflow-x-hidden py-2 px-3 whitespace-nowrap select-none"
                    >
                      {/* Original Items */}
                      {row.items.map((brand, bIndex) => (
                        <div
                          key={`${row.id}-${bIndex}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#173339] border border-[#4A5A56] shrink-0 hover:border-[#E3982F] transition-colors duration-200"
                        >
                          <FiCheckCircle className="w-3 h-3 text-[#E3982F]" />
                          <span className="font-['IBM_Plex_Mono'] text-xs text-[#ECE6D8] tracking-wider">
                            {brand.name}
                          </span>
                        </div>
                      ))}
                      
                      {/* Duplicate for seamless loop */}
                      {row.items.map((brand, bIndex) => (
                        <div
                          key={`${row.id}-dup-${bIndex}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#173339] border border-[#4A5A56] shrink-0 hover:border-[#E3982F] transition-colors duration-200"
                        >
                          <FiCheckCircle className="w-3 h-3 text-[#E3982F]" />
                          <span className="font-['IBM_Plex_Mono'] text-xs text-[#ECE6D8] tracking-wider">
                            {brand.name}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- TRUST BADGES --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          <div className="flex items-center gap-3">
            <FiAward className="w-5 h-5 text-[#E3982F]" />
            <span className="font-['IBM_Plex_Mono'] text-xs text-[#4A5A56] tracking-[.04em] uppercase">
              Certified Partners
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FiShield className="w-5 h-5 text-[#E3982F]" />
            <span className="font-['IBM_Plex_Mono'] text-xs text-[#4A5A56] tracking-[.04em] uppercase">
              Industry Standards
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FiBox className="w-5 h-5 text-[#E3982F]" />
            <span className="font-['IBM_Plex_Mono'] text-xs text-[#4A5A56] tracking-[.04em] uppercase">
              Premium Materials
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FiThermometer className="w-5 h-5 text-[#E3982F]" />
            <span className="font-['IBM_Plex_Mono'] text-xs text-[#4A5A56] tracking-[.04em] uppercase">
              Tested &amp; Certified
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}