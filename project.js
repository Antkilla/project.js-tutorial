//slot machine//

//deposit some money 
//determine number of lines to bet (in this case 3)
//collect a bet amount 
//spin slot machine
//check if user win, give winnings or take the bet if they lose
//play again 


const  prompt = require("prompt-sync")();


const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        
        } else {
          return numberDepositAmount;
        }    
    }   
};

deposit();