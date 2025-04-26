import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/auth/me', { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

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