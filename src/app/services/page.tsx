import { CtaBanner } from "@/components/home/CtaBanner";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-dark-muted text-lg">
            Comprehensive digital marketing solutions designed to grow your
            business across all platforms.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CtaBanner />
    </div>
  );
}
