import "./StudentProfile.css";
import { Fragment } from "react";
import img from "../Images/student.jpg";
import img3 from "../Images/Mentor.jpg";
import Sess from "../components/SVGS/Sess";
const StudentProfile = () => {
  const activity = ["No recent activity to show"];
  const meetings = ["Monday 7:00 - 8:00"];
  return (
    <Fragment>
      <div
        className="container p-5"
        style={{
          fontFamily: "Lato",
          marginTop: "150px",
          marginBottom: "50px",
          color: "#eee",
          borderRadius: "10px",
        }}
      >
        <div className="d-flex flex-column p-5 justify-content-center align-items-center rounded modified-sp">
          <img src={img} alt="person" className="mentor-profile-img" />
          <div className="d-flex flex-column my-auto">
            <p
              style={{
                fontSize: "150%",
                marginBottom: "55px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              Dustin Holmes
            </p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center">
            <div
              className="card p-4  my-2 info-div col-6 mx-2"
              style={{
                width: "",
                backgroundColor: "#393E46",
                color: "#eeee",
              }}
            >
              <h6 className="display-6 temp text-center">Your Mentor</h6>
              <div className="d-flex justify-content-center align-items-center">
                <p className="pt-3 text-center">
                  <img
                    src={img3}
                    alt="person"
                    className="mentor-profile-img"
                  ></img>
                </p>
                <p className="p-3" style={{ fontSize: "110%" }}>
                  Mason Gonzales
                </p>
              </div>
              <div className="text-center">
                <button className="sess-btn">
                  <Sess />
                </button>
              </div>
            </div>
            <div
              className="card p-4  my-2 info-div col-6 mx-2"
              style={{
                width: "",
                backgroundColor: "#393E46",
                color: "#eeee",
              }}
            >
              <h6 className="temp text-center">Total Meeting This Week</h6>
              <p className="display-2 pt-3 text-center">02</p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div
              className="card p-4 info-div col-6 mx-2"
              style={{
                width: "",
                backgroundColor: "#393E46",
                color: "#eeee",
              }}
            >
              <h6 className="temp text-center">Recent Activity</h6>
              {activity.map((meeting) => {
                return (
                  <div
                    className="card my-1 p-1 students-2"
                    style={{ backgroundColor: "#393E46", color: "#eee" }}
                  >
                    {meeting}
                  </div>
                );
              })}
            </div>
            <div
              className="card p-4 info-div col-6 mx-2"
              style={{
                width: "",
                backgroundColor: "#393E46",
                color: "#eeee",
              }}
            >
              <h6 className="temp text-center">Your Meetings</h6>
              {meetings.map((meeting) => {
                return (
                  <div
                    className="card my-1 p-1 meetings-2"
                    style={{ backgroundColor: "#393E46", color: "#eee" }}
                  >
                    {meeting} &mdash; Mason Gonzales
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default StudentProfile;
