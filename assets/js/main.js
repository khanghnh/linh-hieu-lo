function check() {
  read();
  if (n.length != 7) {
    blank_check();
  } else if (n == "BLDZAOE") {
    green();
    prize("100K");
  } else if (n == "2246155") {
    green();
    prize("50K");
  } else if (n == "078A6HG") {
    green();
    prize("50K");
  } else if (n == "270426T") {
    green();
    prize("20K");
  } else {
    red();
  }
}
function read() {
  let inp =
    document.getElementById("inp-1").value +
    document.getElementById("inp-2").value +
    document.getElementById("inp-3").value +
    document.getElementById("inp-4").value +
    document.getElementById("inp-5").value +
    document.getElementById("inp-6").value +
    document.getElementById("inp-7").value;
  n = inp.toUpperCase();
}
function MoveCursor(FromTextBox, ToTextBox) {
  let length = FromTextBox.value.length;
  let maxLength = FromTextBox.getAttribute("MaxLength");
  if (length == maxLength) {
    document.getElementById(ToTextBox).focus();
  }
}
function blank_check() {
  for (let a in [0, 1, 2, 3, 4, 5, 6]) {
    if (document.getElementsByClassName("input-btn")[a].value == "") {
      document.getElementsByClassName("input-btn")[a].style.background =
        "rgb(255, 174, 0)";
    } else {
      document.getElementsByClassName("input-btn")[a].style.background =
        "transparent";
    }
  }
}
function red() {
  for (let a in [0, 1, 2, 3, 4, 5, 6]) {
    document.getElementsByClassName("input-btn")[a].style.background =
      "rgb(216, 43, 43)";
    document.getElementsByClassName("input-btn")[a].style.color =
      "rgb(255, 255, 255)";
  }
}

function green() {
  for (let a in [0, 1, 2, 3, 4, 5, 6]) {
    document.getElementsByClassName("input-btn")[a].style.background =
      "rgb(9, 179, 9)";
    document.getElementsByClassName("input-btn")[a].style.color =
      "rgb(255, 255, 255)";
  }
  document.getElementById("text").style.display = "none";
  document.getElementById("jackpot").style.display = "flex";
  document.getElementById("giftbtn").style.display = "inherit";
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
  document.getElementById("text").style.display = "flex";
  document.getElementById("jackpot").style.display = "none";
  document.getElementById("giftbtn").style.display = "none";
}
function prize(vnd) {
  document.getElementById(
    "jackpot"
  ).innerHTML = `CHÚC MỪNG E ĐÃ LỤM ĐC ${vnd}\nYAYYYY! BẤM NÚT GÓI QUÀ ĐI, ĐỢI TÍ JOHNNY PAPA BẮN MOMO E LIỀN`;
}
