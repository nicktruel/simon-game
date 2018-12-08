$(document).ready(function(){
 
 $(function(){
    $(".green").click(function(){
        $(".green").addClass("pressGreen");
        setTimeout(eraseClass, 150);
    });
        function eraseClass(){
            $(".green").removeClass("pressGreen");
    }
 });
    
 $(function(){
    $(".red").click(function(){
        $(".red").addClass("pressRed");
        setTimeout(eraseClass, 150);
    });
        function eraseClass(){
            $(".red").removeClass("pressRed");
    }
 });
 
 $(function(){
    $(".yellow").click(function(){
        $(".yellow").addClass("pressYellow");
        setTimeout(eraseClass, 150);
    });
        function eraseClass(){
            $(".yellow").removeClass("pressYellow");
    }
 });
 
 $(function(){
    $(".blue").click(function(){
        $(".blue").addClass("pressBlue");
        setTimeout(eraseClass, 150);
    });
        function eraseClass(){
            $(".blue").removeClass("pressBlue");
    }
 });
 

})