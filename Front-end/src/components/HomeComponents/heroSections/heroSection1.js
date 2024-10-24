import Image from "next/image";
export default function HeroSection1() {
  return (
    <section className="bg-black text-gray-900 py-16 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left content: Text */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl text-white md:text-6xl font-extrabold mb-4 leading-tight tracking-wide">
            Discover the Latest Smartphones & Laptops
          </h1>
          <p className="text-lg text-white md:text-xl font-medium leading-relaxed">
            Find your perfect mobile companion with our wide selection of cutting-edge devices.
          </p>
          <button
            className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg 
            hover:shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            size="lg"
          >
            Shop Now
          </button>
        </div>
        {/* Right content: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/heroImages/phones.png"
              alt="Latest Smartphone"
              width={450}
              height={450}
              className="transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}