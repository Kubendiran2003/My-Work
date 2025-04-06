const API_KEY = "cffd721f";
const BASE_URL = "https://www.omdbapi.com/";

// Function to fetch movies list based on query, page, and type
export const searchMovies = async (query = "", page = 1, type = "") => {
    if (!query.trim()) return { Search: [], totalResults: "0", Response: "False", error: "Empty search query" };

    try {
        const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&type=${type}&page=${page}&apikey=${API_KEY}`);
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        const data = await response.json();
        return data.Response === "True" ? data : { Search: [], totalResults: "0", Response: "False", error: data.Error || "No results found" };
    } catch (error) {
        console.error("Error fetching movies:", error);
        return { Search: [], totalResults: "0", Response: "False", error: error.message || "Failed to fetch movies" };
    }
};

// Function to fetch detailed movie info by IMDB ID
export const getMovieDetails = async (id) => {
    if (!id) return { error: "Invalid movie ID" };

    try {
        const response = await fetch(`${BASE_URL}?i=${encodeURIComponent(id)}&apikey=${API_KEY}`);
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        const data = await response.json();
        return data.Response === "True" ? data : { error: data.Error || "Movie not found" };
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return { error: error.message || "Failed to fetch movie details" };
    }
};
