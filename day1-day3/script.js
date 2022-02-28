//module pattern

var PhilamLife = (function definePhilamLife(jabar$){

    //variables here

    var state = {
        records : [],
        filteredRecords : []
    };


    function getData(){
        return new Promise(function (resolve, reject){
            jabar$.ajax({
                url: "https://jsonplaceholder.typicode.com/posts",
                success: function (result) {

                    resolve(result);
                }, error: function(err){

                    reject(err);
                }
            });
            
        })
    }

    function init(){
        jabar$( document ).ready(function() {
            //.then makukuha ang data
            getData().then(function(response){
                var ul = jabar$( "#displaylist" );
                //loop every record value = each object
                state.records = response;
                //deep copy array
                state.filteredRecords = JSON.parse(JSON.stringify(state.records));
                jabar$.each(state.filteredRecords, function (index,value) {
                    ul.append('<li> <p>'+ value.id +'</p>' + '<p>' + value.title + '</p> </li>');
                });
            })
        });

    }

    function setStateFromInput(){
        var el = jabar$( "#filter-input" );
        var count = el.val();
        var ul = jabar$( "#displaylist" );
        ul.empty();
        state.filteredRecords.splice(count,state.records.length);
        jabar$.each(state.filteredRecords, function (index,value) {
            ul.append('<li> <p>'+ value.id +'</p>' + '<p>' + value.title + '</p> </li>');
        });
    }

    function reset(){
        var ul = jabar$( "#displaylist" );
        ul.empty();
        state.filteredRecords = JSON.parse(JSON.stringify(state.records));
                jabar$.each(state.filteredRecords, function (index,value) {
                    ul.append('<li> <p>'+ value.id +'</p>' + '<p>' + value.title + '</p> </li>');
                });
    }
    


    return{
        //getters and setters (naglalabas ng data)
        init:init,
        setStateFromInput:setStateFromInput,
        reset:reset
    }

})($);

PhilamLife.init();




