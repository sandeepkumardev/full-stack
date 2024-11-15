import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Blog;
