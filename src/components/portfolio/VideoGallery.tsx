"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail?: string;
}

interface VideoGalleryProps {
  title: string;
  subtitle?: string;
  videos: VideoItem[];
  aspectRatio?: "video" | "reel";
}

export function VideoGallery({ title, subtitle, videos, aspectRatio = "video" }: VideoGalleryProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={title} eyebrow="FEATURED" />
        {subtitle && (
          <p className="text-center text-dark-muted -mt-8 mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className={`grid gap-6 ${
          aspectRatio === "reel" 
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}>
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
                <p className="text-white font-semibold text-sm">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
