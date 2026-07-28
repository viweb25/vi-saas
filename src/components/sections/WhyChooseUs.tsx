"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiShield, 
  FiAward, 
  FiClock, 
  FiCheckCircle,
  FiArrowRight
} from "react-icons/fi";

export default function WhyChooseUsHero() {
  const reasons = [
    {
      icon: FiShield,
      title: "Certified Materials",
      description: "Premium quality products from trusted global manufacturers"
    },
    {
      icon: FiAward,
      title: "10-Year Warranty",
      description: "Written guarantee on every project we complete"
    },
    {
      icon: FiClock,
      title: "15+ Years Experience",
      description: "Proven expertise in residential & commercial projects"
    }
  ];

  return (
    <section className="relative bg-[#ECE6D8] py-16 sm:py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3982F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E3982F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="w-8 h-0.5 bg-[#E3982F]"></span>
          <span className="font-['IBM_Plex_Mono'] text-xs tracking-[.14em] text-[#E3982F] uppercase">
            Why Choose Us
          </span>
          <span className="w-8 h-0.5 bg-[#E3982F]"></span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-['Archivo_Black'] text-3xl sm:text-4xl lg:text-5xl text-[#1B1F1E] leading-tight"
        >
          Trusted by Property Owners
          <br />
          <span className="text-[#E3982F]">For 15+ Years</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base text-[#4A5A56] font-['Work_Sans'] max-w-2xl mx-auto leading-relaxed"
        >
          Professional waterproofing solutions with certified materials, 
          expert application, and a written warranty you can trust.
        </motion.p>

        {/* Reasons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-[#1B1F1E] border border-[#4A5A56] rounded-xl p-4 hover:border-[#E3982F] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-[#E3982F]/10 border border-[#E3982F]/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#E3982F]" />
                  </div>
                  <h3 className="font-['Work_Sans'] font-bold text-sm text-[#ECE6D8]">
                    {reason.title}
                  </h3>
                </div>
                <p className="font-['Work_Sans'] text-xs text-[#C9D3D1] leading-relaxed pl-11">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E3982F] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-xs tracking-[.04em] uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 shadow-lg shadow-[#E3982F]/20 hover:shadow-[#E3982F]/40"
          >
            <span>Book Free Inspection</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}