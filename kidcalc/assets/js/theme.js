
function theme_mange(value) {
  window.localStorage.setItem('theme', value);
  if (value === "white&red") {
    document.body.style.setProperty("--primaryColor", "#E5383B");
    document.body.style.setProperty("--primaryColorsec", "#BA181B");
    document.body.style.setProperty("--accentColor", "#0B090A");
    document.body.style.setProperty("--accentColorsec", "#161A1D");
    document.body.style.setProperty("--backgroundColor", "#FFFFFF");
    document.body.style.setProperty("--backgroundColorsec", "#F5F3F4");
    document
      .getElementById("theme1")
      .setAttribute("style", "background-color: #E5383B");
    document
      .getElementById("theme2")
      .setAttribute("style", "background-color: #F5F3F4");
    document
      .getElementById("theme3")
      .setAttribute("style", "background-color: #F5F3F4");
  } else if (value === "white&yellow") {
    document.body.style.setProperty("--primaryColor", "#FFD60A");
    document.body.style.setProperty("--primaryColorsec", "#FFC300");
    document.body.style.setProperty("--accentColor", "#0B090A");
    document.body.style.setProperty("--accentColorsec", "#161A1D");
    document.body.style.setProperty("--backgroundColor", "#FFFFFF");
    document.body.style.setProperty("--backgroundColorsec", "#F5F3F4");
    document
      .getElementById("theme1")
      .setAttribute("style", "background-color: #F5F3F4");
    document
      .getElementById("theme2")
      .setAttribute("style", "background-color: #FFD60A");
    document
      .getElementById("theme3")
      .setAttribute("style", "background-color: #F5F3F4");
  } else if (value === "blue&grey") {
    document.body.style.setProperty("--primaryColor", "#0466C8");
    document.body.style.setProperty("--primaryColorsec", "#023E7D");
    document.body.style.setProperty("--accentColor", "#0B090A");
    document.body.style.setProperty("--accentColorsec", "#161A1D");
    document.body.style.setProperty("--backgroundColor", "#FFFFFF");
    document.body.style.setProperty("--backgroundColorsec", "#F5F3F4");
    document
      .getElementById("theme1")
      .setAttribute("style", "background-color: #F5F3F4");
    document
      .getElementById("theme2")
      .setAttribute("style", "background-color: #F5F3F4");
    document
      .getElementById("theme3")
      .setAttribute("style", "background-color: #0466C8");
  }
}
