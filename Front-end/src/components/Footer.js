"use client"
import { Layout, Divider } from 'antd';
import Link from 'next/link';
const { Footer : AntFooter } = Layout;
export default function Footer() {
  return (
    <AntFooter className="shadow bg-black">
      <div className="w-full">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link href="products" className="hover:underline me-4 md:me-6">Men</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">T-Shirts</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Shoes</Link>
            </li>
          </ul>
        </div>

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="/" className="hover:underline">Shopping™</a>. All Rights Reserved.
        </span>
      </div>
    </AntFooter>
  )
}
