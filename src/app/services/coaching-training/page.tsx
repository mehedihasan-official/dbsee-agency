import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { services } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function CoachingTraining() {
  const service = services.find((s) => s.slug === "coaching-training");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
