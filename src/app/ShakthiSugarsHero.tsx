"use client";
import React from "react";

type Tile = { src: string; alt: string };

const row1: Tile[] = [
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=220&fit=crop", alt: "Golden wheat field at sunset" },
  { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=220&fit=crop", alt: "Sugarcane farm aerial view" },
  { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=220&fit=crop", alt: "Green farmland rows" },
  { src: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&h=220&fit=crop", alt: "Fresh sugar cane stalks" },
  { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop", alt: "Tropical crop harvest" },
];

const row2: Tile[] = [
  { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=220&fit=crop", alt: "Sugar factory industrial" },
  { src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf9f?w=400&h=220&fit=crop", alt: "White sugar crystals close up" },
  { src: "https://images.unsplash.com/photo-1611068661827-f7a0f88f9e2c?w=400&h=220&fit=crop", alt: "Farmer in field at dawn" },
  { src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=220&fit=crop", alt: "Organic harvest close up" },
  { src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=220&fit=crop", alt: "Countryside crop landscape" },
];

const row3: Tile[] = [
  { src: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&h=220&fit=crop", alt: "Farm harvest morning light" },
  { src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=220&fit=crop", alt: "Sugar mill processing plant" },
  { src: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=220&fit=crop", alt: "Granulated sugar macro" },
  { src: "https://images.unsplash.com/photo-1592878940526-0214b0f374f6?w=400&h=220&fit=crop", alt: "Green sugarcane field India" },
  { src: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?w=400&h=220&fit=crop", alt: "Countryside farmland wide" },
];

function ImageRow({ tiles, animClass }: { tiles: Tile[]; animClass: string }) {
    const doubled = [...tiles, ...tiles, ...tiles];
    return (
      <div className="flex-1 overflow-hidden flex items-stretch h-1/3 min-h-0">
        <div className={`flex ${animClass} will-change-transform h-full`}>
          {doubled.map((tile, i) => (
            <div key={i} className="flex-none w-40 sm:w-52 h-full overflow-hidden">
              <img
                src={tile.src}
                alt={tile.alt}
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[1.02] transition-opacity duration-300"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default function ShakthiSugarsHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }

        @keyframes slideFwd {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes slideRev {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        @keyframes fadeUpHero {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-fwd { animation: slideFwd 45s linear infinite; }
        .animate-slide-rev { animation: slideRev 50s linear infinite; }
        .animate-slide-fwd-fast { animation: slideFwd 36s linear infinite; }

        .h-fade-1 { animation: fadeUpHero 0.6s 0.05s ease both; }
        .h-fade-2 { animation: fadeUpHero 0.6s 0.15s ease both; }
        .h-fade-3 { animation: fadeUpHero 0.6s 0.25s ease both; }
      `}</style>

      {/* Changed min-h parameters to calculate exact remaining view space while preserving layout structures */}
      <div className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center bg-[#fafbfa] font-dm overflow-hidden select-none ">
        
        {/* ── Background Moving Track Panel ── */}
        <div className="absolute inset-0 flex flex-col pointer-events-none z-0">
          <ImageRow tiles={row1} animClass="animate-slide-fwd" />
          <ImageRow tiles={row2} animClass="animate-slide-rev" />
          <ImageRow tiles={row3} animClass="animate-slide-fwd-fast" />
        </div>

        {/* ── High-Contrast Gradient Overlays ── */}
        <div className="absolute inset-0 bg-[#fafbfa]/85 sm:bg-gradient-to-r sm:from-[#fafbfa] sm:via-[#fafbfa]/10 z-10" />
   

        {/* ── Hero Foreground Content Box ── */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-20 flex flex-col justify-center min-h-full">
          
          {/* Main Content Layout Wrapper */}
          <div className="max-w-3xl flex flex-col items-start gap-5 sm:gap-6 text-left">

            

            {/* Typography Heading Core */}
            <h1 className="h-fade-2 font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-[#062312] leading-[1.15] sm:leading-[1.12] m-0 tracking-tight">
              Pioneering the <br className="hidden sm:inline" />
              Future of <span className="text-amber-600 italic font-medium">Sustainable</span><br></br> Energy &amp; Sweetness
            </h1>

            {/* Subtext Body Core */}
            <p className="h-fade-3 text-[14px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl m-0 font-normal">
              Shakthi Sugars bridges generations of agro-tradition with advanced technical refining. We transform local Tamil Nadu harvests into premium refined sugars, eco-conscious bio-earth, and clean industrial co-generation units.
            </p>

            {/* Active Core Button Controls */}
            <div className="h-fade-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-2">
              <button className="bg-[#062312] text-white text-[14px] font-bold px-6 sm:px-7 py-3.5  hover:bg-amber-600 transition-all duration-200 cursor-pointer text-center shadow-sm">
                Explore Core Products
              </button>
              <button className="bg-white text-gray-700 text-[14px] font-bold border border-gray-200 px-6 sm:px-7 py-3.5  hover:bg-gray-50 hover:text-[#062312] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2">
                <span>Our Impact Story</span>
                <span className="text-xs text-gray-400">→</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}