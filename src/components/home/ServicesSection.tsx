"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/placeholder-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="section-padding">
      <SectionHeading
        eyebrow="OUR SERVICES"
        title="Everything You Need to Grow Online"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              title={service.name}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between mt-4">
                <span className="text-primary font-semibold group-hover:text-primary-dark transition-colors">
                  Learn More
                </span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
