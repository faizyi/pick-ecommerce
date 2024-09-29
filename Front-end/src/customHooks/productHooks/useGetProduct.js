"use client";
import { getProducts } from "@/services/products/products.services";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loader/loaderSlice";
export default function useGetProduct() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
   const cacheKey = '/getProducts'
  useEffect(()=>{
    const fetchProduct = async () => {
        dispatch(showLoader());
        try {
            const cache = await caches.open('product-cache');
            const cacheResponse = await cache.match(cacheKey);
            if(cacheResponse) {
                const cacheData = await cacheResponse.json();
                setProducts(cacheData);
            }else{
                const result = await getProducts();
                if (result.status === 200) {
                    dispatch(hideLoader());
                    const data = result.data.data;
                    await cache.put(cacheKey, new Response(JSON.stringify(data)));
                    setProducts(data);
                }
            }
          } catch (error) {
            console.error(error);
          } finally {
            dispatch(hideLoader());
          } 
    }

    fetchProduct();
  },[])

  return {
    products,
  };
}
