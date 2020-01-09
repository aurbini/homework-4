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
          var aChoice1 = document.querySelector(`.choices-1`); 
          var aChoice2 = document.querySelector(`.choices-2`); 
          var aChoice3 = document.querySelector(`.choices-3`); 
          var aChoice4 = document.querySelector(`.choices-4`); 


          aChoice1.addEventListener("click",function(){
            // console.log("bla")
            // console.log(aChoice1.getAttribute('value'))

          //  console.log(questions);
             console.log(index); 
             if(aChoice1.getAttribute('value') === questions[index].answer){
              console.log("bla") 
              index++; 
              console.log("index", index)
              getQuestions(i, index,null)
             }else{
              console.log(index);
              index++; 
              getQuestions(i, index,null)

              //console.log("bla")
               //time = time - 15; 
              // getQuestions(index, null); 

             }
          
         })
      }