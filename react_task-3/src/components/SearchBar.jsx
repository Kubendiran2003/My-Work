import { useState, useEffect } from "react";

const SearchBar = ({ onSearch, initialQuery }) => {
    const [searchTerm, setSearchTerm] = useState(initialQuery || "");

    // Debounce effect: waits 500ms after user stops typing
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchTerm) {
                onSearch(searchTerm);
            }
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, onSearch]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch(searchTerm);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for movies... 🔍︎"
                className="w-full text-xs lg:text-base  font-semibold p-2 border rounded"
            />
        </div>
    );
};

export default SearchBar;
