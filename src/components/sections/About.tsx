"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiShield, 
  FiDroplet, 
  FiAward, 
  FiUsers, 
  FiCheckCircle,
  FiArrowRight,
  FiHome,
  FiBriefcase,
  FiClock,
  FiTool,
  FiMapPin,
  FiTrendingUp,
  FiThumbsUp,
  FiLayers
} from "react-icons/fi";

// Value Propositions Data with Icons
const valueProps = [
  {
    id: "purpose-built",
    title: "Built for Structural Strength",
    description: "Engineered specifically for concrete slabs, basements, and water sumps—not standard surface paint.",
    icon: FiShield,
    color: "#E3982F",
    gradient: "from-amber-500/20 to-amber-600/10"
  },
  {
    id: "chemical-tech",
    title: "Advanced Polymer Grouting",
    description: "Deep-injection polyurethane grouting that seals micro-cracks from within the concrete substrate.",
    icon: FiDroplet,
    color: "#2E9E92",
    gradient: "from-teal-500/20 to-teal-600/10"
  },
  {
    id: "complete-solution",
    title: "10-Year Certified Warranty",
    description: "Every project undergoes 24-hour flood testing backed by an official written warranty certificate.",
    icon: FiAward,
    color: "#E3982F",
    gradient: "from-amber-500/20 to-amber-600/10"
  },
  {
    id: "customer-success",
    title: "Dedicated On-Site Engineers",
    description: "From thermal leak detection to final inspection, our certified applicators manage your site end-to-end.",
    icon: FiUsers,
    color: "#2E9E92",
    gradient: "from-teal-500/20 to-teal-600/10"
  },
];

// Stats Data
const stats = [
  { value: "1,200+", label: "Projects Completed", icon: FiBriefcase },
  { value: "98%", label: "Success Rate", icon: FiTrendingUp },
  { value: "10 Yr", label: "Warranty Coverage", icon: FiClock },
  { value: "100%", label: "Client Satisfaction", icon: FiThumbsUp },
];

// Team Data
const teamMembers = [
  {
    name: "R. Rajendran",
    role: "Founder & Lead Engineer",
    experience: "15+ Years",
    image: "/team/rajendran.jpg",
    initial: "RR"
  },
  {
    name: "S. Kumar",
    role: "Senior Project Manager",
    experience: "12+ Years",
    image: "/team/kumar.jpg",
    initial: "SK"
  },
  {
    name: "M. Priya",
    role: "Quality Control Specialist",
    experience: "8+ Years",
    image: "/team/priya.jpg",
    initial: "MP"
  },
];

// Achievements Data
const achievements = [
  { label: "Certified Applicators", icon: FiCheckCircle },
  { label: "Material Transparency", icon: FiTool },
  { label: "Flood Test Guaranteed", icon: FiDroplet },
  { label: "Written Site Warranty", icon: FiShield },
];

export default function About() {
  return (
    <section id="about" className="bg-[#ECE6D8] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
            <span className="font-['IBM_Plex_Mono'] text-xs tracking-[.14em] text-[#E3982F] uppercase">
              Who We Are
            </span>
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
          </div>
          
          <h2 className="font-['Archivo_Black'] text-3xl sm:text-4xl lg:text-5xl text-[#1B1F1E] leading-tight">
            15 Years of Keeping Water
            <br />
            <span className="text-[#E3982F]">Where It Belongs — Outside.</span>
          </h2>
          
          <p className="mt-6 text-lg sm:text-xl text-[#4A5A56] font-['Work_Sans'] leading-relaxed max-w-3xl mx-auto">
            STRATA is a licensed waterproofing contractor working across residential, commercial, and industrial sites. 
            We don't just coat a surface — we diagnose why water is getting in, then build a layered system to stop it for good.
          </p>
        </motion.div>

        {/* --- STATS GRID --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-[#1B1F1E] border-2 border-[#4A5A56] rounded-lg p-6 text-center hover:border-[#E3982F] transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-6 h-6 text-[#E3982F] mx-auto mb-3" />
                <div className="font-['Archivo_Black'] text-2xl sm:text-3xl text-[#ECE6D8]">
                  {stat.value}
                </div>
                <div className="font-['IBM_Plex_Mono'] text-xs text-[#9FB0AD] uppercase tracking-[.05em] mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* --- VALUE PROPOSITIONS CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br ${item.gradient} border-2 border-[#DFD6C1] hover:border-[#E3982F] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-[#1B1F1E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-[#4A5A56] group-hover:border-[#E3982F]">
                  <Icon className="w-8 h-8 text-[#E3982F]" />
                </div>

                {/* Title */}
                <h3 className="font-['Work_Sans'] font-bold text-lg text-[#1B1F1E] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4A5A56] leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative dot */}
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#E3982F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* --- TEAM + ACHIEVEMENTS SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiUsers className="w-6 h-6 text-[#E3982F]" />
              <h3 className="font-['Archivo_Black'] text-2xl text-[#1B1F1E]">Our Team</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-[#1B1F1E] border-2 border-[#4A5A56] rounded-lg p-6 text-center hover:border-[#E3982F] transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Avatar placeholder - replace with actual images */}
                  <div className="w-16 h-16 rounded-full bg-[#E3982F]/20 border-2 border-[#E3982F] flex items-center justify-center mx-auto mb-3">
                    <span className="font-['Archivo_Black'] text-xl text-[#E3982F]">
                      {member.initial}
                    </span>
                  </div>
                  <div className="font-['Work_Sans'] font-bold text-sm text-[#ECE6D8]">
                    {member.name}
                  </div>
                  <div className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.05em] mt-1">
                    {member.role}
                  </div>
                  <div className="font-['IBM_Plex_Mono'] text-[10px] text-[#E3982F] mt-2">
                    {member.experience}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiAward className="w-6 h-6 text-[#E3982F]" />
              <h3 className="font-['Archivo_Black'] text-2xl text-[#1B1F1E]">Our Achievements</h3>
            </div>
            
            <div className="bg-[#1B1F1E] border-2 border-[#4A5A56] rounded-lg p-8">
              <ul className="space-y-4">
                {achievements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#E3982F]/10 border border-[#E3982F]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#E3982F]" />
                      </div>
                      <div>
                        <div className="font-['Work_Sans'] font-semibold text-[#ECE6D8]">
                          {item.label}
                        </div>
                        <div className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.05em]">
                          ✓ Verified
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* --- CTA SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#1B1F1E] to-[#173339] border-2 border-[#E3982F]/30 rounded-2xl p-8 sm:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="font-['Archivo_Black'] text-2xl sm:text-3xl text-[#ECE6D8] mb-4">
              Ready to Stop Leaks Permanently?
            </h3>
            <p className="text-[#C9D3D1] font-['Work_Sans'] mb-6">
              Get a free site inspection and written quote within 48 hours.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#E3982F] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-sm tracking-[.04em] uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 shadow-lg shadow-[#E3982F]/20 hover:shadow-[#E3982F]/40"
            >
              <span>Book Free Site Visit</span>
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}