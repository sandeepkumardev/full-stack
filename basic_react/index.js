import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", null, "Hello from React");
const newDiv = React.createElement("div", null, heading);
const reactDiv = React.createElement("div", null, [newDiv]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactDiv);
