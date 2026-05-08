/**
 * Blog Preview Component (Home Page)
 *
 * Displays featured blog posts on the home page.
 * Shows the 3 most recent blog posts with a link to view all posts.
 *
 * @file Blog preview section for homepage
 * @author DBSEE Agency
 * @component
 */

"use client";

import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/placeholder-data";
import { motion } from "framer-motion";

/**
 * BlogPreview - Renders featured blog posts section
 *
 * Displays the 3 most recent blog posts with animations
 * and includes a button to view all blog posts.
 *
 * @component
 * @returns {JSX.Element} Blog preview section
 */
export function BlogPreview() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding">
      <SectionHeading
        eyebrow="LATEST INSIGHTS"
        title="Stay Ahead of the Curve"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <Button href="/blog" variant="outline">
          View All Posts
        </Button>
      </div>
    </section>
  );
}
