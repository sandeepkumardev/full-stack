import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  );
};

export default About;
