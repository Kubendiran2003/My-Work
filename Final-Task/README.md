# 🔥 Password Reset Flow Full Stack Web Application

A complete user authentication system with email-based password reset functionality, built using **React.js**, **Node.js**, **Express**, **MongoDB**, **Tailwind CSS**, and **Nodemailer**.

---

## ✨ Features

- User Registration (Sign Up)
- User Login (Sign In)
- Protected Dashboard Page
- Forgot Password Functionality (Reset Link via Email)
- Secure Password Reset (with expiry time)
- User Logout
- JWT Authentication stored in HTTP-only cookies
- Responsive Frontend UI with Tailwind CSS
- Clean code with modular structure (controllers, models, routes, utils)
- Deployed on Netlify (Frontend) and Render (Backend)

---

## 🛠 Tech Stack

| Frontend         | Backend         | Database | Others             |
| ---------------- | --------------- | -------- | ------------------ |
| React.js         | Node.js         | MongoDB  | Tailwind CSS       |
| Vite             | Express.js      | Mongoose | JWT (jsonwebtoken) |
| Axios            | Nodemailer      |          | Cookie-Parser      |
| React Router DOM | CORS Middleware |          | Bcrypt.js          |

---

## 📁 Project Structure

### Backend (`/backend`)

```bash
backend/
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── utils/
│   └── sendEmail.js
├── server.js
├── .env
├── package.json
```

### Frontend (`/frontend`)

```bash
frontend/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── ResetPassword.jsx
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
├── public/
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── index.html
├── package.json
```

---

## 🔧 Backend Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/Kubendiran2003/My-Work/tree/main/Final-Task
cd backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

Create a `.env` file in `/backend` with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=https://your-frontend-url.netlify.app
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

4. **Start the backend server:**

```bash
npm run dev
```

Server runs at: `http://localhost:5000`

---

## 🔧 Frontend Setup Instructions

1. **Navigate to frontend directory:**

```bash
cd ../frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure axios baseURL:**

In `/src/services/api.js`, set:

```javascript
const API = axios.create({
  baseURL: "https://your-backend-url.onrender.com/api",
  withCredentials: true,
});
```

4. **Start the React app:**

```bash
npm run dev
```

App runs at: `http://localhost:5173`

---

## 🚀 Deployment Instructions

### Deploy Backend on [Render](https://render.com)

- Create new Web Service
- Connect GitHub backend repo
- Set environment variables
- Set build command: `npm install`
- Set start command: `npm run dev`
- Deploy!

### Deploy Frontend on [Netlify](https://netlify.com)

- Create new Netlify site
- Connect GitHub frontend repo
- Set build command: `npm run build`
- Publish directory: `dist`
- Deploy!

---

## 💡 API Endpoints

| Method | Route                        | Description                 |
| ------ | ---------------------------- | --------------------------- |
| POST   | `/api/register`              | Register new user           |
| POST   | `/api/login`                 | Login user                  |
| GET    | `/api/logout`                | Logout user                 |
| POST   | `/api/forgot-password`       | Send password reset email   |
| POST   | `/api/reset-password/:token` | Reset password using token  |
| GET    | `/api/me`                    | Fetch logged-in user's data |

---

## 📜 Postman View Full Documentation

[View API Documentation](https://documenter.getpostman.com/view/44150102/2sB2j1iYXi)

---

## ✍️ Author

Made with ❤️ by Kubendiran P
Email : kubendiranpalani289@gmail.com

---
