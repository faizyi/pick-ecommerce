"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
export default function editModalHook() {
    const { isEditProduct } = useSelector((state) => state.editProduct);
    const [formData, setFormData] = useState({
      productName: '',
      price: {
        op: '',
        discount: ''
      },
      category: '',
      subcategory: '',
      // productImage: '',
      description: '',
      quantity: ""
      });
    
      useEffect(() => {
        if (isEditProduct) {
          setFormData({
            productName: isEditProduct.productName || "",
            quantity: isEditProduct.quantity || "",
            category: isEditProduct.category || "",
            subcategory: isEditProduct.subcategory || "",
            description: isEditProduct.description || "",
            price: {
              op: isEditProduct.price?.op || "",
              discount: isEditProduct.price?.discount || ""
            }
          });
        }
      }, [isEditProduct]);
      const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
      }
  return {
    formData,
    handleChange,
    setFormData
  }
}
