import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";


// const h1Ele = React.createElement("h1", {className: "heading"}, "Hello React")
// const pEle =  React.createElement("p", null, "Hello P")


// const div =  React.createElement("div", null, [h1Ele, pEle])
const Ele =()=>{
    return(
    <div>
      <h1>
        Hello this is React
      </h1>
    </div>
    );
};
//components using react
//jsx>babel>create.element>VirtualDom



// console.log(typeof(App));
// const Arr=()=>{
//     return(
//         <div>
//             <h2>Hello Everyone</h2>
//             <p>THis is practise</p>


//         </div>
//     );
// };
// const Arr2=()=>{
//     return(
//         <div>
//             <h2>Hello </h2>
//             <p>THis is practise 2</p>


//         </div>
//     );
// };








const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)



/**
 * npm init
 * npm i -D parcel
 * npx parcel index.html
 * npm i react react-dom
 * 
 * 
 * create index.js
 * 
 * npm parcel index.html

 */