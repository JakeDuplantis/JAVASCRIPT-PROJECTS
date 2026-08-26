function addition_Function() {              //Defining a function and naming it
    var addition = 2 + 2;                   //Defining a variable and using addition
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;  //using document.getElementById method to assign element an id
}

function subtraction_Function() {           //Defining a function and naming it
	var Subtraction = 5 - 2;                //Defining a variable and using subtraction
	document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;    //using document.getElementById method to assign element an id
}

function multiplication() {                 //Defining a function and naming it
	var simple_Math = 5*10;                 //Defining a variable and using multiplication
	document.getElementById("Math").innerHTML = "5 x 10 = " + simple_Math;      //using document.getElementById method to assign element an id
}

function division() {                       //Defining a function and naming it
	var simple_Math = 72 / 9;               //Defining a variable and using division
	document.getElementById("Math").innerHTML = "72 / 9 = " + simple_Math;      //using document.getElementById method to assign element an id
}

function increment() {                      //Defining a function and naming it
    var X = 10;                             //Defining a variable and assigning a value
    X++;                                    //increment operator
    document.write(X);                      //print X
}

function decrement() {                      //Defining a function and naming it
    var X = 10;                             //Defining a variable and assigning a value
    X--;                                    //decrement operator
    document.write(X);                      //print X
}

function win_alert() {                      //Defining a function and naming it
    window.alert(Math.random() * 100);      //random number method using window.alert
}
