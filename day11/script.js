function factorial(input){
    var number = validateInput(input);
    if(number === -1){
        return number;
    }
    
    var sum = computeInput(input);   
    return sum;
}

function validateInput(input){
    if(!input || input <= 0){
        return -1;
    }
    return input;
}

function computeInput(input){
    var i;
    var sum = 1;
    for(i = 1; i <= input; i++){
        sum = i * sum;
    }
    return sum;
}




var obj = null;
function toUpperCaseObject(o){
    checkObject(o);
    toUpperAndPrint(o);


}

toUpperCaseObject(obj);

function checkObject(o){
    if(!o || !o.message){
        throw new Error("no message");
    }
}

function toUpperAndPrint(o){
    o.message = o.message.toUpperCase();
    console.log(o.message);
}
