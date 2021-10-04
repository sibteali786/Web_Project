import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../Store/Auth-Context";
import styles from "./RegistrationForm.module.css";
const RegistrationForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState(false);
  const [errorMssg, setErrorMssg] = useState("");
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
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
  const createAccountHandler = async (e) => {
    e.preventDefault();
    let url = "";
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByHTw-kZD-od-O-rPfl6qbD2x__5Tfitc";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then(async (data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          AuthCtx.login(data.idToken, data.email, expirationTime.toISOString());
          fetch("https://gul-e-shaoor-default-rtdb.firebaseio.com/Users.json", {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              username: enteredUserName,
              type: selectedType,
              dateOfBirth: {
                day: dayRef.current.value,
                month: monthRef.current.value,
                year: yearRef.current.value,
              },
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          history.replace("/");
        });
      } else {
        res.json().then((data) => {
          if (data && data.error && data.error.message) {
            console.log(data.error.message);
            if (
              data.error.message ===
              "WEAK_PASSWORD : Password should be at least 6 characters"
            ) {
              setError(true);
              setErrorMssg("Password should be at least 6 characters");
            }
            if (data.error.message === "INVALID_PASSWORD") {
              setError(true);
              setErrorMssg("Sorry the password you entered is incorrect");
            } else if (data.error.message === "EMAIL_NOT_FOUND") {
              console.log("Oops! There is no account for this email!");
            } else if (data.error.message === "EMAIL_EXISTS") {
              setError(true);
              setErrorMssg("Oops! This Email is Already Taken");
            }
          }
        });
      }
    });
  };
  const emailChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredEmail(val);
  };
  const userNameChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredUserName(val);
  };
  const passwordChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredPassword(val);
  };
  const typeChangeHandler = (e) => {
    setSelectedType(e.target.value);
  };
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const crossHandler = () => {
    setError(false);
  };
  return (
    <div className={styles.containerDiv}>
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {errorMssg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={crossHandler}
          ></button>
        </div>
      )}
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
              onChange={emailChangeHandler}
            ></input>
          </div>
          <div className={styles.formLayout}>
            <label className={styles.formLabel}>Username</label>
            <input
              className="form-control form-control-lg"
              required
              onChange={userNameChangeHandler}
            ></input>
          </div>
          <div className={styles.formLayout}>
            <label className={styles.formLabel}>Password</label>
            <input
              className="form-control form-control-lg"
              type="password"
              required
              onChange={passwordChangeHandler}
            ></input>
          </div>
          <div className={styles.selectLayout}>
            <label className={styles.formLabel}>Date of Birth</label>
            <div>
              <select className={styles.selectInput} required ref={monthRef}>
                <option value="">Month</option>
                {monthArray.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select className={styles.selectInput} required ref={dayRef}>
                <option value="">Day</option>
                {days.map((day, index) => {
                  return (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  );
                })}
              </select>
              <select className={styles.selectInput} required ref={yearRef}>
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
              <div>
                <input
                  type="radio"
                  value="Mentor/Counselor"
                  onChange={typeChangeHandler}
                  className={styles.test}
                  name="type"
                  required
                ></input>
                <label className={styles.selectLabel}>Mentor/Counselor</label>
              </div>
              <div>
                <input
                  onChange={typeChangeHandler}
                  type="radio"
                  value="Student"
                  className={styles.test}
                  name="type"
                  required
                ></input>
                <label className={styles.selectLabel}>Student</label>
              </div>
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
