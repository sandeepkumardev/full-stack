import React from "react";
import ReactDOM from "react-dom/client"

const h1Ele = React.createElement("h1", {className: "heading"}, "Hello React")
const pEle =  React.createElement("p", null, "Hello P")


const div =  React.createElement("div", null, [h1Ele, pEle])

const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
reactRoot.render(div)


/**
 * npm init
 * npm i -D parcel
 * npx parcel index.html
 * npm i react react-dom
 * 
 * create index.js
 * 
 * npm parcel index.html
 */