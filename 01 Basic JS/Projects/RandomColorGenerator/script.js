function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 255);
  return randomColor;
}

const container = document.getElementById("container");

document.getElementById("colorButton").addEventListener("click", function () {
  const newColor1 = getRandomColor();
  const newColor2 = getRandomColor();
  const newColor3 = getRandomColor();
  document.body.style.backgroundColor = `rgb(${newColor1}, ${newColor2},${newColor3})`;
});
