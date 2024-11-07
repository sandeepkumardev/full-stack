import { useState } from "react";

const App = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const handleInputchange = (event) => {
        setInput(event.target.value);
    };
    const handleAdd = () => {
        setTodos([input, ...todos]);
        setInput("");
    };
    return(
        <div>
            <input type="text" value={input} onchange= {handleInputchange=}/>
            <button onClick={handleAdd}>ADD</button>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{index}></li>

                )}
        
        </div>
    )
}
export default App