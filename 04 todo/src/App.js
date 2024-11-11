import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [showInputIndex, setShowInputIndex] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleShowInput = (index) => {
    setShowInputIndex(index);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!input || !input.trim()) return;

    setTodos([input.trim(), ...todos]);
    setInput("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleTodoUpdate = (index) => {
    setTodos(todos.map((item, i) => (index === i ? editInput : item)));
    setShowInputIndex(null);
    setEditInput("");
  };

  return (
    <div className="App">
      <form onSubmit={handleAdd}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((item, index) => (
          <div key={index} className="todo">
            {showInputIndex === index ? (
              <input
                value={editInput}
                onChange={(event) => setEditInput(event.target.value)}
                className="edit_input"
                type="text"
              />
            ) : (
              <li>{item}</li>
            )}

            <div>
              {showInputIndex === index ? (
                <button onClick={() => handleTodoUpdate(index)}>Update</button>
              ) : (
                <button
                  onClick={() => {
                    handleShowInput(index);
                    setEditInput(item);
                  }}
                >
                  Edit
                </button>
              )}

              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
