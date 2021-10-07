import React from "react";
import styles from "../Styles/MntrProfGrid.module.css";
import MentorProfile from "./mentorship-section/MentorProfile";
const Mentors = () => {
  return (
    <div className="container p-5">
      <div className="row text-light gy-1 gx-1 my-2">
        <div className={`${styles.roleCard} card col-md-4 col-sm-12`}>
          <div className="card-body">
            <div
              className="card-text fs-3 text-center"
              style={{ margin: "20% 0" }}
            >
              Meet Our Mentors
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <MentorProfile />
            <MentorProfile />
            <MentorProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
