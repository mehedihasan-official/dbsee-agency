/**
 * Why Choose DBSEE Section Component (Home Page)
 *
 * Highlights key company strengths and differentiators.
 * Shows three main features: Results-Driven, Expert Team, Commitment to Excellence.
 *
 * @file Company differentiators section for homepage
 * @author DBSEE Agency
 * @component
 */

"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Eye, Heart, Target } from "lucide-react";

/**
 * Features array - Core company strengths
 * Each feature has an icon, title, and description
 */
const features = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "We focus on measurable outcomes that drive real business growth, not vanity metrics.",
  },
  {
    icon: Eye,
    title: "Expert In-House Team",
    description:
      "Certified specialists in social media, paid ads, and digital marketing working together.",
  },
  {
    icon: Heart,
    title: "Commitment to Excellence",
    description:
      "We treat your business like our own, delivering exceptional results with integrity.",
  },
];

export function WhyUs() {
  return (
    <section className="section-padding">
      <SectionHeading
        eyebrow="WHY CHOOSE DBSEE"
        title="Results-Focused. Transparent. Experienced."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <feature.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-dark-muted">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
