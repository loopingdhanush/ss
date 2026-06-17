"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ssLogo from "./ss.png";
const NAV_LINKS = [
  {
    label: "Company",
    subLinks: [
      "About us",
      "Message from Founder",
      "Promoters",
      "Milestones & Achievements",
      "Awards & Recognition",
      "Privacy Policy"
    ]
  },
  {
    label: "Products",
    subLinks: [
      "Sugar",
      "Power",
      "Industrial Alcohol",
      "Sugar By-Products",
      "Bio Earth"
    ]
  },
  {
    label: "Infrastructure",
    subLinks: [
      "Sugar Division",
      "Power Division",
      "Distillery Division",
      "Cane Mechanization",
      "Bulk Grain Handling"
    ]
  },
  {
    label: "Careers",
    subLinks: [
      "HR Policy",
      "Current Openings"
    ]
  },
];

export default function ShakthiSugarsNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileSub = (label: string) => {
    setActiveMobileSub(activeMobileSub === label ? null : label);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUpIn 0.25s ease forwards; }
      `}</style>

      <header 
        className="w-full bg-white border-b border-gray-100 font-dm select-none sticky top-0 z-50 shadow-sm"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Main Top Navbar Line */}
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          
          {/* Brand/Logo Layout */}
          <a
            href="#"
            className="flex items-center no-underline group py-2"
            >
            {/* Logo */}
            <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                src={ssLogo}
                alt="Shakthi Sugars Limited logo"
                className="h-full w-full object-contain p-1.5"
                />
            </div>

            {/* Company Name */}
            <span className="text-base sm:text-lg font-semibold tracking-tight text-[#062312] transition-colors duration-200 group-hover:text-amber-600">
                Shakthi Sugars Limited
            </span>
            </a>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label}
                className="relative flex items-center h-full py-2 cursor-pointer"
                onMouseEnter={() => setActiveMenu(link.label)}
              >
                <a
                  href="#"
                  className={`text-sm font-semibold transition-colors duration-200 no-underline flex items-center gap-1 h-full ${
                    activeMenu === link.label ? "text-amber-600" : "text-gray-600 hover:text-amber-600"
                  }`}
                >
                  {link.label}
                  {link.subLinks && (
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === link.label ? "rotate-180 text-amber-600" : "text-gray-400"}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger Action Trigger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden p-2 text-gray-600 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Mega Dropdown System Container Overlay */}
        <div 
          className={`hidden md:block absolute top-full left-0 w-full bg-white border-b border-gray-200/70 overflow-hidden transition-all duration-300 origin-top shadow-xl ${
            activeMenu && NAV_LINKS.find(n => n.label === activeMenu)?.subLinks 
              ? "opacity-100 max-h-[400px] py-8 pointer-events-auto" 
              : "opacity-0 max-h-0 py-0 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-12 gap-8">
            {NAV_LINKS.map((navItem) => {
              if (activeMenu !== navItem.label || !navItem.subLinks) return null;
              return (
                <React.Fragment key={navItem.label}>
                  {/* Category Brief Panel Intro */}
                  <div className="col-span-4 border-r border-gray-100 pr-8 animate-fade-up">
                    <h3 className="text-[#062312] font-playfair text-xl font-bold mb-2">{navItem.label}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-normal">
                      Discover our standard-setting agricultural ecosystems, processing lines, and robust regional market framework.
                    </p>
                  </div>
                  
                  {/* Clean Links Flex Matrix */}
                  <div className="col-span-8 grid grid-cols-2 gap-y-3 gap-x-12 animate-fade-up">
                    {navItem.subLinks.map((sub) => (
                      <a 
                        key={sub} 
                        href="#" 
                        className="group flex items-center text-gray-600 text-sm hover:text-amber-600 transition-all duration-150 no-underline font-medium"
                      >
                        <span className="opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-amber-600 mr-1.5 text-xs">
                          →
                        </span>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {sub}
                        </span>
                      </a>
                    ))}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── Mobile Navigation Drawer Surface System ── */}
        <div 
          className={`md:hidden fixed inset-0 top-[61px] bg-gray-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className={`w-full max-w-xs bg-white h-[calc(100vh-61px)] shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav Main Direct Tree links */}
            <div className="p-4 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => {
                const isSubOpen = activeMobileSub === link.label;
                return (
                  <div key={link.label} className="border-b border-gray-50 last:border-0">
                    <button
                      onClick={() => toggleMobileSub(link.label)}
                      className="w-full flex items-center justify-between py-3 text-left text-gray-800 hover:text-amber-600 font-semibold text-sm transition-colors focus:outline-none"
                    >
                      <span>{link.label}</span>
                      {link.subLinks && (
                        <svg 
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isSubOpen ? "rotate-180 text-amber-600" : ""}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>

                    {/* Submenu Vertical Accordion Track Expansion */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        isSubOpen ? "max-h-[400px] opacity-100 mb-2" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="pl-3 border-l border-amber-500/40 flex flex-col gap-0.5 mt-0.5 bg-gray-50/50 rounded-r-md py-1">
                        {link.subLinks?.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="block py-2 px-2 text-gray-600 hover:text-amber-600 hover:bg-gray-100/50 rounded text-xs font-medium no-underline transition-all duration-150"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sticky Mobile Bottom CTA Bracket Panel */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <p className="text-center text-[11px] text-gray-400 font-medium tracking-wide m-0">
                © 2026 Shakthi Sugars Limited
              </p>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}