import { Fragment } from "react/cjs/react.development";
import Navbar from "../components/Navbar";
import img from "../Images/mentor.jpg";
import img2 from "../Images/mentor-back.jpg";
import "./MentorProfile.css";
const MentorProfile = () => {
  const students = [
    "Muhammad Ali",
    "Irtaza Sajid Qureshi",
    "Ahmed Imtiaz",
    "Mohsin Iqbal",
    "Shirjeel Afzal",
    "Khalid Maqbool",
  ];
  const meetings = [
    "Monday 7:00 - 8:00",
    "Tuesday 9:30 - 10:30",
    "Wednesday 11:00 - 12:00",
    "Thursday 8:00 - 9:00",
    "Friday 14:00 - 15:00",
    "Saturday 16:00 - 17:00",
    "Sunday 9:00 - 10:00",
  ];
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
        <div className="d-flex flex-column p-5 justify-content-center align-items-center rounded modified">
          <img src={img} alt="person" className="mentor-profile-img" />
          <div className="d-flex flex-column my-auto">
            <p
              style={{
                fontSize: "150%",
                marginBottom: "0px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              Mason Gonzales
            </p>
            <p
              style={{
                fontSize: "130%",
                marginLeft: "15px",
                textAlign: "center",
              }}
            >
              Student Mentor
            </p>
          </div>
        </div>
        <div className="d-flex row justify-content-center">
          <div className="d-flex justify-content-center">
            <div
              className="card p-4  my-2 info-div col-6 mx-2"
              style={{
                width: "25rem",
                backgroundColor: "#393E46",
                color: "#eeee",
              }}
            >
              <h6 className="display-6 temp text-center">Total Students</h6>
              <p className="display-2 pt-3 text-center">25</p>
            </div>
            <div
              className="card p-4  my-2 info-div col-6 mx-2"
              style={{
                width: "25rem",
                backgroundColor: "#393E46",
                color: "#eeee",
              }}
            >
              <h6 className="temp text-center">Total Meeting This Week</h6>
              <p className="display-2 pt-3 text-center">07</p>
            </div>
          </div>
          <div
            className="card p-4 info-div col-6 mx-2"
            style={{
              width: "25rem",
              backgroundColor: "#393E46",
              color: "#eeee",
            }}
          >
            <h6 className="temp text-center">Your Students</h6>
            {students.map((student) => {
              return (
                <div
                  className="card my-1 p-1 students"
                  style={{ backgroundColor: "#393E46", color: "#eee" }}
                >
                  {student}
                </div>
              );
            })}
          </div>
          <div
            className="card p-4 info-div col-6 mx-2"
            style={{
              width: "25rem",
              backgroundColor: "#393E46",
              color: "#eeee",
            }}
          >
            <h6 className="temp text-center">Your Meetings</h6>
            {meetings.map((meeting) => {
              return (
                <div
                  className="card my-1 p-1 meetings"
                  style={{ backgroundColor: "#393E46", color: "#eee" }}
                >
                  {meeting} &mdash; Muhammad Ali
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MentorProfile;
