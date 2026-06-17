import { Button } from "@/components/ui/button"
import { FadeIn } from "./FadeIn"

export default function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "High Efficiency",
      description: "22-24% conversion efficiency, maximizing energy from every ray of sunlight."
    },
    {
      icon: "🔒",
      title: "25-Year Warranty",
      description: "Comprehensive performance and equipment warranty for complete peace of mind."
    },
    {
      icon: "📊",
      title: "Real-Time Monitoring",
      description: "Track energy generation and savings live through our mobile app."
    },
    {
      icon: "🌱",
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint and contribute to a sustainable future."
    },
    {
      icon: "💰",
      title: "Financial Incentives",
      description: "Federal tax credits, state rebates, and flexible financing options."
    },
    {
      icon: "🛠️",
      title: "Expert Support",
      description: "24/7 support and scheduled maintenance so your system always performs."
    }
  ];

  return (
    <section id="features" className="relative bg-white py-20 md:py-12">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid md:grid-cols-[1fr_2fr] gap-0 md:items-start">

            {/* Left Side — Sticky */}
            <div className="md:sticky md:top-20 md:self-start md:py-20 md:pr-10 py-10">
              <p className="text-4xl md:text-6xl text-red-600">
                6+
              </p>

              <h2 className="mt-4 text-4xl md:text-4xl ">
                Reasons to Choose Solaris
              </h2>

              <p className="mt-6 text-base md:text-lg">
                From efficiency to support, everything you need to go solar with confidence.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 border border-slate-300 hover:border-slate-500 text-slate-800 font-medium text-sm px-5 py-2.5  transition-colors duration-200">
                View all Features
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>



            {/* Right Side — 2-col card grid */}
            <div className="md:py-20 md:pl-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {features.map((feature, index) => (
                  <FadeIn>
                    <div
                      key={index}
                      className="group  bg-slate-50 hover:bg-slate-100 border border-slate-100 hover:border-slate-200 transition-all duration-300 overflow-hidden"
                    >
                      {/* Icon area — mimics the image block in the reference */}
                      <div className="flex items-center justify-center h-44 bg-slate-100 group-hover:bg-slate-200 transition-colors duration-300 text-6xl">
                        {feature.icon}
                      </div>

                      {/* Text */}
                      <div className="p-5">
                        <h3 className="text-base md:text-lg font-bold text-slate-900">
                          {feature.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}