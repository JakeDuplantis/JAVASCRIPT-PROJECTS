function countdown() {                                           //defining a function   
    var seconds = document.getElementById("seconds").value;      //variable and value assigned id to HTML element

    function tick() {                                            //nested function               
        seconds = seconds - 1;
        timer.innnerHTML = seconds;
        var time = setTimeout(tick, 1000);                       //setTimeout method(function, milliseconds)
        if (seconds == -1) {                                     //if statement
            alert("Time's up!");                                 //alert method
            clearTimeout(time);                                  //stops setTimeout execution
            timer.innnerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

// nextt/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {                        //defining a function
    var i;                                      //variable
    var slides = document.getElementsByClassName("mySlides");   //variable and value assigned id to HTML element
    var dots = document.getElementsByClassName("dot");          //variable and value assigned id to HTML element
    if (n > slides.length) {slideIndex = 1}                     //if statement
    if (n < 1) {slideIndex = slides.length}                     //if statement
    for (i = 0; i < slides.length; i++) {           //for loop, replaces last image with next
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {             //for loop, displays which dot is active
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}