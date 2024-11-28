import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // sign in logic
    // save user info

    navigate("/dashboard");
  };
  return (
    <div className="auth_container">
      <div className="auth_form">
        <form onSubmit={handleSubmit}>
          <div className="input_control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input_control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Email" />
          </div>

          <input type="submit" value="Sign In" className="submit_btn" />
        </form>
        <p className="signup_link">
          Don&apos;t have an account? <Link to={"/sign-up"}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
