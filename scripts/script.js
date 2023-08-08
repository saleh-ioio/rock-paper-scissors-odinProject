function getComputerChoice() {
    let randNum = getRandomInt(1, 3); //random between 1-3

    switch (randNum) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
        default:
            return 'Rocks'
    }

}

function getUserChoice() {
    let userChoice =
        prompt('choose your attack : rock ! paper ! Scissors , you only need to enter the first letter of your choice');
    console.log(userChoice);
    //debugger;
    switch (userChoice.charAt(0).toUpperCase()) {
        
        case 'R':
            return 'Rock';
        case 'P':
            return 'Paper';
        case 'S':
            return 'Scissors';
        default:
            return 'Rocks'
    }
}
function gameRound(userSelection, computerSelection) { //a round of rock paper Scissors
    let gameResult = decideWinner(userSelection, computerSelection);
    updateGameMessage(gameResult, userSelection, computerSelection);
    return gameResult;  
}

function game(){
 let userScore = 0, computerScore = 0;
 for(let i = 1; i<=5; i++){
    let gameResult = gameRound(getUserChoice(), getComputerChoice());   
    if(gameResult.charAt(0) === 'U'){
        userScore++;
    }else{
        computerScore++;
    }
 } 

 if(userScore > computerScore ){
    console.log(`Winner is User ${userScore} || ${computerScore} computer`);
 }else if(computerScore > userScore){
    console.log(`Winner is Computer ${computerScore} || ${userScore} user`)
 }else{
    console.log(`Tie ${userScore} || ${computerScore}`)
 }
}

function updateGameMessage(gameResult, userSelection, computerSelection) {
    //debugger;
    if (gameResult.charAt(0).toUpperCase() == 'T')// Tie
    {
        console.log(`Tie : ${userSelection} vs ${computerSelection}`);
    } else {
        if (gameResult.charAt(0).toUpperCase() === 'U') {
            console.log(`You Win ! ${userSelection} beats ${computerSelection}`);
        } else {
            console.log(`You Lose ! ${computerSelection} beats ${userSelection}`);
        }
    }
}
function decideWinner(userSelection, computerSelection) {
    //debugger;
  

    let userChoice = userSelection.charAt(0).toUpperCase(); //first letter only for simpicity for later codding
    let computerChoice = computerSelection.charAt(0).toUpperCase(); //first letter only for simpicity for later
    //debugger;
      if (userChoice == computerChoice) {
        return 'Tie';
    }
    if (
        (userChoice == 'R' && computerChoice == 'S') ||
        (userChoice == 'P' && computerChoice == 'R') ||
        (userChoice == 'S' && computerChoice == 'P')
    ) {
        return 'User won';
    }
    if ((computerChoice == 'R' && userChoice == 'S') ||
        (computerChoice == 'P' && userChoice == 'R') ||
        (computerChoice == 'S' && userChoice == 'P')
    ) {
        return 'Computer won';
    }

}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

game();