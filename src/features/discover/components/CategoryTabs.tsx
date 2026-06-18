"use client";

import { useState } from "react";

const categories = [
  "All",
  "Events",
  "Offers",
  "Food",
  "Movies",
  "Festivals",
  "Travel",
  "Sports",
  "Shopping",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">

      {categories.map((cat) => {
        const isActive = active === cat;

        return (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
              px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium
              transition-all duration-200
              border
              ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg"
                  : "bg-[var(--surface)] text-white/70 border-[var(--border)] hover:text-white"
              }
            `}
          >
            {cat}
          </button>
        );
      })}

    </div>
  );
}