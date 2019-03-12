var suite = [];
var round = 0;

function turnOn() {
    $('.offGreen').removeClass('offGreen').addClass('green');
    $('.offRed').removeClass('offRed').addClass('red');
    $('.offYellow').removeClass('offYellow').addClass('yellow');
    $('.offBlue').removeClass('offBlue').addClass('blue');
    $('#start').text('playing');
    $('#message').text('');
    suite = [];
    round = 0;
}



var userAnswer = [];

function compareAnswer() {
     
     var currentAnswerIndex = userAnswer.length - 1;
     var currentAnswer = userAnswer[currentAnswerIndex];
     
     if (currentAnswer != suite[currentAnswerIndex]) {
         looseGame();
     }
    /* if (currentAnswerIndex == suite.length - 1) {
         playGame();
     }
     if (suite.length == 3) {
         winGame();
     }  */
 }
 
 
 function looseGame(){
     suite = [];
     gameOver.play();
     greenSound.pause(), redSound.pause(), yellowSound.pause(), blueSound.pause();
     $('#message').append('<h2>try again!!!</h2>');
     $('#start').text('press to start');
 }


