//Grab elements from HTML 
var startGameButton = document.getElementById('start-game-button'); 
var gameArea = document.getElementById('game-area'); 
var choiceList = document.getElementById('choice-list'); 
var choices = document.getElementById('choices'); 
var timer = document.getElementById('time'); 
var scoreArea = document.getElementById("score-area");



var scoreForm = document.createElement('form'); 
var showScore = document.createElement('span')
var initialsForm = document.createElement('input');
var enterScore = document.createElement('submit');

var scoreInitialForm = document.createElement('div');
//starter data 
var finalScore = document.createElement('p'); 

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
  choices: ["strings", "bigint", "alerts", "numbers"],
  answer: "alerts"
},
{
  title: "The condition in an if / else statement is enclosed within ____.",
  choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  answer: "parentheses"
},{
title: "What would you use to go over each part of a list",
choices: ["loop", "incrementer", "variable", "notation"],
answer: "loop"
},{
  title: "What type of data is a true variable",
  choices: ["`1string", "number", "null", "bool"],
  answer: "bool"
  },{
    title: "What type of data structure has an index.",
    choices: ["object", "number", "array", "boolean"],
    answer: "array"
    } 
]

//global variables 
var time = 0; 
var finalScore; 
var questionTitle = document.createElement('h2')
//index of currrent question 
var currentQuestion = 0; 

var startGame = function (){
  //hide the start button
  startGameButton.style.display = 'none'
  time = 70; 
  var timerInterval = setInterval(function(){
    time--; 
    timer.textContent = time; 
    if(time === 0){
      clearInterval(timerInterval); 
    }
  },1000)
  //display list
  choiceList.setAttribute('display', 'block'); 
  choiceList.setAttribute('display', 'block'); 

  getQuestion(questionTitle); 
}
function getQuestion(questionTitle){
  questionTitle.textContent = questions[currentQuestion].title; 
  gameArea.appendChild(questionTitle);
  //Run through the array of questions 
  
  for(var i = 0; i <= questions[currentQuestion].choices.length;i++){
    var choice = document.createElement('p');
    choice.textContent = questions[currentQuestion].choices[i]; 
    choice.setAttribute('id', `choice${i}`); 
    choice.setAttribute('value', `${questions[currentQuestion].choices[i]}`); 
    //place the choice in the game area
    choices.appendChild(choice); 
 }
}
function choiceChecker(){
  if(notGameOver()){
    if(event.target.innerText === questions[currentQuestion].answer){
      currentQuestion++

      while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
      }//console.log('loop end')
      getQuestion(questionTitle); 
      }else{
      time = time - 10; 
      currentQuestion++
      while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
        }
      getQuestion(questionTitle); }
    }else {
      timer.remove(); 
      gameArea.innerHTML = ''; 
      initialsForm.setAttribute('type', 'text'); 
      showScore.innerText = time;
      enterScore.setAttribute('type', 'submit');  
      enterScore.innerHTML = 'enter score'; 


      gameArea.appendChild(scoreForm);
      scoreForm.appendChild(showScore);
      scoreForm.appendChild(initialsForm);
      gameArea.appendChild(enterScore); 
     
    }
}

function notGameOver(){
  if(currentQuestion === questions.length -1){
    return false; 
  }
  else if (currentQuestion < questions.length- 1){
    return true; 
  }else{
    return false; 
}
}

function storeScore(event){
   if(initialsForm.value.length !== 0){
    gameArea.innerHTML = ''; 
    finalScore = time; 
    console.log(finalScore); 
    var scoreObjects = {
       initials : initialsForm.value,
       score: finalScore
   }
  //console.log(scoreObjects);
  window.localStorage.setItem('scoreItem',JSON.stringify(scoreObjects));
  printScore(); 
  }
}
var goBack = document.getElementById('go-back');

function printScore(){
  goBack.setAttribute("style", "display: block;");
  var player = JSON.parse(window.localStorage.getItem('scoreItem'));
  var playerScore = document.createElement('p');
  playerScore.innerText = player.initials + ":" + player.score
  scoreArea.appendChild(playerScore); 
}


//
startGameButton.addEventListener('click', startGame); 
choices.addEventListener('click',choiceChecker); 
enterScore.addEventListener('click', storeScore);