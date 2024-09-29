"use client";
import Loader from "@/components/loader/loader";
import editProductHook from "@/customHooks/productHooks/editProductHook";
import useSearchHook from "@/customHooks/productHooks/useSearchHook";
import { useSelector } from "react-redux";
import EditProduct from "../components/editProduct";

export default function ProductsList() {
  const { isLoading } = useSelector((state) => state.loader);
  const { isProducts } = useSelector((state) => state.product);
  const { filteredProducts, query, handleSearch } = useSearchHook();
  const {showModal, handleEditClick, handleCloseClick, handleSaveClick} = editProductHook();
  return (
    <div className="flex items-center justify-center mt-14 bg-gray-100 p-2">
      <div className="p-4 space-y-5 bg-white rounded-lg shadow-md w-[70%] ml-64">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Product List</h2>

        {/* Search Bar (No Sticky) */}
        <div className="">
          <div className="flex flex-col sm:flex-row flex-wrap sm:space-y-0 items-center justify-between">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <input
                value={query}
                onChange={(e) => handleSearch(e)}
                type="text"
                id="table-search"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Search for items"
              />
            </div>
          </div>
        </div>

        {/* Scrollable Table with Fixed Header */}
        <div className="max-h-[380px] overflow-y-auto">
          <table className="min-w-full rounded-md text-sm text-left text-gray-500 bg-white">
            <thead className="bg-gray-800 text-white">
              <tr className="sticky top-0 z-10">
                <th scope="col" className="px-6 py-3 border-b border-gray-300 bg-gray-800">Product Name</th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300 bg-gray-800">Quantity</th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300 bg-gray-800">Category</th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300 bg-gray-800">Price</th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300 bg-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    <div className="flex justify-center items-center">
                      <Loader />
                    </div>
                  </td>
                </tr>
              ) : (
                isProducts.length > 0 ? isProducts.map((product, index) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {product.productName}
                    </th>
                    <td className="px-6 py-4">{product.quantity}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">${product.price.cost}</td>
                    <td className="px-6 py-4">
                    <a  className="cursor-pointer font-medium text-blue-600 hover:underline"
                    onClick={() => handleEditClick(product)}>Edit</a>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">No products available.</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <EditProduct showModal={showModal} 
      handleCloseClick={handleCloseClick} handleSaveClick={handleSaveClick}/>
    </div>
  );
}
