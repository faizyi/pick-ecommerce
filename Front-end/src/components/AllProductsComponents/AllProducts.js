"use client";
import useGetProduct from '@/customHooks/productHooks/useGetProduct';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import useGetCategoryProducts from '@/customHooks/userHooks/productHooks/useGetCategoryProducts';
import { FaStar } from 'react-icons/fa';
export const metadata = {
  title: "Products"
};
export default function AllProducts({ selectedSubcategories }) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const { allProducts } = useGetProduct();
  const { filteredProducts } = useGetCategoryProducts(allProducts, category, selectedSubcategories);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
      {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
        <Link href={`/shop/products/${product._id}`} key={index}>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group relative h-[450px]"> {/* Fixed height */}
            
            {/* Product Image */}
            <div className="w-full h-[60%] bg-white flex justify-center items-center overflow-hidden">
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-2 h-[40%] flex flex-col justify-between">
              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {product.productName}
              </h3>

              {/* Price */}
              <div className="text-xl font-bold text-blue-600">
                ${product.price.op}
              </div>

              {/* Ratings (Optional) */}
              <div className="flex items-center space-x-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-300" /> {/* Example: 4 out of 5 stars */}
                <span className="text-gray-600 text-sm">(120)</span> {/* Review count */}
              </div>

              {/* Add to Cart or Action Button */}
              <button className="w-full bg-blue-600 text-white py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      )) : (
        <div className="text-center w-full text-gray-500">No products available</div>
      )}
    </div>
  );
}
