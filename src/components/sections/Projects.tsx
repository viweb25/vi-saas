import Image from "next/image";
import homeContent from "@/clients/waterproof-pro/content/home";

export default function Projects() {
  const projects = homeContent.projects;

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-blue-600" />
            <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-blue-600 uppercase">
              {projects.badge || "OUR RECENT WORK"}
            </span>
            <div className="w-8 h-[1px] bg-blue-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mt-4 leading-none">
            {projects.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed mt-4 max-w-2xl">
            {projects.subtitle}
          </p>
        </div>

        {/* --- ARCHITECTURAL PROJECTS GRID --- */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.items.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Media Container with Dynamic Scale Overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                
                {/* Modern Floated Glass Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-950/70 backdrop-blur-md text-white border border-white/10 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Subtle dark gradient overlay sitting inside the frame bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Meta Content Area */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white relative">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  {/* Optional short description placeholder or fallback textual element line */}
                  <p className="text-xs sm:text-sm text-slate-400 font-normal mt-2 leading-relaxed">
                    Engineered precision application featuring full structural protection parameters.
                  </p>
                </div>

                {/* Elevated Action Strip */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-all cursor-pointer">
                    <span>Explore Case Study</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-200 text-blue-600 font-normal">
                      →
                    </span>
                  </button>
                  
                  {/* Small geometric design tick indicator */}
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}