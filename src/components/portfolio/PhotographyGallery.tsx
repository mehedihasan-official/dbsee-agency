/**
 * Photography Gallery Component
 *
 * Displays images in a masonry/column grid layout.
 * Images automatically adjust to different screen sizes.
 * Features hover effects for interactivity.
 *
 * @file Photography/image gallery display component
 * @author DBSEE Agency
 * @component
 */

"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

/**
 * PhotographyItem - Interface for photography/image data
 *
 * @interface PhotographyItem
 * @property {string} id - Unique image identifier
 * @property {string} url - Image file URL
 * @property {string} alt - Accessibility alt text for image
 */
interface PhotographyItem {
  id: string;
  url: string;
  alt: string;
}

/**
 * PhotographyGalleryProps - Props for PhotographyGallery component
 *
 * @interface PhotographyGalleryProps
 * @property {string} title - Gallery section title
 * @property {string} [subtitle] - Optional subtitle/description
 * @property {PhotographyItem[]} images - Array of images to display
 */
interface PhotographyGalleryProps {
  title: string;
  subtitle?: string;
  images: PhotographyItem[];
}

/**
 * PhotographyGallery - Renders a masonry-style image gallery
 *
 * Uses CSS columns for responsive layout that adapts to screen size
 *
 * @component
 * @param {PhotographyGalleryProps} props - Component props
 * @returns {JSX.Element} Photography gallery section
 */
export function PhotographyGallery({
  title,
  subtitle,
  images,
}: PhotographyGalleryProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={title} eyebrow="FEATURED" />
        {subtitle && (
          <p className="text-center text-dark-muted -mt-8 mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative break-inside-avoid rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={400}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
