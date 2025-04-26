import axios from 'axios';

const api = axios.create({
  baseURL: 'https://password-reset-ey9c.onrender.com/api/auth', 
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
