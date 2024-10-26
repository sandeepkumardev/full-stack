import React from "react";
import ReactDom from "react-dom/client";

const h1Ele = React.createElement("h1", { id: "heading" }, "Hello React");

const reactRoot = ReactDom.createRoot(document.getElementById("root"));
reactRoot.render(h1Ele);
