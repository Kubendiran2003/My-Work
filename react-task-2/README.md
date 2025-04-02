# React Fake Store using Router

A fully functional e-commerce web application built with React, featuring product listings, cart management, and animated interactions.

## ✨ Features

### 🚀 Core Functionality
- Product catalog from FakeStoreAPI
- Add/remove items from cart
- Quantity adjustment in cart
- Checkout process with order confirmation

### 🎨 UI/UX Highlights
- **Animated Add-to-Cart Button**  
  Visual feedback with smooth transitions
- **Interactive Cart**  
  Real-time updates with quantity controls
- **Responsive Design**  
  Works on all device sizes
- **Success Animation**  
  Delivery confirmation after checkout


## 💻 Tech Stack

- ReactJs - Core UI framework
- React Router - For navigation
- HTML/CSS & Tailwind CSS - For styling
- JavaScript - Handles dynamic functionality


## 🏗️ Project Structure
```
src/
├── assets/            # Images and static files
├── components/        # Reusable UI components
│   ├── Navbar.jsx     # Navigation bar
│   ├── ProductList.jsx # Product grid
│   └── CartModal.jsx  # Cart popup (optional)
├── pages/             # Route components
│   ├── HomePage.jsx   # Main product page
│   └── CartPage.jsx   # Cart/checkout page
├── App.jsx            # Root component
└── main.jsx           # Application entry point
```

## 🧰 Key Components

### **ProductList.jsx**
- Displays products in a responsive grid
- Toggle button between "Add/Remove from Cart"
- Animated cart interactions

```jsx
// Example of animated button
<button
  className={`cart-button ${isInCart ? 'remove' : 'add'}`}
  onClick={handleCartClick}
>
  {isInCart ? "Remove from Cart" : "Add to Cart"}
</button>
```

### **CartPage.jsx**
- Manages cart items with quantity controls
- Calculates discounts (10% off)
- Shows order confirmation on checkout

```jsx
// Example cart item
{cart.map(item => (
  <div key={item.id} className="cart-item">
    <img src={item.image} alt={item.title} />
    <div className="quantity-controls">
      <button onClick={() => updateQuantity(item.id, item.qty - 1)}>-</button>
      <span>{item.qty}</span>
      <button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>
    </div>
  </div>
))}
```

## 🧪 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI library |
| react-router-dom | ^6.14.2 | Navigation |
| axios | ^1.4.0 | API requests |
| tailwindcss | ^3.3.3 | Styling |
| vite | ^4.4.5 | Build tool |


## 📝 Notes
- Uses FakeStoreAPI for product data
- All cart state is managed in `App.jsx`
- Responsive design with a mobile-first approach
