const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const rgb1 = Math.floor(Math.random() * 255);
  const rgb2 = Math.floor(Math.random() * 255);
  const rgb3 = Math.floor(Math.random() * 255);

  output.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
});
