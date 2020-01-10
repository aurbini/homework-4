//Grab elements from HTML 
var startGameButton = document.getElementById('start-game-button'); 
var gameArea = document.getElementById('game-area'); 
var choiceList = document.getElementById('choice-list'); 
var choices = document.getElementById('choices'); 
var timer = document.getElementById('time'); 

//starter data 
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
  //build out the content
  //console.log(questions[currentQuestion].title)
  //console.log(currentQuestion)
  questionTitle.textContent = questions[currentQuestion].title; 
  //place the h2 in the game area 
  gameArea.appendChild(questionTitle);
  //Run through the array of questions 
  
  for(var i = 0; i <= questions[currentQuestion].choices.length;i++){
    //console.log(i); 
    //onsole.log(questions[currentQuestion].choices.length)
    //create element for current choice and add content
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
      //choiceList.removeChild(choiceList.lastElementChild); 
      getQuestion(questionTitle); 
      }else{
      //currentQuestion++
      currentQuestion++
      while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
        }
      // event.target.innerText = ''
      //console.log(questionTitle); 
      //choiceList.removeChild(choiceList.lastElementChild); 

      getQuestion(questionTitle); }
    }else {
      timer.remove(); 
      gameArea.innerHTML = '';
      var scoreForm = document.createElement('form'); 
      scoreForm.innerText = time; 
      gameArea.appendChild(scoreForm);  
    }
}

function notGameOver(){
  //console.log(currentQuestion); 
  //console.log(questions.length); 
  if(currentQuestion === questions.length -1){
    return false; 
  }
  else if (currentQuestion < questions.length- 1){
    return true; 
  }else{
    return false; 
}
}
 //Events or user inputs
 startGameButton.addEventListener('click', startGame); 
 choices.addEventListener('click',choiceChecker); 