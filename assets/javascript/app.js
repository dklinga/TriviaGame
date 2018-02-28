//  Set our number counter to 120.
var number = 120;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the start button gets clicked, execute the run function.
$("#start").on("click", run);

//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + number + "</h2>");
    //  Once number hits zero...
    if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Times Up!");
    }
}
//  The stop function
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}
//  Show the number in the #show-number tag.
$("#show-number").html("<h2>" + number + "</h2>");

var numberRight = [];
var numberWrong = []; 