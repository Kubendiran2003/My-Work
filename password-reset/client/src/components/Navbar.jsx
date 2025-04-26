import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await api.post('/logout'); // Optional if you have logout route, else just clear cookie client-side.
    navigate('/login');
  };

  return (
    <nav className="flex justify-between p-4 shadow">
      <Link to="/" className="font-bold text-xl">AuthApp</Link>
      <div className="space-x-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
