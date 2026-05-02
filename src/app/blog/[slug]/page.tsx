import { BlogCard } from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video mb-8 bg-dark-border rounded-2xl overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${post.slug}/800/450`}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-dark-muted">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <article className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              {post.body}
            </p>

            <h2 className="font-heading text-2xl font-bold text-white mt-12 mb-6">
              Understanding the Digital Marketing Landscape
            </h2>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              In today's rapidly evolving digital landscape, businesses face
              unprecedented challenges and opportunities. The key to success
              lies in understanding the fundamental shifts that are reshaping
              how brands connect with their audiences. From social media
              algorithms to consumer behavior patterns, every aspect of digital
              marketing requires careful consideration and strategic planning.
            </p>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              One of the most significant changes we've witnessed is the move
              from traditional advertising to more authentic, value-driven
              content. Consumers are increasingly savvy and can quickly identify
              when brands are being disingenuous. This has led to a paradigm
              shift where transparency and genuine value creation have become
              the cornerstones of effective marketing strategies.
            </p>

            <h2 className="font-heading text-2xl font-bold text-white mt-12 mb-6">
              The Power of Data-Driven Decision Making
            </h2>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              Data has become the lifeblood of modern marketing. Every click,
              every engagement, every conversion provides valuable insights that
              can inform future strategies. However, the challenge lies not just
              in collecting data, but in interpreting it correctly and using it
              to drive meaningful action.
            </p>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              Successful brands are those that have mastered the art of turning
              data into actionable insights. This involves not only tracking the
              right metrics but also understanding the story they tell about
              customer behavior and market trends. When done correctly,
              data-driven marketing becomes a powerful tool for growth and
              innovation.
            </p>

            <h2 className="font-heading text-2xl font-bold text-white mt-12 mb-6">
              Building Long-Term Customer Relationships
            </h2>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              While short-term gains are important, the real value of digital
              marketing lies in building lasting relationships with customers.
              This requires a shift from transactional thinking to
              relationship-building. Brands that focus on providing ongoing
              value, maintaining consistent communication, and fostering genuine
              connections tend to see the most sustainable growth.
            </p>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              The most successful marketing strategies are those that integrate
              seamlessly across all customer touchpoints. From social media
              interactions to email communications, every interaction should
              reinforce the brand's value proposition and strengthen the
              relationship with the customer.
            </p>

            <h2 className="font-heading text-2xl font-bold text-white mt-12 mb-6">
              Future-Proofing Your Marketing Strategy
            </h2>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              The digital marketing landscape is constantly evolving, and
              staying ahead requires both adaptability and foresight. Brands
              that invest in understanding emerging trends, experimenting with
              new technologies, and maintaining a customer-centric approach are
              best positioned for long-term success.
            </p>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              Ultimately, the key to successful digital marketing is not about
              chasing the latest trends, but about understanding your audience
              deeply and delivering value consistently. When you focus on
              solving real problems and meeting genuine needs, success becomes
              not just possible, but inevitable.
            </p>
          </div>
        </article>
      </section>

      {/* Author Box */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 flex gap-6">
            <div className="w-20 h-20 bg-dark-border rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={`https://i.pravatar.cc/300?img=1`}
                alt={post.author}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white mb-2">
                {post.author}
              </h3>
              <p className="text-dark-muted mb-4">
                Digital marketing expert with over 10 years of experience
                helping businesses grow their online presence. Passionate about
                data-driven strategies and creative storytelling.
              </p>
              <Link
                href="/about"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                Learn more about our team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Related Articles
          </h2>
          <p className="text-dark-muted">
            More insights to help you grow your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {relatedPosts.map((relatedPost) => (
            <BlogCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </div>
      </section>
    </div>
  );
}
