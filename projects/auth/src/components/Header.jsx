import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Logo</h1>
      </div>

      <div>
        <Link to="/sign-in">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
