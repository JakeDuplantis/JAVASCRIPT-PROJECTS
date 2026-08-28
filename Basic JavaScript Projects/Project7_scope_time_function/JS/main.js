var Y = 15;					//Declaring global variable and assignin value
function Add_numbers_1() {	//Defining a function and naming it
	var X = 10;				//Declaring local variable and assignin value
	document.write(20 + X + "<br>");  
}
function Add_numbers_2() {	//Defining a function and naming it
    var X = 12;				//variable and value
	document.write(X + Y);
}

function log_Test1() {				//Defining a function and naming it
	var X = 10;						//variable and value
	console.log(15 + X);			//console.log will display in log beause X is defined
}
function log_Test2() {				//Defining a function and naming it
	console.log(X + 100);			//console.log will display an error in the log X is not defined
}


function get_Date() {						//Defining a function and naming it
	if (new Date().getHours() < 22) {		//if statement, new keyword to create Date object for .getHours method
	document.getElementById("Greeting").innerHTML = "How are you today?";		//using document.getElementById to assign an id to an HTML element
	}
}


function Age_Function() {							//Defining a function and naming it
	Age = document.getElementById("Age").value;		//Declaring variable and assigning it to an HTML element with document.getElementById method
	if (Age >= 18) {								//if statement
		Vote = "You are old enough to vote!";		//if branch
	}
	else {											//else statement
		Vote = "You are not old enough to vote!";	//else branch
	}
	document.getElementById("How_old_are_you?").innerHTML = Vote;		//using document.getElementById to assign an id to an HTML element
}

function Time_function() {					//Defining a function and naming it
	var Time = new Date().getHours();		//Declaring variable, new keyword to creat Date object for .getHours method
	var Reply;
	if (Time < 12 && Time > 0) {			//if statement
		Reply = "It is morning time!";		//if branch
	}
	else if (Time >= 12 && Time < 18) {		//else if statement
		Reply = "It is afternoon.";			//else if branch
	}
	else {									//else statement
		Reply = "It is evening time.";		//else branch
	}
	document.getElementById("Time_of_day").innerHTML = Reply;  //using document.getElementById to assign an id to an HTML element
}