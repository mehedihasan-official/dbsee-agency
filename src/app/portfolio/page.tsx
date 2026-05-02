import { CtaBanner } from "@/components/home/CtaBanner";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export default function Portfolio() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-dark-muted text-lg">
            Real results from real clients. See how we've helped businesses grow
            across industries.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <PortfolioGrid />
      </section>

      <CtaBanner />
    </div>
  );
}
