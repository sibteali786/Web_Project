import React from "react";
import { Link } from "react-router-dom";
const CareerProfile = () => {
  return (
    <div className="col-sm-4 text-center">
      <Link
        to="/CareerProfilePage"
        className="text-light fw-bold"
        style={{ textDecoration: "none" }}
      >
        <div className="avatar mx-auto"></div>
        <p className="py-3">John Doe</p>
      </Link>
    </div>
  );
};

export default CareerProfile;
