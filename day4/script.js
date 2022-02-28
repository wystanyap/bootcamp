var Accordion = (function ($css){

    function toggle(el){
        var nextDiv = $( el ).next();
        if(nextDiv.hasClass("active")){
            nextDiv.removeClass("active");
            nextDiv.addClass("inactive");
        } else{
            nextDiv.removeClass("inactive");
            nextDiv.addClass("active");
        }
    }

    return{
        toggle:toggle
    }

})($)