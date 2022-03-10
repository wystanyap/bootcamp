var Paginate = (function definePaginate($){

    var state = {
        items : [],
        filteredItems : [],
        count: 1
    }

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

    function init(){
        $(document).ready(function(){
            getData().then(function(data){
                state.items = data;
                state.filteredItems = state.items.slice(0,state.count * 10);
                var ul = $("#display_list");
                changePage();

                createList(ul);
            })
        })
    }

    function createList(ul){
        $.each(state.filteredItems, function (index,value) {
            var list = document.createElement('li');
            var li = $(list);
            li.append(value.title);
            ul.append(li);
        });
    }

    function nextPage(){
        state.count++;
        state.filteredItems = state.items.slice(state.count * 10 - 10, state.count * 10);
        renewList();
    }

    function changePage(){
        var page = $("#count");
        page.html(state.count);
    }

    function renewList(){
        var ul = $("#display_list");
        ul.empty();
        createList(ul);
        changePage();
    }



    function previousPage(){
        var temp = state.count;
        state.count--;
        if(state.count === 1){
            state.filteredItems = state.items.slice(0,state.count * 10);
            renewList();
        } else{
            state.filteredItems = state.items.slice(state.count * 10 -10, temp * 10 -10);
            renewList();
        
        }
       

    }

    return {
        init:init,
        nextPage:nextPage,
        previousPage:previousPage
    }

})($);

Paginate.init();