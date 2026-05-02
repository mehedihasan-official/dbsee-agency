import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { services } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function TikTokAds() {
  const service = services.find((s) => s.slug === "tiktok-ads");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
