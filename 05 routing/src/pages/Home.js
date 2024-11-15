import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  );
};

export default Home;
