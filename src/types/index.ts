/**
 * TypeScript Interfaces and Types
 * 
 * Central location for all TypeScript interfaces used throughout the application.
 * These ensure type safety and consistency across components.
 * 
 * @file Type definitions for the application
 * @author DBSEE Agency
 */

/**
 * Service - Interface for service data
 * 
 * @interface Service
 * @property {string} name - Service display name
 * @property {string} slug - URL-friendly service identifier
 * @property {string} icon - Icon name (from lucide-react)
 * @property {string} shortDescription - Brief service description
 * @property {string} fullDescription - Detailed service description
 * @property {string[]} features - List of service features/benefits
 * @property {Object[]} stats - Service statistics
 * @property {string} stats[].value - Statistic value (e.g., "3x")
 * @property {string} stats[].label - Statistic label
 * @property {Object[]} faqs - Frequently asked questions
 * @property {string} faqs[].question - FAQ question text
 * @property {string} faqs[].answer - FAQ answer text
 */
export interface Service {
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

/**
 * BlogPost - Interface for blog post data
 * 
 * @interface BlogPost
 * @property {string} title - Post title/heading
 * @property {string} slug - URL-friendly post identifier
 * @property {string} date - Publication date
 * @property {string} category - Post category
 * @property {string} excerpt - Short preview excerpt
 * @property {string} readTime - Estimated reading time (e.g., "5 min")
 * @property {string} image - Featured image URL
 * @property {string} author - Author name
 * @property {string} body - Full post content (HTML or markdown)
 */
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  author: string;
  body: string;
}

/**
 * PortfolioItem - Interface for portfolio/case study data
 * 
 * @interface PortfolioItem
 * @property {string} title - Project title
 * @property {string} category - Project category
 * @property {string} image - Project image/screenshot URL
 * @property {string} result - Result or outcome achieved
 * @property {string} client - Client/company name
 */
export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  result: string;
  client: string;
}

/**
 * Testimonial - Interface for client testimonial data
 * 
 * @interface Testimonial
 * @property {string} name - Testimonial author name
 * @property {string} role - Author role/position
 * @property {string} company - Author company name
 * @property {string} quote - Testimonial quote text
 * @property {string} avatar - Author avatar image URL
 */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

/**
 * TeamMember - Interface for team member data
 * 
 * @interface TeamMember
 * @property {string} name - Team member full name
 * @property {string} role - Job title/role
 * @property {string} image - Profile image URL
 */
export interface TeamMember {
