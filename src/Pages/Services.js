import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <Fragment>
      <section className="bg-light p-5 text-dark">
        <div className="container">
          <div className="row py-5 justify-content-center gx-3 gy-3">
            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="card h-100 shadow">
                <img
                  src={require("../Images/mentorship.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, culpa?
                  </div>
                  <Link to="/mentorship" className="btn btn-outline-dark my-3">
                    Mentorship
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="card h-100 shadow">
                <img
                  src={require("../Images/counselling.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, culpa?
                  </div>
                  <Link to="/pictures" className="btn btn-outline-dark my-3">
                    Career Counselling
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow">
                <img
                  src={require("../Images/opportunity.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, culpa?
                  </div>
                  <Link to="/opportunity" className="btn btn-outline-dark my-3">
                    Opportunities
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow">
                <img
                  src={require("../Images/support.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, culpa?
                  </div>
                  <Link
                    to="/collaboration"
                    className="btn btn-outline-dark my-3"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow">
                <img
                  src={require("../Images/support.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, culpa?
                  </div>
                  <Link
                    to="/collaboration"
                    className="btn btn-outline-dark my-3"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
