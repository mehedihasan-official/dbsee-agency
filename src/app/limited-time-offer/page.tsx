"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const COUNTRY_CODES = [
  { code: "BH", dial: "+973", flag: "🇧🇭" },
  { code: "SA", dial: "+966", flag: "🇸🇦" },
  { code: "AE", dial: "+971", flag: "🇦🇪" },
  { code: "KW", dial: "+965", flag: "🇰🇼" },
  { code: "QA", dial: "+974", flag: "🇶🇦" },
  { code: "GB", dial: "+44",  flag: "🇬🇧" },
  { code: "US", dial: "+1",   flag: "🇺🇸" },
  { code: "NZ", dial: "+64",  flag: "🇳🇿" },
];

const PACKAGE_OPTIONS = [
  { value: "stay-visible-600", label: "Stay Visible Package (BD 600)" },
  { value: "free-video",       label: "Free Video Package" },
  { value: "other",            label: "Other" },
];

export default function LimitedTimeOffer() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    interested: "",
    about: "",
  });
  const [countryDial, setCountryDial] = useState(COUNTRY_CODES[0]);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "limited-time-offer",
          name: formData.fullName,
          email: formData.email,
          phone: `${countryDial.dial} ${formData.phone}`,
          businessName: formData.businessName,
          interested: formData.interested,
          message: formData.about,
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result?.error || "Failed to submit");
      setStatus("success");
      setFormData({ fullName: "", businessName: "", email: "", phone: "", interested: "", about: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unable to submit.");
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>

      {/* ── TOP NAV STRIP ── already handled by layout Navbar */}

      {/* ── HERO: "Don't Go Dark." ── */}
      <section className="pt-16" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                Limited Availability — March 2025
              </span>
            </div>

            <h1 className="font-heading font-bold text-white mb-3" style={{ fontSize: "3.5rem", lineHeight: 1.1 }}>
              Don&apos;t Go Dark.
            </h1>
            <h2 className="font-heading font-bold mb-6" style={{ fontSize: "2rem", lineHeight: 1.2, color: "#4fc3f7" }}>
              The Businesses That Show Up Now, Win Later.
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
              Your competitors have stopped advertising. Your audience is glued to their
              screens. This is the lowest-cost, highest-attention window your business may
              ever get.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#offer-form"
                className="inline-block text-sm font-bold px-6 py-3 rounded text-white transition-colors"
                style={{ backgroundColor: "#2979ff" }}
              >
                Get the Stay Visible Package ↓
              </a>
              <a
                href="#offer-form"
                className="inline-block text-sm font-semibold px-6 py-3 rounded border border-gray-600 text-gray-300 hover:border-gray-400 transition-colors"
              >
                Apply for a FREE Package (3 spots)
              </a>
            </div>
          </div>

          {/* Right — video placeholder */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800" style={{ aspectRatio: "16/9" }}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=400&fit=crop"
              alt="Team meeting"
              className="w-full h-full object-cover opacity-70"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/40 cursor-pointer hover:bg-white/30 transition-colors">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#111111", borderTop: "1px solid #222" }}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-heading font-bold text-white mb-1" style={{ fontSize: "2.5rem" }}>3.5x</div>
            <div className="text-gray-500 text-sm">More visibility for brands that advertise during a downturn.</div>
          </div>
          <div>
            <div className="font-heading font-bold text-white mb-1" style={{ fontSize: "2.5rem" }}>30%</div>
            <div className="text-gray-500 text-sm">More growth through our own meta-amplify.com fans.</div>
          </div>
          <div>
            <div className="font-heading font-bold text-white mb-1" style={{ fontSize: "2.5rem" }}>BD 600</div>
            <div className="text-gray-500 text-sm">Stay Visible Package — BD 600 per month management.</div>
          </div>
        </div>
      </section>

      {/* ── BODY COPY: While You're Silent ── */}
      <section style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading font-bold text-white text-3xl mb-6">
              While You&apos;re Silent, Someone Else Is Being Heard.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Right now, most businesses in Bahrain have paused their marketing. No new content. No ads running. No presence online.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              They think they&apos;re being cautious. But they&apos;re actually <span className="text-white font-semibold">handing market share to whoever has the courage to keep showing up.</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your customers haven&apos;t stopped scrolling. They&apos;re scrolling <span className="text-white font-semibold">more than ever,</span> looking for updates, looking for answers, looking for normality. The businesses they see during this time are the ones they&apos;ll choose when things recover.
            </p>
          </div>
          <div className="flex items-start">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4fc3f7" }}>
                Every day your business is silent, your competitors — the ones still showing up — are filling the space you left behind. And that space gets harder to reclaim the longer you wait.
              </p>
              <div className="w-8 h-0.5 bg-blue-500 mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORY SECTION ── */}
      <section style={{ backgroundColor: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-heading font-bold text-white text-3xl mb-12">
            History Is Clear. Visibility During Crisis = Dominance After.
          </h2>

          <div className="space-y-8">
            {[
              {
                era: "THE GREAT DEPRESSION — 1930",
                company: "Kellogg's doubled down. Post disappeared.",
                body: "When the economy collapsed, Post was the #1 cereal brand. They did what everyone expected: slashed ads and waited. Kellogg's did the opposite: doubled their ad spend, launched Rice Krispies, and went all-in on radio. By 1933, Kellogg's had grown up 30% that Post never recovered the top spot. Have you ever heard of Post Cereal? Exactly.",
              },
              {
                era: "THE 1990'S RECESSION",
                company: "McDonald's retreated. Taco Bell and Pizza Hut surged.",
                body: "When McDonald's pulled advertising, Taco Bell and Pizza Hut rushed into the void — growing sales by 40% and 61% respectively. The same pattern played out in the crises of the 1970s and again in 2008.",
              },
              {
                era: "COVID-19 — 2020",
                company: "P&G doubled down. Their competitors froze.",
                body: "P&G increased marketing investment while most competitors went dark. Revenue surged. Nike made their Training Club app free and saw digital engagement soar. The brands that showed up owned the recovery.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#2979ff", minHeight: "80px" }} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{item.era}</p>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{item.company}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mt-12 max-w-3xl">
            The pattern is always the same: when competitors retreat, the cost of attention drops and the impact of visibility multiplies. The businesses that show up during the hard times own the recovery.
          </p>
        </div>
      </section>

      {/* ── SECOND STATS BAR ── */}
      <section style={{ backgroundColor: "#111111", borderTop: "1px solid #222" }}>
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-heading font-bold text-white mb-1" style={{ fontSize: "2.5rem" }}>3.5x</div>
            <div className="text-gray-500 text-sm">More brand visibility for businesses that maintain presence during a downturn.</div>
          </div>
          <div>
            <div className="font-heading font-bold text-white mb-1" style={{ fontSize: "2.5rem" }}>−13%</div>
            <div className="text-gray-500 text-sm">Drop in ad spending during 2020 recession — creating a vacuum the bold brands filled.</div>
          </div>
          <div>
            <div className="font-heading font-bold text-white mb-1" style={{ fontSize: "2.5rem" }}>9x</div>
            <div className="text-gray-500 text-sm">Faster recovery for advertising brands that maintained visibility through the 1930s crisis.</div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-heading font-bold text-white text-3xl mb-3">Stay Visible. Stay Ahead.</h2>
          <p className="text-gray-400 text-sm mb-12">Two ways to make sure your business is still standing — and stronger — when this is done.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Package 1 — Stay Visible */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#1a1aad" }}>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">STAY VISIBLE PLAN</p>
              <h3 className="font-heading font-bold text-white text-2xl mb-1">Stay Visible Package</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-heading font-bold text-white text-4xl">BD 600</span>
              </div>
              <p className="text-blue-200 text-sm mb-6">
                <span className="line-through text-blue-300 mr-2">BD 1,200+</span> Save up to 50%
              </p>
              <ul className="space-y-3 text-sm text-blue-100">
                {[
                  "Up to 10 short-form videos — TikTok, Reels, Shorts/story. Shot across 2 half-day production days within 30 days. Alternative high-grade options are available dependent on your business needs.",
                  "Content strategy session — Plan your 30-day content around what your audience is most engaged with.",
                  "Full post production — Editing, text overlays, captions, platform optimisation, publishing guidance.",
                  "30 days Meta ads management — Facebook & Instagram setup, targeting, monitoring and reporting, based at BD 300 done.",
                  "Limited to 10 businesses this month due to production capacity. Payment terms: 50% advance.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-300 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Package 2 — Free Video */}
            <div className="rounded-2xl p-8 border border-gray-800" style={{ backgroundColor: "#141414" }}>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">3 SPOTS ONLY</p>
              <h3 className="font-heading font-bold text-white text-2xl mb-4">Free Video Package</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We&apos;re giving 3 Bahrain businesses a complimentary short-form video package — 3 videos. Half-day production day with two videographers.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Tell us about your business. We&apos;ll select 3 businesses where we can make the biggest impact.
              </p>
              <a
                href="#offer-form"
                className="text-sm font-semibold underline"
                style={{ color: "#4fc3f7" }}
              >
                → Apply using the form below
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section style={{ backgroundColor: "#111111", borderTop: "1px solid #222" }}>
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🏆", label: "Google Premier Partner", sub: "Certified Google Ads partner" },
            { icon: "📅", label: "10+ Years Experience",   sub: "Agency founded in 2012" },
            { icon: "👥", label: "30+ Team Members",       sub: "In-house specialists" },
            { icon: "⭐", label: "Leading GCC Brands",     sub: "Trusted by 200+ businesses" },
          ].map((b, i) => (
            <div key={i}>
              <div className="text-3xl mb-2">{b.icon}</div>
              <div className="font-heading font-bold text-white text-sm mb-1">{b.label}</div>
              <div className="text-gray-500 text-xs">{b.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO CTA ── */}
      <section style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-6">Click to view our Portfolio.</h2>
          <a
            href="/portfolio"
            className="inline-block text-sm font-bold px-8 py-3 rounded border border-gray-600 text-white hover:bg-white/5 transition-colors"
          >
            View Portfolio →
          </a>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section id="offer-form" style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="font-heading font-bold text-white text-3xl text-center mb-2">
            Don&apos;t Be Post. Be Kellogg&apos;s.
          </h2>
          <p className="text-gray-400 text-sm text-center mb-10">
            Fill in the form below and we&apos;ll be in touch within 24 hours to discuss the best option for your business.
          </p>

          {status === "success" ? (
            <div className="text-center py-12 border border-gray-800 rounded-2xl">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-white font-bold text-xl mb-2">Application Submitted!</h3>
              <p className="text-gray-400 text-sm">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name + Business Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">FULL NAME *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500"
                    style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">BUSINESS NAME *</label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500"
                    style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500"
                    style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">PHONE / WHATSAPP *</label>
                  <div className="flex rounded border overflow-hidden focus-within:border-blue-500" style={{ borderColor: "#333" }}>
                    <select
                      value={countryDial.code}
                      onChange={(e) => {
                        const found = COUNTRY_CODES.find(c => c.code === e.target.value);
                        if (found) setCountryDial(found);
                      }}
                      className="px-2 py-3 text-sm text-white border-r focus:outline-none appearance-none"
                      style={{ backgroundColor: "#1a1a1a", borderColor: "#333", minWidth: "80px" }}
                    >
                      {COUNTRY_CODES.map(c => (
                        <option key={c.code} value={c.code}>{c.flag} {c.dial}</option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter number"
                      className="flex-1 px-3 py-3 text-sm text-white placeholder-gray-600 focus:outline-none"
                      style={{ backgroundColor: "#1a1a1a" }}
                    />
                  </div>
                </div>
              </div>

              {/* I'm interested in */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">I&apos;M INTERESTED IN *</label>
                <select
                  name="interested"
                  required
                  value={formData.interested}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border text-sm focus:outline-none focus:border-blue-500 appearance-none"
                  style={{ backgroundColor: "#1a1a1a", borderColor: "#333", color: formData.interested ? "#fff" : "#666" }}
                >
                  <option value="">Stay Visible Package (BD 600)</option>
                  {PACKAGE_OPTIONS.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* Tell us about your business */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">TELL US ABOUT YOUR BUSINESS *</label>
                <textarea
                  name="about"
                  required
                  rows={5}
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="What does your business do? What are your goals right now? If applying for the Free Package, tell us why visibility matters to your business."
                  className="w-full px-4 py-3 rounded border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 resize-none"
                  style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "pending"}
                className="w-full py-4 rounded font-bold text-sm uppercase tracking-widest text-white transition-colors"
                style={{ backgroundColor: status === "pending" ? "#1a5fa8" : "#2979ff" }}
              >
                {status === "pending" ? "SUBMITTING..." : "Show Up — Send My Details ↓"}
              </button>

              <p className="text-gray-600 text-xs text-center">
                We respect your privacy. Your info will only be used to contact you about this offer.
                Bahrain based business required. Limited slots available.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── WhatsApp floating button ── */}
      <a
        href="https://wa.me/97300000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25d366" }}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
