/*
VERSION 2 

/*
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
      
      const $ = document.querySelector.bind(document); 

      document.querySelector("body").innerHTML += `
      <div class="header">
        <div class="score">score = 0</div>
        <div class="time">time = 0</div> 
      </div> 
      <div class="content"> 
      </div>  
      
      
      <button class="start-button">Start Game</button>
      `
      var startButton = document.querySelector(".start-button");


      

      document.querySelector('.start-button').addEventListener('click', function(){
        event.preventDefault(); 
        var time = 3; 
        var index = 0; 
        var timeEl = document.querySelector(".time")
        // timeEl.innerHTML = `time = ${time}`; 
        var timerInterval = setInterval(function(){
          time--; 
          document.querySelector(".time").innerHTML = `<div>time : ${time}</div>`;
          //console.log(time);  
          if(time === 0){
            clearInterval(timerInterval); 
          }
        },1000)
        getQuestions(time, index, timeEl); 
        })


          function getQuestions(time, index, timeEl){
            //console.log(timeEl); 
            //console.log(index); 
            //console.log(time); 
            startButton.remove(); 
         
            document.querySelector('.content').innerHTML = 
              `
                <h2>${questions[index].title}</h2>
              `; 
              var choice = questions[index].choices;
              //console.log(choice); 
              for(i = 0; i < choice.length; i++){
                document.querySelector(".content").innerHTML += 
                `<p class = choices-${i} value = ${choice[i]}>${choice[i]} </p>`
                
            }
            //console.log(index); 
            pickedChoice(i, index,time); 
          }

        function pickedChoice(i, index, time){
          //console.log(questions[index].answer); 
          var aChoice1 = document.querySelector(`.choices-0`); 
          var aChoice2 = document.querySelector(`.choices-1`); 
          var aChoice3 = document.querySelector(`.choices-2`); 
          var aChoice4 = document.querySelector(`.choices-3`); 

        
          aChoice1.addEventListener("click",function(){ 
             console.log(index); 
             if(aChoice1.getAttribute('value') === questions[index].answer){
              index++; 
              getQuestions(i, index,null)
             }else{
              index++; 
              getQuestions(i, index,null)
             } 
         })
      aChoice2.addEventListener("click",function(){
         console.log(index); 
         if(aChoice2.getAttribute('value') === questions[index].answer){
          index++; 
          getQuestions(i, index,null)
         }else{
          index++; 
          getQuestions(i, index,null)
         }
      })
  
  aChoice3.addEventListener("click",function(){
     console.log(index); 
     if(aChoice3.getAttribute('value') === questions[index].answer){
      index++; 
      getQuestions(i, index,null)
     }else{
      index++; 
      getQuestions(i, index,null)
      }
    })
aChoice4.addEventListener("click",function(){
   console.log(index); 
   if(aChoice4.getAttribute('value') === questions[index].answer){
    index++; 
    getQuestions(i, index,null)
   }else{
    index++; 
    getQuestions(i, index,null)
    }
  })
}














/*

VERSION 1 
  
          setting base variables
    var score = 0; 
    var time = 0; 


       const qs = (el) =>{
         
        
        
        
        document.querySelector(el); 
       }

    
    var questionIndex = 0; 
    score = 0
    time = 75; 
    
    //grabbing variables 
    var startButton = document.getElementById('starter-button'); 
    var questionOutput = document.getElementById('question'); 
    var answers = document.getElementById('answers-list'); 
    
    function timeClock(){
      var timerInterval = setInterval(function(){
        Score--; 
        scoreEl.textContent = Score; 
        if(Score === 0){
          clearInterval(timerInterval); 
        }
      },1000); 
    }

    function startGame(){
        startButton.style.visibility = "hidden"; 
        getQuestions()
        timeClock()
    }



  function getQuestions(){
    document.getElementById('answers-list').style.visibility = "visible"; 
    document.getElementById('question').innerHTML = questions[questionIndex].title; 
    for(var i = 0; i < questions[questionIndex].choices.length; i++){
      // create the list items 
      var listItem = document.createElement("li");
      var button = document.createElement("button"); 
      button.setAttribute('class','buttons'); 
      button.setAttribute('id',`button-${i}`; 
      
      //add content of array to the list items
      button.textContent = questions[questionIndex].choices[i]; 

      //add list items to unordered list
      document.getElementById('answers-list').appendChild(listItem).appendChild(button); 
  
    createButtons(); 
  }
  //set variables for butto
  +-="""""""""""""""""""""""""""""+   var firstButton = document.getElementById('button-0');
    console.log(firstButton); 
    var secondButton = document.getElementById('button-1')
    var thirdButton = document.getElementById('button-2')
    var fourthButton = document.getElementById('button-3')
  }

  firstButton.onclick = () => {
  var checker = firstButton.textContent;
  //check if checkanswer function 
    checkAnswer();

  //use questio
} 
  secondButton.onclick = () => {
    checkAnswer();
    getQuestions(); 
  }
  thirdButton.onclick = () => {
    checkAnswer();

    getQuestions;
  }
  fourthButton.onclick = () => {
    checkAnswer();

    getQuestions(); 
  } 




  startButton.addEventListener("click", startGame)


  /
  //correct choice function 
  function checkAnswer(selectedAnswer){
        if(selectedAnswer === questions[questionIndex].answer){
          return true; 


        }else {
          startScore -= 10; 
          return false; 
        }
  }
  document.getElementById('answers-list').style.visibility = "hidden"; 

*/