$(document).ready(function() {

    var greenSound = document.createElement("audio");
    greenSound.src = "sounds/simonSound1.mp3";

    var redSound = document.createElement("audio");
    redSound.src = "sounds/simonSound2.mp3";

    var yellowSound = document.createElement("audio");
    yellowSound.src = "sounds/simonSound3.mp3";

    var blueSound = document.createElement("audio");
    blueSound.src = "sounds/simonSound4.mp3";

    var wrongSound = document.createElement("audio");
    wrongSound.src = "sounds/wrongSound.mp3";
    
    var gameOver = document.createElement("audio");
    gameOver.src = "sounds/gameover.mp3";
    
    var winSound = document.createElement("audio");
    winSound.src = "sounds/youwin.mp3";
   
    document.getElementById("count").innerHTML = "0";
   
    var suite = [];
    var userAnswer = [];
    var round = 0;
    
  
 $("#start").click(function() {
    suite = [];
    round = 0;
    setTimeout(function (){playGame();}, 300);
    $(this).text("PLAYING");
    $("#message").text("");
 });
 
 function playGame() {
     userAnswer = [];
     suite.push(Math.floor(Math.random() * 4) + 1);
     round += 1;
     document.getElementById("count").innerHTML = round;
     for (var i = 0; i < 10; i++) {
        var buttonOn = suite[i];
            if(buttonOn == 1) activateGreen();
            if(buttonOn == 2) activateRed();
            if(buttonOn == 3) activateYellow();
            if(buttonOn == 4) activateBlue();
     }
 }
 
 function compareAnswer(){
     var currentAnswerIndex = userAnswer.length -1;
     var currentAnswer = userAnswer[currentAnswerIndex];
       if(currentAnswer != suite[currentAnswerIndex]){
         looseGame();
     } if(currentAnswerIndex == suite.length -1){
         playGame();
     } if(suite.length == 11){
          winGame();
     }
 }
 
 function looseGame(){
     gameOver.play();
     greenSound.pause();
     redSound.pause();
     yellowSound.pause();
     blueSound.pause();
     $("#message").append("<h2>Try Again!!!</h2>");
     $("#start").text("PRESS TO START");
 }
 
 function winGame(){
     $("#message").append("<h2>YOU WIN!!!</h2>");
     winSound.play();
     suite = [];
 }

    
// functions for 4 color buttons activated 

    function activateGreen() {
        greenSound.play();
        $(".green").addClass("pressGreen"),
        setTimeout(function eraseClass() { $(".green").removeClass("pressGreen") }, 150);
    }

    function activateRed() {
        redSound.play();
        $(".red").addClass("pressRed"), 
        setTimeout(function eraseClass() { $(".red").removeClass("pressRed") }, 150);
    }

    function activateYellow() {
        yellowSound.play();
        $(".yellow").addClass("pressYellow"),
        setTimeout(function eraseClass() { $(".yellow").removeClass("pressYellow") }, 150);
    }

    function activateBlue() {
        blueSound.play();
        $(".blue").addClass("pressBlue"),
        setTimeout(function eraseClass() { $(".blue").removeClass("pressBlue") }, 150);
    }

// When color buttons are pressed

    $(function() {
        $(".green").mousedown(function() {
            activateGreen();
            userAnswer.push(1);
            compareAnswer();
        });
    });

    $(function() {
        $(".red").mousedown(function() {
            activateRed();
            userAnswer.push(2);
            compareAnswer();
        });
    });

    $(function() {
        $(".yellow").mousedown(function() {
            activateYellow();
            userAnswer.push(3);
            compareAnswer();
        });
    });

    $(function() {
        $(".blue").mousedown(function() {
            activateBlue();
            userAnswer.push(4);
            compareAnswer();
        });
    });



});