import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
