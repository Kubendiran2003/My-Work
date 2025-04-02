import React from "react";
import { Link } from "react-router-dom";
import shopp from "../assets/shopp.webp";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center shadow-md px-9 fixed top-0 left-0 w-full z-50">
      <Link to="/" className="flex items-center space-x-2">
        <h1 className="text-2xl max-[400px]:text-[18px] font-bold tracking-wide">Fake Store</h1>
        <img src={shopp} alt="Shop Logo" className="h-8 w-8 max-[400px]:w-6 object-contain drop-shadow-lg ml-1" />
      </Link>

      <Link
        to="/cart"
        className="bg-white max-[420px]:text-sm text-purple-700 px-4 py-2 max-[420px]:px-2 max-[420px]:py-[5px] rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 ease-in-out relative"
      >
        🛒 Cart
        {cartCount > 0 && (
          <span className="bg-purple-700 text-white px-2.5 py-1 max-[420px]:px-2 max-[420px]:py-[1px] rounded-full text-s ml-2">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;