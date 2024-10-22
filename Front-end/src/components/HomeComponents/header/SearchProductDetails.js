import Link from 'next/link';
export default function SearchProductDetails({ serachData, setShowSearch }) {
  return (
    <>
    <div className="absolute inset-0 bg-white overflow-y-auto p-4 mt-20">
      {serachData.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <div className="space-y-4">
            {serachData.map((product, index) => (
            <Link onClick={() => setShowSearch(false)} key={index} href={`/shop/products/${product._id}`}>
              <div
                className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg 
                 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-800">{product.productName}</h3>
                  <p className="text-gray-500">${product.price.op}</p>
                </div>
              </div>
            </Link>
            ))}
          </div>
          </div>
      ) : (
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-lg">No products found</p>
        </div>
      )}
        </div>
    </>
  );
}
