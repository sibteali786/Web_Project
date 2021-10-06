import { Link } from "react-router-dom";
const MentorProfile = () => {
  return (
    <div className="col-sm-4 text-center">
      <Link
        to="/profilePage"
        className="text-light"
        style={{ textDecoration: "none" }}
      >
        <div className="avatar mx-auto"></div>
        <p className="py-3">John Doe</p>
      </Link>
    </div>
  );
};

export default MentorProfile;
