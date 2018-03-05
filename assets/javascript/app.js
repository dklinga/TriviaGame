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
$("#inlineRadio17").on("click", run);
$("#inlineRadio18").on("click", run);
$("#inlineRadio19").on("click", run);
$("#inlineRadio20").on("click", run);
$("#inlineRadio21").on("click", run);
$("#inlineRadio22").on("click", run);
$("#inlineRadio23").on("click", run);
$("#inlineRadio24").on("click", run);
$("#inlineRadio25").on("click", run);
$("#inlineRadio26").on("click", run);
$("#inlineRadio27").on("click", run);
$("#inlineRadio28").on("click", run);
$("#inlineRadio29").on("click", run);
$("#inlineRadio30").on("click", run);
$("#inlineRadio31").on("click", run);
$("#inlineRadio32").on("click", run);

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
        document.getElementById('roar').play();
        alert("Times Up! You got " + numberRight + " correct!!!");
        window.location.reload();
    }
    if (numberAnswered === 8) {
        stop();
        document.getElementById('roar').play();
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

//Q5

document.getElementById("inlineRadio17").addEventListener("click", clickW5);
document.getElementById("inlineRadio18").addEventListener("click", clickW5);
document.getElementById("inlineRadio19").addEventListener("click", clickW5);
document.getElementById("inlineRadio20").addEventListener("click", clickR5);

function clickR5() {
    if (document.getElementById("answer5").innerHTML = "You are correct!!!"); {
        numberRight++;
        numberAnswered++;
        console.log(numberRight);
        console.log(numberAnswered);
    }

}

function clickW5() {
    if (document.getElementById("answer5").innerHTML = "Wrong!!!");
    numberAnswered++;
    console.log(numberAnswered);
}

//Q6

document.getElementById("inlineRadio21").addEventListener("click", clickW6);
document.getElementById("inlineRadio22").addEventListener("click", clickR6);
document.getElementById("inlineRadio23").addEventListener("click", clickW6);
document.getElementById("inlineRadio24").addEventListener("click", clickW6);

function clickR6() {
    if (document.getElementById("answer6").innerHTML = "You are correct!!!"); {
        numberRight++;
        numberAnswered++;
        console.log(numberRight);
        console.log(numberAnswered);
    }

}

function clickW6() {
    if (document.getElementById("answer6").innerHTML = "Wrong!!!");
    numberAnswered++;
    console.log(numberAnswered);
}

//Q7

document.getElementById("inlineRadio25").addEventListener("click", clickW7);
document.getElementById("inlineRadio26").addEventListener("click", clickW7);
document.getElementById("inlineRadio27").addEventListener("click", clickR7);
document.getElementById("inlineRadio28").addEventListener("click", clickW7);

function clickR7() {
    if (document.getElementById("answer7").innerHTML = "You are correct!!!"); {
        numberRight++;
        numberAnswered++;
        console.log(numberRight);
        console.log(numberAnswered);
    }

}

function clickW7() {
    if (document.getElementById("answer7").innerHTML = "Wrong!!!");
    numberAnswered++;
    console.log(numberAnswered);
}

//Q8

document.getElementById("inlineRadio29").addEventListener("click", clickW8);
document.getElementById("inlineRadio30").addEventListener("click", clickR8);
document.getElementById("inlineRadio31").addEventListener("click", clickW8);
document.getElementById("inlineRadio32").addEventListener("click", clickW8);

function clickR8() {
    if (document.getElementById("answer8").innerHTML = "You are correct!!!"); {
        numberRight++;
        numberAnswered++;
        console.log(numberRight);
        console.log(numberAnswered);
    }

}

function clickW8() {
    if (document.getElementById("answer8").innerHTML = "Wrong!!!");
    numberAnswered++;
    console.log(numberAnswered);
}