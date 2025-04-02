import React from "react";
import shopp from "./assets/shopp.webp"; // Correctly import the image

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center shadow-md px-9 fixed top-0 left-0 w-full z-50">
      {/* Logo & Title */}
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold tracking-wide">Fake Store</h1>
        <img src={shopp} alt="Shop Logo" className="h-8 w-8 object-contain drop-shadow-lg ml-1" />
      </div>

      {/* Cart Button */}
      <button
        className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 ease-in-out relative"
        onClick={openCart}
      >
        🛒 Cart 
        {cartCount > 0 && (
          <span className="bg-purple-700 text-white px-2.5 py-1 rounded-full text-s ml-2">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
