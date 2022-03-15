// timer countdown //
var timerEl = document.querySelector("timer");
var timeLeft= 75;

//Highscore//
var highScoreEl = document.querySelector("#highscore");

//Starter Page//

var startPageEl = document.querySeleector("#startPage");

var questions = [
   {
      questionText: "Commonly used data types do not include:",
      answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
      correct: "2"
   },
   {
      questionText: "The condition in an if/else statement is enclosed with _____.",
      answers: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
      correct: "1"
   },
   {
      questionText: "Arrays in Javascript can be used to store _____." ,
      answers: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the above"],
      correct: "3"
   }  
   {
      questionText: " String Values must be enclosed in within ____ when being assigned to variables.",
      answers: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"]
   }

]


function countdown() {


    var timeInterval = setInterval(function() {
        timeLeft--; console.log(timeLeft);
        timerEl.textContent = "Time Left <br/>" + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            alert("You have run out of time!");
        }
    }, 1000
    );
};    

function startQuiz() {
    startPage

    countdown();

}

countdown();
