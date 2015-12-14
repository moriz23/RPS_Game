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

  $("h2").hide();
  $("h1").hide();
  $(".icons").hide();

  $("button").on("click", function() {
    $("h2").fadeIn(500);
    $("h1").fadeIn(500);
    $(".icons").show();
    $("button").hide();
  });

  $("a").hover(function () {
  $(this).addClass("pulse");
});


  $("a").on("click", function() {
    userChoice = this.id;
    computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(userChoice, computerChoice);
    if(userChoice === computerChoice) {
        alert("TIE");
      } 

        else if (userChoice === "Rock" && computerChoice === "Scissors") {
        alert("YOU WIN");
        userScore++;
        $(".userScore").html(userScore);

      } else if (userChoice === "Rock" && computerChoice === "Paper") {
        alert("YOU LOST");
        computerScore++;
        $(".computerScore").html(computerScore);
      } 

        else if (userChoice === "Paper" && computerChoice === "Scissors") {
        alert("YOU LOST");
        computerScore++;
        $(".computerScore").html(computerScore);

      } else if (userChoice === "Paper" && computerChoice === "Rock") {
        alert("YOU WIN");
        userScore++;
        $(".userScore").html(userScore);

      } 
        else if (userChoice === "Scissors" && computerChoice === "Rock") {
        alert("YOU LOST");
        computerScore++;
        $(".computerScore").html(computerScore);

      } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        alert("YOU WIN");
        userScore++;
        $(".userScore").html(userScore);
      }
      roundCounter++;
      $(".round").html(roundCounter);
      console.log(userChoice, computerChoice);
      
  });
});