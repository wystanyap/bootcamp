var ToDo = (function defineToDo($){

    state = {
        url : "http://localhost:8080/todos",
        list : []
    }


    function getData(){
        return new Promise(function(resolve,reject){
            $.ajax({
                url: state.url,
                success: function(response){
                    resolve(response);
                },
                error: function(error){
                    reject(error);
                }
            })
        })
    }

    function init(){
        $(document).ready(function(){
            getData().then(function(response){
                state.list = response.data.todos;
                var list = $("#todo_list");
                
                $.each(state.list,function(index, value) {
                    var li = $(document.createElement('li'));
                    li.addClass('todo_li');
                    li.data("record",value);
                    var message = $(document.createElement('p'));
                    message.css("display", "inline-block");
                    message.append(value.message);
                    message.click(onClickMessage);
                    var close = $(document.createElement('p'));
                    close.css("display", "inline-block");
                    close.append('x');
                    close.click(onClickClose);
                    li.append(message);
                    li.append(close);
                    list.append(li);
                     
                });
            })
        })
    }

    function onClickMessage(){
        var self = $(this);
        console.log(self);
    }

    function onClickClose(){
        var self = $(this);
        var li = self.closest("li");
        var liRecord = li.data("record");
        removeToDo(liRecord.id);
    }


    function addToDo(){
        var add = $("#add_todo");
        // console.log(add.val());
        $.ajax({
            method: "POST",
            url: state.url,
            data: JSON.stringify({ message: add.val() }),
            contentType: "application/json; charset=utf-8",
            success: function(response){
                var list = $("#todo_list");
                state.list.push({id: response.data.id , message: add.val() });
                var li = $(document.createElement('li'));
                li.addClass('todo_li');
                li.data("record",response.data);
                var message = $(document.createElement('p'));
                message.css("display", "inline-block");
                message.append(add.val());
                message.click(onClickMessage);
                var close = $(document.createElement('p'));
                close.css("display", "inline-block");
                close.append('x');
                close.click(onClickClose);
                li.append(message);
                li.append(close);
                list.append(li);

            },
            error: function(error){
                
            }
        })
    }

    function removeToDo(id){
        $.ajax({
            method: "DELETE",
            url: state.url + '/' + id,
            success: function(){
                var i;
                for(i = 0; i < state.list.length; i++){
                    if(state.list[i].id === id){
                        state.list.splice(i,1);
                    }
                }

               var liList = $(".todo_li");
               $.each(liList,function(index, obj) {
                   var objData = $(obj).data("record");
                if(objData.id === id){
                    obj.remove();
                }
                 
            });
                

            },
            error: function(error){
                
            }
        })
    }




return{
    init:init,
    addToDo:addToDo
}

})($);
ToDo.init();