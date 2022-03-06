function isPalindrome(str){

    var reversi = reverse(str);

    if(str === reversi){
        return true;
    } else {
        return false;
    }
}




function reverse(str){
    var i;
    var space = "";
    for(i = str.length-1; i >= 0; i--){
        space = str[i] + space;
    }

    return space;
}


function getData(){
    $(document).ready(documentReadyCallback);

}


function documentReadyCallback(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        success: successCallBack,
        error: errorCallBack,
    })
}

function printData(response){
    var i;
    for(i = 0; i < response.length;i++){
        console.log(response[i].title);
    }
}

function successCallBack(response){
        printData(response);
}

function errorCallBack(error){
        

}

getData();


