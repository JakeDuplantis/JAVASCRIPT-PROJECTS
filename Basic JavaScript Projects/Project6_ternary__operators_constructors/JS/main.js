function Ride_Function() {                       //Defining a function and naming it
	var Height, Can_ride;                        //declaring variables and naming them
	Height = document.getElementById("Height").value;       //assign values to variables
	Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //assign values to variables and using ternary operation
	document.getElementById("Ride").innerHTML = Can_ride + " to ride.";   //using document.getElementById to assign an id to HTML element
}

function can_Vote() {                           //Defining a function and naming it
    var Age, Old_Enough_to_Vote;                //declaring variables and naming them
    Age = document.getElementById("Age").value;     //assign values to variables
    Old_Enough_to_Vote = (Age < 18) ? "You are too young":"You are old enough"; //assign values to variables and using ternary operation
    document.getElementById("Vote").innerHTML = Old_Enough_to_Vote + " to vote.";   //using document.getElementById to assign an id to HTML element
}


function Vehicle(Make, Model, Year, Color) {        //Defining a function and naming it, creating constructor
	this.Vehicle_Make = Make;                       //using this keyword to get values of new objecs
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");     //declaring a variable and using new keyword to create objects of vehicle function and define values
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {                                //Defining a function and naming it,      
	document.getElementById("Keywords_and_Constructors").innerHTML =   //using document.getElementById to assign an id to HTML element
	"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
	" manufactured in " + Erik.Vehicle_Year;
}

function Person(Name, Age, Height, Haircolor) {      //Defining a function and naming it, creating constructor
    this.Person_Name = Name;                         //using this keyword to get values of new objecs
    this.Person_Age = Age;
    this.Person_Height = Height;
    this.Person_Haircolor = Haircolor; 
}
var Person1 = new Person("Jack", "23", "70 inches", "Brown");    //declaring a variable and using new keyword to create objects of Person function and define values
function my_Constructor() {                          //Defining a function and naming it,
	document.getElementById("New_and_This").innerHTML =  //using document.getElementById to assign an id to HTML element
    Person1.Person_Name + " is " + Person1.Person_Age + " years old, is " + 
    Person1.Person_Height + " tall and has " + Person1.Person_Haircolor + " Hair";
}

function count_Function() {                            //Defining a function and naming it
	document.getElementById("Nested_Function").innerHTML = Count();  //using document.getElementById to assign an id to HTML element
	function Count() {                                               //nested function
		var Starting_point = 5;                                      //declaring variable and assigning it a value
		function Plus_one() {Starting_point += 1;}                   //nested function
		Plus_one();                                                  
		return Starting_point;                                       //return value
	}
}
