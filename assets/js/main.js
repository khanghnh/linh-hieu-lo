function check() {
  for (let a in [0, 1, 2, 3, 4, 5, 6]) {
    n = n + document.getElementsByClassName("input-btn")[a];
  }
  if (n == "BLDZAOE") {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      document.getElementsByClassName("input-btn")[a].style.color =
        "rgb(9, 179, 9)";
    }
  } else if (n == "270426T") {
  } else {
    for (let a in [0, 1, 2, 3, 4, 5, 6]) {
      document.getElementsByClassName("input-btn")[a].style.color =
        "rgb(216, 43, 43)";
    }
  }
}
