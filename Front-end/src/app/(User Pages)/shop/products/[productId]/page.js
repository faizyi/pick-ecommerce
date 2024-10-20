"use client"
import React from 'react'
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
export default function page() {
    const params = useParams()
    const {productId} = params
    console.log(productId)
  return (
    <div className="font-sans tracking-wide max-w-7xl mx-auto">
      <div className="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div className="h-full">
          <div className="p-4 relative h-full flex items-center justify-center">
            <Image
            //   src="https://readymadeui.com/images/laptop2.webp"
              alt="Product"
              width={600}
              height={400}
              className="lg:w-4/5 w-full h-full rounded-xl object-contain"
            />

            <div className="flex items-center justify-center gap-3 absolute md:bottom-6 bottom-0 left-0 right-0 mx-auto">
              <div className="w-3.5 h-3.5 shrink-0 rounded-full bg-gray-300 cursor-pointer"></div>
              <div className="w-3.5 h-3.5 shrink-0 rounded-full bg-blue-600 cursor-pointer"></div>
              <div className="w-3.5 h-3.5 shrink-0 rounded-full bg-gray-300 cursor-pointer"></div>
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 py-6 px-8 h-full">
          <div>
            <h2 className="text-3xl font-semibold text-white">Acer Aspire Pro 12</h2>
            <p className="text-sm text-gray-400 mt-2">Well-Versed Commerce</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-between mt-8">
            <h3 className="text-white text-4xl">$730</h3>

            {/* Star Rating */}
            <div className="flex space-x-2">
              <AiFillStar className="w-5 text-yellow-400" />
              <AiFillStar className="w-5 text-yellow-400" />
              <AiFillStar className="w-5 text-yellow-400" />
              <AiFillStar className="w-5 text-yellow-400" />
              <AiFillStar className="w-5 text-gray-300" />
            </div>
          </div>

          <div>
            <ul className="grid grid-cols-3 mt-8">
              <li className="text-white text-base w-full py-3.5 px-2 text-center border-b-2 border-white cursor-pointer">
                Description
              </li>
              <li className="text-gray-300 text-base w-full py-3.5 px-2 text-center border-b-2 border-gray-400 cursor-pointer">
                Details
              </li>
              <li className="text-gray-300 text-base w-full py-3.5 px-2 text-center border-b-2 border-gray-400 cursor-pointer">
                Reviews
              </li>
            </ul>
            <p className="text-gray-300 mt-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Quantity Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">Quantity</h3>

            <div className="flex mt-4 rounded-full overflow-hidden bg-gray-800 py-2.5 px-4 w-32">
              <button type="button" className="bg-transparent w-full text-white font-semibold flex items-center justify-center">
                <AiOutlineMinus className="w-3" />
              </button>
              <span className="bg-transparent w-full px-4 font-semibold flex items-center justify-center text-white text-base">
                1
              </span>
              <button type="button" className="bg-transparent w-full text-white font-semibold flex items-center justify-center">
                <AiOutlinePlus className="w-3" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button type="button" className="min-w-[200px] px-4 py-3.5 bg-gray-800 hover:bg-gray-900 text-white text-base rounded">
              Buy now
            </button>
            <button type="button" className="min-w-[200px] px-4 py-3.5 border border-gray-800 bg-transparent text-white text-base rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
