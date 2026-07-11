import homeContent from "@/clients/waterproof-pro/content/home";

export default function About() {
  const about = homeContent.about;

  return (
    <section
      id="about"
      // Added relative z-index to handle the hero component overlap seamlessly
      className="relative py-28 bg-white z-30 overflow-hidden"
    >
      {/* Decorative background grid subtle splash */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Image Display Component (5 Columns) */}
        <div className="lg:col-span-5 relative group">
          {/* Soft background framing geometry accent */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-[2rem] opacity-70 blur-lg group-hover:opacity-100 transition duration-500 pointer-events-none" />
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-slate-50">
            <img
              src={about.image}
              alt={about.title}
              className="w-full h-auto object-cover transform scale-100 group-hover:scale-[1.02] transition duration-700 ease-out"
            />
          </div>
        </div>

        {/* Right Side: Content Block (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Vibrant blue styling badge matching our layout */}
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase border-b-2 border-blue-600 self-start pb-1">
            {about.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-6 tracking-tight text-slate-900 leading-[1.15]">
            {about.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
            {about.description}
          </p>

          {/* Upgraded features map container to match modern UI/UX card layouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {about.features.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white border border-slate-100 hover:border-blue-200 rounded-2xl p-4 transition-all duration-300 shadow-sm"
              >
                {/* Custom checkmark wrapper graphic element */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  ✓
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition duration-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}