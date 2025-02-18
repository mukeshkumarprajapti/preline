"use client";
import React, { useState } from "react";

const Size: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    { label: "Shirt", count: 47 },
    { label: "T-shirt", count: 89 },
    { label: "Polos", count: 35 },
    { label: "Trousers", count: 30 },
    { label: "Jeans", count: 21 },
    { label: "Shorts", count: 5 },
    { label: "Jackets", count: 15 },
    { label: "Sweatshirts", count: 44 },
    { label: "Sweaters", count: 1 },
    { label: "Hoodies", count: 21 },
    { label: "Blazers", count: 3 },
    { label: "Suits", count: 6 },
  ];

  const toggleCheckbox = (label: string) => {
    setSelectedCategories((prev) =>
      prev.includes(label)
        ? prev.filter((Size) => Size !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="p-2 rounded-md bg-black mb-2">
      <h1 className="mb-3 font-semibold">Size</h1>
      <div>
        <div className="bg-black text-white p-2 rounded-lg">
          {categories.map(({ label, count }) => (
            <label
              key={label}
              className="flex items-center gap-2 p-2 hover:bg-neutral-900 w-full rounded-lg"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(label)}
                onChange={() => toggleCheckbox(label)}
                className="w-4 h-4 accent-blue-500"
              />
              <span className="flex-grow">{label}</span>
              <span className="text-gray-400">({count})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Size;
