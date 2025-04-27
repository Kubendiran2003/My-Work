import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginUser({ email, password });
      login();
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.msg || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-blue-50 to-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-blue-600 mb-6 text-center font-sans">
          Welcome Back
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 mb-4 rounded-lg text-center font-medium">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-between mb-6 text-sm">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/register" className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white p-3 rounded-full font-semibold shadow-md transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
