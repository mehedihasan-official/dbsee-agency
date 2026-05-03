"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const COUNTRY_CODES = [
  { code: "BH", dial: "+973", flag: "🇧🇭" },
  { code: "SA", dial: "+966", flag: "🇸🇦" },
  { code: "AE", dial: "+971", flag: "🇦🇪" },
  { code: "KW", dial: "+965", flag: "🇰🇼" },
  { code: "QA", dial: "+974", flag: "🇶🇦" },
  { code: "OM", dial: "+968", flag: "🇴🇲" },
  { code: "GB", dial: "+44",  flag: "🇬🇧" },
  { code: "US", dial: "+1",   flag: "🇺🇸" },
  { code: "NZ", dial: "+64",  flag: "🇳🇿" },
  { code: "IN", dial: "+91",  flag: "🇮🇳" },
];

export default function RequestCall() {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "request-a-call",
          name: formData.name,
          email: formData.email,
          phone: `${countryDial.dial} ${formData.mobile}`,
          organization: formData.organization,
          position: formData.position,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result?.error || "Failed to submit");

      setStatus("success");
      setFormData({ name: "", organization: "", position: "", email: "", mobile: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit the form.");
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d0d6b 0%, #1a1aad 40%, #2525c9 60%, #1a0066 100%)",
          minHeight: "240px",
        }}
      >
        {/* Abstract decorative circles */}
        <div
          className="absolute right-0 top-0 opacity-20"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, #4040ff 0%, transparent 70%)",
            transform: "translate(150px, -150px)",
          }}
        />
        <div
          className="absolute left-1/4 bottom-0 opacity-10"
          style={{
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, #8080ff 0%, transparent 70%)",
            transform: "translateY(100px)",
          }}
        />

        <div className="relative z-10 flex items-center justify-center" style={{ minHeight: "240px" }}>
          <h1
            className="text-white text-center font-semibold"
            style={{ fontSize: "2rem", letterSpacing: "0.01em" }}
          >
            Request a call
          </h1>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-lg mx-auto">

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-gray-900 text-2xl font-semibold mb-2">Request Submitted!</h2>
              <p className="text-gray-500 text-sm mb-6">
                Thank you! We&apos;ll be in touch with you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm text-blue-700 underline hover:no-underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Full Name <span className="text-gray-700">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-white"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-white"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Email <span className="text-gray-700">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
              </div>

              {/* Mobile with country code picker */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Mobile <span className="text-gray-700">*</span>
                </label>
                <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-blue-500">
                  {/* Country selector */}
                  <div className="relative flex-shrink-0">
                    <select
                      value={countryDial.code}
                      onChange={(e) => {
                        const found = COUNTRY_CODES.find(c => c.code === e.target.value);
                        if (found) setCountryDial(found);
                      }}
                      className="appearance-none h-full pl-2 pr-6 py-2.5 bg-white text-sm text-gray-700 focus:outline-none border-r border-gray-300 cursor-pointer"
                      style={{ minWidth: "70px" }}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.dial}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                    className="flex-1 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Message <span className="text-gray-700">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-white resize-none"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "pending"}
                className="w-full py-3 rounded text-white text-sm font-bold uppercase tracking-widest transition-colors"
                style={{
                  backgroundColor: status === "pending" ? "#5aad5a" : "#4caf50",
                }}
              >
                {status === "pending" ? "SUBMITTING..." : "SUBMIT"}
              </button>

            </form>
          )}
        </div>
      </section>

      {/* ── WhatsApp Floating Button ── */}
      <a
        href="https://wa.me/97300000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25d366" }}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>

    </div>
  );
}
