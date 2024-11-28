import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../store/authContext";

const SignIn = () => {
  const { users } = useContext(authContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setError("Please fill all the fields");
      return;
    }

    const isUserExist = users.find((u) => u.email === user.email);
    if (!isUserExist) {
      setError("User does not exist");
      return;
    }

    if (isUserExist.password !== user.password) {
      setError("Incorrect password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(isUserExist));

    navigate("/dashboard");
  };
  return (
    <div className="auth_container">
      <div className="auth_form">
        <form onSubmit={handleSubmit}>
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

          <input type="submit" value="Sign In" className="submit_btn" />
          {error && <p className="error">{error}</p>}
        </form>
        <p className="signup_link">
          Don&apos;t have an account? <Link to={"/sign-up"}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
