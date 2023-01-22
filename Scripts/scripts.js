//create a function for computer ramdom selection
function getComputerChoice() {
    let randomN = Math.floor(Math.random()*100)
    
    if(randomN >= 0 && randomN <= 30) {
        return 'rock';
    }else if(randomN >= 31 && randomN <= 60) {
        return 'paper';
    }else {
        return 'scissors';
    }
}
//create a function for simply play a singel round and give a simple conclusion
function playRound(playerSelection, computerSelection) {
    const cSelection = computerSelection;
    const pSelection = playerSelection.toLowerCase();

        if(pSelection === 'rock'){
            const isRock = true;
            if(isRock && cSelection ==='scissors'){
                console.log(`You Win! ${pSelection} beats ${cSelection}`);
                return 'win' ;
            }else if(isRock && cSelection ==='paper'){
                console.log(`You Lose!${pSelection} beats ${cSelection}`);
                return 'lose';
            }else {
                console.log(`It's a tie you both choose same ${pSelection}`);
                return 'tie' ;
            }
        }else if(pSelection === 'paper'){
            const isPaper = true;
            if(isPaper && cSelection ==='rock'){
                console.log(`You Win! ${pSelection} beats ${cSelection}`);
                return 'win' ;
            }else if(isPaper && cSelection ==='scissors'){
                console.log(`You Lose!${pSelection} beats ${cSelection}`);
                return 'lose';
            }else {
                console.log(`It's a tie you both choose same ${pSelection}`);
                return 'tie' ;
            }
        }else{
                const isScissors = true;
                if(isScissors && cSelection ==='paper'){
                    console.log(`You Win! ${pSelection} beats ${cSelection}`);
                    return 'win' ;
                }else if(isScissors && cSelection ==='rock'){
                    console.log(`You Lose!${pSelection} beats ${cSelection}`);
                    return 'lose';
                }else {
                    console.log(`It's a tie you both choose same ${pSelection}`);
                    return 'tie' ;
                }
        }

    
    

}

//create a function for play the game for five time in a row and dicide whos is winner.
function game(){
    let win = 0;
    let lose = 0;
    let tie = 0;
    for(let i = 1; i <= 5; i++) {
        const playerSelection = prompt('Enter your secletion (rock, paper,scissors)');
        const computerSelection = getComputerChoice();
        const round = playRound(playerSelection, computerSelection);
       //console.log(round);
       //let's count the wins , loses and ties
        if(round === 'win'){   
            win++;
        }else if(round === 'lose'){  
            lose++;
        }else { 
            tie++;
        }
 } 
 console.log(`Wins = ${win}, Lose = ${lose}, Tie = ${tie}`);
   if(win > lose){
        console.log('You Win Player and Computer Loses');
    }else if(win < lose){
        console.log('You Lose Player and Computer Wins');
    }else {
        console.log('its a tie');
    }
}
game();