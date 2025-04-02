// Search Functionality
document.querySelector(".search-logo").addEventListener("click", function () {
    let searchInput = document.querySelector(".input").value.trim();
    if (searchInput !== "") {
        alert(`Searching for: ${searchInput}`);
    } else {
        alert("Please enter a search term.");
    }
});

// Login Button Click Alert
document.querySelector(".login").addEventListener("click", function () {
    alert("Redirecting to login page...");
});

// Cart Click Alert
document.querySelector(".cartBox").addEventListener("click", function () {
    alert("Cart functionality coming soon!");
});

// Dropdown for More Options
document.querySelector(".moreBox").addEventListener("click", function () {
    let moreOptions = document.querySelector(".moreBox");
    moreOptions.innerHTML = moreOptions.innerHTML.includes("▼")
        ? "More ▲"
        : "More ▼";
});

// View All Button Click Event
document.querySelector(".viewAllButton").addEventListener("click", function () {
    alert("Redirecting to all products...");
});
