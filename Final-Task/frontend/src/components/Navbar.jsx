import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg flex justify-between items-center">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide font-sans">PassSecure</h1>
      <div className="space-x-3 md:space-x-8 sm:space-x-5 text-sm sm:text-base md:text-lg flex items-center text-white font-medium">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-white font-semibold transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
            <Link to="/register" className="hover:text-yellow-300 transition">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
