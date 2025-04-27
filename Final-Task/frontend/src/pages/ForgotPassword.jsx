import { useState } from "react";
import { forgotPassword } from "../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await forgotPassword({ email });
      setMessage("✅ Password reset link sent! Check your email.");
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-blue-600 text-center font-sans">
          Forgot Password?
        </h2>

        <p className="text-gray-600 text-center">
          Enter your email and we'll send you a reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Send Reset Link
        </button>

        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
