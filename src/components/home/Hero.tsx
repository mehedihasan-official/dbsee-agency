"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[radial-gradient(ellipse_at_top,_#FF6B3515_0%,_transparent_60%)] relative overflow-hidden">
      <div className="absolute inset-0 bg-dark"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Badge className="mb-6">Digital Marketing Agency</Badge>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Unleash Your Business's
            <br />
            <span className="text-primary">Full Potential</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8">
            We help businesses reach, engage, and convert more customers through
            proven social media marketing and digital advertising strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/request-a-call" size="lg">
              Request a Call
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
          <p className="text-white text-sm">
            Trusted by 200+ businesses worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
