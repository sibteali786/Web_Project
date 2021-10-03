import React from "react";
import styles from "../Styles/Navbar.module.css";
import { useState } from "react";
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapsed = () => setIsCollapsed(!isCollapsed);
  return (
    <div>
      <nav
        className={`${styles.nav} navbar navbar-expand-md navbar-dark bg-dark fixed-top`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleCollapsed}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand" href="#">
            <img src={require("../Imgaes/final_copy.svg").default} alt="logo" />
          </span>
          <div
            className={`${isCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navmenu"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#feature">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
