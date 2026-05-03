"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    position: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [countryDial, setCountryDial] = useState(COUNTRY_CODES[0]);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.name,
          email: formData.email,
          phone: `${countryDial.dial} ${formData.mobile}`,
          organization: formData.organization,
          position: formData.position,
          message: formData.message,
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result?.error || "Failed to submit");
      setStatus("success");
      setFormData({ name: "", organization: "", position: "", email: "", mobile: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unable to submit.");
    }
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>

      {/* ── HERO BANNER ── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0d0d6b 20%, #1a1aad 60%, #2525c9 100%)",
          minHeight: "220px",
          paddingTop: "64px",
        }}
      >
        <div className="absolute right-0 top-0 opacity-20 pointer-events-none"
          style={{ width: 400, height: 400, background: "radial-gradient(circle, #6060ff 0%, transparent 70%)", transform: "translate(100px,-100px)" }} />
        <div className="absolute left-1/3 bottom-0 opacity-10 pointer-events-none"
          style={{ width: 300, height: 300, background: "radial-gradient(circle, #8080ff 0%, transparent 70%)", transform: "translateY(80px)" }} />
        <div className="relative z-10 text-center py-16 px-4">
          <h1 className="font-heading font-semibold text-white text-4xl">Contact</h1>
        </div>
      </section>

      {/* ── FORM + IMAGE SIDE BY SIDE ── */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

          {/* Left — dark card with form */}
          <div className="rounded-2xl p-8 lg:p-10" style={{ backgroundColor: "#0f1923" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">CONTACT FORM</p>
            <h2 className="font-heading font-bold text-white text-2xl mb-6">Send us a message.</h2>

            {status === "success" ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-white font-semibold text-lg">Message sent!</p>
                <p className="text-gray-400 text-sm mt-2">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              /* inner white card */
              <div className="bg-white rounded-xl p-6">
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Full Name *</label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Organization</label>
                    <input
                      type="text" name="organization"
                      value={formData.organization} onChange={handleChange}
                      placeholder="Organization"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Position</label>
                    <input
                      type="text" name="position"
                      value={formData.position} onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Email *</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        placeholder="Email"
                        className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Mobile *</label>
                    <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-blue-500">
                      <div className="relative flex-shrink-0">
                        <select
                          value={countryDial.code}
                          onChange={(e) => {
                            const found = COUNTRY_CODES.find(c => c.code === e.target.value);
                            if (found) setCountryDial(found);
                          }}
                          className="appearance-none h-full pl-2 pr-5 py-2.5 bg-white text-sm text-gray-700 border-r border-gray-300 focus:outline-none cursor-pointer"
                          style={{ minWidth: "72px" }}
                        >
                          {COUNTRY_CODES.map(c => (
                            <option key={c.code} value={c.code}>{c.flag} {c.dial}</option>
                          ))}
                        </select>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="tel" name="mobile" required
                        value={formData.mobile} onChange={handleChange}
                        placeholder="Mobile"
                        className="flex-1 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Message *</label>
                    <textarea
                      name="message" required rows={3}
                      value={formData.message} onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-xs">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "pending"}
                    className="w-full py-3 rounded font-bold text-sm uppercase tracking-widest text-white transition-colors"
                    style={{ backgroundColor: status === "pending" ? "#5aad5a" : "#4caf50" }}
                  >
                    {status === "pending" ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right — image + quote */}
          <div className="relative lg:pl-8 mt-8 lg:mt-0">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=500&fit=crop"
                alt="Digital marketing visual"
                fill
                className="object-cover"
              />
            </div>
            {/* Quote card overlapping bottom-right */}
            <div
              className="absolute bottom-0 right-0 rounded-xl p-5 max-w-xs shadow-xl"
              style={{ backgroundColor: "#2979ff", transform: "translate(8px, 8px)" }}
            >
              <p className="text-white text-sm italic leading-relaxed mb-3">
                &ldquo;Many a small thing has been made large by the right kind of advertising.&rdquo;
              </p>
              <p className="text-blue-200 text-xs font-bold">Mark Twain</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ── */}
      <section className="w-full" style={{ height: "380px" }}>
        <iframe
          title="GOamplify Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.1234567890!2d50.5577!3d26.2285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af4a8b7e6c0d%3A0x123456789abcdef!2sManama%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ── SOCIAL MEDIA SECTION ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">FOLLOW US ON SOCIAL MEDIA</p>
          <h2 className="font-heading font-bold text-gray-900 text-3xl mb-8">Engage With Us</h2>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#1877f2" }}
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
              style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#ff0000" }}
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
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
