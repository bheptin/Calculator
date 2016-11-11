var equalbutton = document.getElementById("equalbutton");
var addbutton = document.getElementById("addbutton");
var subtractbutton = document.getElementById("subtractbutton");
var dividebutton = document.getElementById("dividebutton");
var multiplybutton = document.getElementById("multiplybutton");
var clearbutton = document.getElementById("clearbutton");

var allnumber = [];

var numbers = document.querySelectorAll(".number");

for (var i = 0;i < numbers.length;i++) {
  numbers[i].addEventListener("click", function(event){
    var valueAsInteger = parseInt(event.target.value);
    allnumber.push(valueAsInteger);
    document.getElementById("screen").value += event.target.value;
  })
};

addbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "+";
  allnumber.push("+");
});

subtractbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "-";
  allnumbers.push("-");
});

dividebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "/";
  allnumber.push("/");
});

multiplybutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "*";
  allnumber.push("*");
});

equalbutton.addEventListener("click", function(event){
  var a = allnumber[0];
  var b = allnumber[2];
  if (allnumber[1] === "+") {
    var result = a + b;
  } else if (allnumber[1] === "-") {
    var result = a - b;
  } else if (allnumber[1] === "/") {
    var result = a / b;
  } else if (allnumber[1] === "*") {
    var result = a * b;
  }
  console.log(allnumber);
  document.getElementById("screen").value = result;
});

clearbutton.addEventListener("click", function(event){
  document.getElementById("screen").value = "";
  allnumber = [];
});
