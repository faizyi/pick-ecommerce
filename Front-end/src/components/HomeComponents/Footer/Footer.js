import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-100 py-6 relative">
      <div className="container mx-auto px-4">
        {/* Top Section: Links */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-blue-600 transition duration-300 ease-in-out">
            TechHub
          </Link>
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-blue-500 transition duration-300 ease-in-out">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-500 transition duration-300 ease-in-out">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-500 transition duration-300 ease-in-out">
              SmartPhones
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-500 transition duration-300 ease-in-out">
              Laptops
            </Link>
          </nav>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
              <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
              <FaInstagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {date} TechHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
