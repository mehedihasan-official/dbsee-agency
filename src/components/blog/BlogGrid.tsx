/**
 * Blog Grid Component
 *
 * Displays multiple blog posts in a responsive grid layout.
 * Uses BlogCard component to render individual posts.
 *
 * @file Blog posts grid component
 * @author DBSEE Agency
 * @component
 */

import { blogPosts } from "@/lib/placeholder-data";
import { BlogCard } from "./BlogCard";

/**
 * BlogGrid - Renders a grid of blog post cards
 *
 * Responsive layout: 1 column on mobile, 2 on tablet, 3 on desktop
 *
 * @component
 * @returns {JSX.Element} Grid of blog cards
 */
export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
