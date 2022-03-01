var Cartman = (function defineCart(){
    var state = {
        records : [],
        cart : []
    }


    function getData(){
        return new Promise(function(resolve,reject){
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts",
                success:function(data){
                    resolve(data);
                },
                error:function(error){
                    reject(error);
                }
            })
        })
    }

    function init(){
        $(document).ready(function(){
            getData().then(function(data){
                state.records = data;
                var cart = $("#cart");
                $.each(state.records, function (index,value) {
                    var div = $(document.createElement('div'));
                    div.data("record",value);
                    div.append('<p>' + value.id + '</p>');
                    div.append('<p>' + value.title + '</p>');
                    state.records.splice(index, 1);
                    //dynamic
                    div.click(onClick);
                    cart.append(div);
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