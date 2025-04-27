import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-gradient-to-b from-blue-100 to-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 font-sans">
            Welcome to <span className="text-blue-500">PassSecure</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-md mb-6 font-light">
            Easily manage your account, recover forgotten passwords, and stay secure effortlessly.
          </p>
          <Link
            to="/login"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
          >
            Get Started
          </Link>
        </div>
      );
    };

export default Home;
