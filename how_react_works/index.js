/**
 * const h1 = document.createElement("h1");
 * h1.innerHTML = "<b>Hello from JS</b>";

 * const root = document.getElementById("root");
 * root.appendChild(h1);
 */

const h1 = document.createElement("h1");
h1.innerHTML = "Hello from JS";

const div = document.createElement("div");
div.appendChild(h1);

const root = document.getElementById("root");
root.appendChild(div);
