import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './utils/api';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    api.get('/me')
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  return authenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
