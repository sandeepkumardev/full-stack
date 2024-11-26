import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../store/todoContext";

const Home = () => {
  const { name, email } = useContext(TodoContext);

  // console.log(data);
  return (
    <div>
      Home page
      <Link to={"/todo"}>Todo</Link>
    </div>
  );
};

export default Home;
