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
else if (playChoice == "scissors"){
    if(comChoice == "scissors"){
        winCon = "draw"
    }
    else if (comChoice == "paper"){
        winCon = "win"
    }
    else{
        winCon = "lose"
    }
}
else if (playChoice == "paper"){
    if(comChoice == "paper"){
        winCon = "draw"
    }
    else if (comChoice == "rock"){
        winCon = "win"
    }
    else{
        winCon = "lose"
    }
}
else{
    console.log("Please reload and enter a valid answer")
}

console.log(comChoice);
console.log(playChoice);
console.log(winCon);
