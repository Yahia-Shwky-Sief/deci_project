//Validtion Code For Inputs
function login() {
  var userName = document.getElementById("inputname").value;
  document.cookie = "text=" + userName + "; path=/";

  var age = document.getElementById("age").value;
  document.cookie = "age=" + age + "; path=/";

  var theme = document.querySelector('input[name="theme"]:checked').value;
  document.cookie = "theme=" + theme + "; path=/";

  return true;
}

function get_name() {
  var userName = document.cookie.split(";")[2].split("=")[1];
  var age = document.cookie.split(";")[0].split("=")[1];
  var theme = document.cookie.split(";")[1].split("=")[1];
  document.getElementById("text").innerHTML = `${userName} is name`;
  document.getElementById("text2").innerHTML = `${age} is age`;
  document.getElementById("text3").innerHTML = `${theme} is theme`;
  document.body.style.setProperty("--primary-color", "#1512");
}

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
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `False ,res = ${res} && kid answer = ${kidanswer} `;
  }
}
