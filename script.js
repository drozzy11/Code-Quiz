var quizArea = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("countdown")
var timerCount = 60;
var score;

var questions = [
  {
    question: "Which data type is supported by JavaScript?",
    answerChoices: ["String", "Word", "Image", "Math"],
    correctAnswer: "String"
  },
  {
    question: "1st question",
    answerChoices: ["1st answer choice", "2nd", "3rd", "4th"],
    correctAnswer: "2nd"
  },
  {
    question: "1st question",
    answerChoices: ["1st answer choice", "2nd", "3rd", "4th"],
    correctAnswer: "2nd"
  },
  {
    question: "1st question",
    answerChoices: ["1st answer choice", "2nd", "3rd", "4th"],
    correctAnswer: "2nd"
  },
  {
    question: "1st question",
    answerChoices: ["1st answer choice", "2nd", "3rd", "4th", "5"],
    correctAnswer: "2nd"
  }
]

var currentQuestion = 0;

function startGame(event) {
  event.preventDefault();
  // start the quiz!
  // 1. Start timer
  // 2. create a question
  // 3. create answer choices
  // 4. add event listeners to my answer choice buttons and that will validate whether they chose the right answer or not
  // 5. move on to next question

  // this function will start your timer
  startTimer()
  // this function will kick off rendering the question and answers to the page
  generateQuestion();
}

function generateQuestion() {
  var question = questions[0].question;
  // create an element (p, div)
  var paragraph = document.createElement("<p>");
  // write into that element using our question variable (textContent)
  paragraph.textContent = 
  // append that question element into our quiz area (appendChild)

  // generateAnswerChoices
  generateAnswerChoices();
}

function generateAnswerChoices() {
  // for loop i < questions[currentQuestion].answerChoices.length
  // create an element (button)

  // write into that element using our answerChoices variable (textContent)

  // add event listener btn.addEventListener("click", validateAnswer)
  
  // append that question element into our quiz area (appendChild)

}

function validateAnswer(event) {
  event.preventDefault();
  // grab text of button that was clicked (event.target.textContent)

  // conditional statement test userChoice === correctAnswer
  // true
  //    correct answer code
  // false
  //    incorrect answer
  //    decrease timer by 10 secs
  
  // move onto the next question

  // currentQuestion++
  // conditional statement to check if you've reached the end of the questions array if(currentQuestion === questions.length)
  // end the game (call endGame())
    endGame()
  // reset quiz area (quizArea.innerHTML = "", loop using .removeChild())

  // call generateQuestion again to start on the next question
  generateQuestion();
}

function startTimer() {
  var timeInterval = setInterval(function() {
    if (timerCount > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = ' Time: ' + timerCount ;
      // Decrement `timeLeft` by 1
      timerCount--;
    } else if (timerCount === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = ' Time: ' + timerCount ;
      timerCount--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      endGame()
      // Call the `displayMessage()` function
      // displayMessage();
    }
  }, 1000)
}

function endGame() {
  // end game whether it reaches the end of the quiz or time runs out
  // display none quiz area and display end game div

  // score
  score = timerCount;
  // display score

  // display high score
}

function saveScore(event) {
  event.preventDefault();

  var scoreObj = {
    intials: event.target.children[0].value,
    score: timerCount
  }
  // sets the score into local storage
  localStorage.setItem("score", JSON.stringify(scoreObj));
}

function getScore() {
  // get high score out of localstorage
  var score = JSON.parse(localStorage.getItem("score"))
  // display to end game div
  
}

startBtn.addEventListener("click", startGame);

scoreForm.addEventListener("submit", saveScore)