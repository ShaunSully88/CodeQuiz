
var timerEl = document.getElementById("timer");
var timeLeft= 75;
var startQuiz = "";




// timer countdown //

function countdown() {
   document.getElementById("start").addEventListener("click",  function (){

    var timeLeft= 75;
    var timeInterval = setInterval(function() {
        document.getElementById("timer").innerHTML = timeLeft + " " + "seconds remaining";

        timeLeft -= 1;

        if(timeLeft <= 0) {
            clearInterval(timeInterval);
            document.getElementById("timer").innerHTML = "You have run out of time!"
            
        }
    }, 1000
    );
    

    console.log(timer);
   
    
})};    
    
countdown();


function startQuiz() {
    startPage

    countdown();

}


//Questions//
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
    },  
    {
     questionText: " String Values must be enclosed in within ____ when being assigned to variables.",
     answers: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
     correct: "3"
    }
 
 ];

// HighScores//

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

saveHighScore =  e => {
    e.preventDefault();
    var score = { 
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort( (a, b) => b.score - a.score)

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    
}