const bg = document.getElementById("bg");
bg.style.backgroundColor = "gray";

const redbutton = document.getElementById("red");
const bluebutton = document.getElementById("blue");
const pinkbutton = document.getElementById("pink");
const stopbutton = document.getElementById("stop");
const startbutton = document.getElementById("start");

redbutton.addEventListener("click", () => {
  bg.style.backgroundColor = "red";
});

bluebutton.addEventListener("click", () => {
  bg.style.backgroundColor = "blue";
});

pinkbutton.addEventListener("click", () => {
  bg.style.backgroundColor = "pink";
});

const colors = ["red", "blue", "pink", "green", "yellow", "purple"];

let intervalId = null;
function changeBackgroundColorEverySecond() {
  let index = 0;

  intervalId = setInterval(() => {
    bg.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 500);
}

stopbutton.addEventListener("click", () => {
  clearInterval(intervalId);
});

startbutton.addEventListener("click", () => {
  changeBackgroundColorEverySecond();
});
