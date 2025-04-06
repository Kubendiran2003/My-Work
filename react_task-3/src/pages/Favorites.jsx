import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Favorites = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    const handleRemoveFavorite = (imdbID) => {
        const updatedFavorites = favorites.filter(movie => movie.imdbID !== imdbID);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    if (favorites.length === 0) {
        return (
            <div className="flex flex-col bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 justify-center items-center h-screen">
                <p className="text-center text-gray-100">No favorites added yet.</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-700 transition-all duration-300"
                >
                    ❮❮ Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 justify-center h-auto min-h-screen items-center">
        <div className="p-6 max-w-7xl mx-auto my-auto">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-sans text-center font-extrabold">Your Favorite Movies
                </h1>
            </div>
            <motion.button
                    onClick={() => navigate("/")}
                    className="px-4 py-2 bg-gray-800 text-sm md:text-base text-white mb-5 rounded shadow hover:bg-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                >
                    ❮❮ Back to Home
                </motion.button>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
                {favorites.map(movie => (
                    <div 
                    key={movie.imdbID} 
                    className="p-4 bg-gray-800 text-white rounded shadow-lg relative group flex flex-col justify-between"
                >
                    <img 
                        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"} 
                        alt={movie.Title} 
                        className="w-full h-64 object-cover rounded"
                    />
                    <h2 className="text-sm sm:text-base md:text-lg font-bold mt-2">{movie.Title} ({movie.Year})</h2>

                    <div className="flex flex-col md:flex-row gap-2 justify-between items-center mt-2"> 
                        <button
                            onClick={() => navigate(`/movie/${movie.imdbID}`)}
                            className="px-2 py-1 md:py-2 bg-green-500 text-white w-full md:w-auto font-medium text-sm rounded shadow hover:bg-green-600 transition-all duration-300"
                        >
                            View Details
                        </button>
                        <button
                            onClick={() => handleRemoveFavorite(movie.imdbID)}
                            className="px-2 py-1 md:py-2 bg-red-500 text-white w-full md:w-auto font-medium text-sm rounded shadow hover:bg-red-600 transition-all duration-300"
                        >
                            Remove
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Favorites;