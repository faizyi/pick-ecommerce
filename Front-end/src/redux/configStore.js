"use client"
import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../../src/redux/loader/loaderSlice"
import productReducer from "../../src/redux/product/productSlice"
import editProductReducer from "../../src/redux/product/editProductSlice"
export const store = configureStore({
    reducer: {
        loader : loaderReducer,
        product : productReducer,
        editProduct : editProductReducer
    },
})