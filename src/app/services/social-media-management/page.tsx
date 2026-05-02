import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { services } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function SocialMediaManagement() {
  const service = services.find((s) => s.slug === "social-media-management");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
