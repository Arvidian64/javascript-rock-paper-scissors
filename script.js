function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    console.log(randomChoice)
}

function humanChoice(choice) {
    console.log(choice)
}

getComputerChoice();
let choice = prompt("Rock, Paper or Scissors?");
humanChoice(choice.charAt(0).toUpperCase() + choice.slice(1));