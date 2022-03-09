



function ArrSort(arr){
    var i;
    var j;
    for(i =0; i < arr.length;i++){
        for (j = i+1; j < arr.length-1;j++){
            if(arr[i] > arr[j]){
                swap(arr,i,j);                
            }
        }
    }
}


function swap(arr,i,j){
    var temp;
    temp = arr[j];
    arr[j] =  arr[i];
    arr[i] = temp;
}

var apple = {
     weight : 100,
     color : "red",
     height : 169, 
     setWeight: function(weight){
         this.weight = weight;
     },
     setColor : function(color){
         this.color = color;
     },
     setHeight : function(height){
         this.height = height;
     },
     getWeight: function(){
         return this.weight;
     },
     getColor : function(){
         return this.color;
     },
     getHeight : function(){
         return this.height;
     }

}

var a1 = Object.create(apple);
a1.setColor("blue");
a1.setWeight(101);
var a2 = Object.create(apple);
a2.setWeight(101);
var a3 = Object.create(apple);
a3.setHeight(9999)
a3.getHeight();

var apples = [a1,a2,a3]

// old skool
function filterApple(arr){
    var result = [];
    var i;
    for(i = 0;i < arr.length;i++){
        if(arr[i].weight === 100 ){
            result.push(arr[i]);
        }
    }
    console.log(result);
}

filterApple(apples);

//new school
function filterApplePogi(arr,predicate){
    var result = [];
    var i;
    for(i = 0;i < arr.length;i++){
        if(predicate(arr[i])){
            result.push(arr[i]);
        }
    }
    console.log(result);
}

var weightCondition = function(apple){
    return apple.getWeight() === 100;
}

var blueCondition = function(apple){
    return apple.getColor() === "blue";
}

filterApplePogi(apples,weightCondition);
filterApplePogi(apples,blueCondition);