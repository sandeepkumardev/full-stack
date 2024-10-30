// Variables to store current input and previous input
let currentInput = "";
let previousInput = "";
let operator = "";

// Append value to the display
function appendValue(value) {
  if ((value >= "0" && value <= "9") || value === ".") {
    currentInput += value;
  } else if (["+", "-", "*", "/"].includes(value)) {
    if (currentInput !== "") {
      if (previousInput === "") {
        previousInput = currentInput;
      } else {
        previousInput = calculateResult(previousInput, currentInput, operator);
      }
      currentInput = "";
    }
    operator = value;
  }
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
}

// Delete the last character
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

// Perform the calculation when equals is pressed
function calculate() {
  if (currentInput !== "" && previousInput !== "") {
    currentInput = calculateResult(previousInput, currentInput, operator);
    previousInput = "";
    operator = "";
    updateDisplay();
  }
}

// Helper function to calculate the result of two numbers based on the operator
function calculateResult(prev, curr, operator) {
  let result = 0;
  const prevNum = parseFloat(prev);
  const currNum = parseFloat(curr);
  if (operator === "+") {
    result = prevNum + currNum;
  } else if (operator === "-") {
    result = prevNum - currNum;
  } else if (operator === "*") {
    result = prevNum * currNum;
  } else if (operator === "/") {
    result = prevNum / currNum;
  }
  return result.toString();
}

// Update the display
function updateDisplay() {
  document.getElementById("display").value =
    currentInput || previousInput || "0";
}
