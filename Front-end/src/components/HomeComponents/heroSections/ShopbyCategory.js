import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function ShopbyCategory() {
  return (
    <section className="w-full py-12 md:py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Electronics", "Clothing", "Home & Garden"].map((category) => (
            <div key={category} className="bg-white shadow-md rounded-lg overflow-hidden transform 
            hover:scale-105 transition duration-300">
              <div className="relative">
                <Image
                  alt={`${category} category`}
                  className="object-cover w-full h-full"
                  height={300}
                  src={`/placeholder.svg?height=300&width=400`}
                  width={400}
                />
              </div>
              <div className="p-6">
                <h1 className="text-xl font-semibold mb-2">{category}</h1>
                <p className="text-sm text-gray-600 mb-4">Explore our wide range of
                     {category.toLowerCase()} products.</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md text-sm
                   font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 
                   focus-visible:ring-primary hover:bg-primary/90 bg-primary bg-black text-white px-4 py-2"
                >
                  Shop {category}
                  <FaChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
