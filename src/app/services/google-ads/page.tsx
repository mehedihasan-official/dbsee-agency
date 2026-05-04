"use client";

import { HeroBanner } from "@/components/layout/HeroBanner";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function GoogleAds() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <HeroBanner 
        title="Google Ads" 
        description="We help you reach your target audience and drive high-quality traffic to your website with optimized Google Ads campaigns."
      />

      {/* Attention Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-bold tracking-widest mb-4">ATTENTION BUSINESS OWNERS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Is Your Business Invisible on Google?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your customers are actively searching for the products or services you offer. But if your business isn&apos;t showing up on Google, it&apos;s like you don&apos;t exist. No matter how exceptional your offerings are, if potential customers can&apos;t find you, they can&apos;t choose you.
          </p>
          <p className="text-xl font-bold text-dark mb-8">We Can Change That.</p>
          <p className="text-gray-600 mb-10">
            We specialize in turning invisibility into high visibility. As the only official Google Premier Partner in Bahrain, we have the proven expertise and direct access to Google&apos;s latest tools and support. We know how to get your business seen by the right people at the right time, whether they&apos;re searching on desktop or mobile.
          </p>
          <Button href="/request-a-call" size="lg">Get a Free Audit</Button>
        </div>
      </section>

      {/* Premier Partner Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Unlock the Power of Google Ads with a Premier Partner</h2>
            <p className="text-lg text-white/80 mb-8">
              Our team of certified experts will craft a customized Google Ads campaign tailored to your business goals. We focus on:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Targeted Keyword Research", desc: "Identifying the most effective keywords to put your business in front of customers ready to buy." },
                { title: "Compelling Ad Creation", desc: "Designing persuasive ads that attract clicks and drive conversions." },
                { title: "Strategic Bidding", desc: "Optimizing your bids to maximize ROI and outpace your competition." },
                { title: "Continuous Optimization", desc: "Monitoring and adjusting your campaigns to ensure optimal performance." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block">{item.title}:</span>
                    <span className="text-white/70">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1024px-Google_Ads_logo.svg.png" 
                alt="Google Ads" 
                width={150} 
                height={50} 
                className="mx-auto mb-6"
              />
              <div className="border-t border-gray-100 pt-6">
                <Image 
                  src="https://www.gstatic.com/partners/badge/images/2024/PremierPartnerBadge.svg" 
                  alt="Google Partner Premier 2024" 
                  width={200} 
                  height={80} 
                  className="mx-auto"
                />
                <p className="text-dark font-bold mt-4 uppercase tracking-tighter">Premier 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold mb-2">Google Ads</p>
            <h2 className="text-4xl font-bold text-dark">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1: Onboarding",
                items: [
                  { title: "Discovery Session", desc: "We meet with you to understand your business goals and challenges." },
                  { title: "Industry Analysis", desc: "Running a Google Ads audit to uncover opportunities in your industry." }
                ]
              },
              {
                step: "Step 2: Campaign Setup",
                items: [
                  { title: "Strategic Planning", desc: "Developing a customized campaign strategy based on your objectives." },
                  { title: "Ad Creation", desc: "Crafting compelling ad copy and visuals (for display campaigns) for your approval." },
                  { title: "Account Setup", desc: "Assisting you with setting up your Google Ads account and billing." }
                ]
              },
              {
                step: "Step 3: Management & Optimization",
                items: [
                  { title: "Launch", desc: "Activating your campaigns across Google's network." },
                  { title: "Active Monitoring", desc: "Continuously tracking performance and making data-driven adjustments." },
                  { title: "Transparent Reporting", desc: "Providing regular updates so you're always informed about your ROI." }
                ]
              }
            ].map((phase, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-6">{phase.step}</h3>
                <div className="space-y-6">
                  {phase.items.map((item, j) => (
                    <div key={j}>
                      <p className="font-bold text-dark mb-1">{item.title}:</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting Secrets Section */}
      <section className="py-24 px-4 bg-[#0a0f1a] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Secret to High-Converting Google Ads Campaigns</h2>
            <p className="text-lg text-white/60 mb-8">
              Ever wonder why some Google Ads campaigns deliver exceptional results while others fall flat? It comes down to three critical factors:
            </p>
            <ul className="space-y-6">
              {[
                { title: "Precise Targeting", desc: "Reach the right audience actively searching for your products or services." },
                { title: "Compelling Ad Copy", desc: "Craft persuasive ads that grab attention and encourage clicks." },
                { title: "Optimized Landing Pages", desc: "Guide visitors to well-designed pages with clear offers that drive action." }
              ].map((item, i) => (
                <li key={i}>
                  <p className="font-bold text-white mb-1">{item.title}:</p>
                  <p className="text-white/60">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Don&apos;t Let Your Ad Spend Go to Waste</h3>
            <p className="text-white/60 mb-8">
              Many businesses make the costly mistake of sending traffic to poorly designed websites with unclear messaging and no compelling offers. A high-converting landing page is crucial; it can make or break your campaign.
            </p>
            <p className="font-bold mb-2">We Can Help</p>
            <p className="text-white/60 mb-8">
              Our team specializes in designing landing pages that turn clicks into customers. We ensure your ads and landing pages work seamlessly together to maximize your return on investment.
            </p>
            <p className="font-bold mb-6">Ready to Boost Your Google Ads Performance?</p>
            <Button href="/request-a-call" size="lg" className="w-full sm:w-auto">Join Our Waitlist</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              {[
                "What is the difference between SEM and SEO?",
                "How much do I need to invest in Google Ads?",
                "Will my ads rank #1 on Google Search?",
                "Can you run campaigns in multiple languages?"
              ].map((q, i) => (
                <button
                  key={i}
                  onClick={() => setOpenFaq(i)}
                  className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-colors ${
                    openFaq === i 
                      ? "bg-primary text-white shadow-lg" 
                      : "bg-[#0a0f1a] text-white hover:bg-primary/80"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 bg-gray-50 p-8 rounded-2xl min-h-[200px] flex items-center">
              {openFaq !== null ? (
                <div>
                  <p className="text-primary font-bold mb-4 uppercase tracking-wider">
                    {["SEM vs SEO", "Investment", "Ranking", "Languages"][openFaq]}
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {[
                      "SEM (Search Engine Marketing) involves paid strategies like Google Ads to increase your visibility on search engines. SEO (Search Engine Optimization) focuses on optimizing your website to rank higher organically without paying for ads.",
                      "The investment for Google Ads varies based on your industry, competition, and goals. We recommend starting with a budget that allows for sufficient testing and optimization to see a meaningful ROI.",
                      "While we aim for the top positions, ranking #1 depends on various factors including bid amount, ad quality, and competition. Our goal is to maximize your visibility and conversions within your budget.",
                      "Yes, we can run Google Ads campaigns in multiple languages to reach diverse audiences both locally and internationally, ensuring your message is culturally relevant and effective."
                    ][openFaq]}
                  </p>
                </div>
              ) : (
                <p className="text-gray-400 italic">Select a question to see the answer.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
