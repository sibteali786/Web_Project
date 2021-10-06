import Contact from "./Contact";
import Header from "./Header";
import About from "./About";
import { Link } from "react-router-dom";
const ProfilePage = () => {
  return (
    <div
      className="container p-5 mt-5"
      style={{ width: "100%", maxWidth: "850px" }}
    >
      <div className="row m-0 pt-5">
        <div className="profile-image col-md-5 mx-auto mb-md-0 mb-4"></div>
        <p className="col-md-7 d-flex flex-column justify-content-center mx-auto text-center fst-italic lh-lg fw-bold">
          "I am highly elated to be part of this group of like minded people who
          are interested in advancing the SDG'S which would help to impact
          positively on the lives of people. I believe that ignorance is never a
          solution to a problem hence it's needed for all to be knowledgeable"
        </p>
      </div>
      <About />
      <div className="my-4 d-flex justify-content-between align-content-center">
        <Link to="/mentorship" className="btn btn-outline-dark">
          Back to Mentors Page
        </Link>
        <button
          to="/mentorship"
          type="button"
          class="btn btn-outline-dark"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Be My Mentor
        </button>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div className="modal-title text-center">
                <h3 className="">Get in Touch!</h3>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Contact />
            </div>
            <div class="modal-footer ">
              <button
                type="button"
                class="btn btn-secondary "
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
