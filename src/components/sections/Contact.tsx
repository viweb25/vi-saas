"use client";
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* --- LEFT HAND SIDE: VALUE COPY & METRIC CHANNELS --- */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-blue-600" />
            <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-blue-600 uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mt-4 leading-none">
            Let's Protect Your Property
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            Contact our waterproofing specialists for a free engineering inspection and custom blueprint quotation.
          </p>

          {/* Interactive Info Channel Blocks */}
          <div className="mt-12 space-y-4">

            <div className="flex items-center gap-5 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl text-blue-600">
                📞
              </div>
              <div>
                <h3 className="text-xs font-black tracking-wider text-slate-400 uppercase">Phone Support</h3>
                <p className="text-base font-bold text-slate-800 mt-0.5">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl text-blue-600">
                ✉️
              </div>
              <div>
                <h3 className="text-xs font-black tracking-wider text-slate-400 uppercase">Email Address</h3>
                <p className="text-base font-bold text-slate-800 mt-0.5">info@waterproofpro.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl text-blue-600">
                📍
              </div>
              <div>
                <h3 className="text-xs font-black tracking-wider text-slate-400 uppercase">Regional Headquarters</h3>
                <p className="text-base font-bold text-slate-800 mt-0.5">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

          </div>

        </div>

        {/* --- RIGHT HAND SIDE: PREMIUM GLASS ENQUIRY CARD --- */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative">
          
          <div className="absolute top-0 right-12 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-b-full" />

          <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-2">
            Send an Enquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-medium mb-8">
            Fill out the form setup parameter details below. Our field expert teams respond inside 2 hours.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-50/60 border border-slate-200/60 focus:border-blue-500 focus:bg-white rounded-2xl px-5 py-4 text-slate-800 font-medium placeholder-slate-400 outline-none transition-all text-sm"
                />
              </div>
              
              <div className="flex flex-col">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-slate-50/60 border border-slate-200/60 focus:border-blue-500 focus:bg-white rounded-2xl px-5 py-4 text-slate-800 font-medium placeholder-slate-400 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-50/60 border border-slate-200/60 focus:border-blue-500 focus:bg-white rounded-2xl px-5 py-4 text-slate-800 font-medium placeholder-slate-400 outline-none transition-all text-sm"
              />
            </div>

            <div className="flex flex-col">
              <textarea
                rows={4}
                placeholder="Tell us about your project structural concerns..."
                className="w-full bg-slate-50/60 border border-slate-200/60 focus:border-blue-500 focus:bg-white rounded-2xl px-5 py-4 text-slate-800 font-medium placeholder-slate-400 outline-none transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white py-4 px-6 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/10 transition-all cursor-pointer mt-4"
            >
              Request Free Inspection →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}