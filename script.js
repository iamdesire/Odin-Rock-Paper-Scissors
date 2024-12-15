
//This function allows the computer to randomly choose
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
//This function allows the player to enter his choice
  function getPlayerChoice() {
    let humanChoice = prompt("Choose between : 'rock', 'paper', or 'scissors'?");
    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        humanChoice = prompt("Please enter a valid choice : rock, paper or scissors ?");
    }
    return humanChoice;
  }
  
//This function allows you to play, which takes into account the choice of the player and the computer
  function playRound(humanChoice, computerChoice) {
    let hummanScore = 0;
    let computerScore = 0;
    let message = "";
    if (humanChoice === computerChoice) {
      return "Equality !";
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        hummanScore++;
        message = "You won, score: "+hummanScore;
        return message;
    } else {
        computerScore++;
        message = "Computer won, score: "+computerScore;
        return message;
    }
  }
  
//The function allows you to play in 5 rounds, the one who wins the most rounds will be the final winner
  function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i<5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getPlayerChoice();
        const result = playRound(humanChoice, computerChoice);
        const playerMessage = "You won";
        const computerMessage = "Computer won";

        console.log("You have chosen : ", humanChoice);
        console.log("The computer has chosen : ", computerChoice);

        if (result.includes(playerMessage)){
            playerScore++;
            console.log("You won "+playerScore);
        }
        else if (result.includes(computerMessage)){
            computerScore++;
            console.log("Computer won "+computerScore);

        }
        else{
            console.log("Equal");
        }
    }

    if (playerScore>computerScore){
        console.log("----------------------------------------------------------");
        console.log("YOU WIN THE GAME WITH SCORE: "+playerScore)
    }
    else if (playerScore<computerScore){
        console.log("----------------------------------------------------------");
        console.log("Computer WIN THE GAME WITH SCORE: "+computerScore)
    }
    else{
        console.log("----------------------------------------------------------");
        console.log("NOT WINNER") 
    }
  }

  playGame();