import React from "react";

const Product = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((product) => (
            <div
              key={product}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
            >
              <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">Product {product}</h2>
              <p className="text-gray-600 mb-4">
                High-quality product description
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$99.99</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
