const express = require('express');
const router = express.Router();
const { register, login, getUserInfo } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getUserInfo);

module.exports = router;
