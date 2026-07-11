"use client";
import Image from "next/image";
import homeContent from "@/clients/waterproof-pro/content/home";

export default function Gallery() {
  const gallery = homeContent.gallery;

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-blue-600" />
            <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-blue-600 uppercase">
              {gallery.badge || "VISUAL PORTFOLIO"}
            </span>
            <div className="w-8 h-[1px] bg-blue-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mt-4 leading-none">
            {gallery.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed mt-4 max-w-2xl">
            {gallery.subtitle}
          </p>
        </div>

        {/* --- PREMIUM PORTFOLIO GRID MASK --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {gallery.images.map((image, index) => {
            // Generates an alternating frame flow rhythm for an upscale editorial feeling
            const isTallFrame = index % 3 === 0;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-100 shadow-sm transition-all duration-500 ${
                  isTallFrame ? "h-80 md:h-[26rem] md:row-span-2" : "h-64 md:h-80"
                }`}
              >
                {/* Image Asset Rendering Frame */}
                <Image
                  src={image}
                  alt={`Structural Protection Asset Phase ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />

                {/* Micro glass layer gradient floating inside image context */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
                
                {/* Floating Meta HUD Tag Element */}
                <div className="absolute bottom-4 left-4 right-4 z-10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="px-4 py-2.5 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">PROJECT PHASE</span>
                      <span className="text-xs font-bold text-white truncate max-w-[120px] mt-0.5">Inspection Checked</span>
                    </div>
                    <span className="text-white text-xs font-semibold bg-white/10 w-6 h-6 rounded-lg flex items-center justify-center">
                      🔍
                    </span>
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