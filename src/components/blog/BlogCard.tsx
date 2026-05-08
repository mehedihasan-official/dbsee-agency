/**
 * Blog Card Component
 *
 * Displays a single blog post in a card format.
 * Includes featured image, title, category, author, date, and read time.
 *
 * @file Blog post card component
 * @author DBSEE Agency
 * @component
 */

import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import Link from "next/link";

/**
 * BlogPost - Interface for blog post data
 *
 * @interface BlogPost
 * @property {string} title - Post title
 * @property {string} slug - URL-friendly post identifier
 * @property {string} date - Publication date
 * @property {string} category - Post category
 * @property {string} excerpt - Short preview text
 * @property {string} readTime - Estimated read duration (e.g., "5 min read")
 * @property {string} image - Featured image URL
 * @property {string} author - Author name
 */
interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  author: string;
}

/**
 * Props for BlogCard component
 *
 * @interface BlogCardProps
 * @property {BlogPost} post - Blog post data object
 */
interface BlogCardProps {
  post: BlogPost;
}

/**
 * BlogCard - Renders a clickable blog post card
 *
 * Features hover effects and links to full post
 *
 * @component
 * @param {BlogCardProps} props - Component props
 * @returns {JSX.Element} Blog card linked to post detail page
 */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group">
        <div className="relative aspect-video">
          <Image
            src={`https://picsum.photos/seed/${post.slug}/800/450`}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <Badge className="mb-3">{post.category}</Badge>
          <h3 className="font-heading font-bold text-xl text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-dark-muted text-sm line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-dark-muted">
            <span>{post.author}</span>
            <span>
              {post.date} • {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
