"use client"
import React, { useEffect, useState } from 'react'
import useGetProduct from './useGetProduct'
import { useDispatch} from "react-redux";
import { setProducts } from '@/redux/product/productSlice';
export default function useSearchHook() {
    const dispatch = useDispatch();
    const {products} = useGetProduct();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        setFilteredProducts(products)
        dispatch(setProducts(products))
    }, [products]);
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setQuery(value);
        if(value.length > 0){
            const serachProduct = products ? products.filter(product => product.productName.toLowerCase().includes(value.toLowerCase()))
            : [];
            dispatch(setProducts(serachProduct));
            setFilteredProducts(serachProduct);
        }else{
            setFilteredProducts(products);
            dispatch(setProducts(products));
        }
    }
  return {
    filteredProducts,
    query,
    handleSearch
  }
}
