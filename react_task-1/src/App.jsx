import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartModal from "./CartModal";




const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar cartCount={cart.length} openCart={() => setIsModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal isOpen={isModalOpen} closeCart={() => setIsModalOpen(false)} cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
};

export default App;
