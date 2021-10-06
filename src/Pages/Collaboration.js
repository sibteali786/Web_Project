import React from "react";
import CollabForm from "../components/CollabForm/CollabForm";
import Navbar from "../components/Navbar";
import collab from "../Imgaes/collab.jpg";
import "./Collaboration.css";
const Collaboration = () => {
  const someText2 =
    "We are always on the look out for volunteers who have experience in construction, mentoring, counselling, youth work and business management to contribute towards the delivery of our services. We also have paid vacancies from time to time and some of our volunteers are now paid members of staff. Come and join us!";
  const someText =
    "We offer 3 partnership models for working with a range of public sector, private sector, education providers, charities and community organisations. The aim is to collaborate as a community to make a sustainable positive social impact.";
  return (
    <div style={{ fontFamily: "Lato" }}>
      <Navbar />
      <div className="container-fluid p-0 collab-div position-relative">
        <img
          src={collab}
          className="collab-img img-fluid"
          alt="hand shaking"
        ></img>
        <div className="collab-main">
          <div className="collab-heading display-6 mb-5">Work with us</div>
          <div className="collab-text">
            <p className="mb-4">{someText}</p>
            <p className="someText2">{someText2}</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row d-flex flex-row justify-content-around">
          <div
            className="card text-white bg-dark mb-3 card__main"
            style={{ width: "22rem", fontSize: "110%" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontSize: "150%",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Refer To Us Partnership
              </h5>
              <p className="card-text">
                We offer an exclusive membership package for direct referrals to
                our service. The package includes:
                <br /> * Access to a fast track direct referral process.
                <br /> * 2 free workshops per year (delivered at a venue of your
                choice)
                <br /> * Your logo promoted on our marketing materials as a
                partner.
              </p>
              <a href="#form" className="btn btn-primary">
                Collaborate
              </a>
            </div>
          </div>

          <div
            className="card text-white bg-dark mb-3 card__main"
            style={{ width: "22rem", fontSize: "110%" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontSize: "150%",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Direct Delivery Partnership
              </h5>
              <p className="card-text">
                We work with organisations to create a tailored workshop
                programme delivered at agreed intervals. We will come to your
                venue and deliver workshops (which can include site visits). We
                also work with education providers as an intervention advocate
                to support positive student-teacher engagement.
              </p>
              <a href="#form" className="btn btn-primary">
                Collaborate
              </a>
            </div>
          </div>
          <div
            className="card text-white bg-dark mb-3 card__main"
            style={{ width: "22rem", fontSize: "110%" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontSize: "150%",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Referral Exchange Partnership
              </h5>
              <p className="card-text">
                We work with organisations, education providers, charities and
                youth projects to deliver our services. We support our partners
                by referring young people to services for additional support.
                They work with us by referring young people with an interest in
                or studying construction.
              </p>
              <a href="#form" className="btn btn-primary">
                Collaborate
              </a>
            </div>
          </div>
          <div
            className="card text-white bg-dark mb-3 mt-3 card__main"
            style={{ width: "22rem", fontSize: "110%" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontSize: "150%",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Volunteering and Employment Opportunities
              </h5>
              <p className="card-text">
                If you would like to work with us as a volunteer we would love
                to have you onboard! We require volunteers with a variety of
                skills and experience so get in touch today to see how you can
                help us to Elevate The Youth.
              </p>
              <a href="#form" className="btn btn-primary">
                Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CollabForm />
      </div>
    </div>
  );
};

export default Collaboration;
