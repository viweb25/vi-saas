"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiChevronDown, 
  FiChevronUp,
  FiHelpCircle,
  FiShield,
  FiClock,
  FiTool,
  FiHome,
  FiFileText,
  FiCheckCircle
} from "react-icons/fi";

const faqData = [
  {
    id: "q1",
    question: "How long does a typical terrace waterproofing job take?",
    answer: "Most terrace jobs run 3–5 days including surface preparation, membrane application, and the mandatory curing period. Larger commercial roofs may take longer — we confirm an exact timeline after the free site inspection.",
    icon: FiClock,
    category: "Timeline"
  },
  {
    id: "q2",
    question: "Do I need to vacate my home during the waterproofing work?",
    answer: "For terraces and external walls, no — work happens outside your living space. For bathroom tanking or basement injection, that specific room is usually out of use for the duration of the job, but your home remains accessible.",
    icon: FiHome,
    category: "Process"
  },
  {
    id: "q3",
    question: "What exactly does the warranty cover?",
    answer: "Our warranty covers material and application failure on the treated area — meaning if the same spot leaks again within the warranty period, we repair it free of charge. It doesn't cover new damage from structural cracks unrelated to the original work.",
    icon: FiShield,
    category: "Warranty"
  },
  {
    id: "q4",
    question: "Can you waterproof over existing tiles?",
    answer: "In some cases yes, using injection or topical systems. For a permanent fix on older leaks, we usually recommend removing the finish to treat the slab directly — we'll advise honestly during the site visit.",
    icon: FiTool,
    category: "Application"
  },
  {
    id: "q5",
    question: "Do you provide a quote before starting work?",
    answer: "Always. The free site visit ends with a written quote listing materials, layer count, timeline, and warranty period — no work begins without your sign-off.",
    icon: FiFileText,
    category: "Process"
  },
  {
    id: "q6",
    question: "What makes your waterproofing different from regular painting?",
    answer: "We don't just coat surfaces — we diagnose the root cause, prepare the substrate correctly, apply multi-layer membrane systems, and conduct flood tests before handover. It's a complete engineering solution, not a cosmetic fix.",
    icon: FiCheckCircle,
    category: "Quality"
  }
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("q1");

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#ECE6D8] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
            <span className="font-['IBM_Plex_Mono'] text-xs tracking-[.14em] text-[#E3982F] uppercase">
              Frequently Asked Questions
            </span>
            <span className="w-12 h-0.5 bg-[#E3982F]"></span>
          </div>
          
          <h2 className="font-['Archivo_Black'] text-3xl sm:text-4xl lg:text-5xl text-[#1B1F1E] leading-tight">
            Before You Call,
            <br />
            <span className="text-[#E3982F]">You Probably Want to Know —</span>
          </h2>
          
          <p className="mt-4 text-lg text-[#4A5A56] font-['Work_Sans'] leading-relaxed max-w-2xl mx-auto">
            Quick answers to the most common questions about our waterproofing process.
          </p>
        </motion.div>

        {/* --- FAQ ACCORDION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {faqData.map((item, index) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-[#1B1F1E] border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  isActive 
                    ? "border-[#E3982F] shadow-lg shadow-[#E3982F]/10" 
                    : "border-[#4A5A56] hover:border-[#E3982F]/50"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center gap-4 p-5 text-left transition-colors duration-200 hover:bg-[#173339]/50"
                  aria-expanded={isActive}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isActive 
                      ? "bg-[#E3982F]/20 border-2 border-[#E3982F]/50" 
                      : "bg-[#173339] border border-[#4A5A56]"
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      isActive ? "text-[#E3982F]" : "text-[#9FB0AD]"
                    }`} />
                  </div>

                  {/* Question Text */}
                  <span className={`font-['Work_Sans'] font-semibold text-sm flex-1 ${
                    isActive ? "text-[#ECE6D8]" : "text-[#C9D3D1]"
                  }`}>
                    {item.question}
                  </span>

                  {/* Category Tag + Toggle Icon */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="hidden sm:inline font-['IBM_Plex_Mono'] text-[10px] text-[#9FB0AD] uppercase tracking-[.04em] px-2 py-1 rounded border border-[#4A5A56]">
                      {item.category}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-[#E3982F] text-[#1B1F1E]" 
                        : "bg-[#173339] text-[#9FB0AD]"
                    }`}>
                      {isActive ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="h-px bg-[#4A5A56]/40 mb-4" />
                        <div className="flex items-start gap-4">
                          <div className="w-1 h-full min-h-[30px] rounded-full bg-[#E3982F] flex-shrink-0" />
                          <p className="font-['Work_Sans'] text-sm text-[#C9D3D1] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-[#4A5A56] font-['Work_Sans'] text-sm mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E3982F] text-[#1B1F1E] font-['IBM_Plex_Mono'] text-xs tracking-[.04em] uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 shadow-lg shadow-[#E3982F]/20 hover:shadow-[#E3982F]/40"
          >
            <FiHelpCircle className="w-4 h-4" />
            <span>Contact Our Team</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}