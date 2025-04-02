# 🛍️ Fake Store - React Shopping Cart

This project is a **ReactJS-based shopping app** that fetches product data from the **Fake Store API** and allows users to add items to a shopping cart. The cart is displayed in a modal for a seamless shopping experience.

## ✨ Features
✔️ Fetches products dynamically from the **Fake Store API**  
✔️ Displays products in a **grid layout**  
✔️ Allows users to **add/remove** items from the cart  
✔️ Shopping cart appears in a **modal popup**  
✔️ Calculates and displays **total price**  
✔️ Fully **responsive** and **interactive UI**  

## 🔧 How It Works
1. **Fetch Products:**  
   - When the app loads, it fetches product data from the Fake Store API using `useEffect`.  
2. **Display Products:**  
   - Products are displayed in a neat **grid format**, each with an "Add to Cart" button.  
3. **Cart Management:**  
   - Clicking "Add to Cart" adds the product to a cart stored in state.  
   - Clicking ❌ removes items from the cart.  
4. **Cart Modal:**  
   - The cart appears as a **modal popup** when clicked.  
   - It shows the selected products, total price, and action buttons (Close & Buy Now).  
5. **Checkout (Placeholder):**  
   - The "Buy Now" button is a placeholder for further integration (e.g., payments).  


## 🚀 Implementation Details
- **React Hooks** (`useState`, `useEffect`) are used for state and data fetching.
- **Tailwind CSS** is used for styling.
- The **cart state** is managed using `useState`.
- The **modal (CartModal.jsx)** is conditionally rendered based on `isOpen` state.
- **Local storage** can be added for cart persistence.
- **Further enhancements** can include authentication, payments, and backend integration.

## 🔄 How to Pull the Project
To get the latest version of the project, follow these steps:

1. Open your terminal and navigate to the project folder.
2. Run the following command to fetch the latest changes:
   ```sh
   git pull origin main
   ```
   (Replace `main` with the appropriate branch name if necessary.)

## 🛠️ How to Run the Project
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd fake-store-react
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

This simple yet functional e-commerce UI gives users a smooth shopping experience with a clean, modern interface. 🚀

