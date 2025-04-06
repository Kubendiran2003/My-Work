# 🎬 Movies Search App

A full-featured movie search application built using **React**, **Tailwind CSS**, and the **OMDB API**. The app allows users to search for movies, view detailed information, and navigate through results with pagination. It also supports filtering movies by type via dropdown.

---

## ✨ Features

- 🔍 Search for movies, series, and episodes
- 📄 View detailed information about each movie
- 📑 Pagination for easy navigation
- 🎬 Filter movies by type using OMDB API (no `.filter()`)
- 📀 Restore search state on back navigation
- 🏠 Reset to default movies on refresh or reopen
- ⚠️ Error handling for failed or empty API responses
- ⚡ Responsive and clean UI with Tailwind CSS
- 🌐 Routing with React Router DOM

---

## 🔧 Tech Stack

- ReactJS
- React Router DOM
- Tailwind CSS
- JavaScript
- OMDB API

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Kubendiran2003/My-Work
cd movie-search-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up your OMDB API Key

Create a `.env` file in the root directory and add:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

### 4. Run the App

```bash
npm run dev
```

Visit in your browser:  
http://localhost:5173

---

## 📁 Project Folder Structure

```text
src/
│
├── assets/
│   └── HomePage.mp4             # Homepage banner video
│
├── components/
│   ├── MovieCard.jsx            # Movie card component
│   ├── MovieList.jsx            # Grid/list of movies
│   ├── Pagination.jsx           # Pagination buttons
│   └── SearchBar.jsx            # Search input component
│
├── pages/
│   ├── Favorites.jsx            # List of Favorites movies page
│   ├── Home.jsx                 # Main home page (search + list)
│   └── MovieDetails.jsx         # Movie details page
│
├── services/
│   └── api.js                   # API functions for search/details
│
├── App.jsx                      # Root app component with routing
└── main.jsx                     # Entry point
```

---

## 🌐 Routing

- `/` → Home Page (Search & Movie List)
- `/movie/:id` → Movie Details Page
- `/favorites` → Favorites Movie List Page

Routing is handled using `React Router DOM`.

---

## 🔌 API Functions

Located in `src/services/api.js`:

- `searchMovies(query, page, type)`  
  Fetches search results with optional pagination and type filters

- `getMovieDetails(id)`  
  Fetches full movie details by IMDb ID

Both include error handling and safe fallback responses.

---

## ✅ Completed Requirements

- ✅ Use OMDB API to fetch movies
- ✅ Search bar with user input
- ✅ Display movie list in grid format
- ✅ Pagination for large result sets
- ✅ Movie details view with full info
- ✅ Filter dropdown using API (no `.filter()`)
- ✅ Navigation using React Router
- ✅ Error handling and user feedback
- ✅ Default movie results (Batman)
- ✅ State restore on navigation
- ✅ Reset state on full page reload
- ✅ Clean, readable, and well-documented code
- ✅ Responsive design using Tailwind CSS

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [OMDB API](https://www.omdbapi.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 💡 Future Enhancements

- ⭐ Add favorite movies feature with local storage
- ♾️ Infinite scroll instead of pagination
- 🌙 Dark mode toggle
- 🔍 Search suggestions/autocomplete
- ✅ Unit testing & performance optimizations

---
