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
            turnOn();
            expect($('#start').text).toContainText('playing');
        });
        
        it('should empty #message element of any text', function(){
            turnOn();
            expect($('#message').text).toContainText('');
        });
    });
    
    describe('checks if an array is emty', function(){
        it('should check the array suite is empty', function(){
            expect(suite.length).toEqual(0);
        });
    });
    
});