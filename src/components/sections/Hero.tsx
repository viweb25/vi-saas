import homeContent from "@/clients/waterproof-pro/content/home";

export default function Hero() {
  const hero = homeContent.hero;

  return (
    // section handles the full background image layout
    <section 
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat overflow-hidden pt-32"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      
      {/* 
        Light mixed overlay filter mask: 
        Fades from pure white on the left (to keep text highly readable) 
        into a clear, soft cool-blue tint across the image asset.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-blue-50/40 z-0" />
      
      {/* Ambient architectural modern lighting accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Content Space - Pushed over the background image */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 flex-grow flex items-center pt-8 pb-16 lg:pb-24">
        
        {/* Left Typography & Interaction Block */}
        <div className="max-w-2xl text-slate-900 flex flex-col justify-center">
          
          <span className="text-xs lg:text-sm font-bold tracking-wider text-blue-600 uppercase mb-4 self-start">
            {hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 drop-shadow-sm">
            {hero.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg">
            {hero.subtitle}
          </p>

          {/* Action buttons sitting cleanly on top of the background layer */}
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-8">
            <button className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition transform active:scale-95 cursor-pointer">
              {hero.primaryButton}
            </button>
            
            <button className="px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700 font-semibold transition cursor-pointer">
              {hero.secondaryButton}
            </button>
          </div>

          {/* Clean Metric Row */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-200/80 max-w-md">
            {hero.stats.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold text-slate-900">
                  {item.number}
                </span>
                <span className="text-xs text-slate-400 font-semibold mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 
        🟢 THE CORNER CURVE CUTOUT TRANSITION:
        This brings back the massive modern rounded top mask curve from the mockup image.
        The negative bottom margin pulls your white Services component up underneath it perfectly,
        eliminating all blank white spaces and making the transition completely seamless.
      */}
      <div className="relative w-full h-16 lg:h-24 bg-white rounded-t-[3rem] lg:rounded-t-[4.5rem] z-20 -mb-1 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.04)]" />

    </section>
  );
}