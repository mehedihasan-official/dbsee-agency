/**
 * Section Heading Component
 *
 * Reusable heading component for section introductions.
 * Displays an eyebrow text, main title, and optional subtitle.
 *
 * @file Reusable section heading UI component
 * @author DBSEE Agency
 * @component
 */

import { cn } from "@/lib/utils";

/**
 * Props for SectionHeading component
 *
 * @interface SectionHeadingProps
 * @property {string} eyebrow - Small label above title (e.g., "OUR SERVICES")
 * @property {string} title - Main heading text
 * @property {string} [subtitle] - Optional subtitle or description
 * @property {"center" | "left"} [align="center"] - Text alignment
 * @property {string} [className] - Additional CSS classes
 */
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * SectionHeading - Renders a styled section heading
 *
 * @component
 * @param {SectionHeadingProps} props - Component props
 * @returns {JSX.Element} Heading section
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("mb-12", align === "center" && "text-center", className)}
    >
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-dark-muted text-lg max-w-2xl",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
