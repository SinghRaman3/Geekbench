import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  let signedIn = false;
  return (
    <nav
      className="navbar navbar-expand-lg border-body"
      data-bs-theme="dark"
      style={{backgroundColor: "#191523"}}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          GeekBench
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        {/*   <ul className="navbar-nav ms-auto me-auto ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Build
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Compare
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Suggest a build
              </Link>
            </li>
          </ul>*/}

          <Link className="button ms-auto" to="/">
            {signedIn ? "Sign out" : "Sign in"}
          </Link>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;
