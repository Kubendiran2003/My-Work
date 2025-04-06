import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center font-medium mt-4 space-x-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 text-sm md:text-base rounded-md transition-all duration-300 ease-in-out ${
                    currentPage === 1
                        ? "bg-red-400 text-white cursor-not-allowed"
                        : "bg-red-500 text-white hover:bg-red-600 hover:scale-105"
                }`}
            >
                Previous
            </button>

            <span className="px-3 py-1 bg-white text-sm md:text-base text-black rounded-md">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 text-sm md:text-base rounded-md transition-all duration-300 ease-in-out ${
                    currentPage === totalPages
                        ? "bg-red-400 text-white cursor-not-allowed"
                        : "bg-red-500 text-white hover:bg-red-600 hover:scale-105"
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;