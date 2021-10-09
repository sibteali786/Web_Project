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
    <Fragment>
      <nav
        style={{ fontFamily: "Lato" }}
        className={`${styles.nav}  fixed-top shadow`}
      >
        <span className="navbar-brand ms-3">
          <img
            src={require("../Images/final_copy.svg").default}
            alt="logo"
            className={`${styles.logo} img-fluid`}
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleCollapsed}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${styles.desktopList}`}>
          <ul className={`${styles.list} ms-auto h5`}>
            <Link to="/">Home</Link>

            <Link to="/services">Services</Link>

            <a href="#about">About</a>

            {!isLoggedIn && <Link to="/auth">Log in</Link>}

            {isLoggedIn && (
              <Link to="#" onClick={logoutHandler}>
                Log out
              </Link>
            )}
          </ul>
        </div>
      </nav>
      <div className={`${isCollapsed ? styles.mobileNav : styles.hidden}`}>
        <ul className={`mx-auto ${styles.listDisplay}`}>
          <Link aria-current="page" to="/">
            Home
          </Link>

          <Link className="" to="services">
            Services
          </Link>

          <Link className="" href="#about">
            About
          </Link>
          {!isLoggedIn && (
            <Link className="nav-link" to="/auth">
              Log in
            </Link>
          )}
          {isLoggedIn && (
            <Link className="nav-link" to="#" onClick={logoutHandler}>
              Log out
            </Link>
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
