var quizArea = document.getElementById('quiz');
var startBtn = document.getElementById('Startbutton');
var timerCount = 60;

var questions = [
    //can copy this over and over for each question just change value 
    {
        question: "1st question",
        answerChoices: ["1st answer choice", '2nd', '3rd']
        correctAnser: "2nd"
    }
];

function startGame(event) {
    event.preventDefault();
    //start quiz
    // 1 crate a question
    // 2 start timer
    generateQuestion()
    // 2 create answer choices 
    
    //3 add event listeners to my andwer choice button adn that iwll validate whether
    // they chose the right answer or not 
    //4 mon on to next question 

}

function generateQuestion() {
    var question = questions[currentQuestion].question;
    // for loop i< questions[currentQuestion]
    // create and element (p,div)
    //write into that elelmebt using our quesiton variable (text cotent)
    //add event listener btn.addEvent Listenr('click', validateAnswer)
    //appent that question element into our quiz area (appent child)
    
}


function validateAnswer(event) {
    event.preventDefault();
    //grav text of button that was clicked (event.target.textvontent)

    //conditoinal statement test userChoice === correctAnswer
    // reset quiz area (quizArea.innerHTML ="") Can also loop using .removeChild()
 generateQuestion()
}

function startTimer() {
timer = setInterval(function(){
    tiemrDisplay.textContent
})
}

function endGame(){
 

}//reaches end of quiz or time runs out 
startBtn.addEventListener('click', startGame);