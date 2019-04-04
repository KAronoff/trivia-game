$(document).ready(function(){
  // variables needed: question#, answers, time limit 

  var time = 40;
  var intervalId;
  var questionCvar = 0;
  var correctAnswer = 0;
  var wrongAnswer = 0;

  // Array: need an array with objects inside of it with the questions and answers

  var triviaQ = {
    1: {
      Question: "What date (on the Jewish Calendar) does Pesach(passover) start?",
      Answer: {
        A: {
          a: "15th of Nissan",
          b: 1
        },
        B: {
          a: "The new moon of Nissan",
          b: 0
        },
        C: {
          a: "Trick question, there is no Passover",
          b: 0
        },
        D: {
         a: "The 15th of Adar",
         b: 0
        },
      }
    },
    2: {
      Question: "How many questions do we ask at the seder?",
      Answer: {
        A: {
          a: "Google",
          b: 0
        },
        B: {
          a: "4",
          b: 1
        },
        C: {
          a: "No questions are asked because you're already supposed ot know everything",
          b: 0
        },
        D: {
          a: "What's a question?",
          b: 0
        }
      }
    },
    3: {
      Question: "Which direction do we lean during the seder?",
      Answer: {
        A: {
          a: "Right",
          b: 0
        },
        B: {
          a: "left",
          b: 1
        },
        C: {
          a: "We don't, we float",
          b: 0
        },
        D: {
          a: "Badger Mole",
          b: 0
        }
      }
    }
  }
  // question cycling

  function questionCycle (questionCvar){

    if (questionCvar === 4){
      return;
    };

      $("#question").text(triviaQ[questionCvar].Question);

      $("#answer1").text(triviaQ[questionCvar].Answer.A.a);
      $("#answer2").text(triviaQ[questionCvar].Answer.B.a);
      $("#answer3").text(triviaQ[questionCvar].Answer.C.a);
      $("#answer4").text(triviaQ[questionCvar].Answer.D.a);

        $("#answer1").val(triviaQ[questionCvar].Answer.A.b);
        $("#answer2").val(triviaQ[questionCvar].Answer.B.b);
        $("#answer3").val(triviaQ[questionCvar].Answer.C.b);
        $("#answer4").val(triviaQ[questionCvar].Answer.D.b);



    
    }


  // timer related stuff
  // decreasing the timer
  function minusTimer (){
    time--;
    // display the timer
    $("#timer").text(time);
    
    if (questionCvar === 0){
      questionCvar = 1;
      questionCycle(questionCvar);
    }

    else if (time === 0 && questionCvar !== 4){
      questionCvar++
      questionCycle(questionCvar);
      time = 40;
      $("#timer").text(time);
      timerRun();
    }
    else if (questionCvar === 4){
      clearInterval(intervalId);
      $("#timer").text("0");
      $("#clear").empty();
      

      
    }
  }

  function timerRun (){
    clearInterval(intervalId);
    intervalId = setInterval(minusTimer, 1000);
  }

  var $findVal = this.attr("value")

  // stuff to check if the answer is correct
  function checkAnswer ($findVal) {
    if ($findVal === 0) {
      wrongAnswer++;
    }
    else if (this.value() === 1) {
      correctAnswer++
    }
    console.log(`this is correct ${correctAnswer} this is wrong ${wrongAnswer}`)

  }
  // running stuff in the game
  $("#startGame").on("click", timerRun);

  $("#answer1").on("click", checkAnswer($findVal));
  $("#answer2").on("click", checkAnswer($findVal));
  $("#answer3").on("click", checkAnswer($findVal));
  $("#answer4").on("click", checkAnswer($findVal));

});