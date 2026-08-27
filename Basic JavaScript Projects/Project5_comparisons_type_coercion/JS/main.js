
function my_Function() {				//Defining a function and naming it
	document.write(typeof 10);			//using typeof operator in document.write method
}

function coercion_Function() {			//Defining a function and naming it
	document.write("36" + 5);			//using coercion to combine string and number in document.write method
}

function double_Equal() {				//Defining a function and naming it
	document.getElementById("Math").innerHTML = (10 == 10);		//using == operator in document.getElementById method
}

function triple_Equal() {				//Defining a function and naming it
	var X = 82;							//Declaring a variable and assigning it a value
	var Y = "82";						//Declaring a variable and assigning it a value
	document.getElementById("Math").innerHTML = (X === Y);  //using === operator in document.getElementById method
}

function and_Operator() {				//Defining a function and naming it
	document.getElementById("Math").innerHTML = (5 > 2 && 4 < 10);	//using >, <, && operators in document.getElementById method
}

function or_Operator() {				//Defining a function and naming it
	document.getElementById("Math").innerHTML = (5 > 10 || 10 > 20);	//using >, || operators in document.getElementById method
}

function not_Operator() {				//Defining a function and naming it
	document.getElementById("Math").innerHTML = (!(14 > 15));	//using ! operator indocument.getElementById method
}