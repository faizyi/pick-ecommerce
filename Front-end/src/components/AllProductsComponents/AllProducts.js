import React from 'react';
import Image from 'next/image';

const products = [
  { id: 1, name: "iPhone 13 Pro", price: 999, rating: 4.8, category: "Smartphones", subcategory: "iOS", imageSrc: "/heroImages/iphone13pro.png" },
  { id: 2, name: "Samsung Galaxy S21", price: 799, rating: 4.7, category: "Smartphones", subcategory: "Android", imageSrc: "/heroImages/galaxys21.png" },
  { id: 3, name: "Google Pixel 6", price: 699, rating: 4.6, category: "Smartphones", subcategory: "Android", imageSrc: "/heroImages/pixel6.png" },
  { id: 4, name: "iPad Air", price: 599, rating: 4.8, category: "Tablets", subcategory: "iPads", imageSrc: "/heroImages/ipadair.png" },
  { id: 5, name: "Samsung Galaxy Tab S7", price: 649, rating: 4.5, category: "Tablets", subcategory: "Android Tablets", imageSrc: "/heroImages/tabS7.png" },
  { id: 6, name: "AirPods Pro", price: 249, rating: 4.7, category: "Accessories", subcategory: "Headphones", imageSrc: "/heroImages/airpodspro.png" },
  { id: 7, name: "OnePlus 9 Pro", price: 899, rating: 4.5, category: "Smartphones", subcategory: "Android", imageSrc: "/heroImages/oneplus9pro.png" },
  { id: 8, name: "Xiaomi Mi 11", price: 749, rating: 4.4, category: "Smartphones", subcategory: "Android", imageSrc: "/heroImages/mi11.png" },
  { id: 9, name: "Microsoft Surface Pro", price: 999, rating: 4.6, category: "Tablets", subcategory: "Windows Tablets", imageSrc: "/heroImages/surfacepro.png" },
  { id: 10, name: "Sony WH-1000XM4", price: 349, rating: 4.8, category: "Accessories", subcategory: "Headphones", imageSrc: "/heroImages/sonywh1000xm4.png" },
  { id: 11, name: "Anker PowerCore", price: 49, rating: 4.7, category: "Accessories", subcategory: "Chargers", imageSrc: "/heroImages/ankerpowercore.png" },
  { id: 12, name: "OtterBox Defender", price: 59, rating: 4.5, category: "Accessories", subcategory: "Cases", imageSrc: "/heroImages/otterboxdefender.png" },
];

export default function AllProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {products.map((product) => (
        <div key={product.id} className="rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-58 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            {/* <p className="text-gray-600 mb-4">Rating: {product.rating}</p> */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">${product.price}</span>
              <button className="bg-black text-white px-4 py-2 rounded-lg">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
