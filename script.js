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

function game(){
    let score = 0;

    for (let i=0; i < 5; i++){
        let computer = getComputerChoice();
        let player = getPlayerChoice();
        let statement = playRound(computer,player);
        let first = statement.slice(0,7);
        if (first == "You win") {
            score = score + 1;
        }
        console.log(statement);
    }

    console.log("Your score is: "+score)
}

game()
//Have the player input their choice of rock, paper, or scissors
    //=> getPlayerChoice() function
//Compare the player's choice and the computer's random choice
    //If computer chooses paper and player chooses scissors
    //If computer chooses rock and player chooses paper
    //If computer chooses scissors and player chooses rock
        //Win statement
    //Else -> lose statement
        //=> playRound() function