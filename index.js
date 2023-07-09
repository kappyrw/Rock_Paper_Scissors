

//Eric Uwanyagasani's project

// function that will get machine's choice



function getComputerChoice() {

    const choices = ["Rock", "Paper", "Scissors"];

    const randomNumber = Math.random();
  const multipliedNumber = randomNumber * choices.length;
  const randomIndex = Math.floor(multipliedNumber);
    return choices[randomIndex];



}

// Function to play a one round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {

    // convert to lower case to avoid confusion in case sensitive 


    const formattedPlayerSelection = playerSelection.toLowerCase();

    // let check if is tie , means the same selection to both sides

    if (formattedPlayerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }

    // let check all possible options to win
    if (
        (formattedPlayerSelection === "rock" && computerSelection === "Scissors") ||
        (formattedPlayerSelection === "paper" && computerSelection === "Rock") ||
        (formattedPlayerSelection === "scissors" && computerSelection === "Paper")
    ) {
        return `You Win! ${formattedPlayerSelection} beats ${computerSelection}.`;
    }

    // if is not a tie and then the player not win means computer wins a game

    return `You Lose! ${computerSelection} beats ${formattedPlayerSelection}.`;
}

// here we have one function to control all 5 plays 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    // i use loop to check different choices here

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);

        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }
    }

    //i decide who wins according to scores from different choices
    //between me and computer 


    let winner;
    if (computerScore < playerScore) {
        winner = "You";
    } else if (playerScore < computerScore) {
        winner = "Computer";
    } else {
        winner = "It's a tie";
    }

    console.log(`Game over! ${winner} wins. Your score: ${playerScore}, Computer score: ${computerScore}`);
}

//here we go now 
game();
