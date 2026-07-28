"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiShield, 
  FiDroplet, 
  FiTool, 
  FiLayers, 
  FiCheckCircle,
  FiArrowRight,
  FiAlertTriangle,
  FiHome,
  FiBriefcase,
  FiClock,
  FiAward,
  FiMapPin,
  FiSearch,
  FiThermometer,
  FiZap,
  FiRefreshCw,
  FiThumbsUp
} from "react-icons/fi";

// Service Data
const services = [
  {
    id: "terrace-roof",
    title: "Terrace & Roof Waterproofing",
    description: "APP membrane or PU coating systems built to handle ponding water and thermal movement. Complete protection from UV rays and weather extremes.",
    icon: FiHome,
    color: "#E3982F",
    features: ["APP Membrane System", "PU Coating", "Thermal Movement Protection", "UV Resistant"]
  },
  {
    id: "basement-foundation",
    title: "Basement & Foundation Sealing",
    description: "Crystalline and injection grouting to stop hydrostatic pressure leaks below grade. Permanent solution for underground water ingress.",
    icon: FiBriefcase,
    color: "#2E9E92",
    features: ["Injection Grouting", "Crystalline Technology", "Hydrostatic Pressure Control", "Below Grade Protection"]
  },
  {
    id: "bathroom-wet-areas",
    title: "Bathroom & Wet Area Tanking",
    description: "Full-height tanking behind tiles before any finish goes down. Complete waterproofing for showers, bathrooms, and wet rooms.",
    icon: FiDroplet,
    color: "#E3982F",
    features: ["Full-Height Tanking", "Tile Backing System", "Shower Area Protection", "Leak Prevention"]
  },
  {
    id: "water-tanks",
    title: "Water Tank Lining",
    description: "Food-grade cementitious lining for overhead and underground storage tanks. Safe for drinking water with non-toxic materials.",
    icon: FiRefreshCw,
    color: "#2E9E92",
    features: ["Food-Grade Materials", "Cementitious Lining", "Non-Toxic", "Drinking Water Safe"]
  },
  {
    id: "external-walls",
    title: "External Wall Damp-Proofing",
    description: "Breathable damp-proof coatings that stop rising and penetrating damp. Maintains wall integrity while preventing moisture ingress.",
    icon: FiLayers,
    color: "#E3982F",
    features: ["Breathable Coating", "Rising Damp Control", "Penetrating Damp Protection", "Wall Integrity"]
  },
  {
    id: "expansion-joints",
    title: "Expansion Joint Sealing",
    description: "Flexible sealant systems rated for structural movement without cracking. Accommodates building expansion and contraction.",
    icon: FiZap,
    color: "#2E9E92",
    features: ["Flexible Sealants", "Structural Movement", "Crack Prevention", "Temperature Resistant"]
  },
  {
    id: "swimming-pools",
    title: "Swimming Pool Waterproofing",
    description: "Specialized membrane systems for swimming pools, fountains, and water features. Chlorine and chemical resistant.",
    icon: FiThermometer,
    color: "#E3982F",
    features: ["Chlorine Resistant", "Chemical Protection", "Long-Term Durability", "Water Feature Ready"]
  },
  {
    id: "industrial-flooring",
    title: "Industrial Floor Coating",
    description: "Heavy-duty epoxy and polyurethane flooring for industrial spaces. Chemical resistant and durable for high-traffic areas.",
    icon: FiTool,
    color: "#2E9E92",
    features: ["Epoxy Flooring", "Chemical Resistant", "Heavy-Duty", "Industrial Grade"]
  }
];

// Process Steps
const processSteps = [
  {
    step: "01",
    title: "Site Diagnosis",
    description: "Moisture mapping and leak-source report before any material is quoted.",
    icon: FiSearch,
    color: "#E3982F"
  },
  {
    step: "02",
    title: "Surface Preparation",
    description: "Cracks routed and filled, surface cleaned and primed to spec.",
    icon: FiTool,
    color: "#2E9E92"
  },
  {
    step: "03",
    title: "Membrane Application",
    description: "System applied in the correct layer count and thickness — no shortcuts.",
    icon: FiLayers,
    color: "#E3982F"
  },
  {
    step: "04",
    title: "Curing & Flood Test",
    description: "48–72 hr cure, then a 24 hr standing water test before handover.",
    icon: FiDroplet,
    color: "#2E9E92"
  },
  {
    step: "05",
    title: "Warranty Handover",
    description: "Signed warranty document, photos, and material data sheet handed to you.",
    icon: FiAward,
    color: "#E3982F"
  }
];

