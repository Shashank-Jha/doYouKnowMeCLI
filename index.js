
var readlinesync = require('readline-sync');
var figlet = require('figlet');
var chalk = require('chalk');

console.log(chalk.blueBright(figlet.textSync("DO YOU NOW ME ? \n")));
//Input userName
var userName = readlinesync.question("What is your Name ? ");

var score = 0;

console.log(chalk.bgBlueBright("\nWelcome " + userName + " to DO YOU KNOW ME ?\n"));
//quiz game function
function play(question, answer) {
  
  var ans = readlinesync.question(question);
  if (ans.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreenBright("Sahi Uttar Apka !!!"));
    score = score + 1;

  }
  else {
    console.log(chalk.bgRedBright("Uff, yeh galat uttar hai :( !!!"));

  }
  console.log(chalk.bgCyan("Current Score : " + score));
  console.log(chalk.red("\n=========================\n"));
}

var questions = [
  {
    question: "What is my age? ",
    answer: "20"
  },
  {
    question: "Who is my favorite superhero ? ",
    answer: "Spiderman"
  },
  {
    question: "My Favorite Anime ? ",
    answer: "Demon Slayer"
  },
  {
    question: "Musical Instrument I wanna Learn ? ",
    answer: "Guitar"
  },
  {
    question: "My Favorite DragonBall Z Character ? ",
    answer: "Gohan"
  }
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i].question;
  var currentAnswer = questions[i].answer;
  play(currentQuestion, currentAnswer);
}

console.log(chalk.blueBright(figlet.textSync("Thanks For Playing ! \n")));