function getComputerChoice() {
    let number = Math.random();
    if (number > 0.34 && number <= 0.67) {
       return "scissors";
    } else if (number <= 0.34) {
       return "rock";
    } else {
       return "paper";
    }
 }
 
 function getHumanChoice() {
   let choice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();

   while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt("Invalid choice! Please enter Rock, Paper, or Scissors.").toLowerCase();
   }
   
   return choice;
}

function playRound(humanChoice, computerChoice) {
   if(humanChoice==computerChoice){
      return("Draw");
   }
   else if(humanChoice=='rock'&& computerChoice == 'scissors'||humanChoice=='scissors'&& computerChoice == 'paper'||humanChoice=='paper'&& computerChoice == 'rock'){
      return("You win");
   }
   else{
      return("you lose");
   }
 }


 let rounds = parseInt(prompt("Enter number of rounds:"));
 while (isNaN(rounds) || rounds <= 0) {
     rounds = parseInt(prompt("Invalid input! Enter a positive number for rounds:"));
 }
 
for(let i=0;i<rounds;i++){
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   
  console.log( playRound(humanSelection, computerSelection));
}