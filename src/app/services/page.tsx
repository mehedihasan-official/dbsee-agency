import { CtaBanner } from "@/components/home/CtaBanner";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HeroBanner } from "@/components/layout/HeroBanner";

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <HeroBanner 
        title="Our Services" 
        description="Comprehensive digital marketing solutions designed to grow your business across all platforms."
      />

      <ServicesSection />
      <CtaBanner />
    </div>
  );
}
