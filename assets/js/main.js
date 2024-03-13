function MoveCursor(FromTextBox, ToTextBox) {
  let length = FromTextBox.value.length;
  let maxLength = FromTextBox.getAttribute("MaxLength");
  if (length == maxLength) {
    document.getElementById(ToTextBox).focus();
  }
}

function check() {
  let n =
    document.getElementById("inp-1").value +
    document.getElementById("inp-2").value +
    document.getElementById("inp-3").value +
    document.getElementById("inp-4").value +
    document.getElementById("inp-5").value +
    document.getElementById("inp-6").value +
    document.getElementById("inp-7").value;
  n = n.toUpperCase();

  if (n == "BLDZAOE") {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      document.getElementsByClassName("input-btn")[a].style.background =
        "rgb(9, 179, 9)";
      document.getElementsByClassName("input-btn")[a].style.color =
        "rgb(255, 255, 255)";
    }
  } else if (n == "270426T") {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      document.getElementsByClassName("input-btn")[a].style.background =
        "rgb(9, 179, 9)";
      document.getElementsByClassName("input-btn")[a].style.color =
        "rgb(255, 255, 255)";
    }
  } else if (n.length != 7) {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      if (document.getElementsByClassName("input-btn")[a].value == "") {
        document.getElementsByClassName("input-btn")[a].style.background =
          "rgb(255, 174, 0)";
      }
    }
  } else {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      document.getElementsByClassName("input-btn")[a].style.background =
        "rgb(216, 43, 43)";
      document.getElementsByClassName("input-btn")[a].style.color =
        "rgb(255, 255, 255)";
    }
  }
}

function reset() {
  document.getElementById("inp-1").value = "";
  document.getElementById("inp-2").value = "";
  document.getElementById("inp-3").value = "";
  document.getElementById("inp-4").value = "";
  document.getElementById("inp-5").value = "";
  document.getElementById("inp-6").value = "";
  document.getElementById("inp-7").value = "";
  for (let a in [0, 1, 2, 3, 4, 5, 6]) {
    document.getElementsByClassName("input-btn")[a].style.color =
      "hsl(0, 0%, 8%)";
    document.getElementsByClassName("input-btn")[a].style.background =
      "transparent";
    document.getElementById("inp-1").focus();
  }
}
