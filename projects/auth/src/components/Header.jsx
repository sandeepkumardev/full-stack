import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const isUserExist = localStorage.getItem("user");
    if (!isUserExist) return;

    setUser(JSON.parse(isUserExist));
  }, []);

  console.log(user);
  return (
    <div className="header">
      <div>
        <h1>Logo</h1>
      </div>

      <div>
        {user ? (
          <div>
            <p>{user.name}</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <Link to="/sign-in">
            <button>Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
