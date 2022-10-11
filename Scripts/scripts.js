//anouesement the game begining!
console.log("Let's Play! [Rock Paper and Scissor's]");
//lets play the game
game();


//creating computerize random answer function for computer to play
// creat a function name : getComputerChoice()
// give that function randomly generated number
// give that value to the function local variable called rangeBoundRandom
//check wheathe the rangeBoundRandom is in first rang between 1-30
// if it is the return "rock" behalf of computer and break
// if not then check wheather the rangBoundRandom is in second rang between 31-60
// if it si then return "paper" behalf of computer and break
// if not the check wheather the rangeBoundRandom is in third rang between 60-100
// if it is the number return "scissors" behalf of computer and get the funking out of this function with the computer answer
function getComputerChoice(randomN) {
    let rangBoundRandom = randomN;
    if (rangBoundRandom >= 1 && rangBoundRandom <= 30) {
        return "rock";
    } else if (rangBoundRandom >= 31 && rangBoundRandom <= 60) {
        return "paper";
    } else {
        return "scissors"
    }
}

// creating a case-insensitive function which i handeled on line #8 by using toLowerCase() method called as playRound
// this function has 2 parameters named: playerSelection,computerSelection
//now here we states as "You Lose!" Paper beats Rock"
// or "You lose! Rock beats Scissors"
// or "You lose! Scissors beats Paper"

function playRound(palyerSelection, computerSelection) {
    let a = palyerSelection, b = computerSelection;
    if (a === 'rock' && b === 'scissors') {
        return "You lose! Rock beats Scissors";
    } else if (a === 'paper' && b === 'rock') {
        return "You lose! Paper beats Rock";
    } else if (a === 'scissors' && b === 'paper') {
        return "Your lose! Scissors beats Paper";
    } else {
        return "It's a tie! You both choose the same.";
    }
}

//Now let's write a function called game() 
// just make sure palyer get the 5 chance to play
// by using playRound function
//using loop now for that 
//simply start with a variabel which is start with 0
// then it increses by one and until the starting value increses the limit of 5
// its break the loop
// and game of rock paper and scissors stops.

function game() {
    for (let i = 0; i < 5; i++) {
        // random number generator for random name selection
        let randomNum = Math.floor(Math.random() * 100) + 1;
        //computer choice random dicesion
        let computerChoice = getComputerChoice(randomNum);
        //now let player choose what he want from rock paper and scissors
        let playerChoice = prompt("Ready Player! Choose between [Rock , Paper , Scissors]",).toLowerCase();
        //lets play the  round of the game .
        console.log(playRound(playerChoice, computerChoice));
    }
}

