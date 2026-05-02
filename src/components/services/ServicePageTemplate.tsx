"use client";

import { CtaBanner } from "@/components/home/CtaBanner";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Service } from "@/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6">Service</Badge>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            {service.name}
          </h1>
          <p className="text-dark-muted text-lg mb-8">
            {service.shortDescription}
          </p>
          <Button href="/request-a-call" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="WHAT WE DO"
              title="Comprehensive Solution for Your Business"
              align="left"
            />
            <p className="text-dark-muted text-lg mb-6">
              {service.fullDescription}
            </p>
            <Button href="/request-a-call" variant="outline">
              Learn More About Our Process
            </Button>
          </div>
          <div className="relative aspect-video bg-dark-border rounded-2xl overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${service.slug}/600/400`}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-dark-card">
        <SectionHeading
          eyebrow="WHAT'S INCLUDED"
          title="Everything You Need to Succeed"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <p className="text-white">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <SectionHeading eyebrow="OUR PROCESS" title="How We Deliver Results" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "We analyze your current situation and goals",
            },
            {
              step: "02",
              title: "Strategy",
              description: "Custom plan tailored to your business needs",
            },
            {
              step: "03",
              title: "Execute",
              description: "Implementation with ongoing optimization",
            },
            {
              step: "04",
              title: "Report",
              description: "Detailed results and next steps",
            },
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">
                {process.step}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                {process.title}
              </h3>
              <p className="text-dark-muted">{process.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results/Stats */}
      <section className="section-padding bg-dark-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-dark-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Got Questions? We've Got Answers"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {service.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-border/50 transition-colors"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-dark-muted">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
