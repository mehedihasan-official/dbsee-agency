"use client"

import { HeroBanner } from "@/components/layout/HeroBanner";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { VideoGallery } from "@/components/portfolio/VideoGallery";
import { PhotographyGallery } from "@/components/portfolio/PhotographyGallery";

const reels = [
  { id: "1", title: "Social Content 1", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "2", title: "Social Content 2", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "3", title: "Social Content 3", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "4", title: "Social Content 4", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const photography = Array.from({ length: 24 }).map((_, i) => ({
  id: `${i + 1}`,
  url: `https://picsum.photos/seed/smm-${i + 1}/600/${800 + (i % 3) * 100}`,
  alt: `SMM Photography ${i + 1}`,
}));

export default function SocialMediaManagement() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <HeroBanner 
        title="Social Media Management" 
        description="We help you build a strong online presence and engage with your audience effectively."
      />

      {/* Attention Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-bold tracking-widest mb-4">ATTENTION BUSINESS OWNERS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Your social media effort for that won&apos;t deliver?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stop wasting time and money on social media that doesn&apos;t work. We provide a comprehensive solution to grow your brand and drive results.
          </p>
          <Button href="/request-a-call" size="lg">Get a Free Audit</Button>
        </div>
      </section>

      {/* Unlock Potential Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[9/16] max-w-sm mx-auto w-full">
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl"></div>
            <Image 
              src="https://picsum.photos/seed/smm-phone/400/800" 
              alt="Social Media Management" 
              fill 
              className="object-cover rounded-[2.5rem] border-8 border-dark-card shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Unlock the True Potential of Social Media Management</h2>
            <div className="space-y-6">
              {[
                "Strategic Content Planning",
                "High-Quality Content Creation",
                "Community Engagement & Management",
                "Detailed Performance Analytics",
                "Paid Social Integration",
                "Influencer Partnerships"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/request-a-call" size="lg">Start Growing Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Imagine This Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-8">Imagine This...</h2>
          <p className="text-xl text-gray-600 italic">
            &quot;Your brand is the talk of the town. Your inbox is full of inquiries, and your social media channels are buzzing with engagement. That&apos;s the power of professional social media management.&quot;
          </p>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What We Deliver" eyebrow="SERVICES" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Strategy", desc: "Custom social media strategy aligned with your business goals." },
              { title: "Content", desc: "Eye-catching visuals and compelling copy that converts." },
              { title: "Engagement", desc: "Active management of your community and customer interactions." },
              { title: "Growth", desc: "Proven tactics to increase your follower base and reach." },
              { title: "Analytics", desc: "Transparent reporting on KPIs and campaign performance." },
              { title: "Optimization", desc: "Continuous improvement based on data-driven insights." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
              <div className="space-y-8">
                {[
                  { title: "Expertise", desc: "Years of experience in managing diverse brands." },
                  { title: "Results-Driven", desc: "We focus on metrics that matter to your business." },
                  { title: "Custom Solutions", desc: "No cookie-cutter packages. We tailor to your needs." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {Array.from({ length: 4 }).map((_, i) => (
                 <div key={i} className="relative aspect-square rounded-2xl overflow-hidden">
                   <Image 
                    src={`https://picsum.photos/seed/why-${i}/400/400`} 
                    alt="Why Choose Us" 
                    fill 
                    className="object-cover"
                   />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" eyebrow="FAQ" />
          <div className="space-y-4 mt-12">
            {[
              { q: "How long does it take to see results?", a: "Typically, you'll start seeing increased engagement within the first 30 days, with significant growth in 3-6 months." },
              { q: "Which platforms do you manage?", a: "We manage Instagram, Facebook, TikTok, LinkedIn, and YouTube." },
              { q: "Do you create the content?", a: "Yes, our team of creators handles everything from photography to video and graphic design." },
              { q: "Can I still post on my own?", a: "Absolutely! We encourage collaboration while we handle the heavy lifting." }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
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

      {/* Success Gallery */}
      <VideoGallery 
        title="Social Success" 
        subtitle="Check out some of the reels we've produced for our clients."
        videos={reels}
        aspectRatio="reel"
      />

      <PhotographyGallery 
        title="Content Gallery" 
        subtitle="High-quality photography from our recent management campaigns."
        images={photography}
      />

      <CtaBanner />
    </div>
  );
}
