"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Limited Time Offer", href: "/limited-time-offer" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={` top-0 left-0 right-0 z-50 bg-transparent   transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/50" : ""
        }`}
      >
        {/* ── Main bar ── */}
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">

          {/* LEFT — Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <span className="font-heading font-bold text-white text-xl tracking-tight leading-none">
              GO<span className="text-primary">amplify</span>
            </span>
          </Link>

          {/* CENTRE — Desktop nav links */}
          <div className="hidden lg:flex items-center justify-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isOffer = link.label === "Limited Time Offer";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isOffer
                      ? "text-sm font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap"
                      : isActive
                      ? "text-sm font-medium text-white transition-colors whitespace-nowrap"
                      : "text-sm font-medium text-white/60 hover:text-white transition-colors whitespace-nowrap"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* RIGHT — CTA + hamburger */}
          <div className="flex items-center gap-3 justify-end">
            {/* Desktop outline CTA button */}
            <Link
              href="/request-a-call"
              className="hidden lg:inline-flex items-center border border-white/40 hover:border-white text-white text-sm font-semibold rounded-full px-5 py-2 transition-all duration-200 hover:bg-white/5 whitespace-nowrap"
            >
              Request a call
            </Link>

            {/* Mobile hamburger — only visible below lg */}
            <button
              className="lg:hidden flex items-center justify-center text-white w-9 h-9 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isOffer = link.label === "Limited Time Offer";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 text-sm font-medium border-b border-white/5 last:border-0 transition-colors ${
                    isOffer
                      ? "text-primary hover:text-primary-dark"
                      : isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/request-a-call"
              onClick={() => setMobileOpen(false)}
              className="mt-4 border border-white/40 hover:border-white text-white text-sm font-semibold rounded-full px-5 py-3 transition-all duration-200 hover:bg-white/5 text-center"
            >
              Request a call
            </Link>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}