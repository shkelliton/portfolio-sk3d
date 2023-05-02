import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar bg-primary text-dark nav justify-content-center fixed-top">
      <ul className="nav justify-content-center">
        <li className="nav-item ">
          <Link className="nav-link text-dark" to="/">
            Home
          </Link>
        </li>
        <li>
          <h1>SK3D</h1>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="../#ProjectPage">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
