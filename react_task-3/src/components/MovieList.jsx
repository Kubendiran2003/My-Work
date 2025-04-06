import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MovieList = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p className="text-center text-gray-500 mt-4">No movies found.</p>;
    }

    return (
        <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {movies.slice(0, 16).map((movie) => (
                <motion.div
                    key={movie.imdbID}
                    className="bg-gradient-to-t from-red-600 via-pink-500 to-red-500 rounded-lg p-2 hover:shadow-lg transition"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Link to={`/movie/${movie.imdbID}`} className="block">
                        <motion.img
                            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                            alt={movie.Title}
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <motion.h2
                            className="text-sm sm:text-base md:text-lg font-semibold mt-2 text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {movie.Title}
                        </motion.h2>
                        <motion.p
                            className="text-sm text-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {movie.Year}
                        </motion.p>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default MovieList;