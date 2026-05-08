/**
 * Services Page
 *
 * Main services listing page that displays all available service offerings.
 * Users can view the complete range of services DBSEE provides including:
 * - Social Media Management
 * - Social Media Advertising
 * - TikTok Ads
 * - Google Ads
 * - Video Production
 * - Coaching & Training
 *
 * @file Services listing page
 * @author DBSEE Agency
 * @page /services
 */

import { CtaBanner } from "@/components/home/CtaBanner";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HeroBanner } from "@/components/layout/HeroBanner";

/**
 * Services - Services listing page component
 *
 * @page
 * @returns {JSX.Element} Services page with all service offerings
 */
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
