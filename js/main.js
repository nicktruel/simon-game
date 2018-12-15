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
    
    var suite = [];
  //var userAnswer = [];
  //var roundNumber = [];
    
//  Random suite    
   
 /*   $("#start-reset").click(function() {   
        startSuite();
            function startSuite() {
                var i;
                for (i = 0; i < 10; i++) {
                    var actualLight = suite[i];
                    if (actualLight === 0) activateGreen();
                    if (actualLight == 1) activateRed();
                    if (actualLight == 2) activateYellow();
                    if (actualLight == 3) activateBlue();
                }
            }
    });
    
    
    activateBlue();
    activateGreen();
    activateYellow();
    activateRed();
   */ 
  
 $("#start-reset").click(function() {
     startSuite();
     flashLight();
 });
 
 function startSuite() {
     suite = [];
     var i;
     for (i = 0; i < 10; i++) {
         suite.push(Math.floor(Math.random() * 4) + 1);
 
     }
 }
 
  function flashLight() {
         var i = 0;
         var actualLight = suite[i];
         if (actualLight == 1) { activateGreen() }
         if (actualLight == 2) { activateRed() }
         if (actualLight == 3) { activateYellow() }
         if (actualLight == 4) { activateBlue() }
 
     }
 
    
// functions for 4 color buttons activated 

    function activateGreen() {
        $(".green").addClass("pressGreen"), greenSound.play();
        setTimeout(function eraseClass() { $(".green").removeClass("pressGreen") }, 150);
    }

    function activateRed() {
        $(".red").addClass("pressRed"), redSound.play();
        setTimeout(function eraseClass() { $(".red").removeClass("pressRed") }, 150);
    }

    function activateYellow() {
        $(".yellow").addClass("pressYellow"), yellowSound.play();
        setTimeout(function eraseClass() { $(".yellow").removeClass("pressYellow") }, 150);
    }

    function activateBlue() {
        $(".blue").addClass("pressBlue"), blueSound.play();
        setTimeout(function eraseClass() { $(".blue").removeClass("pressBlue") }, 150);
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



});