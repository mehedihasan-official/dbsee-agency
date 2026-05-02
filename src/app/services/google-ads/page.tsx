import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { services } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function GoogleAds() {
  const service = services.find((s) => s.slug === "google-ads");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
