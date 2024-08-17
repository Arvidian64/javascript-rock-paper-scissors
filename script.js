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

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    console.log(choice);
    return choice;
}

let humanScore = 0;

let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();

    let humanChoice = getHumanChoice();

    switch (computerChoice, humanChoice) {
        case computerChoice == humanChoice:
            console.log("It's a draw! Your "+humanChoice+" is the same as "+computerChoice);
        case humanChoice == "Rock":
            if (computerChoice == "Paper") {
                console.log("You lose! "+computerChoice+" beats "+humanChoice);
                computerScore ++;
            }
            else {
                console.log("You win! "+humanChoice+" beats "+computerChoice);
                humanScore ++;
            }
        case humanChoice == "Paper":
            if (computerChoice == "Scissors") {
                console.log("You lose! "+computerChoice+" beats "+humanChoice);
                computerScore ++;
            }
            else {
                console.log("You win! "+humanChoice+" beats "+computerChoice);
                humanScore ++;
            }
        case humanChoice == "Scissors":
            if (computerChoice == "Rock") {
                console.log("You lose! "+computerChoice+" beats "+humanChoice);
                computerScore ++;
            }
            else {
                console.log("You win! "+humanChoice+" beats "+computerChoice);
                humanScore ++;
            }
    }
}

playRound();