// src/content/services.ts

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  process: string[];
}

const services: ServiceItem[] = [
  {
    slug: "terrace-waterproofing",
    title: "Terrace Waterproofing",
    shortDescription: "Complete weatherproofing coatings for open slabs.",
    fullDescription: "Our high-performance multi-layered terrace waterproofing treatment shields structures from harsh thermal expansion and heavy monsoon seasons. We apply advanced elastomeric crystalline systems that bridge cracks permanently.",
    features: ["UV Resistant Thermal Coatings", "Elasticity up to 300%", "10-Year Protection Guarantee"],
    process: ["Surface high-pressure washing", "Crystalline grouting crack injections", "Base coat + double elastomeric top layers"]
  },
  {
    slug: "bathroom-waterproofing",
    title: "Bathroom Waterproofing",
    shortDescription: "Deep-injection tiling barrier applications.",
    fullDescription: "Prevent under-floor structural leakage into lower floors. Our specialized epoxy grout lines and polyurethane membrane applications secure sanitary zones permanently without requiring complex floor slab destruction.",
    features: ["Anti-fungal chemical barriers", "Zero-leak drain joint sealing", "Epoxy-resin tile structural binding"],
    process: ["Skilled tile-joint raking", "Polyurethane base application", "Grouting injection pressure points"]
  },
  {
    slug: "basement-waterproofing",
    title: "Basement Waterproofing",
    shortDescription: "Heavy-duty groundwater defense systems.",
    fullDescription: "Protect lower retaining structures against deep hydrothermal pressure and moisture penetration. We utilize negative side coatings and crystalline slurry systems to seal deep foundation walls securely.",
    features: ["Resists hydrostatic pressure", "Exterior retaining wall barriers", "Sump and lift-pit protection"],
    process: ["Wall structural cleaning", "Deep foundation filling", "Crystalline compound application"]
  }
];

export default services;