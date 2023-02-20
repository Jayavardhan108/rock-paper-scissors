
function getComputerChoice() {
    let randomNum = Math.random() * 10;
    // console.log("Random Number ::: " + randomNum);

    if(randomNum <= 3) {
        return 'Rock';
    } else if (randomNum > 3 && randomNum <= 7) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function play(playerSelection, computerSelection = getComputerChoice()) {
    let winStr = "You Win!";
    let loseStr = "You Lose!";
    let drawStr = "It's a DRAW!";
    if(playerSelection.toUpperCase() === 'ROCK') {
        if(computerSelection === 'Scissors') {
            return `${winStr} Rock beats Scissors`;
        } else if(computerSelection ===  'Paper'){
            return `${loseStr} Paper beats Rock`;
        } else {
            return drawStr;
        }
    }

    if(playerSelection.toUpperCase() === 'PAPER') {
        if(computerSelection === 'Rock') {
            return `${winStr} Paper beats Rock`;
        } else if(computerSelection ===  'Scissors'){
            return `${loseStr} Scissors beats Paper`;
        } else {
            return drawStr;
        }
    }

    if(playerSelection.toUpperCase() === 'SCISSORS') {
        if(computerSelection === 'Paper') {
            return `${winStr} Scissors beats Paper`;
        } else if(computerSelection ===  'Rock'){
            return `${loseStr} Rock beats Scissors`;
        } else {
            return drawStr;
        }
    }
}

// console.log(getComputerChoice());
// console.log(play(prompt("Enter your choice!!")));
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i = 0; i < 5; i++) {
        let roundResult = play(prompt("Enter your choice, Player!"));
        console.log(roundResult);
        if(roundResult.startsWith("You Win!")) {
            playerPoints++;
        } else if(roundResult.startsWith("You Lose!")){
            computerPoints++;
        }
    }

    if(playerPoints > computerPoints) {
        return "\nYou Win!!";
    } else if(computerPoints > playerPoints) {
        return "\nComputer Wins!!";
    } else {
        return "\nIts a DRAW!!";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("play");
    button.addEventListener("click", function() {
        let result = game();
        console.log(result);
        document.getElementsByTagName("h1")[0].innerHTML = result;
    });
})
