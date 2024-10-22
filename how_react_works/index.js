// const h1 = document.createElement("h1");
// h1.innerHTML = "hello from js";
// const root = document.getElementById("root");
const h1 = document.getElementById("h1")
h1.innerHTML = "HELLO from js";
const div = document.createElement("div");
div.appendChild(h1);
const root = document.getElementById("root");
root.appendChild(div);