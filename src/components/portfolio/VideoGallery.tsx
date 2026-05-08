/**
 * Video Gallery Component
 *
 * Reusable component for displaying videos in a grid layout.
 * Supports two aspect ratios: standard video (16:9) and social media reels (9:16).
 *
 * @file Video gallery display component
 * @author DBSEE Agency
 * @component
 */

"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * VideoItem - Interface for video data
 *
 * @interface VideoItem
 * @property {string} id - Unique video identifier
 * @property {string} title - Video title/name
 * @property {string} videoUrl - Embedded video URL (e.g., YouTube iframe src)
 * @property {string} [thumbnail] - Optional thumbnail image URL
 */
interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail?: string;
}

/**
 * VideoGalleryProps - Props for VideoGallery component
 *
 * @interface VideoGalleryProps
 * @property {string} title - Gallery section title
 * @property {string} [subtitle] - Optional subtitle/description
 * @property {VideoItem[]} videos - Array of videos to display
 * @property {"video" | "reel"} [aspectRatio="video"] - Video aspect ratio (16:9 or 9:16)
 */
interface VideoGalleryProps {
  title: string;
  subtitle?: string;
  videos: VideoItem[];
  aspectRatio?: "video" | "reel";
}

/**
 * VideoGallery - Renders a responsive video gallery
 *
 * @component
 * @param {VideoGalleryProps} props - Component props
 * @returns {JSX.Element} Video gallery section
 */
export function VideoGallery({
  title,
  subtitle,
  videos,
  aspectRatio = "video",
}: VideoGalleryProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={title} eyebrow="FEATURED" />
        {subtitle && (
          <p className="text-center text-dark-muted -mt-8 mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div
          className={`grid gap-6 ${
            aspectRatio === "reel"
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className={`group relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border transition-all hover:border-primary/50 ${
                aspectRatio === "reel" ? "aspect-[9/16]" : "aspect-video"
              }`}
            >
              {/* Using iframe for demo video, in real scenario this would be a Video component */}
              <iframe
                src={video.videoUrl}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold text-sm">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
