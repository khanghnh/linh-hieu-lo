function check() {
  read();
  if (n.length != 7) {
    blank_check();
  } else if (n == "BLDZAOE") {
    green();
    prize("1 HỘP PHẤN MÁ HỒNG JUDYDOLL");
  } else if (n == "2246155") {
    green();
    prize("100K");
  } else if (n == "078A6HG") {
    green();
    prize("VOUCHER 1 TUẦN ĐƯỢC PHANG ANH GUILT FREE");
  } else if (n == "270426T") {
    green();
    prize("1 LY NƯỚC TỰ CHỌN");
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
      sleep(300).then(() => {
        for (let a in [0, 1, 2, 3, 4, 5, 6]) {
          document.getElementsByClassName("input-btn")[a].style.background =
            "transparent";
        }
      });
    } else {
      document.getElementsByClassName("input-btn")[a].style.background =
        "transparent";
    }
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function red() {
  for (let a in [0, 1, 2, 3, 4, 5, 6]) {
    document.getElementsByClassName("input-btn")[a].style.background =
      "rgb(216, 43, 43)";
    document.getElementsByClassName("input-btn")[a].style.color =
      "rgb(255, 255, 255)";
  }
  document.getElementById("text").style.display = "none";
  document.getElementById("jackpot").style.display = "flex";
  document.getElementById("jackpot").innerHTML = "BẬY BẠ ÒI :)) BẤM LẠI I";
  document.getElementsByClassName("check")[0].style.display = "none";
  document.getElementsByClassName("reset")[0].style.borderRadius = "20%";
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
  document.getElementsByClassName("check")[0].style.display = "none";
  document.getElementsByClassName("reset")[0].style.display = "none";
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
  document.getElementsByClassName("check")[0].style.display = "";
  document.getElementsByClassName("reset")[0].style.borderRadius =
    "0 50% 50% 0";
}
function prize(vnd) {
  sendMail(vnd);
  document.getElementById(
    "jackpot"
  ).innerHTML = `CHÚC MỪNG E ĐÃ LỤM ĐC ${vnd} YAYYYY! BẤM NÚT GÓI QUÀ ĐI, JOHNNY PAPA BẮT ĐC TÍN HIỆU LIỀN `;
}
function done() {
  document.getElementById("giftbtn").style.display = "none";
  document.getElementById(
    "jackpot"
  ).innerHTML = `OKIE XONG RÙI ĐÓ IU BÉ LẮM <3`;
  document.getElementsByClassName("check")[0].style.display = "none";
  document.getElementsByClassName("reset")[0].style.display = "";
  document.getElementsByClassName("reset")[0].style.borderRadius = "20%";
}
function sendMail(cash) {
  let parms = {
    message: n,
    price: cash,
  };
  emailjs.send("service_kgbzned", "template_5uuiyhl", parms);
}
