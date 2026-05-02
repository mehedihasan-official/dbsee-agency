"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function LimitedTimeOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offerItems = [
    "3 Months Social Media Management",
    "Full Meta Ads Setup & Optimization",
    "TikTok Advertising Campaign",
    "Google Ads Account Audit",
    "Monthly Strategy Calls",
    "Custom Content Calendar",
    "Performance Analytics Dashboard",
    "Dedicated Account Manager",
  ];

  const testimonials = [
    {
      quote:
        "This offer saved us thousands while delivering incredible results.",
      name: "Sarah M.",
      role: "Marketing Director",
    },
    {
      quote: "Best investment we've made in our digital marketing.",
      name: "James O.",
      role: "Business Owner",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/20 to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-dark"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Don't Miss This Offer
          </h1>
          <p className="text-dark-muted text-lg mb-8">
            Limited time only: Get our complete digital marketing package at an
            unbeatable price.
          </p>

          {/* Countdown Timer */}
          <div className="bg-dark-card/50 border border-dark-border rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-primary font-semibold mb-4">Offer Expires In:</p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-dark-muted uppercase">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-dark-card">
        <SectionHeading
          eyebrow="WHAT'S INCLUDED"
          title="Everything You Need to Succeed"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {offerItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-white">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Price */}
      <section className="section-padding">
        <div className="max-w-md mx-auto">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 text-center">
            <div className="mb-4">
              <span className="text-dark-muted line-through text-lg">
                Was $3,000
              </span>
            </div>
            <div className="text-5xl font-bold text-primary mb-2">$1,499</div>
            <p className="text-dark-muted mb-6">
              One-time payment • Limited spots available
            </p>
            <Button href="/request-a-call" size="lg" className="w-full">
              Claim This Offer
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-card">
        <SectionHeading
          eyebrow="WHAT CLIENTS SAY"
          title="Real Results from Real Clients"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-xl p-6"
            >
              <p className="text-white italic mb-4">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-dark-muted text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-lg font-semibold mb-4">
            Only 5 spots remaining this month
          </p>
          <h2 className="font-heading text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-dark-muted mb-8">
            Don't let this opportunity pass you by. Secure your spot now and
            start seeing results.
          </p>
          <Button href="/request-a-call" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
