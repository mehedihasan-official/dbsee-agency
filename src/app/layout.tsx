/**
 * Root Layout Component
 * 
 * This is the main layout component for the entire DBSEE Agency application.
 * It wraps all pages and includes:
 * - Global fonts (Inter for body, Syne for headings)
 * - Global stylesheets and Tailwind CSS configuration
 * - Navigation bar (Navbar) at the top
 * - Footer component at the bottom
 * - SEO metadata (title, description)
 * 
 * @file Root layout for Next.js app
 * @author DBSEE Agency
 */

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

// Configure Inter font for body text (readable, modern)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configure Syne font for headings (bold, distinctive)
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

// Export metadata for SEO - appears in browser tabs and search results
export const metadata: Metadata = {
  title: "DBSEE — Premier Digital Marketing Agency",
  description:
    "Elevate your brand with expert social media marketing, paid advertising, and digital strategies that drive real results.",
};

/**
 * RootLayout - Main layout wrapper for all pages
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to be wrapped
 * @returns {JSX.Element} HTML document structure with Navbar, children, and Footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-dark text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
