"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEditProduct } from '@/redux/product/editProductSlice';
export default function editProductHook() {
  const { isEditProduct } = useSelector((state) => state.editProduct);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const handleEditClick = (product) =>{
        setShowModal(true);
        dispatch(setEditProduct(product));
    }
    const handleCloseClick = () =>{
        setShowModal(false);
    }
    const handleSaveClick = (updatedProduct) =>{
        console.log(updatedProduct)
        console.log(isEditProduct)
    }
  return {
    showModal,
    handleEditClick,
    handleCloseClick,
    handleSaveClick
  }
}
