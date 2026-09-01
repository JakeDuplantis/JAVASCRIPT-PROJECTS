function Call_Loop() {                                                      //defining function
	var i = 1;
    var text = "";
    while (i < 10) {                                                        //while loop, increase value of i less than 10
        text += " The number is " + i + "<br>";
        i++;
    }
    document.getElementById("Loop").innerHTML = text;                       //returns value of text to HTML element assigned by id
}

function length_Test() {                                                    //defining function
    var text = "Hello World!";
    var length = text.length;
    document.getElementById("length_test").innerHTML = length;              //return the value of length to HTML element assigned by id
}

var Instrument = ["Guitar", "Drums", "Bass", "Violin", "Trumpet", "Flute"];     //array of values
var Content = "";
var Y;
function for_Loop() {                                                        //defining function
    for (Y = 0; Y < Instrument.length; Y++) {                                //for loop, iterates through array of Instrument
    Content += Instrument[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;     //return the value of content to HTML element assigned by id
}

function array_Function() {                                                 //defining function
	var Cat_Pictures = ["sleeping", "playing", "eating", "purring"];        //array of values

	document.getElementById("Cat").innerHTML = "In this picture, the cat is " +     //return the value of Cat_Picture[2] to HTML element assigned by id
		Cat_Pictures[2] + ".";
}

function constant_function() {                                                      //defining function
	const Musical_Instrument = {type:"guitar", brand: "Fender", color:"black"};     //const keyword
	Musical_Instrument.color = "blue";
	Musical_Instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " +  Musical_Instrument.type + " was " + Musical_Instrument.price;          //return the const values to HTML element assigned by id

}


function let_object() {                                                                 //defining function
let car = {                                                                             //let keyword
	make: "Dodge ",
	model: "Viper ",
	year: "2021 ",
	color: "red ",
	description: function() {
		return "The car is a " + this.year +this.color + this.make + this.model;       //using this keyword
		}
	};
	document.getElementById("Car_Object").innerHTML = car.description();        //return value of car.description() to HTML element assigned by id
}

function break_statement() {                                               //defining function
    let text = "";

    for (let i = 0; i < 10; i++) {                                         //for loop, increase value of i, break stops execution at 3
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
    }

    document.getElementById("break").innerHTML = text;                     //return the value of length to HTML element assigned by id
}
