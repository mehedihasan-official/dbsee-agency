"use client";

import { CtaBanner } from "@/components/home/CtaBanner";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Play } from "lucide-react";
import Image from "next/image";

export default function CoachingTraining() {
  const needsCoachingItems = [
    {
      title: "YOU'RE COMMITTING RANDOM ACTS OF MARKETING.",
      desc: "'Shiny object syndrome' is common to most business owners. You see a new marketing tactic and want to try it without thinking through potential ROI or how it fits into your overall marketing plan. What you need is strategy. You need big-picture planning before showing the wrong things. We help you build and action a solid marketing plan that accomplishes your goals.",
      image: "https://picsum.photos/seed/vr-coaching/600/400",
      align: "right" as const,
    },
    {
      title: "YOU'RE RUNNING THE COMPANY AND THE MARKETING TOO.",
      desc: "Successful marketing isn't about a 'launch' or a big campaign. To win at marketing, you need consistency. Consistency requires time, something you have less and less of. To give you back your time and peace of mind, we specialize in training great marketing teams. We onboard, train, and manage teams to set you up for long-term growth.",
      image: "https://picsum.photos/seed/meeting-coaching/600/400",
      align: "left" as const,
    },
    {
      title: "YOUR BUSINESS ISN'T GROWING.",
      desc: "You've come as far as you can on your own. You've done a great job on your own session, but it's time to level up. You need mentorship. Feedback. Accountability. Someone to take over the marketing so you can focus on strategy. The parts of the business you enjoy. Our coaching is focused on sustainable growth. Despite having no monthly commitment, our clients stay on for an average of 12 months because of a clear return on investment each month.",
      image: "https://picsum.photos/seed/growth-coaching/600/400",
      align: "right" as const,
    },
    {
      title: "YOUR BUSINESS HAS GAPS YOU CAN'T SEE.",
      desc: "It's hard, but it's difficult to see the forest for the trees. When is the last time you reviewed your pricing? Does your business model make sense? Are you optimizing your human resources? How would you prioritize your marketing to-do list? A marketing coach will review current gaps in your business, identify low-hanging fruit opportunities, and recommend the best course of action to take.",
      image: "https://picsum.photos/seed/gaps-coaching/600/400",
      align: "left" as const,
    },
    {
      title: "YOU NEED FREEDOM AND AUTONOMY.",
      desc: "Could you leave your business for an eight-week vacation? Does your family see you enough? Do you sleep well twice a night? If you answer 'NO' to all or most of these questions, it's time to hire a marketing coach.",
      image: "https://picsum.photos/seed/beach-coaching/600/400",
      align: "right" as const,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Taylor Testimonial",
      industry: "eCommerce",
      image: "https://picsum.photos/seed/test1/400/225",
    },
    {
      id: 2,
      name: "Amanda Testimonial",
      industry: "Coach",
      image: "https://picsum.photos/seed/test2/400/225",
    },
    {
      id: 3,
      name: "Marc Testimonial",
      industry: "eCommerce",
      image: "https://picsum.photos/seed/test3/400/225",
    },
    {
      id: 4,
      name: "Lana Testimonial",
      industry: "eCommerce",
      image: "https://picsum.photos/seed/test4/400/225",
    },
    {
      id: 5,
      name: "Fares Testimonial",
      industry: "eCommerce",
      image: "https://picsum.photos/seed/test5/400/225",
    },
    {
      id: 6,
      name: "Sana Testimonial",
      industry: "eCommerce",
      image: "https://picsum.photos/seed/test6/400/225",
    },
  ];

  return (
    <div>
      <HeroBanner
        title="Coaching & Training"
        description="Empowering business owners with the strategies and skills to scale their companies effectively."
      />

      {/* Attention Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-dark font-bold tracking-widest mb-4 uppercase">
              # ATTENTION BUSINESS BUILDER
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-700 leading-tight">
              Stop working IN your business and start working ON your business
              today.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/stressed-owner/800/600"
                alt="Business owner reflecting"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                A good marketing coach will help you
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-500 italic">
                You&apos;re probably thinking...
              </p>
              <p className="text-xl font-bold text-dark">
                &quot;I can just do this myself, I don&apos;t need help.&quot;
              </p>
              <p className="text-gray-600">
                But the truth is, as a business owner, you&apos;re wearing many
                hats and{" "}
                <span className="font-bold text-dark">
                  you don&apos;t have time to be an expert in everything.
                </span>
              </p>
              <p className="text-gray-600">
                That&apos;s where a marketing coach comes in.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Define your target market and ideal customer",
                  "Create a marketing strategy that speaks to your target market",
                  "Identify the systems & tools you need and which marketing channels are most effective for reaching your ideal customers",
                  "Implement a marketing plan that delivers results",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* YOU NEED COACHING IF Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-dark text-center mb-20 uppercase tracking-tight">
            YOU NEED COACHING IF...
          </h2>

          <div className="space-y-32">
            {needsCoachingItems.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${item.align === "left" ? "" : "lg:flex-row-reverse"}`}
              >
                <div
                  className={`space-y-6 ${item.align === "left" ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h3 className="text-2xl font-bold text-dark border-b-2 border-blue-600 pb-4 inline-block">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
                <div
                  className={`relative aspect-video rounded-3xl overflow-hidden shadow-xl ${item.align === "left" ? "lg:order-1" : "lg:order-2"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Discovery CTA */}
      <section className="py-20 px-4 bg-[#0a0f1a] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Book a FREE discovery call now
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            We{" "}
            <span className="text-white font-bold italic underline">
              guarantee
            </span>{" "}
            you&apos;ll get value, go on... there&apos;s zero risk.
          </p>
          <p className="text-4xl font-bold mb-10 tracking-widest">BOOK NOW</p>
          <Button
            href="/request-a-call"
            size="lg"
            className="bg-white text-dark hover:bg-gray-200 border-none px-12 py-6 text-lg font-bold"
          >
            BOOK NOW
          </Button>
        </div>
      </section>

      {/* Meet Your Coach Section */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-16">
            Meet Your Coach
          </h2>

          <div className="mb-12">
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="https://picsum.photos/seed/tim-murray/400/400"
                alt="Tim Murray"
                width={256}
                height={256}
                className="rounded-full border-4 border-white shadow-2xl relative z-10 object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-blue-700 mb-2">
              Tim Murray
            </h3>
            <p className="text-gray-500 font-medium mb-10">Hi, I&apos;m Tim.</p>
          </div>

          <div className="space-y-6 text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            <p>
              I help business owners just like you solve their marketing and
              sales problems, giving you more time to spend working on your
              business instead of working in it.
            </p>
            <p>
              I&apos;m an entrepreneur and digital marketing strategist with
              over 20 years of experience working in business, sales, and in the
              online space. I&apos;ve been (and continue to be) on both sides of
              the table – a business owner, consultant and mentor to people and
              businesses in all parts of the world. I&apos;ve spent hundreds of
              thousands of pounds in online advertising and generated in excess
              of £10 million in sales for my customers.
            </p>
            <p>
              I&apos;m passionate about helping our customers avoid the mistakes
              that I&apos;ve made, and that I see people doing on a daily basis.
            </p>
            <p>
              So if you&apos;re a business owner who is sick of spending their
              hard-earned cash with agencies who simply don&apos;t move the
              needle for your business, or a business owner who is ready to
              scale and cannot do everything on your own – book a free discovery
              call with me today. I guarantee you&apos;ll come away with value.
              So what are you waiting for? It&apos;s not every day you come
              across an offer that has zero risk!
            </p>
          </div>

          <div className="mt-16">
            <Button
              href="/request-a-call"
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-12"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-16">
            Here&apos;s What Other Clients Say About Tim
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-video">
                  <Image
                    src={test.image}
                    alt={test.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-[10px] text-white px-2 py-0.5 rounded">
                    Watch on <span className="font-bold">YouTube</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">T</span>
                    </div>
                    <h4 className="font-bold text-dark">{test.name}</h4>
                  </div>
                  <p className="text-gray-500 text-sm">{test.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
