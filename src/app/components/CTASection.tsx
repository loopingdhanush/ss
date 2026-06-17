"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

const contactDetails = [
  { label: "Office", value: "Rajaji Nagar, Bangalore, IN" },
  { label: "Email", value: "info@Solaris.in" },
  { label: "Mobile No.", value: "+91-98800 45912" },
];

export default function CTASection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative bg-[#1a1a1a] rounded-2xl sm:rounded-3xl overflow-hidden py-20 md:py-28 mx-3 my-3 sm:mx-4 sm:my-2"
    >
      <FadeIn>
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient glow — red orb bottom left */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        {/* Ambient glow — softer top right */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* ── Left Column ── */}
            <div className="flex flex-col justify-between h-full">

              {/* Heading + description */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  Get in touch
                </h2>
                <p className="mt-5 text-base text-white/50 leading-relaxed max-w-sm">
                  For any inquiries or to explore your vision further, we invite
                  you to contact our professional team using the details provided
                  below.
                </p>
              </div>

              {/* Contact details table */}
              <div className="mt-14 border-t border-white/10">
                {contactDetails.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-4 border-b border-white/10"
                  >
                    <span className="text-sm font-semibold text-white">
                      {item.label}
                    </span>
                    <span className="text-sm text-white/50">{item.value}</span>
                  </div>
                ))}
              </div>


            </div>

            {/* ── Right Column — White form card ── */}
            <div className="bg-white rounded-sm shadow-2xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="cta-name"
                    className="block text-sm text-slate-700 mb-1.5"
                  >
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    placeholder="John Smith"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="cta-email"
                    className="block text-sm text-slate-700 mb-1.5"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="cta-phone"
                    className="block text-sm text-slate-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    placeholder="+91 789 123456"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="cta-message"
                    className="block text-sm text-slate-700 mb-1.5"
                  >
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="cta-message"
                    rows={5}
                    placeholder="Hello, I'd like to enquire about..."
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-[#3d3d3d] hover:bg-[#2a2a2a] text-white text-sm font-medium rounded-sm transition-colors duration-200"
                >
                  {submitted ? "Message sent ✓" : "Send message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
