import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://password-reset-6woc.onrender.com/api/auth',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
