# Recipe App Backend

This is the backend of the **Recipe App**, a Node.js application using Express.js and MongoDB (via Mongoose) to manage recipe data. It follows the MVC architecture and provides a complete set of RESTful API endpoints for performing CRUD operations.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

---

## Features

- **Create Recipe**: Add new recipes to the database.
- **Get All Recipes**: Fetch a list of all recipes.
- **Get Recipe by ID**: Retrieve detailed information for a single recipe.
- **Update Recipe**: Edit an existing recipe.
- **Delete Recipe**: Remove a recipe from the database.
- **Error Handling**: Centralized error management.
- **MVC Pattern**: Clean code separation using Model-View-Controller structure.

---

## Project Structure

```
recipes-app-backend/
├── controllers/        # Business logic for handling requests
│   └── recipeController.js
├── models/             # Mongoose schema definitions
│   └── recipeModel.js
├── routes/             # Express route definitions
│   └── recipeRoutes.js
├── config/             # Database connection config
│   └── db.js
├── .env                # Environment variables
├── server.js           # Main application entry point
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## Installation

Follow these steps to set up the backend locally:

1. Navigate to the backend directory:
   ```bash
   cd recipes-app-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/recipeApp
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Scripts

- `npm run dev`: Starts the server with Nodemon for development.
- `node server.js`: Starts the server in production mode.

---

## API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | /api/recipes         | Create a new recipe      |
| GET    | /api/recipes         | Get all recipes          |
| GET    | /api/recipes/:id     | Get recipe by ID         |
| PUT    | /api/recipes/:id     | Update recipe by ID      |
| DELETE | /api/recipes/:id     | Delete recipe by ID      |

All endpoints return JSON responses.

---

## Environment Variables

Create a `.env` file in the root of the backend project and add the following:

```
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
```

---

## Deployment

You can deploy this backend on platforms like:

- **Render**: Free and easy Node.js hosting
- **Railway**: Infrastructure automation platform
- **Vercel** (for serverless functions)

Make sure to set your environment variables correctly on the chosen platform.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **Dotenv**: Load environment variables
- **Nodemon**: Auto-restart server during development

