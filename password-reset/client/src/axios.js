import axios from 'axios';

const api = axios.create({
  baseURL: 'https://password-reset-6woc.onrender.com/api/auth', // Your API base URL
  withCredentials: true, // Make sure credentials (cookies) are included with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to automatically attach the token if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get the token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
