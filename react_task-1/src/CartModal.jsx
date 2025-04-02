import React from "react";

const CartPopup = ({ isOpen, closeCart, cart, removeFromCart }) => {
  if (!isOpen) return null; // Hide when modal is closed

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 w-96 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-xl font-bold mb-4 text-center">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {/* Scrollable Cart Items */}
            <div className="max-h-60 overflow-y-auto space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div className="flex items-center space-x-2">
                    <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                    <div>
                      <span className="text-sm font-medium">{item.title}</span>
                      <p className="text-green-600 text-sm font-bold">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button 
                    className="hover:shadow-md hover:bg-red-200 transition-all duration-300 ease-in-out" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>

            {/* Display Total Price */}
            <div className="pt-2 flex justify-between text-lg font-bold mt-2">
              <span>Total:</span>
              <span className="text-green-600">${totalPrice}</span>
            </div>
          </>
        )}

        {/* Action Buttons (Always Visible) */}
        <div className="mt-4 flex justify-between">
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded w-1/2 mr-2 hover:bg-gray-700 transition-all duration-300 ease-in-out" 
            onClick={closeCart}
          >
            Close
          </button>

          <button 
            className={`px-4 py-2 rounded w-1/2 ml-2 transition-all duration-300 ease-in-out ${
              cart.length === 0 
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"  // Disabled style
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
            disabled={cart.length === 0} // Disable button when cart is empty
            onClick={() => cart.length > 0 && alert('Proceeding to checkout!')} // Prevent click if empty
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
