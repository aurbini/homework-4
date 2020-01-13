//grab elements and creating 
var heading = document.getElementById('heading'); 
var viewHighScore = document.getElementById('high-score'); 
var gameArea = document.getElementById('game-area'); 
var choicesList = document.createElement('ul'); 
var scoreForm = document.createElement('form'); 
var goBack = document.createElement('button')
var clearScore = document.createElement('button'); 
var scoresList = document.createElement('ul'); 
var enterScoreInput = document.createElement('input'); 

//Quiz Data 
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
//userScore data
var scoresArray = [];
var scoresObject = {
}

//Global variables 
var questionIndex = 0;
var time; 

//Create Title Page elements and content
var title = document.createElement('h1'); 
var gameDescription = document.createElement('p'); 
var startGameButton = document.createElement('button'); 
//Create content for Start page
title.textContent = 'Javascript Quiz Game'; 
startGameButton.textContent = 'Start Game'; 
gameDescription.textContent = 'This is a quiz to test your knowledge of programming. Your score will be a good indicator on how you are doing compared to your classmates. It will test you on the following languages of web development, Javascript, HTML and CSS. Your score will be judged on how fast you complete the quiz and every wrong answer will deduct 10 seconds from yuor score.'
startGameButton.setAttribute('type', 'submit'); 

function oldScores(){
  var storedScores = JSON.parse(localStorage.getItem('scoreItem'));
  if(storedScores !== null){
    scoresArray = storedScores; 
  }
}oldScores(); 

function init(){ 
  //get stored scores from local storage 
  gameArea.innerHTML = ''
  questionIndex = 0;
  time = 30; 
  gameArea.appendChild(title); 
  gameArea.appendChild(gameDescription); 
  gameArea.appendChild(startGameButton);  
}
init(); 
var timerInterval; 

function stopTime(timerInterval){
  clearInterval(timerInterval); 
}

function newQuestions(){
  gameArea.innerHTML = '';
  choicesList.innerHTML = ''
  var timerInterval = setInterval(function(){
    time--; 
    if(time <= 0){
      clearInterval(timerInterval); 
      enterInitials();
    }
  },1000)
  //create game elements
  var question = document.createElement('h2'); 
  //grab questions and choices from data and display
  question.textContent = questions[questionIndex].title; 
  gameArea.appendChild(question);
  gameArea.appendChild(choicesList);  
  //Run through the array of questions 
  for(var i = 0; i < questions[questionIndex].choices.length;i++){
    var choice = document.createElement('li'); 
    choice.textContent = questions[questionIndex].choices[i]; 
    choice.setAttribute('id', `choice${i}`); 
    //choice.setAttribute('value', `${questions[currentQuestion].choices[i]}`); 
    //place the choice in the game area
    choicesList.appendChild(choice); 
  }
}
function checkChoice(event){ 
  if(questions[questionIndex +1] === undefined){
    stopTime; 
    enterInitials(); 
  }else{
    if(event.target.innerHTML === questions[questionIndex].answer){
      questionIndex++; 
      choicesList.innerHTML = ''
      newQuestions(); 
    }else{  
      questionIndex++; 
      time = time - 10; 
      choicesList.innerHTML = ''
      newQuestions(); 
      }
  }
}

function enterInitials(){
  gameArea.innerHTML = '';
  var highScoreCaption = document.createElement('h2'); 
  highScoreCaption.innerText = `Your score : ${time}`;
  scoreForm.innerText = 'Enter your initials'
  gameArea.appendChild(highScoreCaption); 
  gameArea.appendChild(scoreForm); 
  scoreForm.appendChild(enterScoreInput); 
}
function storeScore(){
   window.localStorage.setItem('scoreItem',JSON.stringify(scoresArray));
  }

  goBack.setAttribute('type', 'button'); 
  goBack.innerText = 'Go Back'; 
  clearScore.setAttribute('type', 'button'); 
  clearScore.innerText = 'Clear High Scores';

  function renderScores(){
  gameArea.innerHTML = '';
  var highScoreTitle = document.createElement('h1'); 
  highScoreTitle.innerText = 'High Scores'; 
  gameArea.appendChild(highScoreTitle); 
  scoresList.innerHtml = '';
  //Render a new li for each score
  for(var i = 0; i < scoresArray.length; i++){
    var userScore = scoresArray[i]; 
    var li = document.createElement('li'); 
    li.textContent = `${userScore.player} ${userScore.score}` ;
    scoresList.appendChild(li); 
  }
  gameArea.appendChild(scoresList); 
  gameArea.appendChild(goBack); 
  gameArea.appendChild(clearScore); 
}

function clearHighScores(){
  scoresArray = []; 
  scoresList.innerHTML = '';
  window.localStorage.setItem('scoreItem',JSON.stringify(scoresArray));
  render(); 
}
//events 
startGameButton.addEventListener('click', newQuestions); 
choicesList.addEventListener('click',checkChoice); 
goBack.addEventListener('click', init)
clearScore.addEventListener('click', clearHighScores); 
viewHighScore.addEventListener('click', renderScores);
scoreForm.addEventListener('submit', function(event){
  console.log(enterScoreInput.value)
  event.preventDefault(); 
  var initialText = enterScoreInput.value.trim(); 
  if (initialText === ""){
    return; 
  }
  //Add a player-score to array and clear input 
  scoresObject.player = initialText;
  scoresObject.score = time; 
  scoresArray.push(scoresObject); 
  enterScoreInput.value = ""; 
  storeScore();
  renderScores(); 
}); 
