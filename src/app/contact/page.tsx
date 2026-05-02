"use client";

import { Button } from "@/components/ui/Button";
import { services } from "@/lib/placeholder-data";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

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

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-dark-muted text-lg">
            Ready to transform your digital presence? Let's discuss how we can
            help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">
              Send us a message
            </h2>
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
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-dark-muted focus:border-primary focus:outline-none"
                  placeholder="+1 (234) 567-8900"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white focus:border-primary focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-dark-muted focus:border-primary focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-dark-muted">hello@dbsee.agency</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-dark-muted">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-dark-muted">Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Office Hours
                  </h3>
                  <p className="text-dark-muted">
                    Mon - Fri: 9:00 AM - 6:00 PM GMT
                  </p>
                  <p className="text-dark-muted">Sat - Sun: By appointment</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
