import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import { motion } from "framer-motion";

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const data = await getMovieDetails(id);
            setMovie(data);
            setLoading(false);

            // Check if the movie is already in favorites
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            setIsFavorite(favorites.some(fav => fav.imdbID === data.imdbID));
        };

        fetchMovieDetails();
    }, [id]);

    const handleToggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (isFavorite) {
            // Remove from favorites
            const updatedFavorites = favorites.filter(fav => fav.imdbID !== movie.imdbID);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            // Add to favorites
            favorites.push(movie);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-center text-gray-600 animate-pulse">Loading...</p>
            </div>
        );
    }

    if (!movie || movie.Response === "False") {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-center text-red-500">Movie not found.</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <motion.div 
                className="max-w-3xl mx-auto my-auto p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg rounded-lg text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.button 
                    onClick={() => navigate(-1)} 
                    className="px-4 py-2 text-sm md:text-base bg-gray-800 hover:bg-gray-700 text-white rounded transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                >
                    ❮❮ Back to Search
                </motion.button>
                <motion.h1 
                    className="text-2xl md:text-3xl font-bold mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {movie.Title} ({movie.Year})
                </motion.h1>
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                    <motion.img 
                        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"} 
                        alt={movie.Title} 
                        className="w-full md:w-64 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    />
                    <motion.div 
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Cast:</strong> {movie.Actors}</p>
                        <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}/10</p>
                        <p className="mt-2"><strong>Plot Summary:</strong></p>
                        <p className="text-gray-100">{movie.Plot}</p>
                    </motion.div>
                </div>
                <motion.button 
                    onClick={handleToggleFavorite}
                    className={`mt-4 px-4 text-sm md:text-base py-2 rounded transition-all duration-300 ${
                        isFavorite ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
                    }`}
                >
                    {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </motion.button>
            </motion.div>
        </div>
    );
};

export default MovieDetail;