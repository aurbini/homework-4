



/*



  
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