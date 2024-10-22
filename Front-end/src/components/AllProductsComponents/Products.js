"use client";
import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import AllProducts from './AllProducts';
import { useSearchParams } from 'next/navigation';
import { FaAngleRight } from "react-icons/fa";
export default function Products() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const handleFilterChange = (selectedSubcategories) => {
    setSelectedSubcategories(selectedSubcategories);
  };
  const isSidebarVisible = !category;
  return (
    <section className={`flex min-h-screen bg-gray-100 ${isSidebarVisible ? '' : 'ml-0'}`}>
      {isSidebarVisible && (
        <FilterSidebar onFilterChange={handleFilterChange} />
      )}
      <main className={`flex-1 p-8 ${isSidebarVisible ? 'ml-64' : 'ml-0'}`}>
        <div className='flex'>
        <h1 className="text-3xl font-bold">All Products</h1>
        {category && (
          <div className="flex items-center space-x-2 text-gray-600 ml-5 mt-1">
            <FaAngleRight className="text-sm" />
            <span className="text-lg"><strong>{category}</strong></span>
          </div>
        )}
        </div>
        <AllProducts selectedSubcategories={selectedSubcategories} />
      </main>
    </section>
  );
}
