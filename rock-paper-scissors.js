/******Computer Choice *******/

let comChoice = getComputerChoice();

function getComputerChoice(computerChoice){
    /*Declare list of what the computer can choose from */
    const computerOptions = ["rock", "paper", "scissors"];
    /*Maths module to pick a random number from list size*/
    let pick = Math.floor(Math.random() * computerOptions.length);
    /*Use number to pick outcome and add to global variable*/
    return computerOptions[pick];

}

/*temp - Show outcome to show proof of working*/
console.log(comChoice);


/*******Player Choice******/

/*Declare player selection as global variable */
let playChoice = getPlayerChoice();
/*Declare function*/

function getPlayerChoice(checkChoice){
    /*Prompt user for input*/
    const playerChoiceUnchanged = prompt("Pick, rock, paper or scissors");
    /*Convert input to lowercase*/
    return playerChoiceUnchanged.toLowerCase();
}

    /*temp - Show outcome to show proof of working*/
console.log(playChoice);

/*Compared to decide who wins */

/*Start if statement - Rock*/
    /*If statement Check for a draw*/
    /*Else - Win Statement*/
    /*Else - Loose statement*/
/*Else - Scissors*/
    /*If statement - check for draw*/
    /*Else - Win Statement*/
    /*Else - Loose statement*/
/*Else - Paper*/
    /*If statement - check for draw*/
    /*Else - Win Statement*/
    /*Else - Loose statement*/
/*Else prompt player for different entry*/


/*Give output */

/*Take computer and user choice and outcome of who wins and display */