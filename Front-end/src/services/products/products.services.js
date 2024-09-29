import { axiosInstance } from "@/axios/axios"

export const addProduct = async(data) => {
    try {
        const res = await axiosInstance.post("/productCreate", data);
        if(res.status === 200){
            const cache = await caches.open('product-cache');
            await cache.delete("/getProducts");
        }
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