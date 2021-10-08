import { useRef } from "react";
import { useState } from "react/cjs/react.development";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "@firebase/app";
const CareerForm = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyByHTw-kZD-od-O-rPfl6qbD2x__5Tfitc",
    authDomain: "gul-e-shaoor.firebaseapp.com",
    databaseURL: "https://gul-e-shaoor-default-rtdb.firebaseio.com",
    projectId: "gul-e-shaoor",
    storageBucket: "gul-e-shaoor.appspot.com",
    messagingSenderId: "1080881422656",
    appId: "1:1080881422656:web:12f5e2ac8959fe8c441aa5",
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [experiance, setExperiance] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [institute, setInstitute] = useState("");
  const [status, setStatus] = useState(false);
  const [cv, setCv] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    fetch(
      "https://gul-e-shaoor-default-rtdb.firebaseio.com/CareerApplications.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: fullName,
          age: age,
          education: education,
          experiance: experiance,
          institute: institute,
          description: description,
          role: role,
          gender: gender,
          email: email,
          phone: phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        setStatus(true);
      }
    });
    const storageRef = ref(storage, `${email}/cv`);
    uploadBytes(storageRef, cv).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
    nameRef.current.value = "";
    ageRef.current.value = "";
    instituteRef.current.value = "";
    experianceRef.current.value = "";
    roleRef.current.value = "";
    descriptionRef.current.value = "";
    educationRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    cvRef.current.value = "";
  };
  const crossHandler = () => {
    setStatus(false);
  };
  const nameChangeHandler = (e) => {
    const val = e.target.value.trim();
    setFullName(val);
  };
  const ageChangeHandler = (e) => {
    const val = e.target.value.trim();
    setAge(val);
  };
  const experianceChangeHandler = (e) => {
    const val = e.target.value;
    setExperiance(val);
  };
  const instituteChangeHandler = (e) => {
    const val = e.target.value.trim();
    setInstitute(val);
  };
  const educationChangeHandler = (e) => {
    const val = e.target.value;
    setEducation(val);
  };
  const descriptionChangeHandler = (e) => {
    const val = e.target.value.trim();
    setDescription(val);
  };
  const genderChangeHandler = (e) => {
    const val = e.target.value;
    setGender(val);
  };
  const roleChangeHandler = (e) => {
    const val = e.target.value.trim();
    setRole(val);
  };
  const emailChangeHandler = (e) => {
    const val = e.target.value;
    setEmail(val);
  };
  const phoneChangeHandler = (e) => {
    const val = e.target.value;
    setPhone(val);
  };
  const cvChangeHandler = (e) => {
    if (e.target.files[0]) {
      const val = e.target.files[0];
      setCv(val);
    }
  };
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const educationRef = useRef(null);
  const experianceRef = useRef(null);
  const roleRef = useRef(null);
  const instituteRef = useRef(null);
  const descriptionRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const cvRef = useRef(null);
  return (
    <div className="mt-5 mb-5">
      <h2 className="text-center">Registration Form</h2>
      <form className="mt-5" onSubmit={formSubmitHandler}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              aria-label="Full name"
              onChange={nameChangeHandler}
              required
              ref={nameRef}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              aria-label="Age"
              onChange={ageChangeHandler}
              required
              ref={ageRef}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <select
              className="form-select"
              placeholder="Education"
              aria-label="Education"
              onChange={educationChangeHandler}
              required
              ref={educationRef}
            >
              <option value="">Education</option>
              <option>Some undergraduate</option>
              <option>Complete undergraduate</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
              <option>Diploma</option>
            </select>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Institute"
              aria-label="Institute"
              onChange={instituteChangeHandler}
              required
              ref={instituteRef}
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="male"
              onChange={genderChangeHandler}
              required
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="female"
              onChange={genderChangeHandler}
              required
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <select
              className="form-select"
              placeholder="Experience"
              aria-label=""
              onChange={experianceChangeHandler}
              required
              ref={experianceRef}
            >
              <option value="">Experience</option>
              <option>1 Year</option>
              <option>2 Year</option>
              <option>3 Year</option>
              <option>4 Year</option>
              <option>5+ Year</option>
              <option>10+ Year</option>
            </select>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Current Role (if any)"
              aria-label="current role"
              onChange={roleChangeHandler}
              ref={roleRef}
            />
          </div>
          <div className="col d-flex align-items-center">
            <label className="ml-1">CV:</label>
            <input
              type="file"
              className="form-control"
              placeholder=""
              aria-label=""
              onChange={cvChangeHandler}
              ref={cvRef}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              onChange={emailChangeHandler}
              required
              ref={emailRef}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              aria-label="phone no."
              onChange={phoneChangeHandler}
              required
              ref={phoneRef}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <textarea
              className="form-control mb-5"
              rows="5"
              placeholder="Why do you want to join....."
              onChange={descriptionChangeHandler}
              required
              ref={descriptionRef}
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-outline-light mb-4"
            style={{ width: "100px" }}
          >
            Apply
          </button>
        </div>
      </form>
      {status && (
        <div
          className="alert alert-success alert-dismissible fade show mt-2"
          role="alert"
          style={{ marginBottom: "10px" }}
        >
          {"You have applied Successfully! We'll reach out soon!"}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={crossHandler}
          ></button>
        </div>
      )}
    </div>
  );
};
export default CareerForm;
