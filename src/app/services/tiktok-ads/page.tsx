"use client";

import { HeroBanner } from "@/components/layout/HeroBanner";
import { VideoGallery } from "@/components/portfolio/VideoGallery";
import { CtaBanner } from "@/components/home/CtaBanner";
import Image from "next/image";

export default function TikTokAds() {
  const reels = Array.from({ length: 12 }, (_, i) => ({
    id: `reel-${i}`,
    title: `TikTok Success Story ${i + 1}`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  }));

  return (
    <div>
      <HeroBanner 
        title="TikTok Ads" 
        description="We help you tap into the massive potential of TikTok with creative, high-converting ad campaigns that resonate with the Bahraini audience."
      />

      {/* Bahrain Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-bold mb-4 uppercase tracking-widest">Bahrain Business Owners:</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">Stop sleeping on TikTok!</h2>
          <div className="space-y-6 text-gray-600 mb-12 text-lg">
            <p>
              TikTok has exploded in popularity in Bahrain and worldwide in the last 24 months – it&apos;s now truly a social media powerhouse. Don&apos;t miss out on the customers in Bahrain on TikTok despite the number of consumers on the platform.
            </p>
            <p>
              According to figures published by DataReportal in January 2023, there are 872,000 active TikTok accounts in Bahrain (over the age of 18). For comparison, Instagram recently suffered a decrease in users to 872,000, making TikTok more popular!
            </p>
            <p>
              These figures represent opportunities for brands that present and connect with consumers on TikTok. Our team here at GoAmplify is one of the only agencies in Bahrain running TikTok ads and getting solid success for our clients.
            </p>
            <p className="font-bold text-dark italic">If you want our TikTok hub for your business, request a call for us today.</p>
          </div>

          {/* Stats Image/Table */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png" 
              alt="TikTok Ads" 
              width={150} 
              height={50} 
              className="mx-auto mb-8"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Active Users", value: "872K+" },
                { label: "Reach", value: "Massive" },
                { label: "Engagement", value: "High" },
                { label: "Growth", value: "Rapid" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Results Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary font-bold mb-2">Real Campaign Results:</p>
          <h2 className="text-4xl font-bold text-dark mb-6">Proof That TikTok Ads Work</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            If you&apos;re unsure that TikTok Ads will work for your business, here is the proof. Check out some of our results for customers below. These are some of the best-performing statistics in their respective industry. Test results, real leads, new Bahrain businesses getting return on their investment!
          </p>
          <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/tiktok-results/1200/600" 
              alt="Campaign Results" 
              width={1200} 
              height={600} 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Reels Gallery Section */}
      <VideoGallery 
        title="Our TikTok Creative Work" 
        subtitle="We create native, engaging TikTok content that doesn't look like an ad – it looks like a trend. This is the secret to high performance on the platform."
        videos={reels}
        aspectRatio="reel"
      />

      <CtaBanner />
    </div>
  );
}
