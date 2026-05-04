"use client";

import { CtaBanner } from "@/components/home/CtaBanner";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { VideoGallery } from "@/components/portfolio/VideoGallery";

export default function VideoProduction() {
  const liveActionVideos = [
    {
      id: "la1",
      title: "Luxury Real Estate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "la2",
      title: "Fashion Showcase",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "la3",
      title: "Gourmet Restaurant",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "la4",
      title: "Fitness Brand",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "la5",
      title: "Product Launch",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "la6",
      title: "Lifestyle Vlog",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const eventVideos = [
    {
      id: "ev1",
      title: "Tech Conference 2024",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "ev2",
      title: "Music Festival",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "ev3",
      title: "Corporate Gala",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "ev4",
      title: "Wedding Highlights",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "ev5",
      title: "Sports Tournament",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "ev6",
      title: "Art Exhibition",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const corporateVideos = [
    {
      id: "cv1",
      title: "Company Profile",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "cv2",
      title: "CEO Interview",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "cv3",
      title: "Office Culture",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const animatedVideos = [
    {
      id: "av1",
      title: "Explainer Video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "av2",
      title: "Logo Animation",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "av3",
      title: "Product 3D Render",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div>
      <HeroBanner
        title="Video Production"
        description="We create high-quality, engaging video content that tells your story and captures your audience's attention."
      />

      {/* Transform Brand Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Transform Your Brand with Compelling Video Production Services
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Standing out is more challenging than ever. High-quality video
            content isn&apos;t just a luxury; it&apos;s a necessity to capture
            your audience&apos;s attention and drive results.
          </p>
          <p className="font-bold text-primary mb-8 uppercase tracking-widest">
            We Can Help You Make An Impact.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto italic">
            We specialize in creating engaging video content that tells your
            unique story and resonates with your target audience. Our expert
            team crafts tailored videos designed to showcase your brand, engage
            your customers, and boost your bottom line.
          </p>
        </div>
      </section>

      {/* Two Columns Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#020024] to-[#090979] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-2xl font-bold mb-6">
              Maximize Your Reach Across All Platforms
            </h3>
            <p className="text-white/70 mb-6">
              In a fast-paced digital world, it&apos;s crucial to tailor your
              video content for each platform. We ensure your videos are
              formatted and optimized for:
            </p>
            <p className="font-bold text-white mb-6">
              Instagram, TikTok, YouTube, Snapchat, LinkedIn, Facebook
            </p>
            <p className="text-white/70 italic">
              Expand your reach and engage your audience wherever they are.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-2xl font-bold mb-6">
              Why Blend In When You Can Stand Out?
            </h3>
            <ul className="space-y-4">
              <li>
                <span className="font-bold block">Engage Your Audience:</span>
                <span className="text-white/70">
                  Captivate viewers with compelling narratives and stunning
                  visuals.
                </span>
              </li>
              <li>
                <span className="font-bold block">Build Brand Awareness:</span>
                <span className="text-white/70">
                  Increase visibility with professional videos that showcase
                  your brand&apos;s unique value.
                </span>
              </li>
              <li>
                <span className="font-bold block">Drive Conversions:</span>
                <span className="text-white/70">
                  Leverage video content to turn viewers into loyal customers.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Live Action Section */}
      <VideoGallery
        title="Live Action Promotional Videos"
        subtitle="Showcase your products or services in action. We help you create a compelling narrative that highlights your unique selling points and connects with your audience on a deeper level."
        videos={liveActionVideos}
      />

      {/* Event Videos Section */}
      <VideoGallery
        title="Event Videos"
        subtitle="Capture the energy and excitement of your corporate events. Our event videos highlight key moments, extend your brand's reach, and preserve memories that can be shared for years to come."
        videos={eventVideos}
      />

      {/* Corporate Videos Section */}
      <VideoGallery
        title="Corporate Videos"
        subtitle="Build trust and credibility with professionally produced corporate videos. We work with you to communicate your brand values, mission, and vision, strengthening your corporate identity."
        videos={corporateVideos}
      />

      {/* Animated Videos Section */}
      <VideoGallery
        title="Animated Videos"
        subtitle="Simplify complex concepts with engaging animated videos. From explainer videos to creative storytelling, our animations bring your ideas to life in a memorable way."
        videos={animatedVideos}
      />

      <CtaBanner />
    </div>
  );
}
