function storeData() {
  var userName = document.getElementById("inputname").value;
  window.localStorage.setItem("name", userName);

  var age = document.getElementById("age").value;
  window.localStorage.setItem("age", age);

  window.localStorage.setItem("correct", 0);


  return true;
}

function getData() {
  var name = window.localStorage.getItem("name");
  var age = window.localStorage.getItem("age");
  document.getElementById("text").innerHTML = `${name} is name`;
  document.getElementById("text2").innerHTML = `${age} is age`;
  var correct = window.localStorage.getItem("correct");
  document.getElementById("correct").innerHTML = correct;
  var theme = window.localStorage.getItem("theme");
  if (theme == "white&red") {
    document.getElementById("imageid").src = "assets/images/cover(2).png";
    theme_mange(theme);
  } else if (theme == "white&yellow") {
    document.getElementById("imageid").src = "assets/images/cover.png";
    theme_mange(theme);
  } else if (theme == "blue&grey") {
    document.getElementById("imageid").src = "assets/images/cover(1).png";
    theme_mange(theme);
  } else {
    document.getElementById("imageid").src = "assets/images/cover(2).png";
    theme_mange("white&red");
  }
  
}
