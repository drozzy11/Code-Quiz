var quizArea = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("countdown");
var gameOver = document.getElementById("endGame")
var timerCount = 60;
var scoreForm = document.getElementById("score-form");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var questions = [
  {
    question: "Which data type is supported by JavaScript?",
    answerChoices: ["String", "Word", "Image", "Math"],
    correctAnswer: "String"
  },
 {
   question: "2st question",
   answerChoices: ["1st answer choice", "2nd", "3rd", "4th"],
    correctAnswer: "2nd"
  },
  {
    question: "3st question",
    answerChoices: ["1st answer choice", "2nd", "3rd", "4th"],
    correctAnswer: "2nd"
  },
  {
    question: "4st question",
    answerChoices: ["1st answer choice", "2nd", "3rd", "4th"],
    correctAnswer: "2nd"
  },
  {
    question: "5st question",
    answerChoices: ["1st answer choice", "2nd", "3rd", "4th", "5"],
    correctAnswer: "2nd"
  } 
];

var currentQuestion = 0;

function startGame(event) {
  event.preventDefault();
  gameOver.style.display = "none";
  // start the quiz!
  // 1. Start timer
  // 2. create a question
  // 3. create answer choices
  // 4. add event listeners to my answer choice buttons and that will validate whether they chose the right answer or not
  // 5. move on to next question

  // this function will start your timer
  startTimer();
  // this function will kick off rendering the question and answers to the page
  generateQuestion();
};

function generateQuestion() {
  var question = questions[currentQuestion].question;
  // create an element (p, div)
  var paragraph = document.createElement("p");
  // write into that element using our question variable (textContent)
  paragraph.textContent = question;
  // append that question element into our quiz area (appendChild)
  quizArea.appendChild(paragraph);
  
  // generateAnswerChoices
  generateAnswerChoices();
};

function generateAnswerChoices() {
  // for loop i < questions[currentQuestion].answerChoices.length
  // create an element (button)
  for (var i =0; i < questions[currentQuestion].answerChoices.length; i++) { 
    var answerButton = document.createElement("button");
    answerButton.textContent = questions[currentQuestion].answerChoices[i];
    answerButton.addEventListener("click", validateAnswer);
    quizArea.appendChild(answerButton);
  }
};

function validateAnswer(event) {
  event.preventDefault();
  // grab text of button that was clicked (event.target.textContent)
  var userChoice = event.target.textContent;
  // get the correct answer for the current question
  var correctAnswer = questions[currentQuestion].correctAnswer;
  // conditional statement test userChoice === correctAnswer
  if (userChoice === correctAnswer) {
    // true
    //    correct answer code
    console.log("Correct!");
  } else {
    // false
    //    incorrect answer
    //    decrease timer by 10 secs
    console.log("Incorrect!");
    timerCount -= 10;
  }
  // move onto the next question
  currentQuestion++;
  // conditional statement to check if you've reached the end of the questions array 
  if(currentQuestion === questions.length) {
    // end the game (call endGame())
    endGame();
  } else {
    // reset quiz area (quizArea.innerHTML = "", loop using .removeChild())
    while (quizArea.firstChild) {
      quizArea.removeChild(quizArea.firstChild);
    }
    // call generateQuestion again to start on the next question
    generateQuestion();
  }
};


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
      clearInterval(timeInterval);
      endGame();
      // Call the `displayMessage()` function
      // displayMessage();
    }
  }, 1000)
};

function endGame() {
  // end game whether it reaches the end of the quiz or time runs out
  // display none quiz area and display end game div

  // score
  score = timerCount;
  // display score
  getScore()
  // display high score

quizArea.style.display = "none";
// show end game div
gameOver.style.display = "block";
}



function saveScore(event) {
  event.preventDefault();

  var scoreObj = {
    initials: scoreForm.value,
    score: timerCount
  };
  // sets the score into local storage
  localStorage.setItem("score", JSON.stringify(scoreObj));
};

function getScore() {
  var highScore = JSON.parse(localStorage.getItem("score"));
  if (highScore !== null) {
    // if there is a score saved in local storage, display it
    console.log("High score: " + highScore.score + " by " + highScore.initials);
  } else {
    // if there is no score saved in local storage, display a message
    console.log("No high score yet.");
  }
}

  

startBtn.addEventListener("click", startGame);

saveScoreBtn.addEventListener("click", saveScore);
