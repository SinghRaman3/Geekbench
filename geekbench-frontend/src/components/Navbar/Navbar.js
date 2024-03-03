import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Usercontext } from "../../UserContext.js"; 

const Navbar = () => {
  const {isSignedIn} = useContext(Usercontext)
  return (
    <nav
      className="navbar navbar-expand-lg border-body"
      data-bs-theme="dark"
      style={{ backgroundColor: "#191523" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          GeekBench
        </Link>
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
          <div className="auth ms-auto">
            <Link className="button" to="/login">
              {isSignedIn ? "Sign out" : "Sign in"}
            </Link>
            {!isSignedIn && <div className="vr mx-3"></div>}
            <Link className="button" to="/signup">
              {!isSignedIn ? "Register" : null}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
