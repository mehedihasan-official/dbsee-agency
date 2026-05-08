/**
 * Call-to-Action Banner Component
 *
 * Prominent banner section that encourages users to take action.
 * Typically placed at the end of pages or sections to drive conversions.
 *
 * Features:
 * - Animated entrance on scroll into view
 * - Large, compelling heading
 * - Button linking to call request form
 *
 * @file CTA banner component
 * @author DBSEE Agency
 * @component
 */

"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

/**
 * CtaBanner - Renders animated call-to-action banner
 *
 * @component
 * @returns {JSX.Element} CTA banner section
 */
export function CtaBanner() {
  return (
    <section className="section-padding bg-dark-card border-y border-dark-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
          READY TO GROW?
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Amplify Your Growth?
        </h2>
        <p className="text-dark-muted text-lg mb-8">
          Let's discuss how we can help your business reach new heights with
          proven digital marketing strategies.
        </p>
        <Button href="/request-a-call" size="lg">
          Start Your Growth Journey
        </Button>
      </motion.div>
    </section>
  );
}
