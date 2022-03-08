// function binarySearch(ar, el, compare_fn) {
//     var m = 0;
//     var n = ar.length - 1;
//     executeLoop(m,n,compare_fn,el);
//     return -m - 1;
// }

// function executeLoop(m,n,compare_fn,el){
//     while (m <= n) {
//         var k = (n + m) >> 1;
//         var cmp = compare_fn(el, ar[k]);
//         if (cmp > 0) {
//             m = k + 1;
//         } else if(cmp < 0) {
//             n = k - 1;  
//         } else {
//             return k;
//         }
//     }
// }


var Message = (function defineMessage($){

    var state = {
        arr : []
    };

    function getData(){
        return new Promise(function (resolve, reject){
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts",
                success: function (result) {

                    resolve(result);
                }, error: function(err){

                    reject(err);
                }
            });
            
        })
        
    }

    function getTodos(){
        return new Promise(function (resolve, reject){
            $.ajax({
                url: "http://localhost:8080/todos",
                success: function (result) {

                    resolve(result);
                }, error: function(err){

                    reject(err);
                }
            });
        })
    }

    
    function init(){
        $(document).ready(documentReadyCallback);
    }

    function documentReadyCallback(){
        getData()
        .then(firstPromiseCallback)
        .then(getTodos)
        .then(secondPromiseCallback)
    }



    function secondPromiseCallback(res){
        var i;
        for(i = 0;i < state.arr.length; i++ ){
           state.arr[i].body = res.data.todos[0].message;
        }
        console.log(state.arr);
    }


    function firstPromiseCallback(data){
        state.arr = data;
    }


return {
    init:init
}

})($);

Message.init();