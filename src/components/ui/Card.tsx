/**
 * Card Component
 *
 * Reusable card component for displaying content in a contained, styled box.
 * Supports images, icons, titles, descriptions, and optional links.
 *
 * @file Reusable card UI component
 * @author DBSEE Agency
 * @component
 */

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for Card component
 *
 * @interface CardProps
 * @property {string} title - Card title/heading
 * @property {string} description - Card description text
 * @property {string} [icon] - Icon emoji or character
 * @property {string} [href] - Link URL (makes card clickable)
 * @property {string} [image] - Image URL for card image
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} [children] - Child elements
 */
interface CardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card - Renders a styled card container
 *
 * @component
 * @param {CardProps} props - Component props
 * @returns {JSX.Element} Card element (wrapped in Link if href provided)
 */
export function Card({
  title,
  description,
  icon,
  href,
  image,
  className,
  children,
}: CardProps) {
  const content = (
    <div
      className={cn(
        "bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300",
        className,
      )}
    >
      {image && (
        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      {icon && (
        <div className="mb-4">
          {/* Icon would be rendered here using lucide-react */}
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-primary text-xl">{icon}</span>
          </div>
        </div>
      )}
      <h3 className="font-heading font-bold text-xl text-white mb-2">
        {title}
      </h3>
      <p className="text-dark-muted">{description}</p>
      {children}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
