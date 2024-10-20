"use client"
import AllProducts from '@/components/AllProductsComponents/AllProducts'
import FilterSidebar from '@/components/AllProductsComponents/FilterSidebar'
import React, { useEffect, useState } from 'react'
export default function page() {
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const handleFilterChange = (selectedSubcategories) => {
    setSelectedSubcategories(selectedSubcategories);
  };
  return (
    <section className="flex bg-gray-100">
        <FilterSidebar onFilterChange={handleFilterChange}/>
        <main className="flex-1 ml-64 p-8">
          <h1 className="text-3xl font-bold">All Products</h1>
          <AllProducts selectedSubcategories={selectedSubcategories}/>
        </main>
    </section>
  )
}
