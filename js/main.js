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
   
    var suite = [];
    var userAnswer = [];
    
  
 $("#start-reset").click(function() {
    playGame();
 });
 
 function playGame() {
     userAnswer = [];
     suite.push(Math.floor(Math.random() * 4) + 1);
     
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
         endOfGame();
     }else if(currentAnswerIndex == suite.length -1){
         playGame();
     }
 }
 
 function endOfGame(){
     gameOver.play();
     greenSound.pause();
     redSound.pause();
     yellowSound.pause();
     blueSound.pause();
     $("#score").html("<h2>You Loose!!!</h2>")
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