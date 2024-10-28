import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"


const App = () => {
    return(
        <div>
            <Main/>
            <Header/>
            <Footer/>
        
        </div>
    )
}

const Header = () => {
    return(
        <div className="header">
            <h1>Logo</h1>
            <input type="text" />
            <h6>User</h6>
            
        </div>
    )
}
const Main = () =>{
    return(
        <div className="main">
            <card/>
            <card/>

            
        </div>
    )
}
const Card  = () => {
    return(
        <div className="card">item info

            
        </div>
    )
}
const Footer = () => {
    return(
        <div className="footer">
            <h2>company name</h2>
            <h2>social links</h2>
            
        </div>
    )
}


const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
reactRoot.render(<App/>);