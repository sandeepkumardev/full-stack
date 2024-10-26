import React from "react";
import ReactDOM from "react-dom/client"
const h1Ele = React.createElement("p" , null , "hello p")

const divEle = React.createElement("h1" , null , "hello React")


const reactRoot = ReactDOM.createRoot(document.getElementById("root"))

reactRoot.render(divEle)