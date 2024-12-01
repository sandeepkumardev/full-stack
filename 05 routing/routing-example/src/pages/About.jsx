import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <NavLink to="/Homepage">Homepage</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  );
};

export default About;
