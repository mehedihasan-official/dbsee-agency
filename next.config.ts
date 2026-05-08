/**
 * Next.js Configuration
 *
 * Configures Next.js behavior including:
 * - Image optimization settings
 * - Remote image sources allowed for Next.js Image component
 *
 * @file Next.js configuration
 * @author DBSEE Agency
 */

import type { NextConfig } from "next";

/**
 * nextConfig - Next.js configuration object
 *
 * Images: Allows external images from trusted sources (Unsplash, Picsum, Gravatar, etc.)
 * for optimization and performance
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
