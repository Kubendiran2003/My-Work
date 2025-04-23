require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));