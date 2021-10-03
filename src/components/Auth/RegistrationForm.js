import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";
const RegistrationForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("");
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  let years = [];
  for (let i = 2021; i >= 1900; i--) {
    years.push(i);
  }
  const genders = ["Mentor/Counsellor", "Student"];
  const createAccountHandler = (e) => {
    e.preventDefault();
    // let url = "";
    // url =
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSIBvJtLXP5dxFWgGDdEilQQ5WJlNaqLY";
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     password: enteredPassword,
    //     returnSecureToken: true,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => {
    //   setisLoading(false);
    //   if (res.ok) {
    //     res.json().then((data) => {
    //       const expirationTime = new Date(
    //         new Date().getTime() + +data.expiresIn * 1000
    //       );
    //       AuthCtx.login(data.idToken, data.email, expirationTime.toISOString());
    //       history.replace("/");
    //     });
    //   } else {
    //     res.json().then((data) => {
    //       if (data && data.error && data.error.message) {
    //         console.log(data.error.message);
    //         if (data.error.message === "INVALID_PASSWORD") {
    //           errorMessage = "Sorry the password you entered is incorrect";
    //           console.log(errorMessage);
    //           setIsError(true);
    //         } else if (data.error.message === "EMAIL_NOT_FOUND") {
    //           errorMessage = "Oops! There is no account for this email!";
    //           console.log(errorMessage);
    //           setIsError(true);
    //         } else if (data.error.message === "EMAIL_EXISTS") {
    //           errorMessage = "Oops! This Email is Already Taken";
    //           console.log(errorMessage);
    //           setIsError(true);
    //         }
    //       }
    //     });
    //   }
    // });
  };
  return (
    <div className={styles.containerDiv}>
      <div>
        <h2 style={{ fontWeight: "700" }}>Sign Up for a Free Account</h2>
        <p className="pt-1" style={{ fontSize: "110%" }}>
          please join Gul-e-Shaoor. It's only a click away!
        </p>
      </div>
      <div>
        <form className={styles.form} onSubmit={createAccountHandler}>
          <div className={styles.formLayout}>
            <label className={styles.formLabel}>Email Address</label>
            <input
              className="form-control form-control-lg"
              type="email"
              required
            ></input>
          </div>
          <div className={styles.formLayout}>
            <label className={styles.formLabel}>Username</label>
            <input className="form-control form-control-lg" required></input>
          </div>
          <div className={styles.formLayout}>
            <label className={styles.formLabel}>Password</label>
            <input
              className="form-control form-control-lg"
              type="password"
              required
            ></input>
          </div>
          <div className={styles.selectLayout}>
            <label className={styles.formLabel}>Birthday</label>
            <div>
              <select className={styles.selectInput} required>
                <option value="">Month</option>
                {monthArray.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select className={styles.selectInput} required>
                <option value="">Day</option>
                {days.map((day, index) => {
                  return (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  );
                })}
              </select>
              <select className={styles.selectInput} required>
                <option value="">Year</option>
                {years.map((year, index) => {
                  return (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className={styles.radioContainer}>
              {genders.map((gender, index) => {
                return (
                  <div key={index}>
                    <input
                      type="radio"
                      value={gender}
                      className={styles.test}
                      name="gender"
                      required
                    ></input>
                    <label className={styles.selectLabel}>{gender}</label>
                  </div>
                );
              })}
            </div>
            <button
              type={"submit"}
              className="btn btn-primary btn-lg btn-block text-white mt-4"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
