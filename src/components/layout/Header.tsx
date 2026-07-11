"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 🟢 Added to detect the current page route

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects", hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // 🟢 Detect if we are currently looking at the home root page
  const isHomePage = pathname === "/";

  return (
    /* 
      🟢 DYNAMIC THEME FIX: 
      If it's the home page, it stays absolute and transparent over the hero asset.
      If it's an inner page (like /about), it turns into a solid structural white block 
      with a clean bottom border border-slate-100 so it's perfectly visible on light backgrounds!
    */
    <header 
      className={`${
        isHomePage 
          ? "absolute top-0 left-0 right-0 bg-transparent" 
          : "relative bg-white border-b border-slate-100"
      } z-50 w-full`}
    >
      <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">
        
        {/* Dark Slate Logo with premium Cyan accent */}
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">
          Waterproof<span className="text-blue-600 font-normal text-xl">PRO</span>
        </Link>

        {/* Crisp Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            // Check if this specific item link matches our current URL location path
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group text-sm font-bold flex items-center gap-1 transition duration-200 ${
                  isActive 
                    ? "text-blue-600" 
                    : "text-slate-900 hover:text-blue-600"
                }`}
              >
                {item.name}
                
                {/* Accordion Dropdown Arrow Indicator */}
                {item.hasDropdown && (
                  <svg 
                    className={`w-3.5 h-3.5 transform group-hover:translate-y-0.5 transition-transform duration-200 ${
                      isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-600"
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary Call-to-Action */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-bold shadow-md shadow-blue-500/10 cursor-pointer"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Toggle Interface */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-slate-900 focus:outline-none z-50 relative"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-current rounded transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current rounded transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current rounded transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Glassmorphism Floating Drawer Overlay Panel for Mobile screen sizes */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-2xl p-4 animate-in fade-in zoom-in-95 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 text-base font-bold rounded-2xl transition ${
                    isActive 
                      ? "text-blue-600 bg-blue-50/50" 
                      : "text-slate-800 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Link>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-slate-100 px-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center py-3.5 rounded-full bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 active:scale-98 transition duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}