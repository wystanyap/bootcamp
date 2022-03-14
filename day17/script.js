var PhilamLife = (function definePhilamLife(){
    var state = {
        records:[]
    }


    function getData(){
        return new Promise(function(resolve,reject){
            $.ajax({
                url: "http://www.mocky.io/v2/5d73bf3d3300003733081869",
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
        $(document).ready(readyCallback);
    }

    function readyCallback(){
        getData().then(passData);
    }

    function passData(response){
                
        state.records = response;             
        var row = $(".row");
            $.each(state.records,function(index, value) {
                var div = $(document.createElement('div'));
                createDiv(div);
                createPar(div,value);
                row.append(div);                 
                 
            });
        
    }

    function createDiv(div){
        div.addClass("col-lg-4");
        div.addClass("col-md-6");
        div.addClass("col-sm-12");
        div.css("padding","24px");
    }

    function pAppend(value,obj){
        obj.pName.append(value.name);
        obj.pEmail.append(value.email);
        obj.pAddress.append(value.address);
        obj.pWebsite.append(value.website);
        obj.pAge.append(value.age);
    }

    function createPar(div,value){
        var obj = {
            pName : generatePar(),
            pEmail : generatePar(),
            pAddress : generatePar(),
            pWebsite : generatePar(),
            pAge : generatePar(),
            
        }
        

        pAppend(value,obj);
        divWithP(div,obj);

    }

    function generatePar(){
        return $(document.createElement('p'))
    }
    

    function divWithP(div,obj){
        div.append(obj.pName);   
        div.append(obj.pEmail);
        div.append(obj.pAddress);
        div.append(obj.pWebsite);
        div.append(obj.pAge);
    }


    return {
        init:init
    }

})();

PhilamLife.init();


