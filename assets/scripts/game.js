$(document).ready(function(){
  // variables needed: question#, answers, time limit 

  var time = 5;
  var intervalId;
  var questionCvar = 0;

  // Array: need an array with objects inside of it with the questions and answers

  var triviaQ = {
    1: {
      Question: "What date (on the Jewish Calendar) does Pesach(passover) start?",
      Answer: {
        A: "15th of Nissan",
        B: "The new moon of Nissan",
        C: "Trick question, there is no Passover",
        D: "The 15th of Adar"
      }
    },
    2: {
      Question: "How many questions do we ask at the seder?",
      Answer: {
        A: "Google",
        B: "4",
        C: "No questions are asked because you're already supposed ot know everything",
        D: "What's a question?"
      }
    },
    3: {
      Question: "Which direction do we lean during the seder?",
      Answer: {
        A: "Right",
        B: "left",
        C: "We don't, we float",
        D: "Badger Mole"
      }
    }
  }
  // question cycling

  function questionCycle (questionCvar){
      $("#question").text(triviaQ[questionCvar].Question);

      $("#answer1").text(triviaQ[questionCvar].Answer.A);
      $("#answer2").text(triviaQ[questionCvar].Answer.B);
      $("#answer3").text(triviaQ[questionCvar].Answer.C);
      $("#answer4").text(triviaQ[questionCvar].Answer.D);
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
      time = 5;
      $("#timer").text(time);
      timerRun();
    }
    else if (questionCvar === 4){
      return;
      // clearInterval(intervalId);
      // $("#timer").text("0");
      // $("#clear").empty();

      
    }
  }

  function timerRun (){
    clearInterval(intervalId);
    intervalId = setInterval(minusTimer, 1000);
  }

  // running stuff in the game
  $("#startGame").on("click", timerRun);
});