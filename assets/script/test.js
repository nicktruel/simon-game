/*function activateGreen() {
    greenSound.play()
    $('.green-button').addClass('pressGreen').removeClass('pressGreen');
    
} 
*/

/*
function activateGreen() {
        greenSound.play();
        $('.green-button').addClass('pressGreen'),
        setTimeout(function eraseClass() { $('.green').removeClass('pressGreen') }, 150);
    }
*/
    
function turnOn() {
    $('.offGreen').removeClass('offGreen').addClass('green');
    $('.offRed').removeClass('offRed').addClass('red');
    $('.offYellow').removeClass('offYellow').addClass('yellow');
    $('.offBlue').removeClass('offBlue').addClass('blue');
    $('#start').text('playing');
    $('#message').text('');
    suite = [];
}