import Image from "next/image"
import Link from "next/link"
export default function FeaturedProductsSection() {
  return (
    <section className="w-full py-12 md:py-12 lg:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4,].map((i) => (
                <div key={i} className="rounded-lg bg-white shadow-md overflow-hidden transition-transform 
                hover:scale-105">
                  <Image
                    src={`/heroImages/FP.png`}
                    alt={`Featured Phone ${i}`}
                    width={400}
                    height={400}
                    className="w-full h-58 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Smartphone Model {i}</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">$999</span>
                      <button className="bg-black text-white px-4 py-2 rounded-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
