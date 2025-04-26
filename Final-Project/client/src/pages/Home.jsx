import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-4xl font-bold mb-6">Welcome to AuthApp</h1>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;