var today = moment()
var now = today.format("dddd Do MMMM YYYY");
$("#currentDay").text(now);

$("#btn9").click(function() {
    localStorage.setItem("input9", $("#input9").val())
  });

$('#input9').val(localStorage.getItem("input9"));

$("#btn10").click(function() {
    localStorage.setItem("input10", $("#input10").val())
});

$('#input10').val(localStorage.getItem("input10"));

$("#btn11").click(function() {
    localStorage.setItem("input11", $("#input11").val())
});

$('#input11').val(localStorage.getItem("input11"));

$("#btn12").click(function() {
    localStorage.setItem("input12", $("#input12").val())
});

$('#input12').val(localStorage.getItem("input12"));

$("#btn1").click(function() {
    localStorage.setItem("input1", $("#input1").val())
});

$('#input1').val(localStorage.getItem("input1"));

$("#btn2").click(function() {
    localStorage.setItem("input2", $("#input2").val())
});

$('#input2').val(localStorage.getItem("input2"));

$("#btn3").click(function() {
    localStorage.setItem("input3", $("#input3").val())
});

$('#input3').val(localStorage.getItem("input3"));

$("#btn4").click(function() {
    localStorage.setItem("input4", $("#input4").val())
});

$('#input4').val(localStorage.getItem("input4"));

$("#btn5").click(function() {
    localStorage.setItem("input5", $("#input5").val())
});

$('#input5').val(localStorage.getItem("input5"));

