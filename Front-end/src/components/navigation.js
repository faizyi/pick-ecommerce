"use client"
import React, { useState } from "react";
const categoriesData = [
    {
      name: "Electronics",
      subcategories: ["Mobile Phones", "Laptops", "Television", "Cameras"],
    },
    {
      name: "Fashion",
      subcategories: ["Men's Fashion", "Women's Fashion", "Kid's Fashion", "Accessories"],
    },
    {
      name: "Home & Kitchen",
      subcategories: ["Furniture", "Home Decor", "Kitchen Appliances", "Storage"],
    },
    {
      name: "Beauty & Health",
      subcategories: ["Skincare", "Makeup", "Health Devices", "Supplements"],
    },
  ];
export default function Navigation() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const handleMouseEnter = () => setShowDropdown(true);
    const handleMouseLeave = () => {
    //   setShowDropdown(false);
      setHoveredCategory(null);
    };
  return (
    <nav className="text-white relative">
    {/* <div className="max-w-7xl mx-auto flex items-center justify-between"> */}
      {/* Main Navigation */}
      <div className="">
        {/* "All Categories" Button */}
        <button
          className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md focus:outline-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          All Categories
        </button>

        {/* Categories Dropdown */}
        {showDropdown && (
          <div
            className="absolute left-0 mt-2 bg-white text-gray-800 w-72 rounded-lg shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="py-2">
              {categoriesData.map((category, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    {category.name}
                  </button>

                  {/* Subcategories dropdown */}
                  {hoveredCategory === index && (
                    <div className="absolute left-full top-0 w-64 bg-white text-gray-800 shadow-lg rounded-md">
                      <ul>
                        {category.subcategories.map((subcategory, subIndex) => (
                          <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                            {subcategory}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    {/* </div> */}
  </nav>
    )
}
