


/*
describe('activateGreen', function(){
    describe('add a class', function(){
        it('should  add pressGreen class to the button .offGreen', function(){
            $('.offGreen').addClass();
            expect('.offGreen').toHaveClass('pressGreen');
        });
    });
});
*/
/*
describe('change class function', function(){
    it('should add the class .pressGreen to the .green element', function(){
        activateGreen();
        expect($('.')).toHaveClass('green');
    });
});

*/

describe('add class', function(){
    it('should add class green to the offGreen element', function(){
        turnOn();
        expect($('.green-button')).toHaveClass('green');
    });
})