const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestion
let timeLeft = 75;



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function startGame() {
         timeLeft= 75;
        const timeInterval = setInterval(function() {
            document.getElementById("timer").innerHTML = timeLeft + " " + "seconds remaining";
    
            timeLeft -= 1;
    
            if(timeLeft <= 0) {
                clearInterval(timeInterval);
                document.getElementById("timer").innerHTML = "You have run out of time!"
                
            }
        }, 1000
        );
        console.log(timer);   
        
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()

}

function nextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestion])   
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } 
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })    

}

function resetState() {
    nextButton.classList.add('hide') 
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    const incorrect = selectedButton.dataset.false
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestion +1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')   
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong') 
        
    }  

// I believe code should go here //
 
}




function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
    question: "Commonly used data types do not include:",
    answers:[ 
        {text:"1. Strings", correct: false},
        {text: "2. Booleans", correct: true},
        {text: "3. Alerts", correct: false},
        {text: "4. Numbers", correct: false}
        ]
   },
   {
    question: "The condition in an if/else statement is enclosed with _____.",
    answers: [
        {text: "1. Quotes", correct: true},
        {text: "2. Curly Brackets", correct: false},
        {text: "3. Parenthesis", correct: false},
        {text: "4. Square Brackets", correct: false}
    ]
   },
   {
    question: "Arrays in Javascript can be used to store _____." ,
    answers: [
        {text: "1. Numbers and Strings", correct: false},
        {text: "2. Other Arrays", correct: false},
        {text: "3. Booleans", correct: true},
        {text: "4. All of the above", correct: false}
    ]
   },  
   {
    question: " String Values must be enclosed within ____ when being assigned to variables.",
    answers: [
        {text: "1. Commas", correct: false},
        {text: "2. Curly Brackets", correct: false},
        {text: "3. Quotes", correct: true},
        {text: "4. Parenthesis", correct: false}
    ]
   }
]




