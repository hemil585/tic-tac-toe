let music = new Audio("assets/music.mp3");
let ting = new Audio("assets/ting.mp3");
let gameover = new Audio("assets/gameover.mp3");
let turn = "X";
let gameOver = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxtexts = document.getElementsByClassName("box-text");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " won";
      gameOver = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".box-text");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".box-text");
  Array.from(boxtext).forEach((e) => {
    e.innerText = "";
  });
  turn = "X";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  gameOver = false;
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0px";
});
