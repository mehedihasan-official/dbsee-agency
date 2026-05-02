"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/placeholder-data";
import { motion } from "framer-motion";
import { Eye, Heart, Target } from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable outcomes that drive real business growth.",
    },
    {
      icon: Eye,
      title: "Transparent",
      description:
        "Clear communication and honest reporting throughout every project.",
    },
    {
      icon: Heart,
      title: "Client-First",
      description:
        "Your success is our success. We treat your business like our own.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-dark-card">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            About DBSEE
          </h1>
          <p className="text-dark-muted text-lg">
            We're a premier digital marketing agency dedicated to helping
            businesses grow through innovative social media marketing and paid
            advertising strategies.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="OUR STORY"
              title="From Vision to Reality"
              align="left"
            />
            <div className="space-y-4 text-dark-muted">
              <p>
                Founded in 2018, DBSEE began with a simple mission: to make
                digital marketing accessible and effective for businesses of all
                sizes. Our founders recognized that many companies were
                struggling to navigate the complex world of social media and
                paid advertising.
              </p>
              <p>
                What started as a small consultancy has grown into a
                full-service agency with a team of certified specialists. We've
                helped over 200 businesses transform their digital presence and
                achieve remarkable growth.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in
                digital marketing, combining data-driven strategies with
                creative excellence to deliver results that matter.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video bg-dark-border rounded-2xl overflow-hidden"
          >
            <Image
              src="https://picsum.photos/seed/about-story/600/400"
              alt="Our team working together"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-dark-card">
        <SectionHeading
          eyebrow="OUR MISSION"
          title="Empowering Business Growth"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">
                {value.title}
              </h3>
              <p className="text-dark-muted">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <SectionHeading
          eyebrow="OUR TEAM"
          title="Meet the Experts Behind DBSEE"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 bg-dark-border rounded-full overflow-hidden">
                <Image
                  src={`https://i.pravatar.cc/300?img=${index + 1}`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-dark-muted text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-card border-y border-dark-border">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-dark-muted mb-8">
            Let's discuss how we can help your business achieve its goals.
          </p>
          <Button href="/request-a-call" size="lg">
            Get Started
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
