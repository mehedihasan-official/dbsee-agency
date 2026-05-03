import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-[#0B1926] border-t border-slate-700 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading font-bold text-white text-xl tracking-tight">
                DBSEE
              </span>
            </Link>
            <div className="text-white text-sm space-y-1 mb-6">
              <p>Mega Castle Co WLL</p>
              <p>CR No. 94941 13</p>
              <p>&nbsp;</p>
              <p>BAHRAIN</p>
              <p>NEW ZEALAND</p>
              <p>SAUDI ARABIA</p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gray-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                {
                  label: "Social Media Management",
                  href: "/services/social-media-management",
                },
                {
                  label: "Social Media Advertising",
                  href: "/services/social-media-advertising",
                },
                { label: "TikTok Ads", href: "/services/tiktok-ads" },
                { label: "Google Ads", href: "/services/google-ads" },
                {
                  label: "Video Production",
                  href: "/services/video-production",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gray-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Solutions */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Request a call", href: "/request-a-call" },
                { label: "Coaching", href: "/services/coaching-training" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gray-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Google Partner Badge */}
            <div className="mt-8 inline-flex items-center gap-2 border border-slate-600 rounded-lg px-3 py-2">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-gray-300 leading-none">
                  Google
                </span>
                <span className="text-xs font-bold text-white leading-none">
                  Partner
                </span>
              </div>
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-xs">
            Copyright © 2025 Mega Castle Co WLL | Trading as DBSEE | CR No.
            94941 13 ·{" "}
            <Link
              href="/privacy-policy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
