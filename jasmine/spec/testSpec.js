describe('turnOn function', function(){
    
    beforeEach(function(){
        turnOn();
    });
    
    describe('add a class to green-button', function(){
       
        it('should add pressGreen class to the green-button element', function(){
            expect($('.green-button')).toHaveClass('green');
        });
        
        it('should add pressRed class to the red-button element', function(){
            expect($('.red-button')).toHaveClass('red');
        });
        
        it('should add pressYellow class to the yellow-button element', function(){
            expect($('.yellow-button')).toHaveClass('yellow');
        });
        
        it('should add pressBlue class to the blue-button element', function(){
            expect($('.blue-button')).toHaveClass('blue');
        });
        
    }); 
    
    describe('change text of an html element', function(){
        
        it('should change the text on the start button to "playing"', function(){
            expect($('#start').text).toContainText('playing');
        });
        
        it('should empty #message element of any text', function(){
            expect($('#message').text).toContainText('');
        });
    });
    
    describe('checks if an array is emty', function(){
        it('should check the array suite is empty', function(){
            expect(suite.length).toEqual(0);
        });
    });
    
    describe('checks if an variable is equal to 0', function(){
        it('should check that var round is equal to 0', function(){
            expect(round).toBeDefined();
        });
    });
});


describe('compareAnswer function', function(){
    describe('check if an array is empty', function(){
        it('should check if userAnswer is empty', function(){
            expect(userAnswer.length).toEqual(0);
        });
    });
    
    describe('checks if a function was called', function(){
        it('should check that looseGame function was called', function(){
            spyOn(window, 'looseGame');
            compareAnswer();
            expect(window.looseGame).toHaveBeenCalled();
        });
    });
});




