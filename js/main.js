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
   
    var suite = [];
    var userAnswer = [];
    var round = 0;

 $("#start").click(function turnOn() {
       suite = [];
       round = 0;
       $(".offGreen").addClass("green").removeClass("offGreen");
       $(".offRed").addClass("red").removeClass("offRed");
       $(".offYellow").addClass("yellow").removeClass("offYellow");
       $(".offBlue").addClass("blue").removeClass("offBlue");
       playGame();
       $(this).text("playing");
       $("#message").text("");
 });
 
 
 function playGame() {
     userAnswer = [];
     suite.push(Math.floor(Math.random() * 4) + 1);
     round += 1;
     document.getElementById("count").innerHTML = round;
     for (var i = 0; i < 2; i++) {
        var buttonOn = suite[i];
            if(buttonOn == 1) {
                setTimeout(function (){activateGreen()}, 800 * (i + 1));
            }
            if(buttonOn == 2) {
                setTimeout(function (){activateRed()}, 800 * (i + 1));
            }
            if(buttonOn == 3) {
                setTimeout(function (){activateYellow()}, 800 * (i + 1));
            }
            if(buttonOn == 4) {
                setTimeout(function (){activateBlue()}, 800 * (i + 1));
            }
     }
 }
 
 function compareAnswer() {
     var currentAnswerIndex = userAnswer.length - 1;
     var currentAnswer = userAnswer[currentAnswerIndex];
     
     if (currentAnswer != suite[currentAnswerIndex]) {
         looseGame();
     }
     if (currentAnswerIndex == suite.length - 1) {
         playGame();
     }
     if (suite.length == 3) {
         winGame();
     }
 }
 

 function looseGame(){
     suite = [];
     gameOver.play();
     greenSound.pause(), redSound.pause(), yellowSound.pause(), blueSound.pause();
     $("#message").append("<h2>try again!!!</h2>");
     $("#start").text("press to start");
 }
 
 function winGame(){
     winSound.play();
     activateGreen(), activateRed(), activateYellow(), activateBlue();
     greenSound.pause(), redSound.pause(), yellowSound.pause(), blueSound.pause();
     $("#message").append("<h2>you win!!!</h2>");
     $("#start").text("play again");
     $(".green").addClass("pressGreen"), $(".red").addClass("pressRed"), $(".yellow").addClass("pressYellow"), $(".blue").addClass("pressBlue");
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
        $(".offGreen").mousedown(function() {
            activateGreen();
            userAnswer.push(1);
            compareAnswer();
        });
    });

    $(function() {
        $(".offRed").mousedown(function() {
            activateRed();
            userAnswer.push(2);
            compareAnswer();
        });
    });

    $(function() {
        $(".offYellow").mousedown(function() {
            activateYellow();
            userAnswer.push(3);
            compareAnswer();
        });
    });

    $(function() {
        $(".offBlue").mousedown(function() {
            activateBlue();
            userAnswer.push(4);
            compareAnswer();
        });
    });



});