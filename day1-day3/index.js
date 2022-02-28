
//Problem # 1 callback hell
setTimeout(function () {
    console.log("set timeout 1");
    setTimeout(function () {
        console.log("set timeout 2");
        setTimeout(function () {
            console.log("set timeout 3");
        }, 2000);
    }, 2000);
}, 2000);



function firstPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("set timeout 1");
            resolve();
        },2000)
        
    });
}

function secondPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("set timeout 2");
            resolve();
        },2000)
        
    });
}

function thirdPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("set timeout 3");
            resolve();
        },2000)
        
    });
}

//chain promise
// firstPromise()
// .then(secondPromise)
// .then(thirdPromise);






//Answer # 2 New School ES6

async function testAsync(){
   await firstPromise();
   await secondPromise();
   await thirdPromise();
}

testAsync();




testAsync();


//if not supported by browser use polyfill -library na ginagamit para maging compatible sa lumang browser


function firstPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("set timeout 1");
            resolve();
        },2000)
        
    });
}



//Problem # 2
$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function (result1) {
        console.log("result 1")
        if (result1.length > 0) {
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts/1",
                success: function (result2) {
                        console.log(result2);
                }
            });
        }
    }
});

function firstAjax(){
    return new Promise(function (resolve, reject){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            success: function (result1) {
                console.log("result 1");
                resolve(result1);
            }, error: function(){
                console.log("bobo");
                reject();
            }
        });
        
    })
}

function secondAjax(result1){
    if(result1.length > 0){
        
    return new Promise(function (resolve, reject){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            success: function (result2) {
                    console.log(result2 + "jabar");
                    resolve();
            }
        });
    })
    }



}

firstAjax()
.then(secondAjax)
.catch(function(){

})
.then(secondAjax)
.catch(function(){

})

//if error will not continue with promise
//if data no return. promise will not end



