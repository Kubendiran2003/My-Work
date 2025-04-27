import { useEffect, useState } from "react";
import { getMe } from "../services/api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getMe();
        setUser(res.data);
      } catch (error) {
        console.error("Failed to load user", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-green-50 to-white text-lg font-semibold">
        Loading user data...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-green-50 to-white px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-green-600 mb-6 font-sans">
          Welcome, {user.name}!
        </h1>

        <div className="space-y-4 text-gray-700">
          <p className="border p-3 rounded-lg bg-gray-50">
            <span className="font-semibold text-gray-900">Username:</span> {user.name}
          </p>
          <p className="border p-3 rounded-lg bg-gray-50">
            <span className="font-semibold text-gray-900">Email:</span> {user.email}
          </p>
          <p className="border p-3 rounded-lg bg-gray-50 break-all">
            <span className="font-semibold text-gray-900">User ID:</span> {user._id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
