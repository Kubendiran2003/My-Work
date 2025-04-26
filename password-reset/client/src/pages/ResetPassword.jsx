import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/reset-password/${token}`, { password });
      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="password" placeholder="Enter new password" className="border p-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
