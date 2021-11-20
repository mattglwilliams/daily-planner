// Here, we are using moment to display the current date on the page.
// First, we are setting a variable of 'today' which holds all of the data from moment.
var today = moment()
// Next, we are setting a new variable of 'now' which takes all the data from 'today' and just gets the format we want.
var now = today.format("dddd Do MMMM YYYY");
// Finally, we are adding this data to the 'currentDay' element.
$("#currentDay").text(now);

// Here, we have created a function for each of the save buttons.

// Firstly, when the save button is clicked...
$("#btn9").click(function () {
    // ... store the value from the input in local storage.
    localStorage.setItem("input9", $("#input9").val())
});

// The, display the item we have saved in local storage when the page loads.
$('#input9').val(localStorage.getItem("input9"));

$("#btn10").click(function () {
    localStorage.setItem("input10", $("#input10").val())
});

$('#input10').val(localStorage.getItem("input10"));

$("#btn11").click(function () {
    localStorage.setItem("input11", $("#input11").val())
});

$('#input11').val(localStorage.getItem("input11"));

$("#btn12").click(function () {
    localStorage.setItem("input12", $("#input12").val())
});

$('#input12').val(localStorage.getItem("input12"));

$("#btn1").click(function () {
    localStorage.setItem("input1", $("#input1").val())
});

$('#input1').val(localStorage.getItem("input1"));

$("#btn2").click(function () {
    localStorage.setItem("input2", $("#input2").val())
});

$('#input2').val(localStorage.getItem("input2"));

$("#btn3").click(function () {
    localStorage.setItem("input3", $("#input3").val())
});

$('#input3').val(localStorage.getItem("input3"));

$("#btn4").click(function () {
    localStorage.setItem("input4", $("#input4").val())
});

$('#input4').val(localStorage.getItem("input4"));

$("#btn5").click(function () {
    localStorage.setItem("input5", $("#input5").val())
});

$('#input5').val(localStorage.getItem("input5"));

// Here, we are setting a variable of currentTime with the format of H (1 - 23).
var currentTime = moment().format('H');

// Next, we change the colour of each input depending on the time of the day.
function checkTime() {
    // If the time of day is greater than the value, assign the 'past' class, which will change the input colour to grey.
    if (currentTime > 9) {
        $('#input9').addClass("past")
    }
    // If the time of day matches the value, then assign the 'present' class, which will change the input colour to red.
    if (currentTime == 9) {
        $('#input9').addClass("present")
    }
    // If the time of day is less than the value, then assign the 'future' class, which will change the input colour to green.
    if (currentTime < 9) {
        $('#input9').addClass("future")
    }
    if (currentTime > 10) {
        $('#input10').addClass("past")
    }
    if (currentTime == 10) {
        $('#input10').addClass("present")
    }
    if (currentTime < 10) {
        $('#input10').addClass("future")
    }
    if (currentTime > 11) {
        $('#input11').addClass("past")
    }
    if (currentTime == 11) {
        $('#input11').addClass("present")
    }
    if (currentTime < 11) {
        $('#input11').addClass("future")
    }
    if (currentTime > 12) {
        $('#input12').addClass("past")
    }
    if (currentTime == 12) {
        $('#input12').addClass("present")
    }
    if (currentTime < 12) {
        $('#input12').addClass("future")
    }
    if (currentTime > 13) {
        $('#input1').addClass("past")
    }
    if (currentTime == 13) {
        $('#input1').addClass("present")
    }
    if (currentTime < 13) {
        $('#input1').addClass("future")
    }
    if (currentTime > 14) {
        $('#input2').addClass("past")
    }
    if (currentTime == 14) {
        $('#input2').addClass("present")
    }
    if (currentTime < 14) {
        $('#input2').addClass("future")
    }
    if (currentTime > 15) {
        $('#input3').addClass("past")
    }
    if (currentTime == 15) {
        $('#input3').addClass("present")
    }
    if (currentTime < 15) {
        $('#input3').addClass("future")
    }
    if (currentTime > 16) {
        $('#input4').addClass("past")
    }
    if (currentTime == 16) {
        $('#input4').addClass("present")
    }
    if (currentTime < 16) {
        $('#input4').addClass("future")
    }
    if (currentTime > 17) {
        $('#input5').addClass("past")
    }
    if (currentTime == 17) {
        $('#input5').addClass("present")
    }
    if (currentTime < 17) {
        $('#input5').addClass("future")
    }
};

// Running the checkTime function.
checkTime();