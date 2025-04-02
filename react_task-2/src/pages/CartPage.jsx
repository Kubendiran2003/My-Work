import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  return (
    <div className="max-w-4xl mx-auto mt-20 max-[450px]:text-center">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4"
              >
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-green-600 font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button
                      className="px-3 cursor-pointer py-1 bg-gray-100 hover:bg-red-100 transition-all duration-300 ease-in-out"
                      onClick={() => updateQuantity(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      className="px-3 cursor-pointer py-1 bg-gray-100 hover:bg-green-100 transition-all duration-300 ease-in-out"
                      onClick={() => updateQuantity(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>

                  <p className="font-bold w-24 text-right">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>

                  <button
                    className="text-red-500 cursor-pointer hover:text-red-700 transition-all duration-300 ease-in-out"                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount (10%):</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-end mt-6 max-[450px]:justify-center">
              <Link
                to="/"
                className="mr-4 bg-blue-500 max-[370px]:text-[15px] text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out"
              >
                Continue Shopping
              </Link>
              <button className="bg-green-500 max-[370px]:text-[15px] text-white px-6 py-2 rounded hover:bg-green-600 transition-all duration-300 ease-in-out">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;