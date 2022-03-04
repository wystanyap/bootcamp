var ToDo = (function defineToDo(jabar$){
    state = {
         url : "http://localhost:8080/todos",
         items: []
    }

    function getToDo(){
        return new Promise(function(resolve,reject){
            jabar$.ajax({
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
        jabar$(document).ready(function(){
            getToDo().then(function(response){
                state.items = response.data.todos;
                var list = jabar$("#todolist");
                jabar$.each(state.items,function(index, value) {
                    var li = jabar$(document.createElement('li'));
                    li.addClass("list-group-item");
                    li.data("record",value);

                    addParagraphAndSpantoDivWithRow(li,value);
                                       
                    list.append(li);
                    
                });
            })
        })
    }

    function addParagraphAndSpantoDivWithRow(list,data){
        var divWithRow = jabar$(document.createElement('div'));
        divWithRow.addClass("row");
        addParagraphToList(divWithRow,data);
        addSpantoList(divWithRow);
        list.append(divWithRow);
    }

    function addSpantoList(divWithRow){
        var divWithSpan = jabar$(document.createElement('div'));
        divWithSpan.addClass("col-lg-2");
        var span = jabar$(document.createElement('span'));
        span.addClass("float-right");
        span.addClass("span-padding");
        span.append('X');
        span.click(onDelete);  
        divWithSpan.append(span);
        divWithRow.append(divWithSpan);

    }


    function addParagraphToList(divWithRow,data){
        var divWithP = jabar$(document.createElement('div'));
        divWithP.addClass("col-lg-10");
        var par = jabar$(document.createElement('p'));
        par.append(data.message);
        par.click(onClick);    
        divWithP.append(par); 
        divWithRow.append(divWithP);     
    }

    function onClick(){ 
        var self = $(this);
        var data = getData(self);
        console.log(data);
        //edit data
    }

    function onDelete(){
        var self = $(this);
        var data = getData(self);
        deleteData(data.id,self.closest("li"));
        //delete data
    }

    function getData(self){
        var li = self.closest( "li" );
        var data = li.data("record");

        return data;
    }

    function addData(){
        var inputField = jabar$("#inputfield");
        createItem(inputField.val());
    }

    function deleteData(id,el){
            jabar$.ajax({
                method:"DELETE",
                url: state.url + "/" + id,
                success: function(){
                    //remove current HTML element
                    el.remove();
                    //remove from array
                    var i;
                    for(i=0;i < state.items.length; i++){
                        if(state.items[i].id === id ){
                            state.items.splice(i,1);
                        }
                    }


                },
                error: function(error){

                }
            })  
    }

    //labas ng output sa function
    function getItems(){
        return state.items;
    }

    function createItem(val){
        jabar$.ajax({
            method:"POST",
            url: state.url,
            data: JSON.stringify({ message: val }),
            contentType: "application/json; charset=utf-8",
            success: function(){
                var liMake = createLi();
                addToTodoList(liMake,val);

            },
            error: function(error){

            }
        })  
    }

    function addToTodoList(todo, message){
        var obj = {message : message};
        addParagraphAndSpantoDivWithRow(todo,obj);
        state.items.push(obj);
        var list = jabar$("#todolist");
        list.append(todo);
    }

    function createLi(){
        var li = jabar$(document.createElement('li'));
        li.addClass("list-group-item");
        return li;
    }

    


return {
    init:init,
    addData:addData,
    getItems:getItems
}


})($);

ToDo.init();