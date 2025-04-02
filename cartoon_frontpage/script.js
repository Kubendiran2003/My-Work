document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");
    
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents immediate navigation
        
        // Add zoom effect to the body
        document.body.classList.add("zoom-effect");

        // Wait for animation, then redirect
        setTimeout(() => {
            window.location.href = ""; // Redirects after zoom animation
        }, 2500); // Matches the CSS animation time (1.5s)
    });
});
