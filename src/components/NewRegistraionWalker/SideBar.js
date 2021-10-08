import "./SideBar.css";
import img from "../../Images/student.jpg";
const SideBar = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#222831",
        color: "#e5e5e5",
        borderRadius: "10px",
      }}
      className="d-flex flex-column justify-content-center"
    >
      <img
        src={img}
        alt="person"
        className="mentor-profile-img"
        style={{
          width: "100px",
          marginInline: "auto",
          marginTop: "20px",
          borderRadius: "15px",
        }}
      />
      <div
        className="container "
        style={{ marginBottom: "25px", marginTop: "25px" }}
      >
        <div
          className="card my-1 p-1 students-2"
          style={{
            width: "",
            backgroundColor: "#393E46",
            color: "#eeee",
          }}
        >
          Sign Up
        </div>
        <div
          className={`card my-1 p-1 ${
            props.appStat.personalDetailsStatus === false ? "special-2" : ""
          }`}
          style={{
            width: "",
            backgroundColor: "#393E46",
            color: "#eeee",
          }}
        >
          Personal Data
        </div>
        <div
          className={`card my-1 p-1 ${
            props.appStat.personalDetailsStatus === true &&
            props.appStat.goalSetting === false
              ? "special-2"
              : ""
          }`}
          style={{
            width: "",
            backgroundColor: "#393E46",
            color: "#eeee",
          }}
        >
          Goal Setting
        </div>
        <div
          className={`card my-1 p-1 ${
            props.appStat.goalSetting === true &&
            props.appStat.joinCommunity === false
              ? "special-2"
              : ""
          }`}
          style={{
            width: "",
            backgroundColor: "#393E46",
            color: "#eeee",
          }}
        >
          Community Setup
        </div>
        <div
          className="card my-1 p-1 students-2"
          style={{
            width: "",
            backgroundColor: "#393E46",
            color: "#eeee",
          }}
        >
          Mentorship
        </div>
        <div
          className="card my-1 p-1 students-2"
          style={{
            width: "",
            backgroundColor: "#393E46",
            color: "#eeee",
          }}
        >
          Your Data
        </div>
      </div>
    </div>
  );
};

export default SideBar;
