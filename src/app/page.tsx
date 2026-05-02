import { LayoutDashboard, Megaphone, Monitor, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>cld
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <p className="text-white/60 text-sm font-medium mb-4">
            Attention Business Owners
          </p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Unleash Your Business's Potential with Bahrain's Premier Digital
            Marketing Agency
          </h1>
          <p className="text-white/70 text-base md:text-lg text-center max-w-2xl mx-auto mb-8">
            We Help Businesses in Bahrain and Saudi Arabia Reach, Engage, and
            Convert More Customers Through Proven Social Media Marketing and
            Digital Advertising Strategies.
          </p>
          <Link
            href="/request-a-call"
            className="inline-block bg-white text-black font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition"
          >
            Request a call
          </Link>
        </div>
      </section>

      {/* SECTION 2: TWO-COLUMN TEXT SECTION */}
      <section className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">
                Attention Business Owners
              </p>
              <h2 className="font-heading font-bold text-2xl md:text-3xl leading-snug mb-6 text-black">
                Tired of Ineffective Marketing That Doesn't Deliver Results?
              </h2>
              <div className="space-y-4 text-black/80 text-sm leading-relaxed">
                <p>
                  As a business owner, you juggle countless responsibilities to
                  keep your company thriving. But in today's digital landscape,
                  simply offering exceptional products or services isn't enough.
                  If you're frustrated with marketing efforts that drain your
                  resources without boosting your bottom line, you're not alone.
                </p>
                <p>
                  DBSEE specializes in transforming businesses like yours into
                  market leaders. With over 10 years of experience, we know what
                  it takes to stand out online. Our expert team crafts
                  customized digital marketing solutions that not only increase
                  your visibility but also drive real, measurable growth.
                </p>
                <p className="italic font-semibold text-black/90">
                  Ready to Amplify Your Success?
                </p>
              </div>
            </div>

            {/* Right Column - Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm h-fit">
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
                Ready to Transform Your Business?
              </p>
              <p className="text-black/80 text-sm mb-4">
                We partner with a limited number of businesses each month to
                ensure each client receives our full attention and expertise.
                Our slots fill up quickly due to high demand.
              </p>
              <p className="font-semibold text-black mb-6">
                Don't miss out! Secure your spot on our waitlist today!
              </p>
              <Link
                href="/request-a-call"
                className="inline-block border border-black text-black rounded-full px-6 py-2.5 text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Join Our Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR SERVICES */}
      <section className="bg-gradient-to-b from-[#1a1a3e] to-[#2d2d6b] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-white text-4xl text-center mb-4">
            Our Services
          </h2>
          <p className="text-white/60 text-center mb-12"></p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Service 1 */}
            <div>
              <LayoutDashboard className="h-8 w-8 text-white mb-4" />
              <h3 className="text-white font-heading font-bold text-lg mb-3">
                Social Media Management
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Elevate your brand's online presence with tailored social media
                strategies that captivate and grow your audience. Let our
                professionals handle your social media marketing so you can
                focus on running your business.
              </p>
            </div>

            {/* Service 2 */}
            <div>
              <Megaphone className="h-8 w-8 text-white mb-4" />
              <h3 className="text-white font-heading font-bold text-lg mb-3">
                Digital Advertising
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Maximize your reach with targeted advertising across social
                media platforms and Google Ads. As one of Bahrain's official
                Google Premier Partners, we leverage cutting-edge techniques to
                put your business in front of the right customers at the right
                time.
              </p>
            </div>

            {/* Service 3 */}
            <div>
              <Video className="h-8 w-8 text-white mb-4" />
              <h3 className="text-white font-heading font-bold text-lg mb-3">
                Video & Photography
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Bring your brand to life with compelling visuals. Our expert
                videographers and photographers create stunning content that
                attracts, engages, and converts your audience across all
                platforms.
              </p>
            </div>

            {/* Service 4 */}
            <div>
              <Monitor className="h-8 w-8 text-white mb-4" />
              <h3 className="text-white font-heading font-bold text-lg mb-3">
                Website Design
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Transform your website into a powerful sales tool. Our team
                designs and develops custom websites that not only look
                exceptional but are also optimized to convert visitors into
                loyal customers.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/request-a-call"
              className="inline-block bg-white text-black font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition"
            >
              Request a call
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRUSTED BY LEADING BRANDS */}
      <section className="bg-[#0a0a0a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-white text-3xl text-center mb-2">
            Trusted by Leading Brands
          </h2>
          <p className="text-white/50 text-sm text-center mb-10">
            Join the ranks of successful businesses we've helped grow through
            innovative digital marketing strategies.
          </p>

          {/* Client Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: "MG", color: "bg-[#8B0000]/80" },
              { name: "Dragon City", color: "bg-[#1a1a1a]" },
              { name: "Souq Al Baraha", color: "bg-[#c8a96e]/80" },
              { name: "MODA Mall", color: "bg-[#1a3a2a]" },
              { name: "BINAA", color: "bg-[#1a1a1a]" },
              { name: "Eagle Hills", color: "bg-[#8B0000]/80" },
              { name: "RETAL", color: "bg-[#c8a96e]/80" },
              { name: "Bahrain Marina", color: "bg-[#1a3a2a]" },
              { name: "Durrat Al Bahrain", color: "bg-[#1a1a1a]" },
              { name: "Conrad", color: "bg-[#8B0000]/80" },
              { name: "Sheraton", color: "bg-[#c8a96e]/80" },
              { name: "ONYX Rotana", color: "bg-[#1a3a2a]" },
              { name: "Time Out Market", color: "bg-[#1a1a1a]" },
              { name: "SUSHISAMBA", color: "bg-[#8B0000]/80" },
              { name: "Candylicious", color: "bg-[#c8a96e]/80" },
              { name: "Korean Bakery", color: "bg-[#1a3a2a]" },
              { name: "Quest School", color: "bg-[#1a1a1a]" },
              { name: "SICO", color: "bg-[#8B0000]/80" },
              { name: "The Eye Infirmary", color: "bg-[#c8a96e]/80" },
              { name: "Al Reem Hotel", color: "bg-[#1a3a2a]" },
            ].map((client, idx) => (
              <div
                key={idx}
                className={`${client.color} border border-white/5 rounded-lg aspect-[4/3] flex items-center justify-center`}
              >
                <p className="text-white font-bold text-sm text-center px-4">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-white text-4xl text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Block 1 */}
            <div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Results Driven Approach
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We focus on strategies that deliver a positive return on
                investment. Every campaign we launch is data-driven and tailored
                to your specific business goals.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Transparent and Trustworthy
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We value honesty and open communication. We're not afraid to
                challenge ideas to ensure you get the best possible outcome.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Expert In-House Team
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Our talented team of strategists, designers, developers, and
                content creators work collaboratively under one roof to provide
                seamless solutions.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Commitment to Excellence
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Your success is our top priority. We go above and beyond to
                exceed expectations and deliver on our promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STAY AHEAD WITH INDUSTRY INSIGHTS */}
      <section className="bg-[#0a0a0a] border-t border-white/5 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-white text-3xl text-center mb-2">
            Stay Ahead with Industry Insights
          </h2>
          <p className="text-white/50 text-sm text-center mb-12">
            Visit our blog for the latest trends and tips in social media
            marketing, digital advertising, and more.
          </p>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="divide-x divide-white/5">
              <h3 className="text-white font-heading font-bold text-base leading-snug hover:text-white/70 transition mb-3">
                <Link href="/blog">
                  Stop Posting Blind: The Social Media Strategy Every Business
                  Needs
                </Link>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-4">
                A clear social media strategy helps businesses reach more
                people, build trust, win new customers, and sell more. Here's
                how to use a simple funnel and content pillars to plan posts
                that convert.
              </p>
              <div className="flex justify-between items-start">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                  READ MORE »
                </p>
              </div>
              <p className="text-white/30 text-xs mt-2">
                goamplify • 26/01/2026
              </p>
            </div>

            {/* Post 2 */}
            <div className="divide-x divide-white/5">
              <h3 className="text-white font-heading font-bold text-base leading-snug hover:text-white/70 transition mb-3">
                <Link href="/blog">
                  Beyond the Hype: 5 Digital Marketing Shifts Redefining Success
                  in Bahrain and Saudi Arabia for 2025
                </Link>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-4">
                The new digital mandate in the Gulf. In the thriving economic
                landscapes of Bahrain and Saudi Arabia, a transformation of
                historic proportions is underway.
              </p>
              <div className="flex justify-between items-start">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                  READ MORE »
                </p>
              </div>
              <p className="text-white/30 text-xs mt-2">
                goamplify • 14/06/2025
              </p>
            </div>

            {/* Post 3 */}
            <div className="divide-x divide-white/5">
              <h3 className="text-white font-heading font-bold text-base leading-snug hover:text-white/70 transition mb-3">
                <Link href="/blog">
                  The Bahrain Social Media Landscape: A Digital Oasis in the
                  Middle East
                </Link>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-4">
                Bahrain stands as a testament to the power of digital
                connectivity and social media. With its vibrant culture and
                rapid technological advancements, Bahrain presents a unique
                digital landscape.
              </p>
              <div className="flex justify-between items-start">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                  READ MORE »
                </p>
              </div>
              <p className="text-white/30 text-xs mt-2">
                Tim Murray • 10/01/2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
