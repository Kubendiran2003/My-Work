# Recipe App Frontend

This is the frontend of the **Recipe App**, a web application for managing recipes. The app allows users to view, add, edit, and delete recipes. It is built using **React** and styled with **Tailwind CSS**.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

---

## Features

- **Home Page**: Displays a list of all recipes.
- **Add/Edit Recipe**: Add new recipes or edit existing ones.
- **Recipe Details**: View detailed information about a recipe.
- **Delete Recipe**: Remove recipes from the list.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Project Structure

```
recipes-app-frontend/
├── build/                # Production build files
├── public/               # Static files (e.g., favicon, manifest)
├── src/                  # Source code
│   ├── api.js            # API integration with the backend
│   ├── App.js            # Main application component
│   ├── pages/            # Page components (Home, AddEditRecipe, RecipeDetails)
│   ├── components/       # Reusable components (e.g., RecipeForm)
│   ├── styles/           # Custom CSS or Tailwind configurations
│   └── index.js          # Entry point of the application
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Kubendiran2003/My-Work/tree/957f36607af60b978994e26aa35ac258034502b8/NodeJs-Task-1/recipes-app-frontend
   cd recipes-app-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.

---

## API Integration

The frontend communicates with a Node.js + Express backend via RESTful API endpoints.
Make sure the backend server is running and accessible at the correct base URL (e.g., `http://localhost:5000/api/recipes`).

---

## Deployment

To deploy the frontend with the backend:

1. Build the frontend:
   ```bash
   npm run build
   ```
2. Serve the `/build` folder using Express in the backend.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript (ES6+)**: Modern JavaScript features.

