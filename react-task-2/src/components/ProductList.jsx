import React from "react";

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
      {products.map((product) => {
        const isInCart = cart.some((item) => item.id === product.id);
        
        return (
          <div key={product.id} className="border p-4 rounded shadow h-full flex flex-col">
            <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
            <h2 className="text-lg font-semibold mt-2 flex-grow">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
            
            <button
              className={`px-4 py-2 cursor-pointer rounded mt-2 w-full transition-all duration-300 ease-in-out ${
                isInCart
                  ? "bg-red-500 hover:bg-red-700 text-white"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              }`}
              onClick={() => {
                if (isInCart) {
                  removeFromCart(product.id);
                } else {
                  addToCart(product);
                }
              }}
            >
              {isInCart ? "- Remove from Cart" : "+ Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;