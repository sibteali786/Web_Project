import React from "react";
import FormMain from "../components/Auth/FormMain";
import Navbar from "../components/Navbar";
const Auth = () => {
  return (
    <div>
      <div className="mb-4">
        <Navbar />
      </div>
      <div style={{ marginTop: "200px" }}>
        <FormMain />
      </div>
    </div>
  );
};

export default Auth;
