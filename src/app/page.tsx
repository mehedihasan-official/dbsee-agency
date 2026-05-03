import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-5">
            Attention Business Owners
          </p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-6xl leading-tight mb-6">
            Unleash Your Business&apos;s Potential with Bahrain&apos;s Premier
            Digital Marketing Agency
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We Help Businesses in Bahrain and Saudi Arabia Reach, Engage, and
            Convert More Customers Through Proven Social Media Marketing and
            Digital Advertising Strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-a-call"
              className="inline-block bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full px-8 py-3.5 transition-colors"
            >
              Request a Free Call
            </Link>
            <Link
              href="/services"
              className="inline-block border border-white/40 text-white hover:bg-white/10 text-sm font-semibold rounded-full px-8 py-3.5 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ─── SECTION 2: TWO-COLUMN ───────────────────────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
                Attention Business Owners
              </p>
              <h2 className="font-heading font-bold text-gray-900 text-3xl md:text-4xl leading-snug mb-6">
                Tired of Ineffective Marketing That Doesn&apos;t Deliver
                Results?
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-gray-900 font-semibold">
                    It&apos;s Time for a Change.
                  </strong>
                </p>
                <p>
                  As a business owner, you juggle countless responsibilities to
                  keep your company thriving. But in today&apos;s digital
                  landscape, simply offering exceptional products or services
                  isn&apos;t enough. If you&apos;re frustrated with marketing
                  efforts that drain your resources without boosting your bottom
                  line, you&apos;re not alone.
                </p>
                <p>
                  DBSEE specializes in transforming businesses like yours
                  into market leaders. With over 10 years of experience, we
                  know what it takes to stand out online. Our expert team crafts
                  customized digital marketing solutions that not only increase
                  your visibility but also drive real, measurable growth.
                </p>
                <p className="font-semibold text-gray-900">
                  Ready to Amplify Your Success?
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
              >
                Learn About Us →
              </Link>
            </div>

            {/* Right — card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                Ready to Transform Your Business?
              </p>
              <h3 className="font-heading text-gray-900 font-bold text-xl mb-3">
                Limited Spots Available This Month
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                We partner with a limited number of businesses each month to
                ensure each client receives our full attention and expertise.
                Our slots fill up quickly due to high demand.
              </p>
              <p className="font-semibold text-gray-900 text-sm mb-6">
                Don&apos;t miss out! Secure your spot on our waitlist today!
              </p>
              <Link
                href="/request-a-call"
                className="inline-block bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-full px-6 py-3 transition-colors"
              >
                Join Our Waitlist
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: OUR SERVICES ─────────────────────────────────── */}
      <section
        style={{ background: "linear-gradient(180deg, #1a1a3e 0%, #2d2d6b 100%)" }}
        className="py-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-bold uppercase tracking-widest text-center mb-3">What We Do</p>
          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl text-center mb-4">
            Our Services
          </h2>
          <p className="text-white/60 text-center text-base mb-16 max-w-xl mx-auto">
            Comprehensive digital marketing solutions designed to grow your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {/* Social Media Management */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="mb-5 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                Social Media Management
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Elevate your brand&apos;s online presence with tailored social
                media strategies that captivate and grow your audience.
              </p>
            </div>

            {/* Digital Advertising */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="mb-5 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l19-9-9 19-2-8-8-2z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                Digital Advertising
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Maximize your reach with targeted advertising across social
                media platforms and Google Ads as an official Google Premier Partner.
              </p>
            </div>

            {/* Video & Photography */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="mb-5 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                Video &amp; Photography
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Bring your brand to life with compelling visuals that attract,
                engage, and convert your audience across all platforms.
              </p>
            </div>

            {/* Website Design */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="mb-5 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <line x1="2" y1="7" x2="22" y2="7" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                Website Design
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Transform your website into a powerful sales tool with custom
                designs optimized to convert visitors into loyal customers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block border border-white/30 text-white hover:bg-white/10 text-sm font-semibold rounded-full px-6 py-3 mr-4 transition-colors"
            >
              View All Services
            </Link>
            <Link
              href="/request-a-call"
              className="inline-block bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full px-8 py-3 transition-colors"
            >
              Request a call
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: STATS ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-y border-white/5 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Clients Served" },
            { value: "10+", label: "Years Experience" },
            { value: "98%", label: "Client Retention" },
            { value: "$5M+", label: "Ad Spend Managed" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-heading text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-white/50 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 5: TRUSTED BY LEADING BRANDS ───────────────────── */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-white text-3xl text-center mb-2">
            Trusted by Leading Brands
          </h2>
          <p className="text-white/40 text-sm text-center mb-12">
            Join the ranks of successful businesses we&apos;ve helped grow
            through innovative digital marketing strategies.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              { name: "MG",               bg: "#1c1c1c", text: "#ffffff" },
              { name: "DRAGON CITY",      bg: "#8b1a1a", text: "#ffffff" },
              { name: "Souq Al Baraha",   bg: "#b8975a", text: "#ffffff" },
              { name: "MODA MALL",        bg: "#163326", text: "#ffffff" },
              { name: "BINAA",            bg: "#1a1a1a", text: "#ffffff" },
              { name: "Eagle Hills",      bg: "#7a1a1a", text: "#ffffff" },
              { name: "RETAL",            bg: "#c8a96e", text: "#ffffff" },
              { name: "BAHRAIN MARINA",   bg: "#0d2b1e", text: "#ffffff" },
              { name: "Durrat Al Bahrain",bg: "#111111", text: "#888888" },
              { name: "CONRAD",           bg: "#6b2020", text: "#ffffff" },
              { name: "SHERATON",         bg: "#1a1a1a", text: "#cccccc" },
              { name: "ONYX Rotana",      bg: "#1a2e1a", text: "#7aaa7a" },
              { name: "Time Out MARKET",  bg: "#0f0f0f", text: "#cc2222" },
              { name: "SUSHISAMBA",       bg: "#8b1a1a", text: "#ffffff" },
              { name: "candylicious",     bg: "#c8a96e", text: "#ffffff" },
              { name: "KOREAN BAKERY",    bg: "#163326", text: "#ffffff" },
              { name: "Quest School",     bg: "#111111", text: "#888888" },
              { name: "S/CO سيبكو",       bg: "#8b1a1a", text: "#ffffff" },
              { name: "The Eye Infirmary",bg: "#b8975a", text: "#ffffff" },
              { name: "Al Reem Hotel",    bg: "#0d2b1e", text: "#aaaaaa" },
            ].map((client, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: client.bg }}
                className="aspect-[4/3] flex items-center justify-center px-4 rounded-lg border border-white/5"
              >
                <p
                  style={{ color: client.text }}
                  className="font-bold text-xs text-center leading-snug"
                >
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHY CHOOSE US ────────────────────────────────── */}
      <section className="bg-[#0d0d1a] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-bold uppercase tracking-widest text-center mb-3">Why DBSEE</p>
          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl text-center mb-16">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "📊",
                title: "Results Driven Approach",
                desc: "We focus on strategies that deliver a positive return on investment. Every campaign we launch is data-driven and tailored to your specific business goals.",
              },
              {
                icon: "🤝",
                title: "Transparent and Trustworthy",
                desc: "We value honesty and open communication. We're not afraid to challenge ideas to ensure you get the best possible outcome.",
              },
              {
                icon: "💡",
                title: "Expert In-House Team",
                desc: "Our talented team of strategists, designers, developers, and content creators work collaboratively under one roof to provide seamless solutions.",
              },
              {
                icon: "🏆",
                title: "Commitment to Excellence",
                desc: "Your success is our top priority. We go above and beyond to exceed expectations and deliver on our promises.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: BLOG INSIGHTS ────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-t border-white/5 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-bold uppercase tracking-widest text-center mb-3">Blog</p>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl text-center mb-3">
            Stay Ahead with Industry Insights
          </h2>
          <p className="text-white/40 text-sm text-center mb-16">
            Visit our blog for the latest trends and tips in social media
            marketing, digital advertising, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Post 1 */}
            <div className="pb-10 md:pb-0 md:pr-8">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Strategy</span>
              <h3 className="font-heading font-bold text-white text-base leading-snug mt-3 mb-3 hover:text-white/80 transition-colors">
                <Link href="/blog">
                  Stop Posting Blind: The Social Media Strategy Every Bahrain
                  Business Needs
                </Link>
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5 line-clamp-3">
                A clear social media strategy helps Bahrain businesses reach
                more customers, build trust, win new customers, and sell more.
              </p>
              <Link
                href="/blog"
                className="text-primary text-xs font-bold uppercase tracking-wider hover:text-primary-dark transition-colors"
              >
                Read More →
              </Link>
              <p className="text-white/25 text-xs mt-3">
                goamplify · 26/01/2026
              </p>
            </div>

            {/* Post 2 */}
            <div className="py-10 md:py-0 md:px-8">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Trends</span>
              <h3 className="font-heading font-bold text-white text-base leading-snug mt-3 mb-3 hover:text-white/80 transition-colors">
                <Link href="/blog">
                  5 Digital Marketing Shifts Redefining Success in Bahrain and
                  Saudi Arabia for 2025
                </Link>
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5 line-clamp-3">
                The new digital mandate in the Gulf. In the thriving economic
                landscapes of Bahrain and Saudi Arabia, a transformation of
                historic proportions is underway.
              </p>
              <Link
                href="/blog"
                className="text-primary text-xs font-bold uppercase tracking-wider hover:text-primary-dark transition-colors"
              >
                Read More →
              </Link>
              <p className="text-white/25 text-xs mt-3">
                goamplify · 14/06/2025
              </p>
            </div>

            {/* Post 3 */}
            <div className="pt-10 md:pt-0 md:pl-8">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Insights</span>
              <h3 className="font-heading font-bold text-white text-base leading-snug mt-3 mb-3 hover:text-white/80 transition-colors">
                <Link href="/blog">
                  The Bahrain Social / Digital Oasis in the Middle East
                </Link>
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5 line-clamp-3">
                Bahrain stands as a testament to the power of digital
                connectivity and social media, presenting a unique digital
                landscape for businesses.
              </p>
              <Link
                href="/blog"
                className="text-primary text-xs font-bold uppercase tracking-wider hover:text-primary-dark transition-colors"
              >
                Read More →
              </Link>
              <p className="text-white/25 text-xs mt-3">
                Tim Murray · 10/01/2024
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link
              href="/blog"
              className="inline-block border border-white/20 text-white hover:bg-white/5 text-sm font-semibold rounded-full px-8 py-3 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            Book a free strategy call today and discover how DBSEE can help you
            dominate your market online.
          </p>
          <Link
            href="/request-a-call"
            className="inline-block bg-white text-primary hover:bg-gray-100 text-sm font-bold rounded-full px-10 py-4 transition-colors"
          >
            Book Your Free Call Now
          </Link>
        </div>
      </section>

    </main>
  );
}
