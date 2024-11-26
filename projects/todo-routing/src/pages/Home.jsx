import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../store/todoContext";

const Home = () => {
  const { todos } = useContext(TodoContext);

  console.log(todos);
  return (
    <div>
      Home page
      <h1>Total Todos: {todos.length}</h1>
      <h3>Pending Todos: 5</h3>
      <h6>Completed Todos: 5</h6>
      <Link to={"/todo"}>Todo</Link>
    </div>
  );
};

export default Home;

// filter
