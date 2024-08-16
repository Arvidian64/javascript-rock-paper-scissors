function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    console.log(randomChoice)
    switch (randomChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    };
}

function humanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    choice.charAt(0).toUpperCase() + choice.slice(1);
    console.log(choice);
}

let humanScore = 0;

let computerScore = 0;

let computerChoice = getComputerChoice();

humanChoice();