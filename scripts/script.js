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

let userScore = 0, computerScore = 0;
let userScoreElement = document.querySelector('.player-score');
let computerScoreElement = document.querySelector('.computer-score');

let announceWinnerElement = document.querySelector('.finalWinner');

let ScissorsElement = document.querySelector('.scissors');
let rockElement   = document.querySelector('.rock');
let paperElement  = document.querySelector('.paper');


function hookEventToButtons(){

   addEventToButtons(rockElement , "rock" )

   addEventToButtons(paperElement , "Paper" )

   addEventToButtons(ScissorsElement , "Scissors");

}
let WinnerElement = document.querySelector('.winner');
function addEventToButtons(htmlElement, choice){
    htmlElement.addEventListener('click' , function(){
        playRound(choice , getComputerChoice() , WinnerElement);
    })

}



function playRound(userSelection, computerSelection , WinnerElement) { //a round of rock paper Scissors

    let gameResult = decideWinner(userSelection, computerSelection);
    if(userScore >= 5){
        announceWinnerElement.textContent = `The final winner is User !!!!!`;
        ScissorsElement.style.visibility = "hidden"; 
        paperElement.style.visibility = "hidden";
        rockElement.style.visibility = "hidden";

    }else if(computerScore >= 5 ){
        announceWinnerElement.textContent = `The final winner is computer !!!!!`;
        ScissorsElement.style.visibility = "hidden"; 
        paperElement.style.visibility = "hidden";
        rockElement.style.visibility = "hidden";


    }
    updateGameMessage(gameResult, userSelection, computerSelection ,WinnerElement);
    return gameResult;  
}




function updateGameMessage(gameResult, userSelection, computerSelection, WinnerElement) {
    //debugger;
    if (gameResult.charAt(0).toUpperCase() == 'T')// Tie
    {
        console.log(`Tie : ${userSelection} vs ${computerSelection}`);
        WinnerElement.textContent = `Tie : ${userSelection} vs ${computerSelection}`;
    } else {
        if (gameResult.charAt(0).toUpperCase() === 'U') {
            WinnerElement.textContent = `You Win ! ${userSelection} beats ${computerSelection}`;
            console.log(`You Win ! ${userSelection} beats ${computerSelection}`);
        } else {
            WinnerElement.textContent = `You Lose ! ${computerSelection} beats ${userSelection}`;
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
        userScore++;
        computerScore.textContent = computerScore;
        userScoreElement.textContent = userScore;
        return 'User won';
    }
    if ((computerChoice == 'R' && userChoice == 'S') ||
        (computerChoice == 'P' && userChoice == 'R') ||
        (computerChoice == 'S' && userChoice == 'P')
    ) {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        userScoreElement.textContent = userScore;
        return 'Computer won';
    }

}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

hookEventToButtons();

