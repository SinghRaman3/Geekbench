import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Topnav = () => {
  let signedIn = false;
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg border-body mb-5"
      style={{ backgroundColor: "#f9b404" }}
    >
      <div className="container-fluid">
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

        <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cpu">
                Cpu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gpu">
                Gpu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ssd">
                Ssd
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hdd">
                Hdd
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/monitor">
                Monitor
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
