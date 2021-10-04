import React, { useContext } from "react";
import styles from "../Styles/Navbar.module.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";
const Navbar = () => {
  const history = useHistory();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapsed = () => setIsCollapsed(!isCollapsed);
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedin;
  const logoutHandler = () => {
    AuthCtx.logout();
    history.replace("/");
  };
  return (
    <div className="mt-5">
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
            <img
              src={require("../Imgaes/final_copy.svg").default}
              alt="logo"
              className={`${styles.logo} img-fluid`}
            />
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
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/auth">
                    Log in
                  </Link>
                </li>
              )}
              <li className="nav-item">
                {isLoggedIn && (
                  <Link className="nav-link" to="#" onClick={logoutHandler}>
                    Log out
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
