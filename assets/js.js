
var timerEl = document.getElementById("timer");
var timeLeft= 75;
var highscore = timeLeft;
var questionContainerElement = document.getElementById("question-container");
var resultsContainer = document.getElementById("results");
var startButton = document.getElementById("start-btn");
var currentQuestion
var questions = [
    {
        question: "Commonly used data types do not include:",
        answer:[ 
            {1:"Strings", correct: false},
            {2: "Booleans", correct: true},
            {3: "Alerts", correct: false},
            {4: "Numbers", correct: false}
            ]
       },
       {
        questionText: "The condition in an if/else statement is enclosed with _____.",
        answer: [
            {1: "Quotes", correct: true},
            {2: "Curly Brackets", correct: false},
            {3: "Parenthesis", correct: false},
            {4: "Square Brackets", correct: false}
        ]
       },
       {
        questionText: "Arrays in Javascript can be used to store _____." ,
        answer: [
            {1: "Numbers and Strings", correct: false},
            {2: "Other Arrays", correct: false},
            {3: "Booleans", correct: true},
            {4: "All of the above", correct: false}
        ]
       },  
       {
        questionText: " String Values must be enclosed in within ____ when being assigned to variables.",
        answer: [
            {1: "Commas", correct: false},
            {2: "Curly Brackets", correct: false},
            {3: "Quotes", correct: true},
            {4: "Parenthesis", correct: false}
        ]
       }
];




function selectAnswer(){}


// timer countdown //

// Do not touch countdown Function, it works //

function countdown() {

   document.getElementById("start-btn").addEventListener("click",  function (){
    
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
    
    startButton.classList.add("hide")
questionContainerElement.classList.remove("hide")  
NextQuestion()


function nextQuestion(){}

})};    
    
countdown(); 





//Questions//


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
    
};