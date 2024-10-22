"use client"
import { useParams } from 'next/navigation'
import DetailProduct from '@/components/DetailProduct.js/DetailProduct';
export default function page() {
    const params = useParams()
    const {productId} = params
  return (
    <DetailProduct productId={productId}/>
  )
}
