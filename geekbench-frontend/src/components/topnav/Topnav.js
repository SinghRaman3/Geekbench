import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Topnav = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg border-body"
      style={{ backgroundColor: "#282b40" }}
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
              <Link className="topnav-link nav-link" to="/cpu">
                CPU
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topnav-link nav-link" to="/gpu">
                GPU
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topnav-link nav-link" to="/ram">
                RAM
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topnav-link nav-link" to="/ssd">
                SSD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topnav-link nav-link" to="/hdd">
                HDD
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="topnav-link nav-link" to="/build">
                Build
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topnav-link nav-link" to="/compare">
                Compare
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topnav-link nav-link" to="/geekbenchAi">
                GeekBenchAI
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
