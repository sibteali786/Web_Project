import Facebook from "../SVGS/Facebook";
import Instagram from "../SVGS/Instagram";
import Twitter from "../SVGS/Twitter";
import Linkedin from "../SVGS/Linkedin";
import { useState } from "react";
import "./CollabForm.css";
import { fetchAndCompareEmail } from "../Utils/fetchers";
import { useRef } from "react/cjs/react.development";
const CollabForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredOrganization, setEnteredOrganization] = useState("");
  const [enteredCategory, setEnteredCategory] = useState(null);
  const [formStatus, setFormStatus] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMssg, setErrorMssg] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const orgRef = useRef(null);
  const catRef = useRef(null);
  const firstHandler = () => {
    setFormStatus((prevState) => {
      return !prevState;
    });
  };
  const secondHandler = () => {
    setFormSubmitted((prevState) => {
      return !prevState;
    });
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (isNaN(enteredPhone)) {
      setFormStatus(false);
    } else {
      setFormStatus(true);
      const res = await fetchAndCompareEmail(enteredEmail);
      console.log(res);
      console.log(Object.entries(res).length);
      if (Object.entries(res).length !== 0) {
        setError(true);
        setErrorMssg("Oops! This Email is Already Taken");
        console.log("asdfsadf");
      } else {
        if (formStatus) {
          const url =
            "https://gul-e-shaoor-default-rtdb.firebaseio.com/Organizations.json";
          fetch(url, {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              username: enteredPhone,
              type: enteredCategory,
              org: enteredOrganization,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.ok) {
              setFormSubmitted(true);
              emailRef.current.value = "";
              passwordRef.current.value = "";
              phoneRef.current.value = "";
              orgRef.current.value = "";
              catRef.current.value = "Select an Option";
            } else {
              res.json().then((data) => {
                console.log(data);
              });
            }
          });
        }
      }
    }
  };
  const emailChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredEmail(val);
  };
  const passwordChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredPassword(val);
  };
  const phoneChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredPhone(val);
  };
  const orgChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredOrganization(val);
  };
  const catChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredCategory(val);
  };
  return (
    <div
      className="container"
      style={{ marginTop: "250px", marginBottom: "250px" }}
    >
      <div
        className="row p-5"
        style={{
          backgroundColor: "#222831",
          color: "#e5e5e5",
          borderRadius: "15px",
        }}
      >
        <div className="col-lg-6">
          <div>
            <h6 className="SecondaryHeading">
              If you would like to work with us please get in touch we are
              looking forward to working with you!
            </h6>
            <p className="SecondaryText">Islamabad &mdash; 051-45646-65</p>
            <p className="SecondaryText">contact us @ guleshaoor.org.pk</p>
          </div>
          <div className="d-flex logos">
            <div className="mx-2">
              <Facebook width="25px" height="auto" />
            </div>
            <div className="mx-2">
              <Instagram width="25px" height="auto" />
            </div>
            <div className="mx-2">
              <Linkedin width="25px" height="auto" />
            </div>
            <div className="mx-2">
              <Twitter width="25px" height="auto" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form id="form" onSubmit={formSubmitHandler}>
            <div className="mb-3">
              <label>Email</label>
              <input
                ref={emailRef}
                className="form-control"
                type="email"
                required
                onChange={emailChangeHandler}
              ></input>
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                ref={passwordRef}
                className="form-control"
                type="password"
                required
                onChange={passwordChangeHandler}
              ></input>
            </div>
            <div className="mb-3">
              <label>Phone Number</label>
              <input
                ref={phoneRef}
                className="form-control"
                required
                onChange={phoneChangeHandler}
              ></input>
            </div>
            <div className="mb-3">
              <label>Organization</label>
              <input
                ref={orgRef}
                className="form-control"
                required
                onChange={orgChangeHandler}
              ></input>
            </div>
            <div className="mb-3">
              <label>Interested In</label>
              <select
                ref={catRef}
                className="form-control "
                required
                onChange={catChangeHandler}
              >
                <option value="">Select an Option</option>
                <option>Refer To Us Partnership</option>
                <option>Direct Delivery Partnership </option>
                <option>Referral Exchange Partnership</option>
                <option>Volunteering and Employment Opportunities</option>
              </select>
            </div>
            <div className="mt-5">
              <button className="btn btn-lg btn-outline-light" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {formStatus && formSubmitted && (
        <div
          className="alert alert-success alert-dismissible fade show"
          style={{ marginTop: "10px" }}
          role="alert"
          onClick={secondHandler}
        >
          <strong>Congratulations!</strong> You have applied successfully. We'll
          get to you as soon as possible.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {!formStatus && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          style={{ marginTop: "10px" }}
          role="alert"
        >
          <strong>Oops!</strong> Please Provide the correct data.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={firstHandler}
          ></button>
        </div>
      )}
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          style={{ marginTop: "10px" }}
          role="alert"
        >
          {errorMssg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
};
export default CollabForm;
