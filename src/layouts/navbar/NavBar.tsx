import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Link to="/">
        <div>
          <h2>Home h2</h2>
          <h3>Home </h3>
        </div>
      </Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
