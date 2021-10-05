import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./CourseEnrollment.css";
const CourseEnrollment = (props) => {
  const btnClickHandler = () => {
    props.messageHandler();
  };
  return (
    <Fragment>
      <div style={{ fontFamily: "Lato" }}>
        <div className="px-5 enroll-div">
          <p className="para pt-3">
            <b>Batch Duration:</b> 4 Weeks
          </p>
          <p className="para">
            <b>Video Duration:</b> {"72 hours"}
          </p>
          <p className="para">
            <b>Start Date:</b> 01 Oct 2021
          </p>
          <p className="para">
            <b>Fee:</b> {"Rs. 1,500"}
          </p>
          <p className="para">
            <b>Who can join</b>: everyone
          </p>
          <p className="para">
            <b>Enrolled trainees:</b> {"10,500"}
          </p>
          <p className="para">
            <b>Video medium:</b> English & Urdu
          </p>
          <p className="para-last">
            course Features:
            <br />
            Expert Guidance
            <br />
            Graded Assessments
            <br />
            Capstone Project
            <br />
          </p>
        </div>
        <button className="enroll-button" onClick={btnClickHandler}>
          Enroll Now!
        </button>
      </div>
    </Fragment>
  );
};

export default CourseEnrollment;
