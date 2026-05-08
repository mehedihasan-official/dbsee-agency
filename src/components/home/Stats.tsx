/**
 * Statistics Section Component (Home Page)
 *
 * Displays key business statistics with animated numbers.
 * Shows impressive metrics to build trust and credibility.
 *
 * @file Statistics showcase section for homepage
 * @author DBSEE Agency
 * @component
 */

"use client";

import { stats } from "@/lib/placeholder-data";
import { motion } from "framer-motion";

/**
 * Stats - Renders animated statistics grid
 *
 * Displays business metrics (e.g., "200+ Brands Managed", "85% Engagement Increase")
 * with staggered animations as section comes into view.
 *
 * @component
 * @returns {JSX.Element} Statistics section with animated counters
 */
export function Stats() {
  return (
    <section className="py-16 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-dark-muted text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
