// timer countdown //
var timerEl = document.getElementById('timer');
var secs = 0;
var timeLeft= 75;

function countdown() {
    
    var timeInterval = setInterval(function() {
        timeLeft--; console.log(timeLeft);
        timerEl.innerHTML = "Time Left <br/>" + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            alert("You have run out of time!");
        }
    }, 1000
    );
};    

countdown();
