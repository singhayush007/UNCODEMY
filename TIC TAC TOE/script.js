let boxes = document.querySelectorAll(".boxes");

let turnX = true;

let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let message = document.querySelector(".message");
let span = document.querySelector("#result");

let restart = document.getElementById("restart");
let quit = document.getElementById("quit");

let WinnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

restart.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    message.classList.add("hide");
    box.style.backgroundColor = "";
    box.style.pointerEvents = "auto";
  });
});

quit.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    message.classList.add("hide");
    box.style.backgroundColor = "";
    box.style.pointerEvents = "auto";
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      // box.classList.add('active');
      box.style.backgroundColor = "blue";
      player1.classList.add("active");
      player2.classList.remove("active");
      turnX = false;
    } else {
      box.innerText = "O";
      // box.classList.add('active');
      box.style.backgroundColor = "red";
      player2.classList.add("active");
      player1.classList.remove("active");
      turnX = true;
    }
    checkWinner();
  });
});

function checkWinner() {
  for (let condition of WinnerCondition) {
    let box1 = boxes[condition[0]].innerText;
    let box2 = boxes[condition[1]].innerText;
    let box3 = boxes[condition[2]].innerText;
    if (box1 !== "" && box2 !== "" && box3 !== "") {
      if (box1 === box2 && box2 === box3) {
        showResult(box1);
      }
    }
  }
}

function showResult(result) {
  boxes.forEach((box) => {
    box.removeEventListener("click", () => {});
    box.style.pointerEvents = "none";
  });
  message.classList.remove("hide");
  span.innerText = result;
  if (result === "X") {
    message.style.color = "blue";
  } else {
    message.style.color = "red";
  }
}
