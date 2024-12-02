import "../App.css";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../store/todoContext";
function Todo() {
  const {todos,setTodos} =useContext(TodoContext);
  const [input, setInput] = useState("");
  //const [todos, setTodos] = useState([]);
  const [showInputIndex, setShowInputIndex] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleShowInput = (todoId) => {
    setShowInputIndex(todoId);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!input || !input.trim()) return;

    setTodos([{ id: Date.now(), todo: input.trim(), isCompleted: false }, ...todos]);
    setInput("");
  };

  const handleDelete = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  const handleTodoUpdate = (todoId) => {
    setTodos(todos.map((item) => (todoId === item.id ? { ...item, todo: editInput } : item)));
    setShowInputIndex(null);
    setEditInput("");
  };

  const handleTodoChecked = (todoId) => {
    setTodos(todos.map((item) => (todoId === item.id ? { ...item, isCompleted: !item.isCompleted } : item)));
  };

  return (
    <div className="todo">
      <Link to ="/" >Home</Link>
      <form onSubmit={handleAdd}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>

      <ul className="todos_list">
        {todos
          .filter((item) => !item.isCompleted)
          .map((item) => (
            <div key={item.id} className="todo_box">
              {showInputIndex === item.id ? (
                <input
                  value={editInput}
                  onChange={(event) => setEditInput(event.target.value)}
                  className="edit_input"
                  type="text"
                />
              ) : (
                <div className="todo_item">
                  <input type="checkbox" checked={item.isCompleted} onChange={() => handleTodoChecked(item.id)} />
                  <li className={`${item.isCompleted ? "completed" : ""}`}>{item.todo}</li>
                </div>
              )}

              <div className="actions">
                {showInputIndex === item.id ? (
                  <FaCheckDouble className="check_icon" onClick={() => handleTodoUpdate(item.id)} />
                ) : (
                  <FaEdit
                    className="edit_icon"
                    onClick={() => {
                      handleShowInput(item.id);
                      setEditInput(item.todo);
                    }}
                  />
                )}

                <MdOutlineDelete className="delete_icon" onClick={() => handleDelete(item.id)} />
              </div>
            </div>
          ))}
      </ul>
      {todos.some((item) => item.isCompleted) && (
        <div>
          <hr />
          <p>Completed tasks</p>
        </div>
      )}

      <ul className="todos_list">
        {todos
          .filter((item) => item.isCompleted)
          .map((item) => (
            <div key={item.id} className="todo_box">
              <div className="todo_item">
                <input type="checkbox" checked={item.isCompleted} onChange={() => handleTodoChecked(item.id)} />
                <li className={`${item.isCompleted ? "completed" : ""}`}>{item.todo}</li>
              </div>

              <div className="actions">
                <MdOutlineDelete className="delete_icon" onClick={() => handleDelete(item.id)} />
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
