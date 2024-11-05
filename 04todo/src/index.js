import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"


const App = () => {
    return(
        <div>
            <input type="text"/>
            <button>ADD</button>
            <ul>
                <li>
                    ambidextrous
                </li>
                <li>unsoppable</li>

            </ul>
        
        </div>
    )
}




const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
reactRoot.render(<App/>);