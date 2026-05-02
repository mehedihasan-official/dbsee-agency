export interface Service {
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  author: string;
  body: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  result: string;
  client: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}
