function showAlert() {
    alert("Hello! This is a simple alert message.");
}

function changeColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD700"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
