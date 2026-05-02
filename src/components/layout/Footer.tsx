import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const companyLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
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
  ];

  const solutionLinks = [
    { href: "/request-a-call", label: "Request a call" },
    { href: "/services/coaching-training", label: "Coaching" },
    { href: "/blog", label: "Blog" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <Link
              href="/"
              className="font-heading font-bold text-white text-xl mb-4 block"
            >
              DBSEE
            </Link>
            <div className="space-y-1 mb-6">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                BAHRAIN
              </p>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                NEW ZEALAND
              </p>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                SAUDI ARABIA
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Solutions */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Google Partner Badge */}
            <div className="bg-white rounded-lg p-3 inline-flex items-center gap-2 mt-4">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-600 via-red-500 to-yellow-400 rounded"></div>
              <span className="text-black text-xs font-bold">
                Google Partner
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/30 text-xs">
            Copyright © 2026 DBSEE Agency. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-white/40 hover:text-white/60 transition text-xs mt-4 md:mt-0"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
