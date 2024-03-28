
function cul() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var kidanswer = parseFloat(document.getElementById("kidanswer").value);
  var op = document.getElementById("op").value;
  var res = "";
  if (op == "*") {
    var res = num1 * num2;
    document.getElementById("res").innerHTML = `${res} is the result`;
  } else if (op === "/") {
    var res = num1 / num2;
    document.getElementById("res").innerHTML = `${res} is the result`;
  } else if (op === "+") {
    var res = num1 + num2;
    document.getElementById("res").innerHTML = `${res} is the result`;
  } else if (op === "-") {
    var res = num1 - num2;
    document.getElementById("res").innerHTML = `${res} is the result`;
  }

  if (res === "") {
    document.getElementById("res").innerHTML = `check inputs`;
  } else if (res === kidanswer) {
    document.getElementById(
      "res"
    ).innerHTML = `True ,res = ${res} && kid answer = ${kidanswer} `;
    var correct = window.localStorage.getItem("correct");
    correct = parseInt(correct) + 1;
    document.getElementById("correct").innerHTML = correct;
    window.localStorage.setItem("correct", correct);
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `False ,res = ${res} && kid answer = ${kidanswer} `;
  }
}
