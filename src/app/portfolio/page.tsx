/**
 * Portfolio Page
 *
 * Showcases DBSEE Agency's work across multiple categories:
 * - Social Media Reels (9:16 aspect ratio)
 * - Promotional Videos (16:9 aspect ratio)
 * - Photography Gallery (Masonry layout)
 * - Web Development Projects
 *
 * @file Portfolio showcase page
 * @author DBSEE Agency
 * @page /portfolio
 */

import { CtaBanner } from "@/components/home/CtaBanner";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { PhotographyGallery } from "@/components/portfolio/PhotographyGallery";
import { VideoGallery } from "@/components/portfolio/VideoGallery";
import { WebPortfolio } from "@/components/portfolio/WebPortfolio";

/**
 * Sample reel videos for social media content
 * Used to demonstrate video production capabilities (9:16 vertical format)
 */
const reels = [
  {
    id: "1",
    title: "Lifestyle Branding",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Product Showcase",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Client Testimonial",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Event Highlight",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Short Story",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "7",
    title: "Tutorial Reel",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "8",
    title: "Quick Tip",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const promoVideos = [
  {
    id: "1",
    title: "Corporate Overview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "New Product Launch",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Brand Story",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Customer Success",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Service Explanation",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Team Culture",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const photography = Array.from({ length: 40 }).map((_, i) => ({
  id: `${i + 1}`,
  url: `https://picsum.photos/seed/photo-${i + 1}/600/${800 + (i % 3) * 100}`,
  alt: `Photography ${i + 1}`,
}));

const webProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    url: "#",
    imageUrl: "https://picsum.photos/seed/web-1/800/500",
    description: "A full-featured online store with modern UI.",
  },
  {
    id: "2",
    title: "Corporate Website",
    url: "#",
    imageUrl: "https://picsum.photos/seed/web-2/800/500",
    description: "Professional web presence for a law firm.",
  },
  {
    id: "3",
    title: "SaaS Dashboard",
    url: "#",
    imageUrl: "https://picsum.photos/seed/web-3/800/500",
    description: "Complex data visualization and management tool.",
  },
  {
    id: "4",
    title: "Portfolio Website",
    url: "#",
    imageUrl: "https://picsum.photos/seed/web-4/800/500",
    description: "Creative portfolio for a photography studio.",
  },
];

export default function Portfolio() {
  return (
    <div>
      {/* Hero */}
      <HeroBanner
        title="Portfolio"
        description="Real results from real clients. See how we've helped businesses grow across industries."
      />

      <VideoGallery
        title="Short-Form Video (Reels)"
        subtitle="Examples of short-form videos created for platforms like Instagram and TikTok."
        videos={reels}
        aspectRatio="reel"
      />

      <VideoGallery
        title="Promotional Videos"
        subtitle="High-quality promotional videos for brands and businesses."
        videos={promoVideos}
        aspectRatio="video"
      />

      <PhotographyGallery
        title="Photography"
        subtitle="Professional photography services for products, events, and lifestyle."
        images={photography}
      />

      <WebPortfolio
        title="Website Development"
        subtitle="Modern, responsive websites built for performance and conversions."
        projects={webProjects}
      />

      <CtaBanner />
    </div>
  );
}
