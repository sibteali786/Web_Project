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
          <span className="navbar-brand" href="#">
            <img
              src={require("../Images/final_copy.svg").default}
              alt="logo"
              className={`${styles.logo} img-fluid`}
            />
          </span>
          x
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleCollapsed}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${styles.desktopList}`}>
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
      <div className={`${isCollapsed ? styles.mobileNav : styles.hidden}`}>
        <ul className={`mx-auto ${styles.listDisplay}`}>
          <a className=" " aria-current="page" href="#home">
            Home
          </a>

          <a className="" href="#feature">
            Features
          </a>

          <a className="" href="#about">
            About
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
