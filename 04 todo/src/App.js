import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    setTodos([input, ...todos]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
