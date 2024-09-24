import React from 'react';

export default function ProductsList() {
  return (
    <div className="flex items-center justify-center mt-14 bg-gray-100 p-6">
      <div className="p-8 space-y-5 bg-white rounded-lg shadow-md w-[70%] ml-64">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Product List</h2>
        <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <input 
              type="text" 
              id="table-search" 
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" 
              placeholder="Search for items" 
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Icon can be added here if needed */}
            </div>
          </div>
        </div>

        <table className="min-w-full rounded-md text-sm text-left text-gray-500 bg-white">
          <thead className="text-xs text-white bg-gray-800 ">
            <tr>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">Product Name</th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">Color</th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">Category</th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">Price</th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{'Apple MacBook Pro 17"'}</th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
