var Cartman = (function defineCart(){

    var state = {
        records : []
    }

    function getData(){
        return new Promise(function(resolve,reject){
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts",
                success:function(data){
                    resolve(data);
                },
                reject:function(error){
                    reject(error);
                }
            })
        })
    }

    function init(){
        $(document).ready(function(){
            getData().then(function(response){
                state.records = response;
                var cart = $("#cart");
                $.each(state.records,function(index, value) {
                    var div = $(document.createElement('div'));
                    div.data("record",value);
                    div.append('<p>' + value.id + '</p>');
                    div.append('<p>' + value.title + '</p>');
                    div.click(onClick);
                    cart.append(div);
                    state.records.splice(index,1);
                  });

                
            })
        })
    }

    function onClick(){
        var self = $(this);
        console.log(self.data("record"));
    }

    function getRecords(){
        return state.records;
    }


    return {
        init:init,
        getRecords:getRecords
    }


})()

Cartman.init();


