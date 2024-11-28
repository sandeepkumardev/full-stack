import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // sign up logic
    // save user info

    navigate("/dashboard");
  };
  return (
    <div className="auth_container">
      <div className="auth_form">
        <form onSubmit={handleSubmit}>
          <div className="input_control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="input_control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input_control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="input_control">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" placeholder="Confirm Password" />
          </div>

          <input type="submit" value="Sign Up" className="submit_btn" />
        </form>
        <p className="signup_link">
          Already have an account? <Link to={"/sign-in"}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
