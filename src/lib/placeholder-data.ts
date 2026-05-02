import {
  BlogPost,
  PortfolioItem,
  Service,
  TeamMember,
  Testimonial,
} from "@/types";

export const services: Service[] = [
  {
    name: "Social Media Management",
    slug: "social-media-management",
    icon: "LayoutDashboard",
    shortDescription:
      "Elevate your brand with consistent, engaging social media content that grows your audience and drives results.",
    fullDescription:
      "Our social media management service takes the burden of daily posting, community management, and strategy off your plate. We craft platform-specific content calendars, design eye-catching visuals, write compelling captions, and engage with your audience — so you can focus on running your business.",
    features: [
      "Custom content calendar (30 posts/month)",
      "Platform-optimized graphics and captions",
      "Community management and comment replies",
      "Monthly analytics and performance report",
      "Hashtag research and strategy",
      "Stories and Reels creation",
    ],
    stats: [
      { value: "3x", label: "Average follower growth" },
      { value: "85%", label: "Increase in engagement" },
      { value: "200+", label: "Brands managed" },
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "We manage Instagram, Facebook, TikTok, LinkedIn, and X (Twitter).",
      },
      {
        question: "How many posts per month?",
        answer:
          "Our standard package includes 30 posts per month across your chosen platforms.",
      },
      {
        question: "Do you create the content or do we?",
        answer:
          "We handle everything — copy, design, scheduling, and engagement.",
      },
      {
        question: "Can I approve posts before they go live?",
        answer:
          "Yes, we share a content calendar every month for your review and approval.",
      },
    ],
  },
  {
    name: "Social Media Advertising",
    slug: "social-media-advertising",
    icon: "Megaphone",
    shortDescription:
      "Maximize reach and ROI with laser-targeted paid social campaigns across Meta, TikTok, and more.",
    fullDescription:
      "We design, launch, and optimize paid advertising campaigns across Facebook, Instagram, and TikTok. From creative production to audience targeting and A/B testing, every dollar of your ad spend is tracked and optimized for maximum return.",
    features: [
      "Full campaign setup and management",
      "Custom audience and retargeting strategy",
      "A/B testing of creatives and copy",
      "Weekly performance reports",
      "Landing page recommendations",
      "Budget allocation optimization",
    ],
    stats: [
      { value: "4.2x", label: "Average ROAS" },
      { value: "$2M+", label: "Ad spend managed" },
      { value: "60%", label: "Lower cost per lead" },
    ],
    faqs: [
      {
        question: "What is the minimum ad budget?",
        answer:
          "We recommend a minimum of $1,000/month in ad spend for meaningful results.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Most clients see measurable results within the first 2–4 weeks.",
      },
      {
        question: "Do you handle the creative?",
        answer:
          "Yes, our team produces all ad creatives including static images and short videos.",
      },
      {
        question: "How do you report results?",
        answer:
          "We provide weekly dashboards and a detailed monthly performance report.",
      },
    ],
  },
  {
    name: "TikTok Ads",
    slug: "tiktok-ads",
    icon: "Music2",
    shortDescription:
      "Tap into TikTok's explosive growth with native-style ads that stop the scroll and drive conversions.",
    fullDescription:
      "TikTok is the fastest-growing ad platform on the planet. We create scroll-stopping TikTok ad campaigns using native-style video content that feels organic, reaches massive audiences, and converts at scale.",
    features: [
      "TikTok Business account setup",
      "Native-style video ad production",
      "Spark Ads and In-Feed campaigns",
      "TopView and Brand Takeover options",
      "Audience targeting and pixel setup",
      "Weekly optimization and reporting",
    ],
    stats: [
      { value: "5x", label: "Average reach vs Facebook" },
      { value: "38%", label: "Lower CPM on average" },
      { value: "100+", label: "TikTok campaigns launched" },
    ],
    faqs: [
      {
        question: "Do I need a TikTok account already?",
        answer: "No, we set everything up for you from scratch.",
      },
      {
        question: "What type of video content works best?",
        answer:
          "Short, authentic 15–30 second videos that look native to the feed perform best.",
      },
      {
        question: "Is TikTok right for my business?",
        answer:
          "TikTok works for almost every industry — we'll advise you during onboarding.",
      },
      {
        question: "Can you repurpose our existing videos?",
        answer:
          "Yes, we can edit and optimize your existing content for TikTok format.",
      },
    ],
  },
  {
    name: "Google Ads",
    slug: "google-ads",
    icon: "Search",
    shortDescription:
      "Capture high-intent buyers the moment they search for your products or services on Google.",
    fullDescription:
      "As certified Google Ads specialists, we build and manage Search, Display, Shopping, and Performance Max campaigns that put your business at the top of Google at the exact moment your customers are searching.",
    features: [
      "Keyword research and strategy",
      "Search, Display, Shopping, and PMax campaigns",
      "Ad copy writing and testing",
      "Conversion tracking setup",
      "Negative keyword management",
      "Monthly performance reporting",
    ],
    stats: [
      { value: "3.5x", label: "Average ROAS" },
      { value: "45%", label: "Reduction in wasted spend" },
      { value: "500+", label: "Google campaigns managed" },
    ],
    faqs: [
      {
        question: "Are you Google certified?",
        answer:
          "Yes, our team holds current Google Ads certifications across all campaign types.",
      },
      {
        question: "How much should I spend on Google Ads?",
        answer:
          "We recommend starting at $1,500–$3,000/month for competitive results.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work across e-commerce, professional services, hospitality, healthcare, and more.",
      },
      {
        question: "Do you manage Google Shopping?",
        answer:
          "Yes, including product feed optimization and Performance Max integration.",
      },
    ],
  },
  {
    name: "Video Production",
    slug: "video-production",
    icon: "Video",
    shortDescription:
      "Compelling brand videos, social content, and ad creatives that capture attention and tell your story.",
    fullDescription:
      "From concept to final cut, our in-house video production team creates professional brand films, product videos, social content, and performance ad creatives that look stunning and drive results across every platform.",
    features: [
      "Concept development and scripting",
      "Professional on-location filming",
      "Motion graphics and animation",
      "Color grading and sound design",
      "Platform-optimized exports (16:9, 9:16, 1:1)",
      "Fast 5-day turnaround on social content",
    ],
    stats: [
      { value: "300+", label: "Videos produced" },
      { value: "2x", label: "Higher engagement than static" },
      { value: "5 days", label: "Average turnaround" },
    ],
    faqs: [
      {
        question: "Do you film on location?",
        answer:
          "Yes, we travel to your location for filming. Studio options are also available.",
      },
      {
        question: "What's the typical production timeline?",
        answer:
          "Brand films take 2–3 weeks. Social content is typically delivered in 5 business days.",
      },
      {
        question: "Can you add subtitles and captions?",
        answer:
          "Yes, all videos include styled captions optimized for silent viewing.",
      },
      {
        question: "Do you provide raw footage?",
        answer:
          "Yes, raw footage is available as an add-on to any production package.",
      },
    ],
  },
  {
    name: "Coaching & Training",
    slug: "coaching-training",
    icon: "GraduationCap",
    shortDescription:
      "Upskill your team with expert-led digital marketing training tailored to your business goals.",
    fullDescription:
      "Our 1-on-1 and group coaching programs teach your in-house team everything they need to run effective social media and digital marketing campaigns. Tailored workshops, live Q&A sessions, and ongoing mentorship ensure lasting results.",
    features: [
      "1-on-1 and group coaching sessions",
      "Custom training curriculum for your team",
      "Social media strategy workshops",
      "Ads management training (Meta & Google)",
      "Content creation masterclasses",
      "Ongoing Slack or WhatsApp support",
    ],
    stats: [
      { value: "150+", label: "Teams trained" },
      { value: "4.9/5", label: "Average satisfaction score" },
      { value: "8 weeks", label: "Standard program duration" },
    ],
    faqs: [
      {
        question: "Is training in-person or online?",
        answer:
          "Both options are available. Most clients prefer a hybrid model.",
      },
      {
        question: "What skill level is required?",
        answer:
          "Programs are tailored to beginners through to experienced marketers.",
      },
      {
        question: "Do you provide training materials?",
        answer:
          "Yes, all participants receive a full digital resource pack and recorded sessions.",
      },
      {
        question: "Can you train a team of 10+?",
        answer: "Absolutely. We offer group packages for teams of any size.",
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Stop Posting Blind: The Social Media Strategy Every Business Needs",
    slug: "stop-posting-blind-social-media-strategy",
    date: "January 26, 2026",
    category: "Social Media",
    excerpt:
      "A clear social media strategy helps businesses reach more people, build trust, win new customers, and sell more often. Here's how to use a simple funnel and content pillars.",
    readTime: "5 min read",
    image: "/images/blog/blog-1.jpg",
    author: "DBSEE Team",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    title: "5 Digital Marketing Shifts Redefining Success in 2025",
    slug: "5-digital-marketing-shifts-2025",
    date: "June 14, 2025",
    category: "Digital Marketing",
    excerpt:
      "The digital landscape is evolving faster than ever. Here are the five biggest shifts reshaping how brands grow online in 2025.",
    readTime: "7 min read",
    image: "/images/blog/blog-2.jpg",
    author: "DBSEE Team",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
  },
  {
    title: "Why Video Content Dominates Every Platform in 2025",
    slug: "video-content-dominates-2025",
    date: "March 10, 2025",
    category: "Video",
    excerpt:
      "Short-form video is no longer optional. Discover why every brand needs a video-first content strategy and how to execute it on a budget.",
    readTime: "6 min read",
    image: "/images/blog/blog-3.jpg",
    author: "DBSEE Team",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Google Ads vs Meta Ads: Which Platform Should You Choose?",
    slug: "google-ads-vs-meta-ads",
    date: "February 5, 2025",
    category: "Advertising",
    excerpt:
      "Both platforms are powerful — but they serve very different purposes. Here's how to decide where to put your ad budget.",
    readTime: "8 min read",
    image: "/images/blog/blog-4.jpg",
    author: "DBSEE Team",
    body: "Lorem ipsum dolor sit amet...",
  },
  {
    title: "The Complete Guide to TikTok Advertising for Brands",
    slug: "tiktok-advertising-guide-brands",
    date: "November 20, 2024",
    category: "TikTok",
    excerpt:
      "TikTok has become one of the most powerful advertising platforms in the world. This guide covers everything you need to launch your first campaign.",
    readTime: "10 min read",
    image: "/images/blog/blog-5.jpg",
    author: "DBSEE Team",
    body: "Lorem ipsum dolor sit amet...",
  },
  {
    title: "How to Build a Brand on Social Media from Zero",
    slug: "build-brand-social-media-zero",
    date: "September 8, 2024",
    category: "Branding",
    excerpt:
      "Starting from scratch? This step-by-step guide shows you how to build a recognizable, trusted brand on social media without a massive budget.",
    readTime: "9 min read",
    image: "/images/blog/blog-6.jpg",
    author: "DBSEE Team",
    body: "Lorem ipsum dolor sit amet...",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "E-Commerce Growth Campaign",
    category: "Social Media",
    image: "/images/portfolio/p-1.jpg",
    result: "320% increase in online sales",
    client: "RetailCo",
  },
  {
    title: "TikTok Brand Launch",
    category: "TikTok",
    image: "/images/portfolio/p-2.jpg",
    result: "1.2M views in first month",
    client: "LaunchBrand",
  },
  {
    title: "Google Ads Lead Gen",
    category: "Ads",
    image: "/images/portfolio/p-3.jpg",
    result: "58% lower cost per lead",
    client: "FinServe Pro",
  },
  {
    title: "Real Estate Video Campaign",
    category: "Video",
    image: "/images/portfolio/p-4.jpg",
    result: "45 qualified leads in 30 days",
    client: "PrimeRealty",
  },
  {
    title: "Restaurant Social Growth",
    category: "Social Media",
    image: "/images/portfolio/p-5.jpg",
    result: "10K followers in 60 days",
    client: "Savoria Dining",
  },
  {
    title: "Meta Ads Retargeting",
    category: "Ads",
    image: "/images/portfolio/p-6.jpg",
    result: "4.8x ROAS achieved",
    client: "StyleHub",
  },
  {
    title: "Corporate Brand Film",
    category: "Video",
    image: "/images/portfolio/p-7.jpg",
    result: "500K organic video views",
    client: "BuildTech Group",
  },
  {
    title: "Healthcare PPC Campaign",
    category: "Ads",
    image: "/images/portfolio/p-8.jpg",
    result: "3x increase in appointments",
    client: "WellCare Clinic",
  },
  {
    title: "Fashion Social Media",
    category: "Social Media",
    image: "/images/portfolio/p-9.jpg",
    result: "250% engagement growth",
    client: "TrendWear",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "RetailCo",
    quote:
      "DBSEE completely transformed our digital presence. Our social media following tripled and online sales are up 320%. They're not just an agency — they're a true growth partner.",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    name: "James Okafor",
    role: "Marketing Director",
    company: "FinServe Pro",
    quote:
      "The Google Ads campaigns DBSEE built for us cut our cost per lead in half while doubling our qualified pipeline. Their reporting is transparent and results are undeniable.",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    name: "Layla Hassan",
    role: "Founder",
    company: "StyleHub",
    quote:
      "I was skeptical about social ads, but DBSEE proved me wrong. Our TikTok campaign hit 1 million views in three weeks. The team is professional, creative, and always responsive.",
    avatar: "/images/avatars/avatar-3.jpg",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Carter",
    role: "Founder & CEO",
    image: "/images/team/team-1.jpg",
  },
  {
    name: "Priya Nair",
    role: "Head of Strategy",
    image: "/images/team/team-2.jpg",
  },
  {
    name: "Marcus Webb",
    role: "Creative Director",
    image: "/images/team/team-3.jpg",
  },
  {
    name: "Nour Al-Amin",
    role: "Head of Paid Media",
    image: "/images/team/team-4.jpg",
  },
];

export const clientLogos = [
  "Marassi Galleria",
  "Dragon City",
  "Conrad Hotels",
  "MODA Mall",
  "Sheraton",
  "Time Out Market",
  "SUSHISAMBA",
  "Eagle Hills",
  "RETAL Group",
  "Bahrain Marina",
  "ONYX Rotana",
  "Quest School",
  "SICO Bank",
  "Korean Bakery",
  "Candylicious",
  "BuildTech",
];

export const stats = [
  { value: "200+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
  { value: "$5M+", label: "Ad Spend Managed" },
];
