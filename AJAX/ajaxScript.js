function getMsg() {
    //Step 1: Setup the XML HTTP Request object

    let ajaxRequest = new XMLHttpRequest();

    //get input value of name to display to user after
    //request had been made
    let inputVal = document.getElementById("fullName").value;

    //function to display user input value once request
    //has been recieved
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " +
        inputVal + " for signing up!";
    }

    //Step 2: prepare the type of request and what to
    //request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //step 3: Defines the AJAX response callback method that
    //establishes whether the response was successful and where
    //the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState ===4 && this.status === 200){
            document.getElementById('content').innerHTML =
            ajaxRequest.responseText;
        }
    }
    //step 4: send the request
    ajaxRequest.send();
}

//function to display elements from content file
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "content.html", true);
  xhttp.send();
}
