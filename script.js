//Get the computer's random choice of rock, paper or scissors
    //=> getComputerChoice() function

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    return computerSelection;
    // 0 == rock, 1 == paper, 2 == scissors
}

function getPlayerChoice() {
    let choice = prompt("Choose rock, paper, or scissors!");
    let choiceCaseInsensitive = choice.toLowerCase();
    let playerSelection;
    if (choiceCaseInsensitive == "rock") {
        playerSelection = 0;
    } else if (choiceCaseInsensitive == "paper") {
        playerSelection = 1;
    } else {
        playerSelection = 2;
    }
    return playerSelection;
}

function playRound(computerSelection,playerSelection) {
    //If computer chooses rock
    if (computerSelection == 0){
        if(playerSelection == 1){
            return "You win! Paper beats Rock!";
        } else if(playerSelection == 0){
            return "It's a tie!";
        }else{
            return "You lose! Rock beats Scissors!";
        }
    }
    //If computer chooses paper
    if (computerSelection == 1){
        if(playerSelection == 2){
            return "You win! Scissors beats Paper!";
        } else if(playerSelection == 1){
            return "It's a tie!";
        }else{
            return "You lose! Paper beats Rock!";
        }
    }
    //If computer chooses scissors
    if (computerSelection == 2){
        if(playerSelection == 0){
            return "You win! Rock beats Scissors!";
        } else if(playerSelection == 2){
            return "It's a tie!";
        }else{
            return "You lose! Scissors beats Paper!";
        }
    }
}

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const scoreTracker = document.querySelector('#score-display')

const winAnnouncement = document.querySelector('#win-announcement');

const replayButton = document.querySelector('#replay-button')

let score = 0;

function game () {
    let stat ="";
    let track=0;

    rockButton.addEventListener('click',() => {
        if (track>=5) {
            if (score>=3){
                winAnnouncement.textContent = "You win! Great job!"
            } else {
                winAnnouncement.textContent = "You lose! Try again!"
            }
            return false;
        }
        const computerChoice = getComputerChoice();
        stat = playRound (computerChoice,0);
        winAnnouncement.textContent = String(stat)
        track ++;
        let first = stat.slice(0,7);
        if (first == "You win") {
            score = score + 1;
        }
        scoreTracker.textContent = "Your score is: "+String(score);
    });

    paperButton.addEventListener('click',() => {
        if (track>=5) {
            if (score>=3){
                winAnnouncement.textContent = "You win! Great job!"
            } else {
                winAnnouncement.textContent = "You lose! Try again!"
            }
            return false;
        }
        const computerChoice = getComputerChoice();
        stat = playRound (computerChoice,1);
        winAnnouncement.textContent = String(stat)
        track++;
        let first = stat.slice(0,7);
        if (first == "You win") {
            score = score + 1;
        }
        scoreTracker.textContent = "Your score is: "+String(score);
    });

    scissorsButton.addEventListener('click',() => {
        if (track>=5) {
            if (score>=3){
                winAnnouncement.textContent = "You win! Great job!"
            } else {
                winAnnouncement.textContent = "You lose! Try again!"
            }
            return false;
        }
        const computerChoice = getComputerChoice();
        stat = playRound (computerChoice,2);
        winAnnouncement.textContent = String(stat)
        track++;
        let first = stat.slice(0,7);
        if (first == "You win") {
            score = score + 1;
        }
        scoreTracker.textContent = "Your score is: "+String(score);
    });

    replayButton.addEventListener('click',() => {
        score=0;
        track =0;
        scoreTracker.textContent = "";
        winAnnouncement.textContent = "";
    });

}
    


game();