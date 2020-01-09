var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
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
      <div class="score">score = 0</div>
      <div class="time">time = 0</div> 
      <button class="start-button">Start Game</button>
      `
      var startButton = document.querySelector(".start-button");

      document.querySelector('.start-button').addEventListener('click', function(){
        event.preventDefault; 
        var time = 3; 
        var index = 0; 
        var timeEl = document.querySelector(".time")
        timeEl.innerHTML = `time = ${time}`; 
        var timerInterval = setInterval(function(){
          time--; 
          timeEl.innerHTML = time;
          //console.log(time);  
          if(time === 0){
            clearInterval(timerInterval); 
          }
        },1000)
        index++
        getQuestions(time, index, timeEl); 
          })


          function getQuestions(time, index, timeEl){
            //console.log(timeEl); 
            //console.log(index); 
            //console.log(time); 
            startButton.remove; 

            document.querySelector('body').innerHTML = 
              ` timeEl.innerHTML = ${timeEl} 
                <h2>${questions[0].title}</h2>

              `; 
              var choice = questions[0].choices;
              //console.log(choice); 
              for(var i = 0; i < choice.length; i++){
                document.querySelector("body").innerHTML += 
                `<p class = choices-${i+1} value = ${choice[i]}>${choice[i]} </p>`
              pickChoice(); 
            }

        function pickedChoice(){
          var aChoice = document.querySelector(".choices"); 
          console.log(aChoice); 
        };