import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1e192b", color: "#fff" }}>
      <div
        className="container text-start mt-3"
      >
        <div className="py-5">
          <div className="row">
            <div className="col-lg-4 px-5 mb-5">
              <h5 style={{ color: "#f9b404" }}>Geekbench</h5>
              <hr></hr>
              <li className="nav-link">
                <Link className="footer-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-link">
                <Link className="footer-link" to="/">
                  Build
                </Link>
              </li>

              <li className="nav-link">
                <Link className="footer-link" to="/">
                  Components
                </Link>
              </li>

              <li className="nav-link">
                <Link className="footer-link" to="/">
                  GeekBench AI
                </Link>
              </li>

              <li className="nav-link">
                <Link className="footer-link" to="/">
                  Compare
                </Link>
              </li>
            </div>

            <div className="col-lg-4 px-5 mb-5">
              <h5 style={{ color: "#f9b404" }}>Account</h5>
              <hr></hr>

              <li className="nav-link">
                <Link className="footer-link" to="/login">
                  Log In
                </Link>
              </li>

              <li className="nav-link">
                <Link className="footer-link" to="/signup">
                  Register
                </Link>
              </li>
            </div>

            <div className="col-lg-4 ps-5 mb-5">
              <h5 style={{ color: "#f9b404" }}>Contact Us</h5>
              <hr></hr>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="text-center pt-2 pb-4 copyright-text">
          ©2023 GeekBench, LLC. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
