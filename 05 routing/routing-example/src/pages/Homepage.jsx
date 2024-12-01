import React from "react";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  );
};

export default Homepage;
