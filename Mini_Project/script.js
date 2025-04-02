document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("gameBoard");
    const restartButton = document.getElementById("restart");
    const statusText = document.getElementById("status");

    const icons = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍋", "🍍", "🥝"];
    let cards = [...icons, ...icons]; // Duplicating to make pairs
    let flippedCards = [];
    let matchedCards = [];
    let moves = 0;
    let timer;
    let seconds = 0;
    let isGameStarted = false;

    // Create a container for move counter and timer
    const statusContainer = document.createElement("div");
    statusContainer.id = "statusContainer";
    statusContainer.style.display = "flex";
    statusContainer.style.justifyContent = "space-between";
    statusContainer.style.width = "300px";
    statusContainer.style.margin = "10px auto";
    statusContainer.style.fontSize = "18px";

    const moveCounter = document.createElement("p");
    moveCounter.id = "moves";
    moveCounter.innerHTML = `Moves: <span style="color: blue;">0</span>`;

    const timerDisplay = document.createElement("p");
    timerDisplay.id = "timer";
    timerDisplay.innerHTML = `Time: <span style="color: red;">0s</span>`;

    statusContainer.appendChild(moveCounter);
    statusContainer.appendChild(timerDisplay);
    document.body.insertBefore(statusContainer, gameBoard);

    // Shuffle function
    function shuffle(array) {
        return array.sort(() => 0.5 - Math.random());
    }

    // Start the timer
    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            timerDisplay.innerHTML = `Time: <span style="color: red;">${seconds}s</span>`;
        }, 1000);
    }

    // Stop the timer
    function stopTimer() {
        clearInterval(timer);
    }

    // Initialize game
    function initGame() {
        gameBoard.innerHTML = "";
        flippedCards = [];
        matchedCards = [];
        moves = 0;
        seconds = 0;
        isGameStarted = false;
        statusText.textContent = "Find all the matching pairs!";
        moveCounter.innerHTML = `Moves: <span style="color: blue;">0</span>`;
        timerDisplay.innerHTML = `Time: <span style="color: red;">0s</span>`;
        stopTimer();
        cards = shuffle(cards);

        cards.forEach((icon, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.icon = icon;
            card.dataset.index = index;
            card.innerHTML = "❓"; // Hidden state
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        });
    }

    // Flip card function
    function flipCard() {
        if (!isGameStarted) {
            isGameStarted = true;
            startTimer();
        }

        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.classList.add("flipped");
            this.innerHTML = this.dataset.icon;
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                moves++;
                moveCounter.innerHTML = `Moves: <span style="color: blue;">${moves}</span>`;
                setTimeout(checkMatch, 500);
            }
        }
    }

    // Check for match
    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.icon === card2.dataset.icon) {
            matchedCards.push(card1, card2);
            card1.style.pointerEvents = "none";
            card2.style.pointerEvents = "none";
            card1.classList.add("correct");
            card2.classList.add("correct");
            // Change background color to green
            card1.style.backgroundColor = "green";
            card2.style.backgroundColor = "green";
        } else {
            card1.innerHTML = "❓";
            card2.innerHTML = "❓";
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }

        flippedCards = [];

        if (matchedCards.length === cards.length) {
            statusText.textContent = `Congratulations! You found all pairs in ${moves} moves and ${seconds} seconds!`;
            stopTimer();
        }
    }

    // Restart game
    restartButton.addEventListener("click", initGame);

    // Start the game on load
    initGame();
});
