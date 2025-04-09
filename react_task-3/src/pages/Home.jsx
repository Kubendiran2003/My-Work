import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { searchMovies } from "../services/api";
import HomePageVideo from "../assets/HomePage.mp4";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [type, setType] = useState("");
  const [favorites, setFavorites] = useState([]); // State for favorites
  const ITEMS_PER_PAGE = 8;

  const navigate = useNavigate(); // Initialize navigate

  // Restore saved state on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("movieSearchState");
    if (savedState) {
      const {
        query: savedQuery,
        currentPage: savedPage,
        type: savedType,
      } = JSON.parse(savedState);
      setQuery(savedQuery || "");
      setCurrentPage(savedPage || 1);
      setType(savedType || "");
    } else {
      setQuery("Batman"); // Default query
    }

    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save state to localStorage when query, page, or type changes
  useEffect(() => {
    if (query) {
      localStorage.setItem(
        "movieSearchState",
        JSON.stringify({ query, currentPage, type })
      );
    }
  }, [query, currentPage, type]);

  // Fetch movies when query/page/type changes
  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      const data = await searchMovies(query, currentPage, type);
      if (data?.Search) {
        setMovies(data.Search.slice(0, ITEMS_PER_PAGE));
        setTotalPages(Math.ceil(data.totalResults / ITEMS_PER_PAGE));
      } else {
        setMovies([]);
        setTotalPages(1);
      }
    };

    fetchMovies();
  }, [query, currentPage, type]);

  // Search handler
  const handleSearch = (q) => {
    if (q !== query) {
      // Only reset if the query changes
      setQuery(q);
      setCurrentPage(1);
    }
  };

  // Type change handler
  const handleTypeChange = (e) => {
    setType(e.target.value);
    setCurrentPage(1);
  };

  // Navigate to Favorites page
  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  return (
    <div className="p-4">
      {/* Header, SearchBar, and Filter */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-5 mb-6">
        <header className="lg:text-4xl text-3xl bg-gradient-to-t from-red-700 via-red-500 to-red-600 text-transparent bg-clip-text font-extrabold font-sans text-center md:text-left">
          Movie Search App
        </header>
        <div className="flex flex-col justify-between md:flex-row sm:items-center gap-2 w-full md:w-auto">
          <SearchBar onSearch={handleSearch} initialQuery={query} />
          <div className="flex flex-row sm:flex-row sm:items-center gap-2 w-full justify-between md:w-auto">
            <select
              onChange={handleTypeChange}
              value={type}
              className="p-2 border text-xs lg:text-base font-semibold rounded sm:w-auto"
            >
              <option value="">All</option>
              <option value="movie">Movies</option>
              <option value="series">Series</option>
              <option value="episode">Episodes</option>
            </select>
            <button
              onClick={handleFavoritesClick} // Navigate to Favorites page
              className="py-2 px-4 bg-red-500 text-xs lg:text-base text-white rounded shadow font-semibold hover:bg-red-600 transition-all duration-300"
            >
              Favorites ({favorites.length})
            </button>
          </div>
        </div>
      </div>

      {/* 🎥 Video as GIF-like banner */}
      <div className="mt-4 mb-6">
        <video
          src={HomePageVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[200px] md:h-[300px] object-cover rounded-lg shadow-md pointer-events-none"
        />
      </div>

      {movies.length === 0 && query && (
        <p className="text-red-500 text-center mt-4">No movies found.</p>
      )}

      <MovieList movies={movies} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Home;
