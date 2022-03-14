// var user = {
//     name: "",
//     setName: function (name){
//         this.name = name;
//     },
//     getName: function(name){
//         return this.name ;
//     }
// }
// //prototype = delegate
// var u1 = Object.create(user);
// u1.setName("tope");
// u1.getName();

// u1.getName.call({
//     name: "test"
// }
// )




var Button = (function(){


    function onClick(){
        // var self = this;
        // selectData(self);
        // selectData.apply(this,["jabol"]);
        selectData.call(this,"jabol");
    }

    function selectData(x){
        console.log(this);
        console.log(x);
    }


    return{
        onClick:onClick
    }

})();


