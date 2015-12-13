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
    console.log(userChoice, computerChoice);
  });
});