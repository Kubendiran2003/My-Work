import React from "react";
import ProductList from "../components/ProductList";

const HomePage = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="mt-16">
      <ProductList
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default HomePage;