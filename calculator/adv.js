const btn = document.querySelectorAll("button");
const input = document.getElementById("input");
const output = document.getElementById("output");
const clear = document.getElementsByClassName("clear")[0];
const del = document.getElementsByClassName("del")[0];
const switchBtn = document.getElementsByClassName("switch")[0];
const display = document.getElementsByClassName("display")[0];
const container = document.getElementsByClassName("container")[0];
const buttons = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      input.value += e.target.value;
    } else if (e.target.classList.contains("equal")) {
      try {
        output.value = eval(input.value);
      } catch (error) {
        output.value = "Error";
      }
    }
  });
});

clear.addEventListener("click", () => {
  input.value = "";
  output.value = "";
});

del.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

switchBtn.innerHTML = "ON";
display.classList.add("dark");
input.classList.add("dark");
output.classList.add("dark");
btn.forEach((button) => {
  if (!button.classList.contains("switch")) button.classList.add("disabled");
});
switchBtn.addEventListener("click", () => {
  input.value = "";
  output.value = "";
  display.classList.toggle("open");
  display.classList.toggle("dark");
  container.classList.toggle("example-3");
  input.classList.toggle("dark");
  output.classList.toggle("dark");
  switchBtn.classList.toggle("red");
  switchBtn.innerHTML = switchBtn.innerHTML === "OFF" ? "ON" : "OFF";
  btn.forEach((button) => {
    if (!button.classList.contains("switch")) button.classList.toggle("disabled");
  });
});
