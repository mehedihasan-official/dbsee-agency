"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

// 25 team members matching the screenshot grid
const teamMembers = [
  { name: "Douglas Cordwell",   role: "Managing Director",           img: 1  },
  { name: "Tim Murray",         role: "Director",                    img: 2  },
  { name: "Samera Hasan",       role: "Account Manager",             img: 5  },
  { name: "Nawaf Faraj",        role: "Creative Director",           img: 6  },
  { name: "Ariel Mikhas",       role: "Social Media Manager",        img: 7  },
  { name: "Anjulee Ahiran",     role: "Project Manager",             img: 10 },
  { name: "Sara Abdulla",       role: "Content Creator",             img: 11 },
  { name: "Shanna Demetria",    role: "Graphic Designer",            img: 12 },
  { name: "Shahira Alasfoor",   role: "Account Executive",           img: 15 },
  { name: "Khalid Mirza",       role: "Paid Media Specialist",       img: 16 },
  { name: "Raheel Shoukat",     role: "SEO Specialist",              img: 17 },
  { name: "Ghassan George",     role: "Video Producer",              img: 18 },
  { name: "Khalil Yousuf",      role: "Videographer",                img: 20 },
  { name: "Mira Mansouri",      role: "Content Strategist",          img: 21 },
  { name: "Humam Ramahi",       role: "Motion Designer",             img: 22 },
  { name: "Emaan Suliman",      role: "Social Media Executive",      img: 25 },
  { name: "Mohamed Nayel",      role: "Digital Marketing Executive", img: 26 },
  { name: "Fathimath Fani",     role: "Admin & Finance",             img: 27 },
  { name: "Manpreet Singh",     role: "Web Developer",               img: 28 },
  { name: "Zakia Siddiqui",     role: "Community Manager",           img: 29 },
  { name: "Emmanuel Nayel",     role: "Video Editor",                img: 30 },
  { name: "Daniel Kamande",     role: "Content Creator",             img: 31 },
  { name: "Abdulla Al-Zaman",   role: "Account Manager",             img: 33 },
  { name: "Medha Shukia",       role: "Graphic Designer",            img: 34 },
];

const clients = [
  "Eagle Hills", "Jumeihah", "Sofitel", "CONRAD", "MG", "SUSHISAMBA",
  "Jannat Est.", "St Christopher's Brain Education", "S/CO سيبكو", "Traveller", "BINAA", "Shukur شكر",
  "Rotana", "RAMADA", "AL REEM", "WYNDHAM", "Edamah", "saferoad",
  "SAMFER", "tinyOM", "VIVA OLIVA", "AVENS", "D&D ANNA'S SPA",
];

export default function About() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0d0d6b 0%, #1a1aad 50%, #2525c9 100%)",
          minHeight: "220px",
          paddingTop: "64px",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute right-0 top-0 opacity-20 pointer-events-none"
          style={{ width: 400, height: 400, background: "radial-gradient(circle, #6060ff 0%, transparent 70%)", transform: "translate(100px,-100px)" }} />
        <div className="absolute left-1/3 bottom-0 opacity-10 pointer-events-none"
          style={{ width: 300, height: 300, background: "radial-gradient(circle, #8080ff 0%, transparent 70%)", transform: "translateY(80px)" }} />
        <div className="relative z-10 text-center px-4 py-16">
          <h1 className="font-heading font-semibold text-white text-4xl">About Our Marketing Agency</h1>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#888" }}>Who We Are</p>
          <h2 className="font-heading font-bold text-gray-900 text-3xl mb-1">GOamplify Marketing Agency</h2>
          <p className="text-gray-500 text-sm mb-6">a division of Mega Castle Co W.L.L.</p>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto">
            We&apos;re a Bahrain-based team of strategists, creatives, and technicians who believe every piece of content should serve a purpose. For over a decade, we&apos;ve been helping businesses like yours achieve measureable results.
          </p>
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-gray-900 text-2xl text-center mb-10">Our Approach</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Everything we do revolves around one core principle: <strong className="text-gray-900">your customer comes first.</strong> We dive deep into understanding your customers&apos; journey. From their first interaction with your brand to the moment they become loyal advocates. By mapping out this journey, we craft strategies that resonate at every touchpoint.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                title: "Customer-Centric Strategies",
                body: "We start by getting to know your business inside and out. Who are your customers? What do they care about? How do they interact with your brand? By answering these questions, we develop winning strategies that speak directly to your customer's needs and desires.",
              },
              {
                title: "Driving Real Results",
                body: "Pretty content is nice, but purposeful content is powerful. Every video we produce, every post we publish, every campaign we run is designed with a clear objective in mind: whether it's building brand awareness or boosting sales. We let data tell us what works.",
              },
              {
                title: "Driving Real Results",
                body: "We combine creative vision with sharp strategy to deliver campaigns that not only catch the eye but also drive action. Our focus is on strategies that contribute to your bottom line, helping you achieve sustainable growth.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TEAM ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-gray-900 text-3xl text-center mb-3">Our Team</h2>
          <p className="text-gray-500 text-sm text-center mb-12">
            We&apos;re not your typical agency folks. We&apos;re a collection of experts passionate about making a meaningful impact on your business.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-200 mb-2">
                  <Image
                    src={`https://i.pravatar.cc/300?img=${member.img}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-900 text-xs leading-tight">{member.name}</p>
                <p className="text-gray-500 text-xs leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-center text-gray-500 mb-2">YOU&apos;RE IN GOOD COMPANY</p>
          <h2 className="font-heading font-bold text-gray-900 text-2xl text-center mb-10">Some Of Our Customers</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {clients.map((client, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg flex items-center justify-center px-3 py-4 bg-white hover:border-gray-400 transition-colors"
                style={{ minHeight: "60px" }}
              >
                <span className="text-gray-700 font-semibold text-xs text-center leading-tight">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE DO IT ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-gray-900 text-2xl mb-6">Why we do it</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Because we believe that marketing should be more than just pretty campaigns or blind ad spend. We&apos;re driven by the success stories of our clients. Fueled by the tangible results, our strategies produce and inspired by the relationships we build along the way. Find your partner. Find your purpose.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, #0d0d6b 0%, #1a1aad 60%, #2525c9 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">Ready to Amplify Your Business?</h2>
          <p className="text-blue-200 text-sm mb-8">
            If you&apos;re looking for a partner who puts your customers at the centre of everything and believes every action should have a clear purpose, let&apos;s connect. We&apos;d love to dive into your customer journey and discover how we can drive real results together.
          </p>
          <Link
            href="/request-a-call"
            className="inline-block font-bold text-sm px-8 py-3 rounded text-white transition-colors"
            style={{ backgroundColor: "#2979ff" }}
          >
            Request a call
          </Link>
        </div>
      </section>

      {/* ── WhatsApp floating button ── */}
      <a
        href="https://wa.me/97300000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25d366" }}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
