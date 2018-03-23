
    let playerPoints = 0;
    let computerPoints = 0;
    let tiedMatches = 0;

function gameForever(clicked_id){
  let playerSelection = clicked_id;
  function gameTime(){
    for (i=0; i<1; i++){
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
}
gameTime();
}
function computerPlay(){
  let computerPick = Math.floor(Math.random()*3);
  switch (computerPick){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound (playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    tiedMatches +=1;
    return document.getElementById("scoreBoard").innerHTML = "It is a tie!" + "\n" + "\n" + "You both picked: " + "\n" + playerSelection.toUpperCase() + "\n" + "\n" + "No points will be awarded." + "\n" + "\n" + "\n" + "Points: " + "\n" + "\n" + "\n" + "Your Score: " + "\n" + playerPoints + "\n" + "\n" + "Computer Score: " + "\n" + computerPoints + "\n" + "\n" + "\n" + "Tied Matches: " + "\n" + tiedMatches;
  }
  if (playerSelection === "rock"){
    if (computerSelection === "paper"){
      computerPoints +=1;
      return document.getElementById("scoreBoard").innerHTML = "User chose: " + "\n" + playerSelection.toUpperCase() + "\n" + "\n" + "and Computer chose: " + "\n" + computerSelection.toUpperCase() + "." + "\n" + "\n" + "Computer wins." + "\n" + "\n" + "\n" + "Points: " + "\n" + "\n" + "\n" + "Your Score: " + "\n" + playerPoints + "\n" + "\n" + "Computer Score: " + "\n" + computerPoints + "\n" + "\n" + "\n" + "Tied Matches: " + "\n" + tiedMatches;
    }else {
      playerPoints +=1;
      return document.getElementById("scoreBoard").innerHTML = "User chose: " + "\n" + playerSelection.toUpperCase() + "\n" + "\n" + "and Computer chose: "+ "\n" + computerSelection.toUpperCase() + "." + "\n" + "\n" + "User wins!" + "\n" + "\n" + "\n" + "Points: " + "\n" + "\n" + "\n" + "Your Score: " + "\n" + playerPoints + "\n" + "\n" + "Computer Score: " + "\n" + computerPoints + "\n" + "\n" + "\n" + "Tied Matches: " + "\n" + tiedMatches;
    }
  }
  if (playerSelection === "paper"){
    if (computerSelection === "scissors"){
      computerPoints +=1;
      return document.getElementById("scoreBoard").innerHTML = "User chose: " + "\n" + playerSelection.toUpperCase() + "\n" + "\n" + "and Computer chose: " + "\n" + computerSelection.toUpperCase() + "." + "\n" + "\n" + "Computer wins." + "\n" + "\n" + "\n" + "Points: " + "\n" + "\n" + "\n" + "Your Score: " + "\n" + playerPoints + "\n" + "\n" + "Computer Score: " + "\n" + computerPoints + "\n" + "\n" + "\n" + "Tied Matches: " + "\n" + tiedMatches;
    }else {
      playerPoints +=1;
      return document.getElementById("scoreBoard").innerHTML = "User chose: " + "\n" + playerSelection.toUpperCase() + "\n" + "\n" + "and Computer chose: "+ "\n" + computerSelection.toUpperCase() + "." + "\n" + "\n" + "User wins!" + "\n" + "\n" + "\n" + "Points: " + "\n" + "\n" + "\n" + "Your Score: " + "\n" + playerPoints + "\n" + "\n" + "Computer Score: " + "\n" + computerPoints + "\n" + "\n" + "\n" + "Tied Matches: " + "\n" + tiedMatches;
    }
  }
  if (playerSelection === "scissors"){
    if (computerSelection === "rock"){
      computerPoints +=1;
      return document.getElementById("scoreBoard").innerHTML = "User chose: " + "\n" + playerSelection.toUpperCase() + "\n" + "\n" + "and Computer chose: " + "\n" + computerSelection.toUpperCase() + "." + "\n" + "\n" + "Computer wins." + "\n" + "\n" + "\n" + "Points: " + "\n" + "\n" + "\n" + "Your Score: " + "\n" + playerPoints + "\n" + "\n" + "Computer Score: " + "\n" + computerPoints + "\n" + "\n" + "\n" + "Tied Matches: " + "\n" + tiedMatches;
    }else {
      playerPoints +=1;
      return document.getElementById("scoreBoard").innerHTML = "User chose: " + "\n" + playerSelection.toUpperCase() + "\n" + "\n" + "and Computer chose: "+ "\n" + computerSelection.toUpperCase() + "." + "\n" + "\n" + "User wins!" + "\n" + "\n" + "\n" + "Points: " + "\n" + "\n" + "\n" + "Your Score: " + "\n" + playerPoints + "\n" + "\n" + "Computer Score: " + "\n" + computerPoints + "\n" + "\n" + "\n" + "Tied Matches: " + "\n" + tiedMatches;
    }
  }
}
