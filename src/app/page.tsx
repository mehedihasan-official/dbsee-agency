import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white/60 text-sm font-medium tracking-wide mb-5">
            Attention Business Owners
          </p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-5">
            Unleash Your Business&apos;s Potential with Bahrain&apos;s Premier
            Digital Marketing Agency
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            We Help Businesses in Bahrain and Saudi Arabia Reach, Engage, and
            Convert More Customers Through Proven Social Media Marketing and
            Digital Advertising Strategies.
          </p>
          <Link
            href="/request-a-call"
            className="inline-block bg-white text-black text-sm font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Request a call
          </Link>
        </div>
      </section>

      {/* ─── SECTION 2: TWO-COLUMN ───────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3">
                Attention Business Owners
              </p>
              <h2 className="font-heading font-bold text-black text-2xl md:text-3xl leading-snug mb-6">
                Tired of Ineffective Marketing That Doesn&apos;t Deliver
                Results?
              </h2>
              <div className="space-y-4 text-black/70 text-sm leading-relaxed">
                <p>
                  <strong className="text-black font-semibold">
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
                  GOamplify specializes in transforming businesses like yours
                  into market leaders. With over 10 years of experience, we
                  know what it takes to stand out online. Our expert team crafts
                  customized digital marketing solutions that not only increase
                  your visibility but also drive real, measurable growth.
                </p>
                <p className="font-semibold text-black">
                  Ready to Amplify Your Success?
                </p>
              </div>
            </div>

            {/* Right — card */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
                Ready to Transform Your Business?
              </p>
              <p className="text-black/70 text-sm leading-relaxed mb-3">
                We partner with a limited number of businesses each month to
                ensure each client receives our full attention and expertise.
                Our slots fill up quickly due to high demand.
              </p>
              <p className="font-semibold text-black text-sm mb-6">
                Don&apos;t miss out! Secure your spot on our waitlist today!
              </p>
              <Link
                href="/request-a-call"
                className="inline-block border border-black text-black text-sm font-semibold rounded-full px-6 py-2.5 hover:bg-black hover:text-white transition-colors"
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
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-white text-4xl text-center mb-14">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Social Media Management */}
            <div>
              <div className="mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                Social Media Management
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Elevate your brand&apos;s online presence with tailored social
                media strategies that captivate and grow your audience. Let our
                professionals handle your social media marketing so you can
                focus on running your business.
              </p>
            </div>

            {/* Digital Advertising */}
            <div>
              <div className="mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l19-9-9 19-2-8-8-2z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                Digital Advertising
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Maximize your reach with targeted advertising across social
                media platforms and Google Ads. As one of Bahrain&apos;s
                official Google Premier Partners, we leverage cutting-edge
                techniques to put your business in front of the right customers
                at the right time.
              </p>
            </div>

            {/* Video & Photography */}
            <div>
              <div className="mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                Video &amp; Photography
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Bring your brand to life with compelling visuals. Our expert
                videographers and photographers create stunning content that
                attracts, engages, and converts your audience across all
                platforms.
              </p>
            </div>

            {/* Website Design */}
            <div>
              <div className="mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <line x1="2" y1="7" x2="22" y2="7" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                Website Design
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Transform your website into a powerful sales tool. Our team
                designs and develops custom websites that not only look
                exceptional but are also optimized to convert visitors into
                loyal customers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/request-a-call"
              className="inline-block bg-white text-black text-sm font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              Request a call
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: TRUSTED BY LEADING BRANDS ───────────────────── */}
      <section className="bg-[#0a0a0a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-white text-3xl text-center mb-2">
            Trusted by Leading Brands
          </h2>
          <p className="text-white/40 text-sm text-center mb-10">
            Join the ranks of successful businesses we&apos;ve helped grow
            through innovative digital marketing strategies.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-px bg-white/5">
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
              { name: "SHERATON",         bg: "#1a1a1a", text: "#999999" },
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
                className="aspect-[4/3] flex items-center justify-center px-4"
              >
                <p
                  style={{ color: client.text }}
                  className="font-bold text-sm text-center leading-snug"
                >
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHY CHOOSE US ────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-white text-4xl text-center mb-14">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
            <div>
              <h3 className="font-heading font-bold text-white text-base mb-2">
                Results Driven Approach
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                We focus on strategies that deliver a positive return on
                investment. Every campaign we launch is data-driven and tailored
                to your specific business goals.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-base mb-2">
                Transparent and Trustworthy
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                We value honesty and open communication. We&apos;re not afraid
                to challenge ideas to ensure you get the best possible outcome.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-base mb-2">
                Expert In-House Team
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Our talented team of strategists, designers, developers, and
                content creators work collaboratively under one roof to provide
                seamless solutions.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-base mb-2">
                Commitment to Excellence
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Your success is our top priority. We go above and beyond to
                exceed expectations and deliver on our promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: BLOG INSIGHTS ────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-t border-white/5 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-white text-3xl text-center mb-2">
            Stay Ahead with Industry Insights
          </h2>
          <p className="text-white/40 text-sm text-center mb-14">
            Visit our blog for the latest trends and tips in social media
            marketing, digital advertising, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Post 1 */}
            <div className="pb-8 md:pb-0 md:pr-8">
              <h3 className="font-heading font-bold text-white text-sm leading-snug mb-3 hover:text-white/70 transition-colors">
                <Link href="/blog">
                  Stop Posting Blind: The Social Media Strategy Every Bahrain
                  Business Needs
                </Link>
              </h3>
              <p className="text-white/45 text-xs leading-relaxed mb-4 line-clamp-4">
                A clear social media strategy helps Bahrain businesses reach
                more customers, build trust, win new customers, and sell more.
                Here&apos;s how to use a simple funnel and content pillars to
                plan posts that convert.
              </p>
              <Link
                href="/blog"
                className="text-white/35 text-xs font-semibold uppercase tracking-wider hover:text-white/60 transition-colors"
              >
                READ MORE »
              </Link>
              <p className="text-white/25 text-xs mt-2">
                goamplify &bull; 26/01/2026
              </p>
            </div>

            {/* Post 2 */}
            <div className="py-8 md:py-0 md:px-8">
              <h3 className="font-heading font-bold text-white text-sm leading-snug mb-3 hover:text-white/70 transition-colors">
                <Link href="/blog">
                  Beyond the Hype: 5 Digital Marketing Shifts Redefining
                  Success in Bahrain and Saudi Arabia for 2025
                </Link>
              </h3>
              <p className="text-white/45 text-xs leading-relaxed mb-4 line-clamp-4">
                The new digital mandate in the Gulf. In the thriving economic
                landscapes of Bahrain and Saudi Arabia, a transformation of
                historic proportions is underway. But on a comparative scale
                where accounts like Bahrain and disruptive solutions for
                policy-driven tactics are powerfully catalytic.
              </p>
              <Link
                href="/blog"
                className="text-white/35 text-xs font-semibold uppercase tracking-wider hover:text-white/60 transition-colors"
              >
                READ MORE »
              </Link>
              <p className="text-white/25 text-xs mt-2">
                goamplify &bull; 14/06/2025
              </p>
            </div>

            {/* Post 3 */}
            <div className="pt-8 md:pt-0 md:pl-8">
              <h3 className="font-heading font-bold text-white text-sm leading-snug mb-3 hover:text-white/70 transition-colors">
                <Link href="/blog">
                  The Bahrain Social / Digital Oasis in the Middle East
                </Link>
              </h3>
              <p className="text-white/45 text-xs leading-relaxed mb-4 line-clamp-4">
                Bahrain stands as a testament to the power of digital
                connectivity and social media. With its vibrant culture and
                rapid technological advancements, Bahrain presents a unique
                digital landscape, particularly in the way businesses and
                individuals use it as a social media toolkit.
              </p>
              <Link
                href="/blog"
                className="text-white/35 text-xs font-semibold uppercase tracking-wider hover:text-white/60 transition-colors"
              >
                READ MORE »
              </Link>
              <p className="text-white/25 text-xs mt-2">
                Tim Murray &bull; 10/01/2024
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}