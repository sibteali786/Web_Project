import React from "react";
import styles from "../Styles/CrerCounslrs.module.css";
import CareerProfile from "./careerCounsellors-profiles/CareerProfile";

const CareerCounsellors = () => {
  return (
    <div className="container p-5">
      <div className="row gx-1 gy-1 text-light my-2">
        <div className={`${styles.roleCard} card col-md-4 col-sm-12`}>
          <div className="card-body">
            <div
              className="card-text text-center fs-3"
              style={{ margin: "20% 0" }}
            >
              Meet Our Career Counselling Experts
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <CareerProfile />
            <CareerProfile />
            <CareerProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounsellors;
