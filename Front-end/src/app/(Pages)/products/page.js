"use client"
import React, { useState } from 'react';
import Pagination from './pagination';
import Sidebar from '@/components/productPage/sidebar';
const products = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 100) + 10,
  image: `https://via.placeholder.com/300?text=Product+${index + 1}`,
}));
export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const currentProducts = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar/>
      {/* Product Listing */}
      <div className="ml-64 w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <Pagination current={currentPage} total={products.length} pageSize={pageSize} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  )
}
