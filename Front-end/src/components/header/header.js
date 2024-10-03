'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { Button, Drawer } from 'antd'
import Categories from './categories'
export default function Component() {
  const [cartItems, setCartItems] = useState(3)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const showDrawer = () => setDrawerVisible(true)
  const closeDrawer = () => setDrawerVisible(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <AiOutlineShoppingCart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">EShop</span>
          </Link>

          {/* Categories Dropdown */}
          <Categories/>

          {/* Navigation Links */}
          <nav className="hidden lg:flex space-x-4">
            <Link href="/new-arrivals" className="text-gray-700 hover:text-blue-600">New Arrivals</Link>
            <Link href="/deals" className="text-gray-700 hover:text-blue-600">Deals</Link>
            <Link href="/customer-service" className="text-gray-700 hover:text-blue-600">Customer Service</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-4">
            <form className="w-full">
              <div className="relative">
                <AiOutlineSearch className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 pr-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </form>
          </div>

          {/* Cart and Login */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart Button */}
            <div className="relative">
              <button className="relative text-gray-700 hover:text-blue-600">
                <AiOutlineShoppingCart className="h-6 w-6" />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </div>
              </button>
            </div>

            {/* Login Button */}
            <button className="hidden sm:flex items-center text-gray-700 hover:text-blue-600">
              <AiOutlineUser className="mr-2 h-4 w-4" />
            </button>

            {/* Mobile Login Button */}
            <button className="sm:hidden text-gray-700 hover:text-blue-600">
              <AiOutlineUser className="h-6 w-6" />
              <span className="sr-only">User Account</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" className="lg:hidden text-gray-700 hover:text-blue-600" onClick={showDrawer}>
            <AiOutlineMenu className="w-6 h-6" />
            <span className="sr-only">Open menu</span>
          </button>

          {/* Mobile Drawer */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={closeDrawer}
            open={drawerVisible}
            className="lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/new-arrivals" onClick={closeDrawer} className="text-gray-700 hover:text-blue-600">
                New Arrivals
              </Link>
              <Link href="/deals" onClick={closeDrawer} className="text-gray-700 hover:text-blue-600">
                Deals
              </Link>
              <Link href="/customer-service" onClick={closeDrawer} className="text-gray-700 hover:text-blue-600">
                Customer Service
              </Link>
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                <AiOutlineUser className="mr-2 h-4 w-4" /> Login
              </button>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
