"use client";
import React from "react";

export default function SakthiSugarsOverview() {
  return (
    <div className="w-full bg-[#fafbfa] font-dm select-none antialiased">
      
      {/* ── SECTION 1: MINIMAL METRICS LAYER ── */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-100 bg-white font-dm">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
      
      {/* Stat Block 1 */}
      <div className="flex flex-col items-start max-w-sm">
        <span className="font-playfair text-5xl sm:text-7xl font-bold text-amber-600 tracking-tight block mb-3 lg:mb-4">
          60+
        </span>
        <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-1.5">
          Years of Legacy
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed m-0 font-normal">
          Long-standing reputation, experience, and dependability built across generations since 1961.
        </p>
      </div>

      {/* Stat Block 2 */}
      <div className="flex flex-col items-start max-w-sm">
        <span className="font-playfair text-5xl sm:text-7xl font-bold text-amber-600 tracking-tight block mb-3 lg:mb-4">
          19,000+
        </span>
        <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-1.5">
          TCD Aggregated Capacity
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed m-0 font-normal">
          Wide-reaching industrial network with a massive domestic refining and agricultural market footprint.
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}