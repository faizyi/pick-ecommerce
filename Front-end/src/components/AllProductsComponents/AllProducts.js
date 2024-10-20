"use client";
import useGetProduct from '@/customHooks/productHooks/useGetProduct';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export const metadata={
  title : "Products"
}
export default function AllProducts({ selectedSubcategories }) {
  const { allProducts } = useGetProduct();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  useEffect(() => {
    if (selectedSubcategories.length > 0) {
      const filtered = allProducts.filter((product) =>
        selectedSubcategories.includes(product.subcategory)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [selectedSubcategories, allProducts]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
      <Link href={`/shop/products/${product._id}`} key={index}>
       <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer 
       relative hover:before:bg-black before:absolute before:inset-0 before:opacity-20 
       before:transition-all">
       <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
         <img
           src={product.productImage}
           alt="product1"
           className="h-full w-full object-contain"
         />
       </div>
     
       <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white 
       w-11/12 p-3 rounded-lg transition-all duration-300">
         <div className="text-center">
           <h3 className="text-base font-bold text-gray-800">{product.productName}</h3>
           <h4 className="text-lg text-blue-600 font-bold mt-2">${product.price.op}</h4>
         </div>
       </div>
     </div>
     </Link>
     
      )) : (
        <div className="text-center w-full">No products available</div>
      )}
    </div>
  );
}
