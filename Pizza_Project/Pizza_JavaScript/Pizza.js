function getReceipt() {                                                 //defining function
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt   
    var text1 = "<h3>You ordered:</h3>";                                 //dclaring variables
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {                        //for loop, finds size by iterating through sizeArray
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value ;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {                          //if and else if statements determine price by size
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {                               //defining function
    var toppingTotal = 0;                                               //dclaring variable
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {                     //for loop, iterates through toppingArray for selected toppings
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;                          //dclaring variable
    if  (toppingCount > 1) {                                            //if statemnet, gives 1 free topping
        toppingTotal = (toppingCount -1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);                       //adding toppingTotal to runningTotal
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;                             //returns value of text1 to showText id
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+          //returns value of runningTotal to totalPrice id
        runningTotal+".00"+"</strong></h3>";
}