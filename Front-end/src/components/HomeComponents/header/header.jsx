"use client";
import { FaAlignLeft, FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import HeaderDrawer from "./drawer";
import { useState } from "react";
import HeaderSearchBar from "./HeaderSearchBar";
import Cart from "../cart/cart";
import AuthSidebar from "../userAuth/AuthSidebar";
export default function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {showSearch ? <HeaderSearchBar setShowSearch={setShowSearch} /> : null}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <FaAlignLeft
              className="h-6 w-6 cursor-pointer text-gray-700 hover:text-primary transition-transform transform hover:scale-110"
              onClick={() => setDrawerVisible(true)}
            />
          </div>
          {/* Brand Logo */}
          <Link href="/" className="text-2xl font-bold text-primary hover:text-blue-600 transition duration-300 ease-in-out">
            TechHub
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link  href="/shop/products" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
            Shop
          </Link>
          <Link href={`/shop/products?category=${"smartphones"}`} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
            SmartPhones
          </Link>
          <Link href={`/shop/products?category=${"laptops"}`} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
            Laptops
          </Link>
        </nav>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div onClick={() => setShowSearch(!showSearch)}>
            <FaSearch className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer" />
          </div>
          <div onClick={handleCart}>
            <FaShoppingCart className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer" />
          </div>
          <div onClick={() => setShowForm(!showForm)}>
            <FaUserCircle className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <HeaderDrawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
      {showCart ? <Cart showCart={showCart} setShowCart={setShowCart}/> : null }
      {showForm ? <AuthSidebar showForm={showForm} setShowForm={setShowForm}/> : null}
    </header>
  );
}
