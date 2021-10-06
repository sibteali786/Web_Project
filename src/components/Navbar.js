import React, { useContext } from "react";
import styles from "../Styles/Navbar.module.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";
import { Fragment } from "react";
const Navbar = () => {
  const history = useHistory();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapsed = () => setIsCollapsed(!isCollapsed);
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedin;
  const logoutHandler = () => {
    AuthCtx.logout();
    history.replace("/");
  };
  return (
    <Fragment className="mt-5">
      <nav
        className={`${styles.nav} navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow`}
      >
        <div className="container-fluid">
          <span className="navbar-brand ms-3" href="#">
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/personalitydev">
                  Personality Development
                </Link>
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
    </Fragment>
  );
};

export default Navbar;
