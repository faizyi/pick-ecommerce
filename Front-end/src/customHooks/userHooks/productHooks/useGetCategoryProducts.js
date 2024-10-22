import React, { useEffect, useState } from 'react';

export default function useGetCategoryProducts(allProducts, category, selectedSubcategories) {
  const cacheKey = '/getProducts';
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchAndCacheProducts = async () => {
      const cache = await caches.open('product-cache');

      const cacheResponse = await cache.match(cacheKey);

      if (cacheResponse) {
        // If cache exists, use the cached data
        const cachedData = await cacheResponse.json();
        filterAndSetProducts(cachedData);
      } else {
        // Otherwise, use the allProducts and store them in cache
        await cache.put(cacheKey, new Response(JSON.stringify(allProducts)));
        filterAndSetProducts(allProducts);
      }
    };

    // Filter and set products based on category or subcategories
    const filterAndSetProducts = (products) => {
      if (category) {
        const filtered = products.filter((product) =>
          product.category.toLowerCase() === category.toLowerCase()
        );
        setFilteredProducts(filtered);
      } else if (selectedSubcategories.length > 0) {
        const filtered = products.filter((product) =>
          selectedSubcategories.includes(product.subcategory)
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    };

    if (allProducts.length > 0) {
      fetchAndCacheProducts();
    }
  }, [category, allProducts, selectedSubcategories]);

  return {
    filteredProducts
  };
}
