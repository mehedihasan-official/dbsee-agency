"use client"

import { HeroBanner } from "@/components/layout/HeroBanner";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { ChevronDown, BarChart3, Target, Zap, Search, PieChart } from "lucide-react";
import { useState } from "react";
import { VideoGallery } from "@/components/portfolio/VideoGallery";

const reels = [
  { id: "1", title: "Ad Creative 1", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "2", title: "Ad Creative 2", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "3", title: "Ad Creative 3", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "4", title: "Ad Creative 4", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "5", title: "Ad Creative 5", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "6", title: "Ad Creative 6", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "7", title: "Ad Creative 7", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "8", title: "Ad Creative 8", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

export default function SocialMediaAdvertising() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <HeroBanner 
        title="Social Media Advertising" 
        description="Transform your social media into a high-converting sales engine with our expert ad management."
      />

      {/* Attention Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-bold tracking-widest mb-4">ATTENTION BUSINESS OWNERS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Struggling to Turn Social Media Into a Sales Powerhouse?</h2>
          <p className="text-lg text-gray-600 mb-8">
            The social media landscapes are constantly changing. We help you stay ahead with data-driven advertising strategies that deliver real ROI.
          </p>
          <Button href="/request-a-call" size="lg">Scale Your Ads</Button>
        </div>
      </section>

      {/* Unlock Potential Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-dark mb-6">Unlock the True Potential of Social Media Advertising</h2>
            <div className="space-y-6">
              {[
                { title: "Expert Strategy Development", desc: "Custom-built ad strategies designed to reach your target audience." },
                { title: "Compelling Content Creation", desc: "Ad creatives that stop the scroll and drive action." },
                { title: "Precision Targeting", desc: "Reaching the right people at the right time with laser-focused targeting." },
                { title: "Continuous Optimization", desc: "Data-driven adjustments to maximize your ad spend efficiency." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/request-a-call" size="lg">Get a Free Proposal</Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image 
              src="https://picsum.photos/seed/ads-dashboard/800/600" 
              alt="Ads Performance" 
              fill 
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-dark text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Proven Process" eyebrow="HOW IT WORKS" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Search, title: "1. Onboarding", desc: "We dive deep into your business, goals, and target audience." },
              { icon: Target, title: "2. Campaign Planning", desc: "Defining objectives, budget, and creative direction." },
              { icon: Zap, title: "3. Launch", desc: "Going live with high-performing ad sets across platforms." },
              { icon: BarChart3, title: "4. Manage & Optimize", desc: "Real-time monitoring and data-driven tweaks for peak performance." },
              { icon: PieChart, title: "5. Reporting", desc: "Transparent results and insights to guide future growth." }
            ].map((step, i) => (
              <div key={i} className="bg-dark-card border border-dark-border p-8 rounded-2xl">
                <step.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-10 rounded-3xl">
            <p className="text-primary font-bold mb-4">LANDING PAGE</p>
            <h2 className="text-3xl font-bold text-dark mb-6">The Secret Weapon to Close More Sales</h2>
            <p className="text-gray-600 mb-8">
              Driving traffic is only half the battle. We optimize your landing pages to ensure visitors convert into paying customers.
            </p>
            <Button variant="outline" href="/services/web-development">Learn More</Button>
          </div>
          <div className="bg-gray-50 p-10 rounded-3xl">
            <p className="text-primary font-bold mb-4">CONTENT CREATION (AD-HOC)</p>
            <h2 className="text-3xl font-bold text-dark mb-6">Boost Your Ads with Engaging Content</h2>
            <p className="text-gray-600 mb-8">
              High-converting ads need high-quality visuals. Our creative team produces content that resonates with your audience.
            </p>
            <Button variant="outline" href="/services/video-production">See Portfolio</Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" eyebrow="FAQ" />
          <div className="space-y-4 mt-12">
            {[
              { q: "What is the minimum budget required?", a: "We recommend a minimum starting budget of $1,000/month for effective testing and results." },
              { q: "Which platforms do you support?", a: "We specialize in Meta (Facebook & Instagram), TikTok, and LinkedIn advertising." },
              { q: "How do you track conversions?", a: "We set up advanced tracking using Pixels, CAPI, and custom conversion events to measure true ROI." },
              { q: "Do you provide ad creatives?", a: "Yes, our creative team handles everything from copy to video and graphic design for your ads." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-semibold text-dark">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Reels */}
      <VideoGallery 
        title="Ad Success Stories" 
        subtitle="Check out some of our high-performing ad creatives."
        videos={reels}
        aspectRatio="reel"
      />

      <CtaBanner />
    </div>
  );
}
