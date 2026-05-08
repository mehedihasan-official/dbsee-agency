/**
 * Utility Functions Module
 *
 * General-purpose utility functions used throughout the application.
 *
 * @file Utility functions
 * @author DBSEE Agency
 */

import { clsx, type ClassValue } from "clsx";

/**
 * cn - Merges CSS class names using clsx
 *
 * Utility for conditionally joining classnames.
 * Useful for combining Tailwind CSS classes with dynamic values.
 *
 * @param {...ClassValue[]} inputs - Class names or objects to merge
 * @returns {string} Merged class name string
 *
 * @example
 * cn('px-4', isActive && 'bg-primary', { 'text-white': true })
 * // Returns: 'px-4 bg-primary text-white'
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
