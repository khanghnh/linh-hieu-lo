function check() {
  let n1 = document.getElementById("1").value;
  let n2 = document.getElementById("2").value;
  let n3 = document.getElementById("3").value;
  let n4 = document.getElementById("4").value;
  let n5 = document.getElementById("5").value;
  let n6 = document.getElementById("6").value;
  let n7 = document.getElementById("7").value;
  let n = n1 + n2 + n3 + n4 + n5 + n6 + n7;
  if (n == "BLDZAOE") {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      document.getElementsByClassName("input-btn")[a].style.color =
        "rgb(9, 179, 9)";
    }
  } else if (n == "270426T") {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      document.getElementsByClassName("input-btn")[a].style.color =
        "rgb(9, 179, 9)";
    }
  } else {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      document.getElementsByClassName("input-btn")[a].style.color =
        "rgb(216, 43, 43)";
    }
  }
}

function reset() {
  document.getElementById("1").value = "";
  document.getElementById("2").value = "";
  document.getElementById("3").value = "";
  document.getElementById("4").value = "";
  document.getElementById("5").value = "";
  document.getElementById("6").value = "";
  document.getElementById("7").value = "";
}
