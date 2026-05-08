/**
 * Button Component
 *
 * Reusable button component with multiple variants and sizes.
 * Can be rendered as a standard button or a link.
 *
 * @file Reusable button UI component
 * @author DBSEE Agency
 * @component
 */

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Props for Button component
 *
 * @interface ButtonProps
 * @property {React.ReactNode} children - Button text or content
 * @property {"primary" | "secondary" | "outline"} [variant="primary"] - Button style variant
 * @property {"sm" | "md" | "lg"} [size="md"] - Button size
 * @property {string} [href] - If provided, renders as a link instead of button
 * @property {() => void} [onClick] - Click handler function
 * @property {string} [className] - Additional CSS classes
 * @property {"button" | "submit" | "reset"} [type="button"] - HTML button type
 * @property {boolean} [disabled=false] - Whether button is disabled
 */
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * Button - Renders a styled button or link element
 *
 * @component
 * @param {ButtonProps} props - Component props
 * @returns {JSX.Element} Button or link element
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-white text-dark hover:bg-gray-100",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
