"use client";
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Link from "next/link";
import { useState } from 'react';

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="bg-white text-black py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <div className='text-2xl font-bold'>
          Pick.com
          {/* <img src="/path/to/your-logo.png" alt="Logo" className="h-10" /> */}
        </div>

        {/* Center: All Categories, Search Bar, and Nav Links */}
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-blue-600 transition duration-300 ease-in-out">Home</Link>
            <Link href="/shop" className="hover:text-blue-600 transition duration-300 ease-in-out">Shop</Link>
          </nav>
          <button className="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">All Categories</button>
          <div className="relative">
            <input 
              type="text"
              placeholder="Search products..."
              className="py-2 px-4 w-64 bg-gray-100 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <FiSearch className="absolute top-3 right-3 text-gray-500" size={20} />
          </div>
        </div>

        {/* Right Side: Cart and Login */}
        <div className="flex items-center space-x-6">
          <Link href="/cart" className="flex items-center space-x-1 hover:text-blue-600 transition duration-300 ease-in-out">
            <FaShoppingCart size={20} />
            <span>Cart</span>
          </Link>
          <Link href="/login" className="flex items-center space-x-1 hover:text-blue-600 transition duration-300 ease-in-out">
            <FaUserAlt size={20} />
            <span>Login / Signup</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
