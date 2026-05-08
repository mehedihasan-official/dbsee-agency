/**
 * Web Portfolio Component
 *
 * Displays web development projects in a grid layout.
 * Each project includes an image, title, description, and link.
 *
 * @file Web projects portfolio display component
 * @author DBSEE Agency
 * @component
 */

"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

/**
 * WebProject - Interface for web project data
 *
 * @interface WebProject
 * @property {string} id - Unique project identifier
 * @property {string} title - Project title/name
 * @property {string} url - Project live URL or link
 * @property {string} imageUrl - Project screenshot/image URL
 * @property {string} description - Short project description
 */
interface WebProject {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  description: string;
}

/**
 * WebPortfolioProps - Props for WebPortfolio component
 *
 * @interface WebPortfolioProps
 * @property {string} title - Section title
 * @property {string} [subtitle] - Optional section subtitle
 * @property {WebProject[]} projects - Array of web projects to display
 */
interface WebPortfolioProps {
  title: string;
  subtitle?: string;
  projects: WebProject[];
}

/**
 * WebPortfolio - Renders web development projects grid
 *
 * @component
 * @param {WebPortfolioProps} props - Component props
 * @returns {JSX.Element} Web portfolio section
 */
export function WebPortfolio({ title, subtitle, projects }: WebPortfolioProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={title} eyebrow="FEATURED" />
        {subtitle && (
          <p className="text-center text-dark-muted -mt-8 mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-muted mb-4">{project.description}</p>
                <Button variant="outline" size="sm" href={project.url}>
                  Visit Website
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
