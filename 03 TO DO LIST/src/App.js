import "./index.css";
import {useState} from "react";

const App=()=>{

    const[input,setInput]= useState ("");
    const[todos,setTodos]= useState([]);
     const handleInputChange=(event)=>{
        setInput(event.target.value);
     }
    const handleAdd=(e)=>{
      e.preventDefault()
      setTodos([input,...todos]);
      setInput("");
    };
    return(
     <div className="Box">
        <div className="Head">
         <form onSubmit={handleAdd}> 
            <input type="text" value={input} onChange={handleInputChange}></input>
            <button type="submit" id="but">ADD</button>
            </form>
        </div>
        <ul>
           {todos.map((item,index)=>(
            <li key={index}>{item}</li>
           ))}
        </ul>
     </div>
    );
};

export default App;