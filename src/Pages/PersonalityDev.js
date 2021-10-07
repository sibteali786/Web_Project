import React from "react";
import styles from "../Styles/PersonalityDev.module.css";
const PersonalityDev = () => {
  return (
    <section
      className="text-light mt-5"
      style={{ height: "100vh", fontFamily: "Lato" }}
    >
      <div className={`${styles.back} h-100`}>
        <div
          className={`d-flex flex-column justify-content-center align-content-center h-100`}
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
              <div className="row gy-3">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className={`${styles.cardColor} card text-dark`}>
                    <div className="card-body ">
                      <div className="card-text fw-bold h5 my-5">
                        Communication
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
                        Interpersonal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card text-dark">
                <div className="card-body text-center">
                  <div className="card-text text-start">
                    <strong>Batch Duration:</strong> 12 Weeks
                  </div>
                  <hr />
                  <div className="card-text text-start">
                    <strong>videos Duration:</strong> 24 hours
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
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light p-5">
        <div className="container py-5">
          <div className="row justify-content-center gy-3 text-center">
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
    </section>
  );
};

export default PersonalityDev;
