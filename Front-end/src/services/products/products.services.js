import { axiosInstance } from "@/axios/axios"

export const addProduct = async(data) => {
    console.log(data)
    try {
        const res = await axiosInstance.post("/productCreate", data);
        // if(res.status === 200){
        //     const cache = await caches.open('product-cache');
        //     await cache.delete("/getProducts");
        // }
        return res
    } catch (error) {
        return error
    }
}
export const getProducts = async () =>{
    try {
        const res = await axiosInstance.get("/getProducts");
        return res
    } catch (error) {
        return error
    }
}

export const editProduct = async(data, id) => {
    try {
        const res = await axiosInstance.put(`/ProductUpdate/${id}`, data);
        return res
    } catch (error) {
        return error
    }
}

export const delProduct = async(id) => {
    try {
        const res = await axiosInstance.delete(`/ProductDelete/${id}`);
        return res
    } catch (error) {
        return error
    }
}

export const getProductById = async(id) => {
    try {
        const res = await axiosInstance.get(`/getProductDetails/${id}`);
        return res
    } catch (error) {
        return error
    }
}