import React from "react";
import styles from "../Styles/PersonalityDev.module.css";
import { Link } from "react-router-dom";
const PersonalityDev = () => {
  return (
    <section className="text-light mt-5" style={{ height: "100vh" }}>
      <div className={`${styles.back} h-100`}>
        <div
          className={`${styles.backOverlay} d-flex flex-column justify-content-center align-content-center h-100`}
        >
          <div className="display-2 fw-normal text-center my-5">
            Personality Development
          </div>
          <div
            className="text-light fs-4 text-center fw-light "
            style={{ margin: "0 10%" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            voluptatibus! Voluptas aspernatur praesentium tempore est
            voluptatibus numquam, facere enim aut?
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-dark p-5">
        <div className="container py-5">
          <div className="row justify-content-center gy-3 text-center">
            <div className="col-sm-12 col-md-6">
              <div className="row justify-content-center gy-3">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className={`${styles.cardColor} card text-dark`}>
                    <div className="card-body ">
                      <div className="card-text fw-bold h5 my-5">
                        Interpersonal
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className={`${styles.cardColor} card text-dark`}>
                    <div className="card-body">
                      <div className="card-text fw-bold h5 my-5">
                        Intrapersonal
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className={`${styles.cardColor} card text-dark`}>
                    <div className="card-body">
                      <div className="card-text fw-bold h5 my-5">
                        Communication
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={`${styles.cardShadow} card text-dark`}>
                <div className="card-body text-center">
                  <div className="card-text text-start">
                    <strong>Batch Duration:</strong> 12 Weeks
                  </div>
                  <hr />
                  <div className="card-text text-start">
                    <strong>Videos Duration:</strong> 24 hours
                  </div>
                  <hr />
                  <div className="card-text text-start">
                    <strong>Start Date:</strong> 12 Dec 2021
                  </div>
                  <hr />
                  <div className="card-text text-start">
                    <strong>Who can join:</strong> Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Veniam est consequatur fugit
                    ratione libero dolor?
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className={`${styles.enrollBtn} btn btn-outline-warning text-light fw-bold fs-6 mt-5 w-75`}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light p-5">
        <div className="container py-5">
          <div className="display-2 text-dark fw-bold text-center my-5">
            What To Expect From Us
          </div>
          <div className="row justify-content-center gy-3 gx-0">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`${styles.cardColor} card text-dark shadow ${styles.cardAnimation}`}
              >
                <div className="card-body ">
                  <div className="card-title fw-bold h5 my-5">
                    Communication
                  </div>
                  <div className="card-text mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet sapiente quae ipsam ipsa amet magnam quas repellat
                    aliquam recusandae exercitationem quis quidem, beatae ex
                    dolorum nesciunt id assumenda? Architecto, repellat?
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`${styles.cardColor} card shadow text-dark ${styles.cardAnimation}`}
              >
                <div className="card-body">
                  <div className="card-title fw-bold h5 my-5">
                    Intrapersonal
                  </div>
                  <div className="card-text mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet sapiente quae ipsam ipsa amet magnam quas repellat
                    aliquam recusandae exercitationem quis quidem, beatae ex
                    dolorum nesciunt id assumenda? Architecto, repellat?
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`${styles.cardColor} card shadow text-dark ${styles.cardAnimation}`}
              >
                <div className="card-body">
                  <div className="card-title fw-bold h5 my-5">
                    Interpersonal
                  </div>
                  <div className="card-text mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet sapiente quae ipsam ipsa amet magnam quas repellat
                    aliquam recusandae exercitationem quis quidem, beatae ex
                    dolorum nesciunt id assumenda? Architecto, repellat?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade text-dark"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title display-6 fw-bold text-uppercase text-success"
                id="staticBackdropLabel"
              >
                Announcement !
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body fw-bold fs-4 text-center text-danger my-5 mx-5 ">
              Our Batch-19 is Going to Start Soon. Stay Vigilant
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalityDev;
