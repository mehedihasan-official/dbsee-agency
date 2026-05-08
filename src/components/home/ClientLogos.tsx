/**
 * Client Logos Component
 *
 * Displays a scrolling marquee of client logos to build trust and credibility.
 * Logos scroll horizontally with gradient fade effects at edges.
 *
 * @file Client logos scrolling carousel
 * @author DBSEE Agency
 * @component
 */

import { clientLogos } from "@/lib/placeholder-data";

/**
 * ClientLogos - Renders scrolling marquee of client logos
 *
 * Features:
 * - Infinite scroll animation
 * - Gradient fade effects on left and right sides
 * - Responsive layout
 *
 * @component
 * @returns {JSX.Element} Scrolling client logos section
 */
export function ClientLogos() {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">
            TRUSTED BY LEADING BRANDS
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 bg-dark-card border border-dark-border rounded-lg px-6 py-3 mx-4 text-dark-muted font-semibold whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-card to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-card to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
