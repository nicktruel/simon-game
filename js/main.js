$(document).ready(function(){

 $(function(){
    $(".green").click(function(){
        greenSound.play();
        $(".green").addClass("pressGreen");
        setTimeout(eraseClass, 150);
    });
        function eraseClass(){
            $(".green").removeClass("pressGreen");
        }
 });
    
 $(function(){
    $(".red").click(function(){
        redSound.play();
        $(".red").addClass("pressRed");
        setTimeout(eraseClass, 150);
    });
        function eraseClass(){
            $(".red").removeClass("pressRed");
        }
 });
 
 $(function(){
    $(".yellow").click(function(){
        yellowSound.play();
        $(".yellow").addClass("pressYellow");
        setTimeout(eraseClass, 150);
    });
        function eraseClass(){
            $(".yellow").removeClass("pressYellow");
        }
 });
 
 $(function(){
    $(".blue").click(function(){
        blueSound.play();
        $(".blue").addClass("pressBlue");
        setTimeout(eraseClass, 150);
    });
        function eraseClass(){
            $(".blue").removeClass("pressBlue");
        }
 });

var greenSound = document.createElement("audio");
  greenSound.src = "sounds/simonSound1.mp3";
  greenSound.volume = 0.2;

var redSound = document.createElement("audio");
  redSound.src = "sounds/simonSound2.mp3";
  redSound.volume = 0.2;

var yellowSound = document.createElement("audio");
  yellowSound.src = "sounds/simonSound3.mp3";
  yellowSound.volume = 0.2;

var blueSound =document.createElement("audio");
  blueSound.src = "sounds/simonSound4.mp3";
  blueSound.volume = 0.2;
  
  
  

/*
 var buttons = $(".green", ".red", ".yellow", ".blue");
 
 buttons.each(function(){
     var thisButtons = $(this);
     thisButtons.click(function(){
         thisButtons.addClass("pressBlue");
         setTimeout(eraseClass, 150);
     });
        function eraseClass(){
            thisButtons.removeClass("pressBlue");
        }
 });
 */
 
 
  

});






