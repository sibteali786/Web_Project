import React from "react";
import { Fragment } from "react";

const Services = () => {
  return (
    <Fragment>
      <section className="bg-light p-5 text-dark">
        <div className="container">
          <div className="row py-5 justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-3 shadow rounded-3 my-2">
              <div className="d-flex flex-column justify-content-between align-items-center mx-1">
                <img
                  src={require("../Images/mentosrhip.svg").default}
                  alt=""
                  className="img-fluid shadow rounded-3 mt-2"
                />
                <div className="text-body fs-6 text-center py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, culpa?
                </div>
                <button className="btn btn-outline-dark my-3">
                  Get Mentorship
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 shadow rounded-3 my-2">
              <div className="d-flex flex-column justify-content-between align-items-center mx-1 ">
                <img
                  src={require("../Images/career.svg").default}
                  alt=""
                  className="img-fluid shadow rounded-3 mt-2"
                />
                <div className="text-body fs-6 text-center py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, culpa?
                </div>
                <button className="btn btn-outline-dark my-3">
                  Career Counselling
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 shadow rounded-3 my-2">
              <div className="d-flex flex-column justify-content-between align-items-center mx-1 ">
                <img
                  src={require("../Images/opporunities.svg").default}
                  alt=""
                  className="img-fluid shadow rounded-3 mt-2"
                />
                <div className="text-body fs-6 text-center py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, culpa?
                </div>
                <button className="btn btn-outline-dark my-3">
                  Opportunities
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 shadow rounded-3 my-2">
              <div className="d-flex flex-column justify-content-between align-items-center mx-1 ">
                <img
                  src={require("../Images/support.svg").default}
                  alt=""
                  className="img-fluid shadow rounded-3 mt-2"
                />
                <div className="text-body fs-6 text-center py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, culpa?
                </div>
                <button className="btn btn-outline-dark my-3">Support</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
