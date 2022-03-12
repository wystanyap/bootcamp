var arr = [{
    "_id": "joe",
    "name": "Joe Bookreader",
    "addresses": [
                 {
                   "street": "123 Fake Street",
                   "city": "Faketon",
                   "state": "MA",
                   "zip": ["12345","423432","324123"]
                 },
                 {
                   "street": "1 Some Other Street",
                   "city": "Boston",

                   "state": "MA",
                   "zip": ["12345","423432","324123"]
                 },
                 {
                    "street": "1 Some Other Street",
                    "city": "Boston",
                    "state": "MA",
                    "zip": ["12345","423432","324123"]
                  },
                  {
                    "street": "1 Some Other Street",
                    "city": "Boston",
                    "state": "MA",
                    "zip": ["12345","423432","324123"]
                  }
               ]
  },
  {
    "_id": "borais",
    "name": "Alex Borais",
    "addresses": [
                 {
                   "street": "123 Fake Street",
                   "city": "Faketon",
                   "state": "MA",
                   "zip": ["12345","423432","324123"]
                 },
                 {
                   "street": "1 Some Other Street",
                   "city": "Boston",
                   "state": "MA",
                   "zip": ["12345","423432","324123"]
                 }
               ]
  }
]

function displayAddress(arr){
    var i;
    for(i = 0; i < arr.length;i++){
        console.log(arr[i].name);
        var j;
        for(j = 0; j <arr[i].addresses.length;j++){
            console.log(arr[i].addresses[j].street);
            console.log(arr[i].addresses[j].city);
            console.log(arr[i].addresses[j].state);
            var k;
            for(k =0; k <arr[i].addresses[j].zip.length;k++){
                console.log(arr[i].addresses[j].zip[k]);
            }

        }
    }
    
}

function displayItemsForEach(arr) {
    arr.forEach(function(objOne,index){
        console.log(objOne.name);
        objOne.addresses.forEach(function(objTwo,index){
            console.log(objTwo.street);
            console.log(objTwo.city);
            console.log(objTwo.state);
            objTwo.zip.forEach(function(objThree,index){
                console.log(objThree);
            })
        })
    })
}
