"use client";

import { Badge } from "@/components/ui/Badge";
import { portfolioItems } from "@/lib/placeholder-data";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Social Media", "Ads", "Video"];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-dark-card border border-dark-border text-white hover:border-primary/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.title}
            className="group relative aspect-video bg-dark-border rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image
              src={`https://picsum.photos/seed/${item.category}-${index}/800/600`}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <Badge className="mb-2">{item.category}</Badge>
                <h3 className="font-heading font-bold text-white text-lg mb-1">
                  {item.client}
                </h3>
                <p className="text-primary font-semibold">{item.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
