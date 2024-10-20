"use client";
import addproductHook from '@/customHooks/productHooks/addproductHook';
import React from 'react';
import ProductImage from './productImage';
import { useSelector } from 'react-redux';
import Loader from '@/components/loader/loader';

export default function AddProduct() {
  const { isLoading  } = useSelector((state) => state.loader);
  const { bgP, color } = useSelector((state) => state.mode);
  const { product, handleChange, handleSubmit, handleImageChange } = addproductHook();
  return (
    <div className={`
      ${bgP === "slate-950" ? "bg-slate-950" : "bg-gray-200"}
    flex items-center justify-center mt-5 sm:ml-64 py-12 px-4 sm:px-6 lg:px-8`}>
      {isLoading ? (
        <div className="flex justify-center flex-col items-center mt-64">
          <Loader />
          <p className={`text-${color}`}>Product is being added.....</p>
        </div>
      ) : (
        <div className="w-full max-w-full sm:max-w-4xl space-y-8 
        rounded-lg shadow-lg">
          <div className={`p-10 bg-${bgP} 
          ${bgP === "slate-950" ? "border border-gray-300" : "shadow-lg"} rounded-lg text-${color}`}>
            <h2 className={`text-3xl font-extrabold text-center`}>Add New Product</h2>
            <p className="mt-2 text-center text-sm">
              Fill in the details to add a new product to your inventory.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div>
                <label className="block text-sm font-medium">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  value={product.productName}
                  onChange={handleChange}
                  required
                  className={`bg-${bgP} capitalize mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Price</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="number"
                      name="price.op"
                      value={product.price.op}
                      onChange={handleChange}
                      required
                      className={`bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="Original Price"
                    />
                  </div>
                  {/* <div>
                    <input
                      type="number"
                      name="price.cost"
                      value={product.price.cost}
                      onChange={handleChange}
                      required
                      className={`bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
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
                      className={`bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="Discount"
                    />
                  </div> */}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Category</label>
                <input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  required
                  className={`capitalize bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter category"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Subcategory</label>
                <input
                  type="text"
                  name="subcategory"
                  value={product.subcategory}
                  onChange={handleChange}
                  required
                  className={`capitalize bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter subcategory"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Product Image</label>
                <ProductImage handleImageChange={handleImageChange} />
                {/* {product.image && (
                  <div className="mt-4">
                    <img
                      src={URL.createObjectURL(product.image)}
                      alt="Product Preview"
                      className="h-32 w-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )} */}
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                  className={`capitalize bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  rows="4"
                  placeholder="Enter product description"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                  required
                  className={`bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isLoading ? 'Adding...' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
