import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "./FadeIn"

export default function ImpactSection() {
  const portfolio = [
    {
      category: "Installation",
      title: "Expert Setup & Service",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
    },
    {
      category: "Monitoring",
      title: "Real-Time Performance",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    },
    {
      category: "Support",
      title: "24/7 Customer Care",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    },
    {
      category: "Installation",
      title: "Expert Setup & Service",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
    },
    {
      category: "Monitoring",
      title: "Real-Time Performance",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    },
    {
      category: "Support",
      title: "24/7 Customer Care",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    },
  ];

  return (
    <section id="impact" className="relative bg-gray-50 py-20 md:py-22">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Header */}
          <div className="mb-14 md:mb-16">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span className="text-xs uppercase ">
                Our Services
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] ">
              From residential installations to large scale solar parks, we deliver complete renewable energy solutions tailored to your needs.
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="mb-20 md:mb-28 grid gap-5 md:grid-cols-3">
            {portfolio.map((item, index) => (
              <FadeIn>
                <div
                  key={index}
                  className="group relative overflow-hidden  bg-slate-900 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-70"
                    />
                    {/* Dark gradient always present, deepens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent transition-opacity duration-500" />
                  </div>

                  {/* Content — slides up from bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    {/* Category pill */}
                    <span className="inline-block mb-2 text-xs font-bold uppercase tracking-[0.15em] text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    {/* Reveal on hover */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      <span>View project</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Top-right index number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs font-bold text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </FadeIn>
    </section>
  );
}
