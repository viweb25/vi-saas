"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiShield, 
  FiDroplet, 
  FiArrowRight,
  FiHome,
  FiTool,
  FiCheckCircle,
  FiAward
} from "react-icons/fi";

export default function Hero() {
  const stats = [
    { value: "1,200+", label: "Sites Treated" },
    { value: "10 Yr", label: "Warranty Cover" },
    { value: "72 Hr", label: "Avg. Turnaround" },
    { value: "0", label: "Callback Leaks*" },
  ];

  const trustBadges = [
    { icon: FiShield, label: "Certified Applicators" },
    { icon: FiCheckCircle, label: "Flood Test Guaranteed" },
    { icon: FiAward, label: "10-Year Warranty" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#ECE6D8] flex items-center overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#ECE6D8]">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(227, 152, 47, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(227, 152, 47, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
          
          {/* Decorative Circles */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#E3982F]/10 animate-pulse" />
          <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full border border-[#E3982F]/5 animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#E3982F]/5 animate-pulse delay-700" />
          
          {/* Geometric Accents */}
          <svg className="absolute bottom-0 right-0 w-1/4 h-1/2 opacity-10" viewBox="0 0 400 800">
            <polygon points="0,800 400,800 200,0" fill="#E3982F" />
          </svg>
          <svg className="absolute top-0 left-0 w-1/5 h-1/3 opacity-5" viewBox="0 0 400 400">
            <rect width="400" height="400" fill="none" stroke="#E3982F" strokeWidth="2" />
            <rect x="50" y="50" width="300" height="300" fill="none" stroke="#E3982F" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content (3/5) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#E3982F]/30 bg-[#E3982F]/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3982F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E3982F]" />
              </span>
              <span className="text-xs font-['IBM_Plex_Mono'] tracking-[.14em] uppercase text-[#E3982F]">
                Waterproofing &amp; Damp Control
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Archivo_Black'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#1B1F1E]"
            >
              Water finds
              <br />
              every gap.
              <br />
              <span className="text-[#E3982F]">We close them.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#4A5A56] font-['Work_Sans'] leading-relaxed max-w-lg"
            >
              Terraces, basements, bathrooms and water tanks — sealed with tested membrane systems and backed by a written site warranty. No guesswork, no repeat leaks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-[#E3982F] bg-[#E3982F] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-sm tracking-[.04em] uppercase transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-lg shadow-[#E3982F]/20 hover:shadow-[#E3982F]/40"
              >
                <span>Book Free Site Visit</span>
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-[#1B1F1E] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-sm tracking-[.04em] uppercase transition-all duration-200 hover:border-[#E3982F] hover:text-[#E3982F] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <span>See Completed Work</span>
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1F1E] border border-[#4A5A56]"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#E3982F]" />
                    <span className="text-xs font-['IBM_Plex_Mono'] text-[#ECE6D8]">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Stats & Visual (2/5) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-lg border-2 border-[#1B1F1E] bg-[#DFD6C1] hover:border-[#E3982F] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="font-['Archivo_Black'] text-2xl sm:text-3xl text-[#E3982F]">
                    {stat.value}
                  </div>
                  <div className="font-['IBM_Plex_Mono'] text-[10px] text-[#4A5A56] uppercase tracking-[.05em] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Cross-Section Diagram */}
            {/* <div className="p-5 rounded-lg border-2 border-[#1B1F1E] bg-[#DFD6C1]">
              <svg viewBox="0 0 480 220" className="w-full h-auto">
                <rect x="40" y="20" width="400" height="18" fill="#2E9E92" opacity="0.8"/>
                <rect x="40" y="38" width="400" height="10" fill="#173339"/>
                <rect x="40" y="48" width="400" height="16" fill="#E3982F"/>
                <rect x="40" y="64" width="400" height="20" fill="#4A5A56"/>
                <rect x="40" y="84" width="400" height="42" fill="#8B9793"/>
                
                <circle cx="90" cy="6" r="4" fill="#2E9E92"/>
                <circle cx="150" cy="0" r="3" fill="#2E9E92"/>
                <circle cx="230" cy="8" r="5" fill="#2E9E92"/>
                <circle cx="310" cy="2" r="3" fill="#2E9E92"/>
                <circle cx="380" cy="6" r="4" fill="#2E9E92"/>
                
                <path d="M40 20 Q60 8 90 20" stroke="#2E9E92" strokeWidth="1.5" fill="none" opacity="0.5"/>
                <path d="M320 20 Q340 4 370 20" stroke="#2E9E92" strokeWidth="1.5" fill="none" opacity="0.5"/>
                
                <text x="450" y="33" fontFamily="IBM Plex Mono" fontSize="8" fill="#4A5A56" textAnchor="end">TILE FINISH</text>
                <text x="450" y="46" fontFamily="IBM Plex Mono" fontSize="8" fill="#4A5A56" textAnchor="end">PROTECTION SCREED</text>
                <text x="450" y="58" fontFamily="IBM Plex Mono" fontSize="8" fill="#E3982F" textAnchor="end">MEMBRANE LAYER</text>
                <text x="450" y="76" fontFamily="IBM Plex Mono" fontSize="8" fill="#4A5A56" textAnchor="end">SLOPE SCREED</text>
                <text x="450" y="107" fontFamily="IBM Plex Mono" fontSize="8" fill="#4A5A56" textAnchor="end">RCC SLAB</text>
                
                <line x1="40" y1="126" x2="440" y2="126" stroke="#4A5A56" strokeWidth="1" strokeDasharray="3 3"/>
                <text x="40" y="142" fontFamily="IBM Plex Mono" fontSize="7" fill="#6d7d7a">FIG.01 — TERRACE MEMBRANE CROSS-SECTION</text>
              </svg>
              <p className="text-center text-[9px] font-['IBM_Plex_Mono'] text-[#6d7d7a] mt-2 tracking-[.05em]">
                Every job logged as a layer diagram before we leave site
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient (lighter for this background) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#ECE6D8] to-transparent pointer-events-none" />
    </section>
  );
}