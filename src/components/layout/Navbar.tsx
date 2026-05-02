"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services",
      label: "Services",
      dropdown: [
        {
          href: "/services/social-media-management",
          label: "Social Media Management",
        },
        {
          href: "/services/social-media-advertising",
          label: "Social Media Advertising",
        },
        { href: "/services/tiktok-ads", label: "TikTok Ads" },
        { href: "/services/google-ads", label: "Google Ads" },
        { href: "/services/video-production", label: "Video Production" },
        { href: "/services/coaching-training", label: "Coaching & Training" },
      ],
    },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-white text-xl">
            DBSEE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="flex items-center text-sm text-white/80 hover:text-white transition">
                      {link.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute left-0 mt-1 min-w-[220px] bg-[#111] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm transition ${
                      isActive(link.href)
                        ? "text-white font-medium"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/limited-time-offer"
              className="text-sm text-white font-medium hover:text-white transition"
            >
              Limited Time Offer
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/request-a-call"
              className="bg-white text-black font-semibold text-sm rounded-full px-5 py-2 hover:bg-gray-100 transition"
            >
              Request a call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <div>
                      <div className="px-3 py-2 text-white font-medium text-sm">
                        {link.label}
                      </div>
                      <div className="pl-6 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-white/80 hover:text-white transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 text-sm transition ${
                        isActive(link.href)
                          ? "text-white font-medium"
                          : "text-white/80 hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/limited-time-offer"
                  className="block px-3 py-2 text-white font-medium text-sm hover:text-white/80 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Limited Time Offer
                </Link>
                <div className="px-3 py-2">
                  <Link
                    href="/request-a-call"
                    className="block w-full bg-white text-black font-semibold text-sm rounded-full px-5 py-2 hover:bg-gray-100 transition text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request a call
                  </Link>
                </div>
    </nav>
  );
}
