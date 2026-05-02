import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { services } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function VideoProduction() {
  const service = services.find((s) => s.slug === "video-production");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
