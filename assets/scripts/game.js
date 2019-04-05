$(document).ready(function(){
  // variables needed: question#, answers, time limit 

  var time = 15;
  var intervalId;
  var questionCvar = 0;
  var correctAnswer = 0;
  var wrongAnswer = 0;
  var $findVal;

  var btnChoice = false;
  

  

  // Array: need an array with objects inside of it with the questions and answers

  var triviaQ = {
    1: {
      Question: "The number 4 shows up mulltiple times during the seder. Which is NOT a reference to the number 4?",
      Answer: {
        A: {
          a: "Questions",
          b: 0
        },
        B: {
          a: "Cups of Wine",
          b: 0
        },
        C: {
          a: "Plagues",
          b: 1
        },
        D: {
         a: "Sons",
         b: 0
        },
      }
    },
    2: {
      Question: "In the final song of the seder, 'Chad Gadya/One Kid Goat' what are the active and passive roles of the fire?",
      Answer: {
        A: {
          a: "Burns the stick, quenched by water",
          b: 1
        },
        B: {
          a: "bites the cat, beaten by the stick",
          b: 0
        },
        C: {
          a: "There is no fire",
          b: 0
        },
        D: {
          a: "Toasts the marshmallow, extinguished by sand",
          b: 0
        }
      }
    },
    3: {
      Question: "What event in Jewish history is celebrated on Passover?",
      Answer: {
        A: {
          a: "The revelation at Mount Sinai",
          b: 0
        },
        B: {
          a: "The defeat of the Syrian Greek army and rededication of the Temple",
          b: 0
        },
        C: {
          a: "The Exodus from Egypt",
          b: 1
        },
        D: {
          a: "The crucifixion of Jesus of Nazareth",
          b: 0
        }
      }
    },
    4: {
      Question: "The seder is the large festive meal on the first night(s) of Passover. The word 'seder' means order. Which of the following choices lists Seder steps in the proper order?",
      Answer: {
        A: {
          a: "Sanctification of the holiday, ritual hand washing without a blessing, dipping a vegatable in salt water, breaking the middle matza",
          b: 0
        },
        B: {
          a: "Telling the story, ritual hand washing with a blessing, eating matza, eating bitter herbs, eating a 'sandwich'",
          b: 0
        },
        C: {
          a: "The full festive meal, eating the afikomen, grace after meals, songs of praise, songs of acceptance",
          b: 0
        },
        D: {
          a: "All of the above",
          b: 1
        }
      }
    },
  }
  // question cycling

  function hidden (){
    $("#answerArea").css("visibility", "visible");
  }

  function questionCycle (questionCvar){

    if (questionCvar === 5){
      return;
    };
    btnChoice = false;
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

    else if (time === 0 && questionCvar !== 5){
      questionCvar++
      questionCycle(questionCvar);
      time = 15;
      $("#timer").text(time);
      timerRun();
      $(".btnclass").css({"background-color":"#530858", "border-color":"#530858", "color":"#D3DDDA"});
      
    }
    else if (questionCvar === 5){
      clearInterval(intervalId);
      $("#timer").text("0");
      $("#clear").empty();
      $("#timer").empty()
      finalScores();

      

      
    }
  }

  function timerRun (){
    clearInterval(intervalId);
    intervalId = setInterval(minusTimer, 1000);
  }

  

  // stuff to check if the answer is correct
  function checkAnswer ($findVal) {
    if (btnChoice === true){
      return;
    }

    if ($findVal === "0") {
      wrongAnswer++;
      
    }
    else if ($findVal === "1") {
      correctAnswer++
      
    }
    console.log(`this is correct ${correctAnswer} this is wrong ${wrongAnswer}`)

  }
  // running stuff in the game
  $("#startGame").on("click", timerRun);
  $("#startGame").on("click", hidden)

  $("#answer1").on("click", function(){
    $findVal = $(this).val();
    checkAnswer($findVal);
    if (btnChoice === false) {
      $("#answer1").css({"background-color":"#7F9792", "border-color":"#7F9792", "color":"#fff"});
    }
    btnChoice = true;
    
  });
  $("#answer2").on("click", function(){
    $findVal = $(this).val();
    checkAnswer($findVal);
    if (btnChoice === false) {
      $("#answer2").css({"background-color":"#7F9792", "border-color":"#7F9792", "color":"#fff"});
    }
    btnChoice = true;
    
  });
  $("#answer3").on("click", function(){
    $findVal = $(this).val();
    checkAnswer($findVal);
    if (btnChoice === false) {
      $("#answer3").css({"background-color":"#7F9792", "border-color":"#7F9792", "color":"#fff"});
    }
    btnChoice = true;

  });
  $("#answer4").on("click", function(){
    $findVal = $(this).val();
    checkAnswer($findVal);
    if (btnChoice === false) {
      $("#answer4").css({"background-color":"#7F9792", "border-color":"#7F9792", "color":"#fff"});
    }
    btnChoice = true;
    
  });
  // function to append score to end of game
  function finalScores (){
    // div id clear
    var $newDiv = $("<div>")

    // creating a p for the "correct" score
    $("<p>").text(`Wrong: ${wrongAnswer}`)
    .addClass("display-3")
    .appendTo($newDiv);

    $("<p>").text(`Correct: ${correctAnswer}`)
    .addClass("display-3")
    .appendTo($newDiv);

    $("#clear").append($newDiv);
  }
});