// Why Choose Us
const whyChoose = [
  {
    title: "15+ Years Experience",
    description: "Proven track record of successful waterproofing projects across all building types.",
    icon: FiClock,
    color: "#E3982F"
  },
  {
    title: "Certified Applicators",
    description: "Trained and certified professionals with expertise in all waterproofing systems.",
    icon: FiShield,
    color: "#2E9E92"
  },
  {
    title: "Material Transparency",
    description: "Brand, batch, and dosage shared with every client before application.",
    icon: FiCheckCircle,
    color: "#E3982F"
  },
  {
    title: "10-Year Warranty",
    description: "Every job closes with a signed, dated warranty document — not a verbal promise.",
    icon: FiAward,
    color: "#2E9E92"
  }
];

export default function Services() {
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
    <section id="services" className="bg-[#ECE6D8] py-20 sm:py-28 overflow-hidden">
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
              What We Treat
            </span>
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
          </div>
          
          <h2 className="font-['Archivo_Black'] text-3xl sm:text-4xl lg:text-5xl text-[#1B1F1E] leading-tight">
            Six Surfaces.
            <br />
            <span className="text-[#E3982F]">One Standard.</span>
          </h2>
          
          <p className="mt-6 text-lg text-[#4A5A56] font-['Work_Sans'] leading-relaxed max-w-3xl mx-auto">
            Every service follows the same layered protocol — diagnose, prep, apply, cure, test.
          </p>
        </motion.div>

        {/* --- SERVICES GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-[#1B1F1E] border-2 border-[#4A5A56] rounded-2xl p-6 hover:border-[#E3982F] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}20`, border: `2px solid ${service.color}40` }}
                >
                  <Icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                {/* Title */}
                <h3 className="font-['Work_Sans'] font-bold text-lg text-[#ECE6D8] leading-tight mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#C9D3D1] leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-['IBM_Plex_Mono'] text-[#9FB0AD] bg-[#173339] px-2 py-1 rounded border border-[#4A5A56]"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 2 && (
                    <span className="text-[10px] font-['IBM_Plex_Mono'] text-[#E3982F] px-2 py-1">
                      +{service.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Learn More Link */}
                <Link 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-['IBM_Plex_Mono'] text-[#E3982F] hover:gap-3 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- PROCESS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#E3982F]"></span>
              <span className="font-['IBM_Plex_Mono'] text-xs tracking-[.14em] text-[#E3982F] uppercase">
                How We Work
              </span>
              <span className="w-12 h-0.5 bg-[#E3982F]"></span>
            </div>
            <h3 className="font-['Archivo_Black'] text-3xl sm:text-4xl text-[#1B1F1E]">
              A Five-Step Protocol,
              <br />
              <span className="text-[#E3982F]">Every Single Time.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-[#1B1F1E] border-2 border-[#4A5A56] rounded-2xl p-6 hover:border-[#E3982F] transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Archivo_Black'] text-3xl text-[#E3982F]/30 group-hover:text-[#E3982F] transition-colors">
                      {step.step}
                    </span>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="font-['Work_Sans'] font-bold text-base text-[#ECE6D8] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#C9D3D1] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line (Desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-[#4A5A56]">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#E3982F]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* --- WHY CHOOSE US --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1B1F1E] to-[#173339] border-2 border-[#E3982F]/30 rounded-3xl p-8 sm:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="font-['Archivo_Black'] text-2xl sm:text-3xl text-[#ECE6D8]">
              Why Property Owners <span className="text-[#E3982F]">Choose Us</span>
            </h3>
            <p className="text-[#C9D3D1] font-['Work_Sans'] mt-2">
              Built on trust, transparency, and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${item.color}20`, border: `2px solid ${item.color}40` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-['Work_Sans'] font-bold text-[#ECE6D8] text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#C9D3D1] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* --- CTA SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#E3982F] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-sm tracking-[.04em] uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 shadow-lg shadow-[#E3982F]/20 hover:shadow-[#E3982F]/40"
          >
            <span>Get a Free Site Inspection</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}