const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.innerText = "hello world in div with h1 heading";
div.appendChild(h1);

const root = document.getElementById("root");
root.appendChild(div);
