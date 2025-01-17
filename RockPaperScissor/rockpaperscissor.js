// get the elements and variables

const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultsDiplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let results;


// assign a score

let playerScore = 0;
let computerScore = 0;


// player

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e => {
    e.preventDefault();

    userChoice = e.target.id
    playerChoiceDisplay.innerHTML = userChoice       // assign the result to the HTML for the player
    computerPick()                                   // function for the computer pick
    checkWinner()                                    // function to check who win the round
}));

// random pick by computer

function computerPick() {
    const randomPick = Math.floor(Math.random() * 3);
 
     switch(randomPick){
         case 0:
            computerChoice = "Rock"; 
            break;
         case 1:
            computerChoice = "Paper";
            break;
         case 2:
            computerChoice = "Scissors";
            break;
     }

     computerChoiceDisplay.innerHTML = computerChoice         // assign the result to the HTML
     
    };

// play the game = results

function checkWinner() {
    if (userChoice === computerChoice) {
        results = "It's a tie!"
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
     ) {
        results = "You Win!"
        playerScore++;
    } else {
        results = "You lose! Try again next time!"
        computerScore++;
    }

    resultsDiplay.innerHTML = results               // assign the result to the HTML
};




// now we check who wins on five rounds

