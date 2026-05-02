import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import Link from "next/link";

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

interface BlogCardProps {
  post: BlogPost;
}

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
