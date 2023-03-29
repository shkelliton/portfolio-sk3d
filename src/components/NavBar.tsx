import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar-custom">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../ProjectPage">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="../ProjectPage">
            empty/test
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
