import { useEffect, useState } from 'react';
import api from '../axios'; // Your Axios instance
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // For redirecting

  useEffect(() => {
    api.get('/me') // Make the GET request to /me
      .then((res) => setUser(res.data)) // Set user data on success
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          // If 401 error occurs, redirect to login page
          navigate('/login');
        }
      });
  }, [navigate]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      {user ? (
        <div className="space-y-2">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
