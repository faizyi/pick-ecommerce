"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Checkbox from "./Checkbox";
import useGetProduct from "@/customHooks/productHooks/useGetProduct";

export default function FilterSidebar({ onFilterChange }) {
  const { allProducts } = useGetProduct(); // Get products from the custom hook
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryMap = new Map();

    allProducts.forEach((product) => {
      const { category, subcategory } = product;
      if (category) {
        if (!categoryMap.has(category)) {
          categoryMap.set(category, new Set());
        }
        if (subcategory) {
          categoryMap.get(category).add(subcategory);
        }
      }
    });

    const categoryList = Array.from(categoryMap, ([name, subcategoriesSet]) => ({
      name,
      subcategories: Array.from(subcategoriesSet),
    }));

    setCategories(categoryList);
  }, [allProducts]);

  const handleCheckboxChange = (subcategory) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((sc) => sc !== subcategory)
        : [...prev, subcategory]
    );
  };

  // Notify parent component (AllProducts) when filters change
  useEffect(() => {
    onFilterChange(selectedSubcategories);
  }, [selectedSubcategories, onFilterChange]);

  return (
    <aside className="w-64 bg-white p-6 fixed h-screen overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {categories.map((category) => (
        <div key={category.name} className="mb-4">
          <div className="flex items-center justify-between w-full text-left font-medium">
            <span>{category.name}</span>
            <FaChevronDown className="h-4 w-4" />
          </div>
          <div className="ml-4 mt-2">
            {category.subcategories.length > 0 ? (
              category.subcategories.map((subcategory) => (
                <label key={subcategory} className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    label={subcategory}
                    checked={selectedSubcategories.includes(subcategory)}
                    onChange={() => handleCheckboxChange(subcategory)}
                  />
                </label>
              ))
            ) : (
              <p className="text-gray-500">No subcategories available</p>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}
