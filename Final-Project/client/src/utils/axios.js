import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/auth',
  withCredentials: true, // Important for cookies (like JWT)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
