$(document).ready(function() {
  var userChoice;
  var computerChoice;
  var userScore = 0;
  var computerScore = 0;
  var roundCounter = 1;
  var computerOptions = [
    "Rock",
    "Paper",
    "Scissors"
  ]

  $("a").on("click", function() {
    userChoice = this.id;
    computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(userChoice);
    if(userChoice === computerChoice) {
       $(".icons").fadeOut(500);
       $(userChoice).show;
      } 

        else if (userChoice === "Rock" && computerChoice === "Scissors") {
        $(".icons").fadeOut(500);
        $(userChoice).fadeIn(500);
        userScore++;
        $(".userScore").html(userScore);

      } else if (userChoice === "Rock" && computerChoice === "Paper") {
        $(".icons").fadeOut(500);
        $(userChoice).fadeIn(500);
        computerScore++;
        $(".computerScore").html(computerScore);
      } 

        else if (userChoice === "Paper" && computerChoice === "Scissors") {
        $(".icons").fadeOut(500);
        $(userChoice).fadeIn(500);
        computerScore++;
        $(".computerScore").html(computerScore);

      } else if (userChoice === "Paper" && computerChoice === "Rock") {
        $(".icons").fadeOut(500);
        $(userChoice).fadeIn(500);
        userScore++;
        $(".userScore").html(userScore);

      } 
        else if (userChoice === "Scissors" && computerChoice === "Rock") {
        $(".icons").fadeOut(500);
        $(userChoice).fadeIn(500);
        computerScore++;
        $(".computerScore").html(computerScore);

      } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        $(".icons").fadeOut(500);
        $(userChoice).fadeIn(500);
        userScore++;
        $(".userScore").html(userScore);
      }
      roundCounter++;
      $(".round").html(roundCounter);
      console.log(userChoice);
      
  });
});