import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Hero.module.css";
const Hero = () => {
  return (
    <Fragment>
      <section style={{ marginTop: "80px" }} className={`bg-dark p-5`}>
        <div className="container">
          <div className="d-grid">
            <div className="row">
              <div className="col-sm-12 col-lg-5 d-flex flex-column ">
                <div className="d-flex justify-content-start align-content-center">
                  <Link
                    to="/pictures"
                    className={`${styles.btnText} btn btn-outline-light mx-2 my-4 flex-grow-1`}
                  >
                    <i className="fa fa-graduation-cap mx-2"></i> Careers
                  </Link>
                  <Link
                    to="/auth"
                    className={`${styles.btnText} btn btn-primary mx-2 my-4 flex-grow-1`}
                  >
                    <i className="fa fa-sign-in mx-2"></i> Register
                  </Link>
                </div>
                <div className="py-3">
                  <p className="fw-bold h2 text-light">
                    Empowering youth through capacity building{" "}
                  </p>
                  <p
                    className="fs-6 text-light py-3 "
                    style={{ opacity: "0.8" }}
                  >
                    GuleShaoor nurtures youth and maximizes its potential by
                    providing mentorship, counselling and networks for their
                    personal as well as career development.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-lg-7">
                <img
                  src={require("../Images/GuleShaoorWord.svg").default}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
