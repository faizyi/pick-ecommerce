import AllProducts from '@/components/AllProductsComponents/AllProducts'
import FilterSidebar from '@/components/AllProductsComponents/FilterSidebar'
import React from 'react'

export default function page() {
  return (
    <section className="flex min-h-screen bg-gray-100">
        <FilterSidebar/>
        <main className="flex-1 ml-64 p-8">
        {/* <div className="flex justify-between items-center mb-6"> */}
          <h1 className="text-3xl font-bold">All Products</h1>
          <AllProducts/>
          {/* </div> */}
        </main>
    </section>
  )
}
