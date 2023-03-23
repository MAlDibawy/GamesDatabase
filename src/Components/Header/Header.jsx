import React from "react";
import { Link } from "react-router-dom";
import headerImg from "./assets/wraper.png";
import logo from "./assets/logo-sm.png";

import "./Header.css";

export default function Header() {
  return (
    <div>
      {/* <header>
        <img src={headerImg} alt="header" className="w-100" />
      </header> */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand fw-bolder" to="/home">
            <img
              src={logo}
              alt="logo"
              className="logo"
              style={{ maxWidth: "40px" }}
            />{" "}
            Games Database
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-lg-3 fw-bolder" to="mmorpg">
                  MMORPG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 fw-bolder" to="shooter">
                  Shooter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 fw-bolder" to="sailing">
                  Sailing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 fw-bolder" to="permadeath">
                  Permadeath
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 fw-bolder" to="superhero">
                  Superhero
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 fw-bolder" to="pixel">
                  Pixel
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
