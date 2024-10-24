"use client";
import useGetProduct from '@/customHooks/productHooks/useGetProduct';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import useGetCategoryProducts from '@/customHooks/userHooks/productHooks/useGetCategoryProducts';

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
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm 
          transition-transform hover:scale-105 cursor-pointer group relative h-[450px]"> {/* Reduced height */}
            <div className="line-clamp-2 w-full h-[55%] flex justify-center items-center overflow-hidden p-0 m-0"> {/* Adjust image container */}
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-full object-contain line-clamp-2"
              />
            </div>
            <div className="p-4 space-y-2 h-[45%] flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.productName}
              </h3>
              {/* <p className="text-sm text-gray-600">
                {product.description.slice(0, 40)}...
              </p> */}
              <div className="text-lg font-bold text-blue-600">
                ${product.price.op}
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
