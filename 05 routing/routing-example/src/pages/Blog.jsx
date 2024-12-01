import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/homepage">Homepage</NavLink>
    </div>
  );
};

export default Blog;
