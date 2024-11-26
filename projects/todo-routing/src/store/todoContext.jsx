import React from "react";

// create
export const TodoContext = React.createContext(null);

const TodoProvider = ({ children }) => {
  const name = "sandeep";
  const email = "QxK9F@example.com";

  return <TodoContext.Provider value={{ name, email }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
