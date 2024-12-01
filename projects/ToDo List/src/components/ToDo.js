import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit, FaCheckDouble } from "react-icons/fa";

const ToDo = () => {
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

  const handleInputUpdate = (index) => {
    setTodos(todos.map((item, i) => (index === i ? editInput : item)));
    setShowInputIndex(null);
    setEditInput("");
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <div key={index} className="todo">
            {showInputIndex === index ? (
              <input
                type="text"
                value={editInput}
                onChange={(event) => setEditInput(event.target.value)}
                className="inputbox"
              />
            ) : (
              <li>{item}</li>
            )}

            <div className="actions">
              {showInputIndex === index ? (
                <FaCheckDouble
                  className="check_icon"
                  onClick={() => handleInputUpdate(index)}
                />
              ) : (
                <FaRegEdit
                  className="edit_icon"
                  onClick={() => {
                    handleShowInput(index);
                    setEditInput(item);
                  }}
                />
              )}

              <MdOutlineDeleteOutline
                className="delete_icon"
                onClick={() => handleDelete(index)}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
