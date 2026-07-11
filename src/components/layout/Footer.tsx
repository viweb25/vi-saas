import Link from "next/link";

const services = [
  "Terrace Waterproofing",
  "Roof Waterproofing",
  "Basement Waterproofing",
  "Bathroom Waterproofing",
  "Wall Crack Repair",
  "Industrial Waterproofing",
];

const links = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Gallery", href: "#gallery" },
  { title: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 font-sans">

      {/* --- TOP CALL TO ACTION SECTION --- */}
      <section className="relative overflow-hidden border-b border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle geometric splash accent line behind text */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Ready to Protect Your Property?
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-base sm:text-lg font-normal leading-relaxed">
              Get professional waterproofing solutions from experienced specialists. Schedule a free site inspection today.
            </p>
          </div>

          {/* Premium Blue Branding Action Button Element */}
          <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition transform active:scale-95 text-white font-bold text-base shadow-lg shadow-blue-500/10 whitespace-nowrap cursor-pointer">
            Get Free Inspection
          </button>
        </div>
      </section>

      {/* --- MAIN STRUCTURE FOOTER GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-14">

        {/* Brand Information & Social Column */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
            Waterproof<span className="text-blue-500 font-normal text-xl">PRO</span>
          </Link>
          
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Delivering premium waterproofing solutions for residential, commercial and industrial buildings with trusted quality, durability and professional workmanship.
          </p>

          {/* High-Contrast Interactive Social Rings */}
          <div className="flex gap-3 pt-2">
            {["F", "I", "X", "W"].map((letter) => (
              <div 
                key={letter}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-500 transition duration-300 cursor-pointer flex items-center justify-center text-xs font-bold text-slate-400"
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-sm font-bold tracking-widest text-slate-200 uppercase border-b border-slate-800 pb-3 mb-6">
            Quick Links
          </h3>
          <div className="space-y-3.5">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block text-sm sm:text-base text-slate-400 hover:text-blue-400 font-medium transition duration-200"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Core Services Menu Area */}
        <div>
          <h3 className="text-sm font-bold tracking-widest text-slate-200 uppercase border-b border-slate-800 pb-3 mb-6">
            Our Services
          </h3>
          <div className="space-y-3.5">
            {services.map((item) => (
              <p
                key={item}
                className="text-sm sm:text-base text-slate-400 hover:text-blue-400 font-medium transition duration-200 cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Contact Info & Meta Details Block */}
        <div>
          <h3 className="text-sm font-bold tracking-widest text-slate-200 uppercase border-b border-slate-800 pb-3 mb-6">
            Contact
          </h3>
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-600 font-bold">
                Phone Line
              </span>
              <p className="mt-1 text-sm sm:text-base text-slate-300 font-medium hover:text-blue-400 transition cursor-pointer">
                +91 89793 42030
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-slate-600 font-bold">
                Email Address
              </span>
              <p className="mt-1 text-sm sm:text-base text-slate-300 font-medium hover:text-blue-400 transition cursor-pointer break-all">
                info@waterproofpro.com
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-slate-600 font-bold">
                Headquarters
              </span>
              <p className="mt-1 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* --- SUB-FOOTER BOTTOM LAW STRIP --- */}
      <div className="border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            © 2026 Waterproof PRO. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-xs sm:text-sm font-medium">
            <Link href="#" className="text-slate-600 hover:text-slate-400 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}