import React from 'react'

export default function WhyChoose() {
  return (
    <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Wide Selection", description: "Choose from hundreds of the latest mobile devices." },
          { title: "Best Prices", description: "We offer competitive prices and price-match guarantee." },
          { title: "Expert Support", description: "Our knowledgeable team is here to help you make the right choice." },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
