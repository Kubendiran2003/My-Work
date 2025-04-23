# Node.js JWT Authentication

A simple authentication and authorization app using Node.js, Express, MongoDB, and JWT. Follows the MVC pattern.

## Features

- User Registration
- User Login with JWT Token
- Protected Route (Get User Info)
- Password hashing using bcrypt
- JWT token validation middleware
- Postman API documentation with sample requests and responses

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- Postman for API testing

## Folder Structure (MVC)

```
├── controllers
│   └── authController.js
├── middleware
│   └── authMiddleware.js
├── models
│   └── User.js
├── routes
│   └── authRoutes.js
├── .env
├── server.js
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <My-repo-url>
   cd <your-folder-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=4000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/auth?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

---

## API Endpoints

### 1. Register a New User
**POST** `/api/auth/register`

#### Sample Request Body:
```json
{
  "username": "kubi",
  "email": "kubi@example.com",
  "password": "123456"
}
```

#### Sample Response:
```json
{
  "message": "User registered successfully"
}
```

### 2. Login
**POST** `/api/auth/login`

#### Sample Request Body:
```json
{
  "email": "kubi@example.com",
  "password": "123456"
}
```

#### Sample Response:
```json
{
  "token": "<jwt_token>"
}
```

### 3. Get User Info (Protected Route)
**GET** `/api/auth/user`

#### Headers:
```json
Authorization: Bearer <jwt_token>
```

#### Sample Response:
```json
{
  "_id": "user_id",
  "username": "kubi",
  "email": "kubi@example.com"
}
```

---

## Notes

- All passwords are hashed using bcrypt before storing in the database.
- The JWT token is required for accessing protected routes.
- Proper error handling and validation is in place.
