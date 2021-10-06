import MentorProfile from "./MentorProfile";
import styles from "../../Styles/MntrProfGrid.module.css";

const MentorProfilesGrid = () => {
  return (
    <div className="p-5 bg-dark">
      <div className="container">
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
              <MentorProfile />
              <MentorProfile />
              <MentorProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfilesGrid;
