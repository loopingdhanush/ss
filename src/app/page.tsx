// app/page.tsx or pages/index.tsx
"use client";
import React from "react";
import ShakthiSugarsNav from "./ShakthiSugarsNav";
import ShakthiSugarsHero from "./ShakthiSugarsHero";
import SakthiSugarsLegacyAndSectors from "./ShakthiSugarsMilestones";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafbfa] flex flex-col antialiased">
      {/* Navigation Top Anchor */}
      <ShakthiSugarsNav />
      
      {/* Main Hero Content Arena */}
      <main className="flex-1 flex flex-col justify-center">
        <ShakthiSugarsHero />
        <SakthiSugarsLegacyAndSectors/>
      </main>
    </div>
  );
}