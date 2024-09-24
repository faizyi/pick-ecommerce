"use client";
import addproductHook from '@/customHooks/adminHooks/addproductHook';
import React, { useState } from 'react';
export default function AddProduct() {
  const { product, handleChange, handleSubmit } = addproductHook();
  return (
    <div className="flex items-center justify-center mt-14 bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-white rounded-lg shadow-md w-[70%] ml-64">
        <h2 className="text-2xl font-bold text-center text-gray-700">Add Product</h2>
        
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Price</label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="number"
                name="price.op"
                value={product.price.op}
                onChange={handleChange}
                required
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Original Price"
              />
            </div>
            <div>
              <input
                type="number"
                name="price.cost"
                value={product.price.cost}
                onChange={handleChange}
                required
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Cost Price"
              />
            </div>
            <div>
              <input
                type="number"
                name="price.discount"
                value={product.price.discount}
                onChange={handleChange}
                required
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Discount"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter category"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Subcategory</label>
          <input
            type="text"
            name="subcategory"
            value={product.subcategory}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter subcategory"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Product Image URL</label>
          <input
            type="url"
            name="productImage"
            value={product.productImage}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Enter product description"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter quantity"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
