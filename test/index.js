const bg = document.getElementById("bg");

const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

redButton.addEventListener("click", () => {
  bg.style.backgroundColor = "red";
});

blueButton.addEventListener("click", () => {
  bg.style.backgroundColor = "blue";
});

greenButton.addEventListener("click", () => {
  bg.style.backgroundColor = "green";
});

const colors = ["red", "blue", "green", "yellow", "purple"];

let intervalId;

function randomBackgroundColor() {
  let index = 0;

  intervalId = setInterval(() => {
    bg.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 500);
}

startButton.addEventListener("click", () => {
  randomBackgroundColor();
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
});
