function my_Dictionary() {          //Defining a funtion and naming it
	var Car = {                     //declaring a variable and naming it
		Make: "Ford",               //key value pair
        Model: "Fusion",            //key value pair
        Color: "Black",             //key value pair
        Year: "2019",               //key value pair                                
	};
    delete Car.Color;                                               //deletes Color value
	document.getElementById("Dictionary").innerHTML = Car.Color;    //assigns an id to an element
}