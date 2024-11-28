import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../store/authContext";

const SignUp = () => {
  const { users, setUsers } = useContext(authContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password || !user.confirm_password) {
      setError("Please fill all the fields");
      return;
    }

    if (user.password !== user.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    // check if user exists
    const isUserExist = users.some((u) => u.email === user.email);
    if (isUserExist) {
      setError("User already exists");
      return;
    }

    setUsers((prev) => [...prev, { ...user }]);
    navigate("/sign-in");
  };
  return (
    <div className="auth_container">
      <div className="auth_form">
        <form onSubmit={handleSubmit}>
          <div className="input_control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" name="name" value={user.name} onChange={handleChange} />
          </div>
          <div className="input_control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" name="email" value={user.email} onChange={handleChange} />
          </div>
          <div className="input_control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="input_control">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={user.confirm_password}
              onChange={handleChange}
            />
          </div>

          <input type="submit" value="Sign Up" className="submit_btn" />
          {error && <p className="error">{error}</p>}
        </form>
        <p className="signup_link">
          Already have an account? <Link to={"/sign-in"}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
