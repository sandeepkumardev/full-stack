var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
function processNumber(num1, num2, fn) {
  if (!num1 || !num2) {
    alert("Please enter both numbers");
    return;
  }
  const output = fn(num1, num2);
  result.innerHTML = output.toFixed(2);
}

function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
const sumBtn = document.getElementById("sum");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");
sumBtn.addEventListener("click", () => {
  processNumber(Number(num1.value), Number(num2.value), sum);
});

subBtn.addEventListener("click", () => {
  processNumber(Number(num1.value), Number(num2.value), sub);
});

mulBtn.addEventListener("click", () => {
  processNumber(Number(num1.value), Number(num2.value), mul);
});

divBtn.addEventListener("click", () => {
  processNumber(Number(num1.value), Number(num2.value), div);
});
