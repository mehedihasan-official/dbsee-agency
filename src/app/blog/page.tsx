import { BlogGrid } from "@/components/blog/BlogGrid";

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            DBSEE Blog
          </h1>
          <p className="text-dark-muted text-lg">
            Industry insights, marketing tips, and strategies to help you grow
            your business online.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <BlogGrid />
      </section>

      {/* Pagination - UI only */}
      <section className="section-padding bg-dark-card">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-primary text-white rounded-lg">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 bg-dark-border text-white rounded-lg">
              2
            </button>
            <button className="px-4 py-2 bg-dark-border text-white rounded-lg">
              3
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
