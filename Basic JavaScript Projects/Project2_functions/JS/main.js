function changeColor(){                                        //Defining a function and naming it
    var text_blue = document.getElementById("p1");            //Defining variable and giving it an Id in document.getElementById
    var text_red = document.getElementById("p2");             //Defining variable and giving it an Id in document.getElementById   
    text_blue.style.color='blue';                             //applies styling for blue text
    text_red.style.color='red';                               //aplies styling for red text
    var str = "This is the button text!";							//Defining a variable and giving it a string value                          
    document.getElementById("Button_Text").innerHTML = str;			//putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}


function weather(){                              //Defined a function and named it
    var text1 = "What a very ";                  //Defined a variable and gave it a string value
    text1 += "nice day";                         //used += operator to concatenate strings
    document.write(text1);                       //print string text1
}