
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper, or scissors:");
    while (!["rock", "paper", "scissors"].includes(humanChoice.toLowerCase())) {
        humanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        alert(`It's a tie! Both chose ${humanChoice}`);
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        alert(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore == 5) {
        alert("You win the game!");
        console.log("You win the game!");
    } else if (computerScore == 5) {
        alert("You lose the game!");
        console.log("You lose the game!");
    } else {
        alert("The game is a tie!");
        console.log("The game is a tie!");
    }

    alert(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

// Start the game
playGame();
