"use client";
import { getProducts } from "@/services/products/products.services";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loader/loaderSlice";
import { setProducts  } from "@/redux/product/productSlice";
export default function useGetProduct() {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
   const cacheKey = '/getProducts'
  useEffect(()=>{
    const fetchProduct = async () => {
        dispatch(showLoader());
        try {
            const cache = await caches.open('product-cache');
            const cacheResponse = await cache.match(cacheKey);
            if(cacheResponse) {
                const cacheData = await cacheResponse.json();
                setAllProducts(cacheData);
                // dispatch(setProducts(cacheData));
            }else{
                const result = await getProducts();
                if (result.status === 200) {
                    dispatch(hideLoader());
                    const data = result.data.data;
                    await cache.put(cacheKey, new Response(JSON.stringify(data)));
                    setAllProducts(data);
                    // dispatch(setProducts(data));
                }
            }
          } catch (error) {
            console.error(error);
          } finally {
            dispatch(hideLoader());
          } 
    }

    fetchProduct();
  },[ ])

    // Function to update the product list
    const updateAllProducts = (updatedProducts) => {
      setAllProducts(updatedProducts); // Update the allProducts state when products are edited
    };

  return {
    allProducts,
    updateAllProducts,
  };
}
