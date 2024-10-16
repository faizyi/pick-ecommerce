"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Checkbox from './Checkbox';
const categories = [
    {
      name: "Smartphones",
      subcategories: ["iPhone", "Oppo", "Samsung", "Xiaomi", "Huawei", "Realme", "Vivo", "Motorola",]
    },
  ]
export default function FilterSidebar() {
    const [expandedCategories, setExpandedCategories] = useState([]);
    const toggleCategory = (category) => {
        setExpandedCategories(prev =>
          prev.includes(category)
            ? prev.filter(c => c !== category)
            : [...prev, category]
        )
      }
  return (
    <aside className="w-64 bg-white p-6 fixed h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        {/* <div className="mb-4">
          <label htmlFor="search">Search</label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              id="search"
              placeholder="Search products..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div> */}
        {categories.map((category) => (
          <div key={category.name} className="mb-4">
            <button
              className="flex items-center justify-between w-full text-left font-medium"
              onClick={() => toggleCategory(category.name)}
            >
              {category.name}
              {expandedCategories.includes(category.name) ? (
                <FaChevronUp className="h-4 w-4" />
              ) : (
                <FaChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedCategories.includes(category.name) && (
              <div className="ml-4 mt-2">
                {/* <Label className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedCategories.includes(category.name)}
                    onCheckedChange={() => toggleCategoryFilter(category.name)}
                  />
                  <span>All {category.name}</span>
                </Label> */}
                {category.subcategories.map((subcategory) => (
                  <lable key={subcategory} className="flex items-center space-x-2 mt-1">
                    <Checkbox
                    //   checked={selectedSubcategories.includes(subcategory)}
                    //   onCheckedChange={() => toggleSubcategoryFilter(subcategory)}
                    />
                    <span>{subcategory}</span>
                  </lable>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>
  )
}
