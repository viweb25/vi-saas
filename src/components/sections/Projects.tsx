"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiStar, 
  FiCheckCircle,
  FiMapPin,
  FiClock,
  FiAward
} from "react-icons/fi";

const projectsData = [
  {
    id: "terrace",
    title: "Terrace Waterproofing",
    category: "Residential",
    badge: "Completed",
    image: "/terrace.png",
    link: "/projects/terrace",
    stats: { area: "2,400 sq ft", duration: "4 Days", warranty: "10 Yr" },
    rating: 4.9
  },
  {
    id: "basement",
    title: "Basement Sealing",
    category: "Commercial",
    badge: "In Progress",
    image: "/basement.png",
    link: "/projects/basement",
    stats: { area: "1,800 sq ft", duration: "6 Days", warranty: "7 Yr" },
    rating: 5.0
  },
  {
    id: "water-tank",
    title: "Water Tank Lining",
    category: "Industrial",
    badge: "Completed",
    image: "/watertank.png",
    link: "/projects/water-tank",
    stats: { area: "10,000 L", duration: "2 Days", warranty: "5 Yr" },
    rating: 4.8
  },
  {
    id: "bathroom",
    title: "Bathroom Tanking",
    category: "Residential",
    badge: "Completed",
    image: "/bathroom.png",
    link: "/projects/bathroom",
    stats: { area: "450 sq ft", duration: "3 Days", warranty: "10 Yr" },
    rating: 4.9
  },
  {
    id: "commercial",
    title: "Commercial Complex",
    category: "Commercial",
    badge: "Planning",
    image: "/commercial.png",
    link: "/projects/commercial",
    stats: { area: "12,000 sq ft", duration: "14 Days", warranty: "10 Yr" },
    rating: 5.0
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    category: "Commercial",
    badge: "Completed",
    image: "/swimming-pool.png",
    link: "/projects/swimming-pool",
    stats: { area: "800 sq ft", duration: "5 Days", warranty: "8 Yr" },
    rating: 4.7
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="bg-[#ECE6D8] py-20 sm:py-28 overflow-hidden">
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
              Recently Completed
            </span>
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
          </div>
          
          <h2 className="font-['Archivo_Black'] text-3xl sm:text-4xl lg:text-5xl text-[#1B1F1E] leading-tight">
            Work We'll Happily Send You
            <br />
            <span className="text-[#E3982F]">The Site Address For.</span>
          </h2>
          
          <p className="mt-6 text-lg text-[#4A5A56] font-['Work_Sans'] leading-relaxed max-w-2xl mx-auto">
            Every project we complete becomes a case study in quality. Here's what we've been building lately.
          </p>
        </motion.div>

        {/* --- PROJECTS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project) => {
            const Icon = FiStar;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-[#1B1F1E] border-2 border-[#4A5A56] rounded-2xl overflow-hidden hover:border-[#E3982F] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F1E] via-transparent to-transparent opacity-60" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E3982F] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-[10px] tracking-[.04em] uppercase font-bold">
                    <FiCheckCircle className="w-3 h-3" />
                    {project.badge}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#1B1F1E]/80 backdrop-blur-sm border border-[#4A5A56]">
                    <FiStar className="w-3 h-3 text-[#E3982F] fill-[#E3982F]" />
                    <span className="font-['IBM_Plex_Mono'] text-xs text-[#ECE6D8]">
                      {project.rating}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#173339]/80 backdrop-blur-sm border border-[#4A5A56]">
                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-['Work_Sans'] font-bold text-lg text-[#ECE6D8] leading-tight">
                    {project.title}
                  </h3>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(project.stats).map(([key, value]) => {
                      const icons = {
                        area: FiMapPin,
                        duration: FiClock,
                        warranty: FiAward
                      };
                      const StatIcon = icons[key as keyof typeof icons] || FiCheckCircle;
                      return (
                        <div key={key} className="text-center p-2 rounded-lg bg-[#173339] border border-[#4A5A56]">
                          <StatIcon className="w-3 h-3 text-[#E3982F] mx-auto mb-1" />
                          <div className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em]">
                            {key === "area" ? "Area" : key === "duration" ? "Time" : "Warranty"}
                          </div>
                          <div className="font-['Work_Sans'] font-bold text-xs text-[#ECE6D8] mt-0.5">
                            {value}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Learn More Link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-['IBM_Plex_Mono'] text-[#E3982F] hover:gap-3 transition-all duration-200 pt-1"
                  >
                    <span>View Project Details</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- VIEW ALL CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#E3982F] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-sm tracking-[.04em] uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 shadow-lg shadow-[#E3982F]/20 hover:shadow-[#E3982F]/40"
          >
            <span>View All Projects</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}