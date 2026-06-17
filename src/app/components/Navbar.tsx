"use client"
import { useState } from "react";

const navLinks = [
  { label: "For Homes", href: "#homes" },
  { label: "Commercial Solar", href: "#commercial" },
  { label: "Solar Park", href: "#park" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Service", href: "#service" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-20">
        <div className="flex items-center justify-between px-6 sm:px-10 py-5">

          {/* Logo */}
          <div className="text-white text-3xl sm:text-4xl font-black tracking-tight drop-shadow-lg select-none">
            Solaris
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-7 text-white font-semibold text-sm xl:text-base">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative group transition-all duration-300 hover:opacity-90"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="bg-red-600 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-lg shadow-red-900/30">
              Contact Us
            </button>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-0.5 bg-white rounded-full" />
              <span className="block w-5 h-0.5 bg-white rounded-full" />
              <span className="block w-5 h-0.5 bg-white rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-40 bg-white flex flex-col transition-transform duration-500 ease-in-out lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <span className="text-black text-xl font-black tracking-tight">
            Solaris
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all duration-200"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Label */}
        <div className="px-6 pt-6 pb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-black">
            Menu
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col px-3">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-black/70 hover:text-black hover:bg-black/6 font-medium text-base transition-all duration-200"
            >
              <div className="flex items-center gap-3">

                {label}
              </div>
            </a>
          ))}
        </div>

      </aside>
    </>
  );
}