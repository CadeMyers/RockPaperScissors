let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector (".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToText(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToText(userChoice) + " beats " + convertToText(computerChoice) + "! You won!";
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToText(computerChoice) + " beats " + convertToText(userChoice) + "! You lost!";
}
function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToText(userChoice) + " is the same as " + convertToText(computerChoice) + "! It's a draw!";
}

function game(userChoice){
 const computerChoice = getComputerChoice();
 switch (userChoice + computerChoice){
     case "pr":
     case "sp":
     case "rs":
        win(userChoice, computerChoice);
         break;
     case "rp":
     case "sr":
     case "ps":
        lose(userChoice, computerChoice);
         break;
     case "rr":
     case "ss":
     case "pp":
        draw(userChoice, computerChoice);
         break;
 }
 
}

function main(){

rock_div.addEventListener('click', function(){
    game("r");
});

paper_div.addEventListener('click', function(){
    game("p");
});

scissors_div.addEventListener('click', function(){
    game("s");
});

}

main();