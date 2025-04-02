import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow h-full flex flex-col">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h2 className="text-lg font-semibold mt-2 flex-grow">{product.title}</h2>

          {/* Price and Button stay at the bottom */}
          <div className="mt-auto">
            <p className="text-green-600 font-bold">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full hover:bg-blue-700 transition-all duration-400 ease-in-out" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
