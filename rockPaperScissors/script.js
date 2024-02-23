let wins = 0;
let losses = 0;
let ties = 0;
//adds red border to the users choice
function addBorders(selectedImage) {
    document.querySelectorAll('#player img').forEach(img => {
        img.classList.remove("borders"); // Remove borders from all images
    });
    selectedImage.classList.add("borders"); // Add border to the clicked image
}

function play(playerChoice) {
    // declaring the array of choices
    var choices = ["rock", "paper", "scissors"];
    // make the computer choice select randomly between the three choices
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // we want to have a random shuffle for the 3 chouces being made by computer.
    let swapImage = document.getElementById("swap");
    let count = 0;

    let interval = setInterval(() => {
        swapImage.src = `./images/${choices[count % 3]}.PNG`; // choice rotation
        count++;
        if (count === 6) { // After 6 half-seconds, (or y'know 3 seconds)
            clearInterval(interval);
            // final computer choice image
            swapImage.src = `./images/${computerChoice}.PNG`;

            // Determining and displaying our WINNER WINNER CHICKEN DINNER! 
            let result = checkWinner(playerChoice, computerChoice);
            document.getElementById("result").innerHTML = `Computer chose ${computerChoice}. ${result}`;
        }
    }, 500); 
    //I set the interval to 500 miliseconds because this SETINTERVAL function expects atleast 2 arguements, or the shuffling of 
    //the images wont display. to my knowledge, the delay needs to be specified or JS wont know how often the functions needs to be executed. -Lindsey
}
//I'm updating this checkWinner function to hopefully modify modify scores - Lindsey
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        ties++;
        updateScoreDisplay();
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        wins++;
        updateScoreDisplay();
        return "You win!";
    } else {
        losses++;
        updateScoreDisplay();
        return "Computer wins!";
    }
}

//Since we care about our scores we need to update the HTML so,
function updateScoreDisplay() {
    document.getElementById("wins").innerText = `Wins: ${wins}`;
    document.getElementById("losses").innerText = `Losses: ${losses}`;
    document.getElementById("ties").innerText = `Ties: ${ties}`;
}

// Implementing a function to reset the game
function resetGame() {
    // Remove borders from all player images
    document.querySelectorAll('#player img').forEach(img => {
        img.classList.remove("borders");
    });

    // Reset computer image to question mark
    document.getElementById("swap").src = "./images/question-mark.PNG";
    
    // Clear the game result text
    document.getElementById("result").innerHTML = "";

    // Reset scores
    wins = 0;
    losses = 0;
    ties = 0;

    // Update the score display
    document.getElementById("wins").innerText = "Wins: 0";
    document.getElementById("losses").innerText = "Losses: 0";
    document.getElementById("ties").innerText = "Ties: 0";
}

//event listener to our reset button
document.getElementById("resetButton").addEventListener('click', resetGame);
