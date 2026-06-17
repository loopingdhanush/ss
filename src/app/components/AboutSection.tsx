import { FadeIn } from "./FadeIn";

export default function AboutSection() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect x="4" y="4" width="8" height="8" rx="1" fill="#dc2626" opacity="0.15" />
          <rect x="16" y="4" width="8" height="8" rx="1" fill="#dc2626" opacity="0.25" />
          <rect x="28" y="4" width="8" height="8" rx="1" fill="#dc2626" opacity="0.4" />
          <rect x="4" y="16" width="8" height="8" rx="1" fill="#dc2626" opacity="0.25" />
          <rect x="16" y="16" width="8" height="8" rx="1" fill="#dc2626" opacity="0.55" />
          <rect x="28" y="16" width="8" height="8" rx="1" fill="#dc2626" opacity="0.7" />
          <rect x="4" y="28" width="8" height="8" rx="1" fill="#dc2626" opacity="0.4" />
          <rect x="16" y="28" width="8" height="8" rx="1" fill="#dc2626" opacity="0.7" />
          <rect x="28" y="28" width="8" height="8" rx="1" fill="#dc2626" opacity="0.9" />
        </svg>
      ),
      title: "Residential Solar",
      desc: "From rooftop panels to battery backup — we design systems tailored to your home's energy needs and budget.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <circle cx="24" cy="12" r="5" fill="#dc2626" opacity="0.2" />
          <circle cx="12" cy="28" r="4" fill="#dc2626" opacity="0.4" />
          <circle cx="36" cy="28" r="4" fill="#dc2626" opacity="0.4" />
          <circle cx="20" cy="38" r="3" fill="#dc2626" opacity="0.6" />
          <circle cx="30" cy="38" r="3" fill="#dc2626" opacity="0.6" />
          <line x1="24" y1="17" x2="12" y2="24" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
          <line x1="24" y1="17" x2="36" y2="24" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
          <line x1="12" y1="32" x2="20" y2="35" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
          <line x1="36" y1="32" x2="30" y2="35" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
        </svg>
      ),
      title: "Commercial & Industrial",
      desc: "Scalable solar infrastructure for factories, warehouses, and businesses looking to cut operational energy costs.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <path d="M8 40 L24 8 L40 40" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
          <path d="M14 30 L24 14 L34 30" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
          <path d="M19 40 L24 22 L29 40" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        </svg>
      ),
      title: "Large-Scale Solar Parks",
      desc: "End-to-end project management for utility-scale solar farms — from land assessment to grid connection.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect x="6" y="20" width="36" height="4" rx="2" fill="#dc2626" opacity="0.2" />
          <rect x="10" y="14" width="28" height="4" rx="2" fill="#dc2626" opacity="0.4" />
          <rect x="14" y="8" width="20" height="4" rx="2" fill="#dc2626" opacity="0.6" />
          <rect x="18" y="2" width="12" height="4" rx="2" fill="#dc2626" opacity="0.85" />
          <rect x="20" y="24" width="8" height="18" rx="1" fill="#dc2626" opacity="0.15" />
        </svg>
      ),
      title: "Franchise & Channel Partners",
      desc: "Join India's fastest-growing solar network. We provide training, support, and lead generation for our partners.",
    },
  ];

  return (
    <section id="about" className="relative bg-white py-20 md:py-22 overflow-hidden">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          {/* Header */}
          <div className="mb-14 md:mb-16">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span className="text-xs  uppercase ">
                What we offer
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] ">
              Solaris powers homes, businesses,
              and communities with <span className="text-red-600">clean energy</span>
            </h2>
          </div>

          {/* Service Rows */}
          <div className="divide-y divide-slate-200">
            {services.map((s, i) => (
              <FadeIn>
                <div
                  key={i}
                  className="group relative overflow-hidden grid md:grid-cols-[64px_1.1fr_1fr] items-start gap-6 md:gap-12 py-10 px-5 -mx-5 cursor-default"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-red-50/40 to-transparent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out pointer-events-none " />

                  {/* Icon */}
                  <div className="relative z-10 flex items-start pt-1 text-slate-700 group-hover:text-red-500 transition-colors duration-300">
                    {s.icon}
                  </div>

                  {/* Title */}
                  <div className="relative z-10 flex items-start md:items-center">
                    <h3 className="text-[1.35rem] md:text-2xl font-medium tracking-[-0.02em] text-slate-900 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-sm md:text-[15px] font-normal text-slate-500 leading-7 max-w-md">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </FadeIn>
    </section>
  );
}