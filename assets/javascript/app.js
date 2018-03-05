//  Set number counter 
var number = 30;
var intervalId;

//  When the start button gets clicked, execute the run function.
$("#start").on("click", run);
$("#inlineRadio1").on("click", run);
$("#inlineRadio2").on("click", run);
$("#inlineRadio3").on("click", run);
$("#inlineRadio4").on("click", run);
$("#inlineRadio5").on("click", run);
$("#inlineRadio6").on("click", run);
$("#inlineRadio7").on("click", run);
$("#inlineRadio8").on("click", run);
$("#inlineRadio9").on("click", run);
$("#inlineRadio10").on("click", run);
$("#inlineRadio11").on("click", run);
$("#inlineRadio12").on("click", run);
$("#inlineRadio13").on("click", run);
$("#inlineRadio14").on("click", run);
$("#inlineRadio15").on("click", run);
$("#inlineRadio16").on("click", run);

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
        alert("Times Up! You got " + numberRight + " correct!!!");
        window.location.reload();
    }
    if (numberAnswered === 4) {
        stop();
        alert("Times Up! You got " + numberRight + " correct!!!");
        window.location.reload();
    }
}
//  The stop function
function stop() {
    clearInterval(intervalId);
}
//  Show the number in the #show-number tag.
$("#show-number").html("<h2>" + number + "</h2>");



var numberRight = 0;
var numberAnswered = 0;

// Q1
document.getElementById("inlineRadio1").addEventListener("click", clickWrong);
document.getElementById("inlineRadio2").addEventListener("click", clickRight);
document.getElementById("inlineRadio3").addEventListener("click", clickWrong);
document.getElementById("inlineRadio4").addEventListener("click", clickWrong);

function clickRight() {
    if (document.getElementById("answer1").innerHTML = "You are correct!!!"); {
        numberRight++;
        numberAnswered++;
        console.log(numberRight);
        console.log(numberAnswered);
    }

}

function clickWrong() {
    if (document.getElementById("answer1").innerHTML = "Wrong!!!");
    numberAnswered++;
    console.log(numberAnswered);
}

//Q2
document.getElementById("inlineRadio5").addEventListener("click", clickCorrect);
document.getElementById("inlineRadio6").addEventListener("click", clickIncorrect);
document.getElementById("inlineRadio7").addEventListener("click", clickIncorrect);
document.getElementById("inlineRadio8").addEventListener("click", clickIncorrect);

function clickCorrect() {
    if (document.getElementById("answer2").innerHTML = "You are correct!!!"); {
        numberRight++;
        numberAnswered++;
        console.log(numberRight);
        console.log(numberAnswered);
    }

}

function clickIncorrect() {
    if (document.getElementById("answer2").innerHTML = "Wrong!!!");
    numberAnswered++;
    console.log(numberAnswered);
}

//Q3

document.getElementById("inlineRadio9").addEventListener("click", clickI);
document.getElementById("inlineRadio10").addEventListener("click", clickI);
document.getElementById("inlineRadio11").addEventListener("click", clickC);
document.getElementById("inlineRadio12").addEventListener("click", clickI);

function clickC() {
    if (document.getElementById("answer3").innerHTML = "You are correct!!!"); {
        numberRight++;
        numberAnswered++;
        console.log(numberRight);
        console.log(numberAnswered);
    }

}

function clickI() {
    if (document.getElementById("answer3").innerHTML = "Wrong!!!");
    numberAnswered++;
    console.log(numberAnswered);
}

//Q4

document.getElementById("inlineRadio13").addEventListener("click", clickW);
document.getElementById("inlineRadio14").addEventListener("click", clickW);
document.getElementById("inlineRadio15").addEventListener("click", clickR);
document.getElementById("inlineRadio16").addEventListener("click", clickW);

function clickR() {
    if (document.getElementById("answer4").innerHTML = "You are correct!!!"); {
        numberRight++;
        numberAnswered++;
        console.log(numberRight);
        console.log(numberAnswered);
    }

}

function clickW() {
    if (document.getElementById("answer4").innerHTML = "Wrong!!!");
    numberAnswered++;
    console.log(numberAnswered);
}