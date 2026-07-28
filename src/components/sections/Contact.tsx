"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiMessageCircle, 
  FiSend,
  FiArrowRight,
  FiClock,
  FiCheckCircle,
  FiUser,
  FiFileText
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const emailTo = "R.RajendraRamaswamy@gmail.com";
    const subject = encodeURIComponent(`STRATA Waterproofing Enquiry - ${formData.name}`);
    const bodyContent = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Project Details:
${formData.message}
    `;
    const body = encodeURIComponent(bodyContent);

    setTimeout(() => {
      window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 500);
  };

  const whatsappNumber = "918939083310";
  const whatsappMessage = encodeURIComponent(
    "Hello STRATA Waterproofing, I would like to book a free site inspection for my property."
  );

  const contactCards = [
    {
      icon: FiPhone,
      label: "Call Us",
      value: "+91 89390 83310",
      href: "tel:+918939083310",
      color: "#E3982F",
      bgColor: "bg-[#E3982F]/10",
      borderColor: "border-[#E3982F]/30",
      hoverColor: "hover:border-[#E3982F]",
    },
    {
      icon: FiMessageCircle,
      label: "WhatsApp",
      value: "Chat Instantly",
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      color: "#25D366",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      hoverColor: "hover:border-emerald-500",
      external: true,
    },
    {
      icon: FiMail,
      label: "Email Us",
      value: "R.RajendraRamaswamy@gmail.com",
      href: "mailto:R.RajendraRamaswamy@gmail.com",
      color: "#2E9E92",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/30",
      hoverColor: "hover:border-teal-500",
    },
    {
      icon: FiMapPin,
      label: "Headquarters",
      value: "Chennai, Tamil Nadu",
      href: "#",
      color: "#6B7280",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      hoverColor: "hover:border-gray-500",
      address: true,
    },
  ];

  return (
    <section id="contact" className="bg-[#ECE6D8] py-20 sm:py-28 overflow-hidden">
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
              Get In Touch
            </span>
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
          </div>
          
          <h2 className="font-['Archivo_Black'] text-3xl sm:text-4xl lg:text-5xl text-[#1B1F1E] leading-tight">
            Tell Us Where
            <br />
            <span className="text-[#E3982F]">It's Leaking.</span>
          </h2>
          
          <p className="mt-6 text-lg text-[#4A5A56] font-['Work_Sans'] leading-relaxed max-w-2xl mx-auto">
            Send a few details and we'll schedule a free site inspection within 48 hours — no obligation quote included.
          </p>
        </motion.div>

        {/* --- MAIN GRID --- */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* --- LEFT SIDE: CONTACT CARDS --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <a
                  key={index}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-5 rounded-xl bg-[#1B1F1E] border-2 ${card.borderColor} ${card.hoverColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
                >
                  <div 
                    className={`w-12 h-12 rounded-xl ${card.bgColor} border ${card.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em]">
                      {card.label}
                    </p>
                    <p className={`font-['Work_Sans'] font-semibold text-sm text-[#ECE6D8] truncate ${
                      card.address ? 'text-xs' : ''
                    }`}>
                      {card.value}
                    </p>
                    {card.address && (
                      <p className="font-['Work_Sans'] text-[10px] text-[#9FB0AD] mt-0.5">
                        No. 1/312 Saravanan St, Jalladianpet, Pallikaranai
                      </p>
                    )}
                  </div>
                  <FiArrowRight className="w-4 h-4 text-[#4A5A56] ml-auto group-hover:text-[#E3982F] group-hover:translate-x-1 transition-all duration-200" />
                </a>
              );
            })}

            {/* Working Hours */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-[#1B1F1E] border-2 border-[#4A5A56]">
              <div className="w-12 h-12 rounded-xl bg-[#E3982F]/10 border border-[#E3982F]/30 flex items-center justify-center flex-shrink-0">
                <FiClock className="w-5 h-5 text-[#E3982F]" />
              </div>
              <div>
                <p className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em]">
                  Working Hours
                </p>
                <p className="font-['Work_Sans'] font-semibold text-sm text-[#ECE6D8]">
                  Mon–Sat, 9am – 7pm
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#1B1F1E] border-2 border-[#4A5A56] rounded-2xl p-6 sm:p-10 relative overflow-hidden"
          >
            {/* Decorative Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E3982F]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E3982F]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-['Archivo_Black'] text-2xl text-[#ECE6D8] mb-1">
                Send an Enquiry
              </h3>
              <p className="font-['Work_Sans'] text-sm text-[#C9D3D1] mb-6">
                Fill in your details and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-4" onSubmit={handleEmailSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em] block mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full bg-[#173339] border border-[#4A5A56] focus:border-[#E3982F] rounded-lg px-4 py-3 text-[#ECE6D8] font-['Work_Sans'] text-sm placeholder-[#9FB0AD] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em] block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91"
                      className="w-full bg-[#173339] border border-[#4A5A56] focus:border-[#E3982F] rounded-lg px-4 py-3 text-[#ECE6D8] font-['Work_Sans'] text-sm placeholder-[#9FB0AD] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em] block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#173339] border border-[#4A5A56] focus:border-[#E3982F] rounded-lg px-4 py-3 text-[#ECE6D8] font-['Work_Sans'] text-sm placeholder-[#9FB0AD] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em] block mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Since when has it been leaking? Any visible cracks or damp patches?"
                    className="w-full bg-[#173339] border border-[#4A5A56] focus:border-[#E3982F] rounded-lg px-4 py-3 text-[#ECE6D8] font-['Work_Sans'] text-sm placeholder-[#9FB0AD] outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-3.5 rounded-lg bg-[#E3982F] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-sm tracking-[.04em] uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 shadow-lg shadow-[#E3982F]/20 hover:shadow-[#E3982F]/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-[#1B1F1E] border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Free Inspection</span>
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] tracking-[.04em]">
                  ✓ We respond within 24 hours • No obligation quote
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* --- TRUST INDICATORS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <FiCheckCircle className="w-4 h-4 text-[#E3982F]" />
            <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#4A5A56] uppercase tracking-[.04em]">
              Free Site Inspection
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="w-4 h-4 text-[#E3982F]" />
            <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#4A5A56] uppercase tracking-[.04em]">
              48hr Response Time
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="w-4 h-4 text-[#E3982F]" />
            <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#4A5A56] uppercase tracking-[.04em]">
              Written Warranty
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="w-4 h-4 text-[#E3982F]" />
            <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#4A5A56] uppercase tracking-[.04em]">
              No Obligation Quote
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}