"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/placeholder-data";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="section-padding">
      <SectionHeading eyebrow="TESTIMONIALS" title="What Our Clients Say" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-dark-card border border-dark-border rounded-2xl p-6 relative"
          >
            <div className="text-primary text-6xl font-serif leading-none mb-4 opacity-20">
              "
            </div>
            <blockquote className="text-white italic mb-6">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-dark-border rounded-full overflow-hidden mr-4">
                <Image
                  src={`https://i.pravatar.cc/300?img=${index + 1}`}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-dark-muted text-sm">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
