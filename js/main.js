var locations = ["Tel Aviv", "Jerusalem", "Modiin", "Eilat"];

function myFunction() {
    var x, text;
    // Get the value of the input field with id="numb"
    x = document.getElementById("pass").value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x <= 0) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

$(document).ready(function () {
    $('#calc').click(function () {
        alert("Calculating");
        myFunction(); //call the checker function
    });
});
