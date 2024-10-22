import useDeatilsProduct from '@/customHooks/userHooks/productHooks/useDeatilsProduct'
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
export default function DetailProduct({productId}) {
    console.log(productId)
    const {detailProduct} = useDeatilsProduct(productId);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="flex items-center space-x-4 mb-8">
        <Link href="/shop/products">
        <FaArrowLeft 
            className="w-6 h-6 cursor-pointer text-slate-700 hover:text-slate-900"
            // onClick={handleGoBack}
        />
        </Link>
        <h1 className="text-4xl font-extrabold text-slate-900">Product Detail Page</h1>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center overflow-hidden rounded-lg bg-gray-100">
            <img
                alt="Product Image"
                className="object-cover hover:scale-105 transition duration-500 ease-in-out"
                height="400"
                src={detailProduct?.productImage}
                width="400"
            />
        </div>
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">{detailProduct?.productName}</h1>
            <p className="text-2xl font-bold">${detailProduct?.price?.op}</p>
            <p className="text-gray-600">{detailProduct?.description}</p>
            <button disabled className="w-full md:w-auto bg-slate-900 hover:bg-slate-700
                text-white font-bold py-2 px-4 rounded" size="lg">
                Add to Cart
            </button>
        </div>
    </div>
</div>
  )
}
