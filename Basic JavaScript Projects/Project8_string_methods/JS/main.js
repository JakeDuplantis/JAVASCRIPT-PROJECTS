function full_Sentence() {				//Defining a function and naming it
	var part_1 = "Chicken ";			//Variables and values
	var part_2 = "noodle ";
	var part_3 = "soup ";
	var part_4 = "sentence.";
	var whole_sentence = part_1.concat(part_2, part_3, part_4);			//using .concat method to connect strings together
	document.getElementById("Concatenate").innerHTML = whole_sentence;  //using document.getElementById method to assign id to HTML element
}

function slice_Method() {				//Defining a function and naming it
	var Sentence = "All work and no play make Jonny a dull boy."; //Variables and values
	var Section = Sentence.slice(26,32);						  //using .slice() method to extract section of string
	document.getElementById("Slice").innerHTML = Section;		  //using document.getElementById method to assign id to HTML element
}

function string_Method() {													//Defining a function and naming it
	var X = 365;															//Variable and value
	document.getElementById("Numbers_to_string").innerHTML = X.toString();	//using document.getElementById method, .toString method to return number as a string
}

function precision_Method() {												//Defining a function and naming it
	var X = 12938.3012987376112;											//Variable and value
	document.getElementById("Precision").innerHTML = X.toPrecision(8);		//using document.getElementById method, .toPrecison method to set legnth of number
}