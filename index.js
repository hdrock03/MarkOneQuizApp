var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Arjun",
    score: 5,
  },

  {
    name: "Shahil",
    score: 4,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "My favorite programming language is? ",
  answer: "JavaScript"
},
{
  question: "My favourite criketer is? ",
  answer: "M.s Dhoni"
},
{
  question: "Where is my home town? ",
  answer: "Kolkata"
},
{
  question: "Do you know my favorite show ",
  answer: "Breaking Bad"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName);
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("---------------------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log(" Great! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it in scoreboard");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();















