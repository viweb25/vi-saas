"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does waterproofing last?",
    answer:
      "Depending on the system used, our waterproofing solutions can last 10–20 years with proper maintenance.",
  },
  {
    question: "Do you provide warranty?",
    answer:
      "Yes. We provide workmanship and material warranty depending on the selected waterproofing system.",
  },
  {
    question: "How much does waterproofing cost?",
    answer:
      "Pricing depends on the area, damage condition and waterproofing method. We offer free inspections and quotations.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We provide waterproofing solutions for residential, commercial and industrial projects across multiple locations.",
  },
  {
    question: "Can waterproofing stop existing leaks?",
    answer:
      "Yes. We first identify the root cause and then apply the most suitable waterproofing treatment.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-blue-600" />
            <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-blue-600 uppercase">
              QUESTIONS & ANSWERS
            </span>
            <div className="w-8 h-[1px] bg-blue-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mt-4 leading-none">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed mt-4 max-w-2xl">
            Everything you need to know before starting your property protection project.
          </p>
        </div>

        {/* --- INTERACTIVE ACCORDION BOARD --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-white border-blue-500/30 shadow-md" 
                    : "bg-white/80 border-slate-100 shadow-sm hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-center gap-4 cursor-pointer group"
                >
                  <span className={`font-bold text-base sm:text-lg transition-colors duration-200 ${
                    isOpen ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
                  }`}>
                    {faq.question}
                  </span>

                  {/* Clean SVG Toggle Switch Icon Indicator */}
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-blue-600 border-blue-600 text-white rotate-180" 
                      : "bg-slate-50 border-slate-200 text-slate-500"
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Animated Answer Panel Container */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                  <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-slate-500 font-normal leading-relaxed border-t border-slate-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}