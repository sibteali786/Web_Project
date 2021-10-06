import { Fragment } from "react/cjs/react.production.min";
import "./PersonalDev.css";
import inter from "../Images/InterPersonalSkills.jpg";
import intra from "../Images/intrapersonalSkills.jpg";
import bussiness from "../Imgaes/business.jpg";
import remote from "../Images/remote.jpg";
import critical from "../Images/critical.jpg";
import negotiation from "../Images/negotiation.jpg";
import Navbar from "../components/Navbar";
import CourseEnrollment from "../components/CourseEnrollment/CourseEnrollment";
import { useState } from "react";
const PersonalDev = () => {
  const [showMessage, setShowMessage] = useState(false);
  const mssgHandler = () => {
    setShowMessage(true);
  };
  const toggler = () => {
    setShowMessage(false);
  };
  const data = [
    {
      img: inter,
      copy: {
        tileNum: "Interpersonal Skills",
        tileText: "",
      },
      altText: "",
    },
    {
      img: intra,
      copy: {
        tileNum: "Intrapersonal Skills",
        tileText: "",
      },
      altText: "",
    },
    {
      img: bussiness,
      copy: {
        tileNum: "Communication Skills",
        tileText: "",
      },
      altText: "",
    },
    {
      img: critical,
      copy: {
        tileNum: "Critical Thinking",
        tileText: "",
      },
      altText: "",
    },
    {
      img: negotiation,
      copy: {
        tileNum: "Negotiation",
        tileText: "",
      },
      altText: "",
    },
    {
      img: remote,
      copy: {
        tileNum: "Remote Work",
        tileText: "",
      },
      altText: "",
    },
  ];
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid" style={{ fontFamily: "Lato" }}>
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <h2 className="personal-heading">Are you ready to create impact?</h2>
          <p className="personal-text">
            Personal development &mdash; is the imporvement of behavioural
            traits such as communication skills, interpersonal relationships,
            attitude towards life and restoring our ethics.
          </p>
        </div>
        <div className="container-fluid mt-5">
          <div className="row d-flex" style={{ width: "fit-content" }}>
            <div className="col-xl-9" style={{ backgroundColor: "#222831" }}>
              <div className="row d-flex justify-content-center">
                {data.map((obj, index) => {
                  return (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-4 col-xl-5 col-xxl-3  courseDivs position-relative"
                    >
                      <a href="#xaax">
                        <div className="courseTextDiv">
                          <div className="course-tile-num">
                            {obj.copy.tileNum}
                          </div>
                          <div className="course-tile-text">
                            {obj.copy.tileText.toUpperCase()}
                          </div>
                        </div>
                        <img
                          style={{ height: "100%" }}
                          src={obj.img}
                          className="img-fluid  courseImages"
                          alt={obj.altText}
                        ></img>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-xl-3">
              <CourseEnrollment messageHandler={mssgHandler} id={"xaax"} />
            </div>
          </div>
          {showMessage && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              style={{ marginTop: "10px" }}
              role="alert"
            >
              {"Enrollments will start from 1 November 2021. "}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={toggler}
              ></button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default PersonalDev;
