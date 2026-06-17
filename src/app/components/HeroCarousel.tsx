"use client"
import Navbar from "./Navbar";

export default function HeroCarousel() {
  return (
    <section
      id="home"
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] mx-3 sm:mx-4 my-3 sm:my-4"
      aria-label="Hero section"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=85')`,
        }}
      />
      {/* Layered Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {/* red sun-glow accent — bottom right */}
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl pointer-events-none" />
      {/* Navbar */}
      <Navbar />
      {/* Hero Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-36 sm:pt-44 pb-12 sm:pb-20 flex flex-col h-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-red-300 text-xs sm:text-sm font-medium tracking-wide px-4 sm:px-5 py-2 rounded-full mb-6 shadow-lg w-fit">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
          India's Trusted Solar Partner
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-white font-semibold tracking-[-0.04em] leading-[0.95]">
          <span className="block text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
            Solaris Franchise
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-red-400 mt-1">
            & Channel Partner
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 sm:mt-8 max-w-xl lg:max-w-2xl text-white/75 text-base sm:text-lg md:text-xl leading-8 font-normal">
          Empower your business with premium solar solutions built for
          sustainability, profitability, and long-term energy independence.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">

          <button className="group inline-flex items-center gap-2.5 rounded-full bg-red-500 px-7 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:bg-red-400 active:scale-95 shadow-[0_2px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_4px_28px_rgba(245,158,11,0.5)]">
            Become a Partner
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </button>

          <button className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/70 hover:text-white hover:border-white/30 transition-all duration-200 active:scale-95">
            Learn More
          </button>

        </div>

      </div>
    </section >
  );
}