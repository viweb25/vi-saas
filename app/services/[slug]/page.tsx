// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import services from "../../../src/clients/waterproof-pro/service" // 🟢 Update this path to match your services.ts location exactly

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

// Generates static paths for optimizing build rendering output speeds
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// 🟢 Correct Default Export Structure
export default async function ServicePage({ params }: PageProps) {
  // Await the params for complete safety configuration compatibility across Next.js versions
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-24 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Button Navigation link trail */}
        <Link 
          href="/services" 
          className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1 mb-8"
        >
          ← Back to All Services
        </Link>
        
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {service.title}
        </h1>
        
        <p className="mt-6 text-lg text-slate-600 leading-relaxed font-normal border-l-4 border-blue-600 pl-4 bg-white py-4 rounded-r-xl shadow-sm">
          {service.fullDescription}
        </p>

        {/* Informational Advantage Grid Splitting Layout blocks */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          
          {/* Key Advantages */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 mb-4 tracking-tight">Key Advantages</h3>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm sm:text-base font-medium">
                  <span className="text-blue-600 font-bold">✔</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Application Protocol Sequence steps list */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 mb-4 tracking-tight">Application Protocol</h3>
            <ol className="space-y-3">
              {service.process.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base font-normal">
                  <span className="font-bold text-blue-600 bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          
        </div>

        {/* CTA Interaction Banner Block */}
        <div className="mt-12 text-center bg-slate-950 text-white rounded-[2rem] p-8 sm:p-12 shadow-xl">
          <h3 className="text-2xl font-black tracking-tight">Require this structural fix for your building?</h3>
          <p className="text-slate-400 mt-2 mb-6 font-normal">Schedule an official visual assessment validation scan today.</p>
          <Link 
            href="/contact" 
            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 font-bold tracking-wide inline-block transition"
          >
            Book Site Inspection
          </Link>
        </div>

      </div>
    </main>
  );
}