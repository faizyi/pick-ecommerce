import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center
     px-4 md:px-6 border-t">
    <p className="text-xs text-gray-500">© {date} My Store. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <Link className="text-xs hover:underline underline-offset-4" href="#">
        Home
      </Link>
      <Link className="text-xs hover:underline underline-offset-4" href="#">
        Shop
      </Link>
    </nav>
    <div className="flex items-center space-x-4">
      <Link href="#" className="text-gray-500 hover:text-gray-900">
        <FaFacebookF className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-900">
        <FaTwitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-900">
        <FaInstagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  </footer>
  );
}
