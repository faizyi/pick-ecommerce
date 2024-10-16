import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function HeaderSearchBar({ setShowSearch }) {
  return (
    <div className="absolute top-0 left-0 w-full bg-white p-2 shadow-lg z-50">
      <div className="relative flex items-center">
        {/* Search Input */}
        <input
          type="text"
          className="w-full py-3 px-5 rounded-full border border-gray-300 focus:outline-none 
           bg-gray-100 placeholder-gray-500 text-gray-700"
          placeholder="Search for products, brands, and more..."
          autoFocus
        />

        {/* Close Button */}
        <button
          onClick={() => setShowSearch(false)}
          className="absolute bg-gray-100 top-1/2 transform -translate-y-1/2 right-4 text-gray-600
           hover:text-red-500 transition-colors duration-300"
        >
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
