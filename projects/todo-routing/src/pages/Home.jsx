import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home page
      <Link to={"/todo"}>Todo</Link>
    </div>
  );
};

export default Home;
