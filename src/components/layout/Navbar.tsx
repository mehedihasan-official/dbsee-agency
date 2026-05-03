"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Social Media Management", href: "/services/social-media-management" },
      { label: "Social Media Advertising", href: "/" },
      { label: "TikTok Ads", href: "/services/social-media-advertising" },
      { label: "Google Ads", href: "/" },
      { label: "Video Production", href: "/" },
      { label: "Coaching & Training", href: "/" },
    ],
  },
  // {
  //   label: "Services",
  //   href: "/services",
  //   submenu: [
  //     { label: "Social Media Management", href: "/services/social-media-management" },
  //     { label: "Social Media Advertising", href: "/services/social-media-advertising" },
  //     { label: "TikTok Ads", href: "/services/tiktok-ads" },
  //     { label: "Google Ads", href: "/services/google-ads" },
  //     { label: "Video Production", href: "/services/video-production" },
  //     { label: "Coaching & Training", href: "/services/coaching-training" },
  //   ],
  // },
  { label: "Portfolio", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Limited Time Offer", href: "/limited-time-offer" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Determine if we're on the home page (hero covers the top)
  const isHome = pathname === "/";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    return () => { if (servicesTimeout) clearTimeout(servicesTimeout); };
  }, [servicesTimeout]);

  const navBg = isHome
    ? scrolled
      ? "bg-[#0B1926]/95 backdrop-blur-md shadow-lg shadow-black/30"
      : "bg-transparent"
    : "bg-[#0B1926] border-b border-slate-800";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      {/* ── Main bar ── */}
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        {/* LEFT — Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <span className="font-heading font-bold text-white text-xl tracking-tight leading-none">
            DBSEE
          </span>
        </Link>

        {/* CENTRE — Desktop nav links */}
        <div className="hidden lg:flex items-center justify-center gap-7">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.submenu && link.submenu.some((sub) => pathname === sub.href));
            const isOffer = link.label === "Limited Time Offer";
            const hasSubmenu = link.submenu;

            return (
              <div key={link.href} className="relative">
                {hasSubmenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (servicesTimeout) { clearTimeout(servicesTimeout); setServicesTimeout(null); }
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setServicesOpen(false), 150);
                      setServicesTimeout(timeout);
                    }}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${
                        isOffer
                          ? "text-primary hover:text-primary-dark"
                          : isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-[#0B1926] border border-slate-700 rounded-xl shadow-2xl shadow-black/50 py-2 z-50">
                        {link.submenu!.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className={`block px-4 py-3 text-sm transition-colors hover:bg-slate-800 ${
                              pathname === subLink.href
                                ? "text-primary font-medium"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={
                      isOffer
                        ? "text-sm font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap"
                        : isActive
                        ? "text-sm font-medium text-white transition-colors whitespace-nowrap"
                        : "text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                    }
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT — CTA + hamburger */}
        <div className="flex items-center gap-3 justify-end">
          <Link
            href="/request-a-call"
            className="hidden lg:inline-flex items-center bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full px-5 py-2 transition-all duration-200 whitespace-nowrap"
          >
            Request a call
          </Link>

          <button
            className="lg:hidden flex items-center justify-center text-white w-9 h-9 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <div className="relative z-50 bg-[#0B1926] border-t border-slate-700 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.submenu && link.submenu.some((sub) => pathname === sub.href));
            const isOffer = link.label === "Limited Time Offer";
            const hasSubmenu = link.submenu;

            return (
              <div key={link.href}>
                {hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex items-center justify-between w-full py-3 text-sm font-medium border-b border-slate-700 transition-colors ${
                        isActive ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.submenu!.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-2 text-sm transition-colors ${
                              pathname === subLink.href
                                ? "text-primary font-medium"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-sm font-medium border-b border-slate-700 last:border-0 transition-colors ${
                      isOffer
                        ? "text-primary hover:text-primary-dark"
                        : isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}

          <Link
            href="/request-a-call"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full px-5 py-3 transition-all duration-200 text-center"
          >
            Request a call
          </Link>
        </div>
      </div>
    </nav>
  );
}
