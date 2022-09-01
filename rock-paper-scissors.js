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

/*******Compared to decide who wins ********/

let winCon;

if (playChoice =="rock"){
    if(comChoice == "rock"){
        winCon = "draw"
    }
    else if (comChoice == "scissors"){
        winCon = "win"
    }
    else{
        winCon = "lose"
    }
}
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

console.log(winCon);
/*Give output */

/*Take computer and user choice and outcome of who wins and display */