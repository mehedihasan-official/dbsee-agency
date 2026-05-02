"use client";

import { Button } from "@/components/ui/Button";
import { Check, Clock, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function RequestCall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bestTime: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const benefits = [
    { icon: Check, text: "No Commitment" },
    { icon: Clock, text: "Free Consultation" },
    { icon: MessageSquare, text: "Reply Within 24hrs" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Talk
          </h1>
          <p className="text-dark-muted text-lg mb-8">
            Book a free 30-minute strategy call to discuss how we can help your
            business grow.
          </p>

          {/* Countdown Timer */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-primary font-semibold mb-4">
              Limited Time Offer Expires In:
            </p>
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

      {/* Form */}
      <section className="section-padding">
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-dark-muted focus:border-primary focus:outline-none"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-dark-muted focus:border-primary focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white mb-2"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-dark-muted focus:border-primary focus:outline-none"
                placeholder="+1 (234) 567-8900"
              />
            </div>

            <div>
              <label
                htmlFor="bestTime"
                className="block text-sm font-medium text-white mb-2"
              >
                Best Time to Call
              </label>
              <select
                id="bestTime"
                name="bestTime"
                value={formData.bestTime}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white focus:border-primary focus:outline-none"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 8 PM)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-dark-muted focus:border-primary focus:outline-none resize-none"
                placeholder="Tell us about your current challenges..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Schedule My Free Call
            </Button>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-dark-card border border-dark-border rounded-xl p-4 text-center"
              >
                <benefit.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-white font-semibold">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
