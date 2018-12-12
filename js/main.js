$(document).ready(function(){

    var greenSound = document.createElement("audio");
        greenSound.src = "sounds/simonSound1.mp3";

    var redSound = document.createElement("audio");
        redSound.src = "sounds/simonSound2.mp3";

    var yellowSound = document.createElement("audio");
        yellowSound.src = "sounds/simonSound3.mp3";
    
    var blueSound = document.createElement("audio");
        blueSound.src = "sounds/simonSound4.mp3";
      
    var startSound = document.createElement("audio");
        startSound.src = "sounds/startSound.mp3";

// functions for 4 color buttons activated 

    function activateGreen() {
         $(".green").addClass("pressGreen"), greenSound.play();
         setTimeout(function eraseClass() {$(".green").removeClass("pressGreen")}, 150);
    } 
    
    function activateRed() {
         $(".red").addClass("pressRed"), redSound.play();
         setTimeout(function eraseClass() {$(".red").removeClass("pressRed")}, 150);
    }
    
    function activateYellow() {
         $(".yellow").addClass("pressYellow"), yellowSound.play();
         setTimeout(function eraseClass() {$(".yellow").removeClass("pressYellow")}, 150);
    }  
    
    function activateBlue() {
         $(".blue").addClass("pressBlue"), blueSound.play();
         setTimeout(function eraseClass() {$(".blue").removeClass("pressBlue")}, 150);
    } 

// When color buttons are pressed

 $(function() {
     $(".green").mousedown(function() {
         activateGreen();
     });
 });

 $(function() {
     $(".red").mousedown(function() {
         activateRed();
     });
 });

 $(function() {
     $(".yellow").mousedown(function() {
        activateYellow();
     });
 });

 $(function() {
     $(".blue").mousedown(function() {
        activateBlue();
     });
 });


// When start button is pressed
 
 $(function(pressStartButton) {
    $("#star-reset").mousedown(function() {

        lightGreenButton();
        lightRedButton();
        lightYellowButton();
        lightBlueButton();

        startSound.play();

        function lightGreenButton() {
            activateGreen(), greenSound.pause();
        }

        function lightRedButton() {
            activateRed(), redSound.pause();
        }

        function lightYellowButton() {
           activateYellow(), yellowSound.pause();
        }

        function lightBlueButton() {
           activateBlue(), blueSound.pause();
        }
    });
    
 // Random suite
 
    var suite = [1, 2, 3, 2, 0, 1, 1, 2, 3, 0];
    var numberOfRound = 5;
    
    startSuite();
    
    function startSuite() {
        for (var i = 0; i < numberOfRound; i++) {
            var actualLight = suite[i];
            if (actualLight === 0) activateGreen();
            if (actualLight === 1) activateRed();
            if (actualLight === 2) activateYellow();
            if (actualLight === 3) activateBlue();
        }
    }
    
 });
   



});






