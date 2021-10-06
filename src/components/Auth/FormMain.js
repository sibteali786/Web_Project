import React from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import styles from "./FormMain.module.css";
const FormMain = () => {
  return (
    <div
      className="d-flex w-80 border border-dark py-4 mx-auto px-4 container mt-5"
      style={{ width: "1200px", fontFamily: "Lato" }}
    >
      <div className="row">
        <div className="flex-grow-1 d-flex flex-column justify-content-start align-items-center col-xl-8">
          <div className={styles.vertical}>
            <RegistrationForm />
          </div>
        </div>
        <div className="flex-grow-1 d-flex flex-column justify-content-start align-items-center col-xl-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default FormMain;
