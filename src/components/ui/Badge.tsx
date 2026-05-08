/**
 * Badge Component
 *
 * Small, styled label component for categorization or tagging.
 * Commonly used to display post categories, status, or tags.
 *
 * @file Reusable badge/tag UI component
 * @author DBSEE Agency
 * @component
 */

import { cn } from "@/lib/utils";

/**
 * Props for Badge component
 *
 * @interface BadgeProps
 * @property {React.ReactNode} children - Badge text content
 * @property {"orange" | "gray"} [color="orange"] - Badge color scheme
 * @property {string} [className] - Additional CSS classes
 */
interface BadgeProps {
  children: React.ReactNode;
  color?: "orange" | "gray";
  className?: string;
}

/**
 * Badge - Renders a small styled label
 *
 * @component
 * @param {BadgeProps} props - Component props
 * @returns {JSX.Element} Badge element
 */
export function Badge({ children, color = "orange", className }: BadgeProps) {
  const colorClasses = {
    orange: "bg-primary/10 text-primary",
    gray: "bg-white/10 text-white",
  };

  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full",
        colorClasses[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
