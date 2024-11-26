import React from "react";

// create
export const TodoContext = React.createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);

  return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
