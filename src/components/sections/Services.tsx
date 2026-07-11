import homeContent from "@/clients/waterproof-pro/content/home";

export default function Services() {
  const services = homeContent.services;
  const serviceIcons = ["🏠", "🚿", "🛢️", "🧱"];

  return (
    <section 
      id="services" 
      // 🟢 SPACE FIX: Applied negative top margin (-mt-8 sm:-mt-12) to pull the layout 
      // directly under the Hero curve. Added top padding to prevent content overlapping.
      className="relative -mt-8 sm:-mt-12 pt-12 sm:pt-16 pb-20 bg-white text-slate-900 font-sans z-30"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- TOP HEADER SPLIT --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-center border-b border-slate-100 pb-12">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 text-blue-900">
              <span className="text-4xl">💧</span>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-wider uppercase leading-none">WATERPROOFING</span>
                <span className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mt-1">— SERVICE —</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">
                {services.title}
              </h3>
              <p className="text-base text-blue-700 font-bold mt-1">
                {services.subtitle}
              </p>
            </div>
            
            <div className="w-16 h-[2px] bg-blue-700 mt-2" />
          </div>

          {/* Right Curved Image Frame Component */}
          <div className="lg:col-span-6 relative h-[280px] sm:h-[340px] w-full overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center border-l-8 border-blue-800 shadow-xl"
              style={{ 
                backgroundImage: `url(${services.items[0]?.image || '/fallback-service.jpg'})`,
                clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            />
          </div>

        </div>

        {/* --- CENTER AREA: SERVICE ITEMS --- */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-slate-300" />
            <span className="text-sm font-black tracking-widest text-blue-900 uppercase">{services.badge || "OUR SERVICES"}</span>
            <div className="w-12 h-[1px] bg-slate-300" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 mt-10">
            {services.items.slice(0, 4).map((service, index) => (
              <div 
                key={service.title} 
                className={`flex flex-col items-center p-4 text-center ${
                  index !== 3 ? 'md:border-r border-slate-200' : ''
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200">
                  <span className="text-3xl text-blue-900">
                    {serviceIcons[index] || "🛠️"}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide mt-6 max-w-[140px] leading-tight">
                  {service.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM SECTION: TRUST CREDENTIAL & CONTACT BARS --- */}
        <div className="mt-16 space-y-4 max-w-4xl mx-auto">
          
          <div className="border border-blue-800 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-bold">
                👤
              </div>
              <div className="text-left">
                <h5 className="text-base font-extrabold text-slate-900 tracking-tight uppercase">Ganga Mobile</h5>
                <p className="text-xs text-slate-500 font-medium">Owner / Principal Architect</p>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-10 bg-slate-200" />

            <div className="text-center sm:text-right">
              <h5 className="text-sm font-black text-blue-900 uppercase tracking-wider">Waterproof PRO Solutions</h5>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Building Trust. Delivering Absolute Protection.</p>
            </div>
          </div>

          <div className="bg-blue-800 text-white rounded-xl p-4 flex flex-col sm:flex-row items-center justify-around gap-4 shadow-md font-semibold text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <span className="bg-white text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">📞</span>
              <span className="tracking-wider font-bold">Contact Support</span>
            </div>
            
            <div className="hidden sm:block w-[1px] h-6 bg-white/20" />

            <div className="flex items-center gap-3">
              <span className="bg-white text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">✉️</span>
              <span className="text-sm tracking-wide opacity-90">info@waterproofpro.com</span>
            </div>
          </div>

        </div>

        {/* Footer Accent Sub-text Rule */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center justify-center w-full gap-4 max-w-md">
            <div className="h-[2px] bg-blue-800 flex-grow" />
            <span className="text-blue-800 text-lg">🛡️</span>
            <div className="h-[2px] bg-blue-800 flex-grow" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mt-4">
            WATERPROOF TODAY. PROTECT FOREVER.
          </p>
        </div>

      </div>
    </section>
  );
}