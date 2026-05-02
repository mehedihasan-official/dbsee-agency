import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { services } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function SocialMediaAdvertising() {
  const service = services.find((s) => s.slug === "social-media-advertising");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
