import { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../Store/Auth-Context";

const LoginForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errorMssg, setErrorMssg] = useState("");
  const [error, setError] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  const loginSubmitHandler = (e) => {
    e.preventDefault();

    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyByHTw-kZD-od-O-rPfl6qbD2x__5Tfitc";

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
        res.json().then((data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          AuthCtx.login(data.idToken, data.email, expirationTime.toISOString());
          history.replace("/");
        });
      } else {
        res.json().then((data) => {
          if (data && data.error && data.error.message) {
            if (data.error.message === "INVALID_PASSWORD") {
              setError(true);
              setErrorMssg("Sorry the password you entered is incorrect");
            } else if (data.error.message === "EMAIL_NOT_FOUND") {
              setError(true);
              setErrorMssg("Oops! There is no account for this email!");
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
  const passwordChangeHandler = (e) => {
    const val = e.target.value.trim();
    setEnteredPassword(val);
  };
  const crossHandler = () => {
    setError(false);
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2 style={{ fontWeight: "700" }}>Log In</h2>
      <p style={{ fontSize: "110%" }}>Already have an account? login below</p>
      <form
        className="d-flex flex-column pt-4 justify-content-center align-items-center"
        onSubmit={loginSubmitHandler}
      >
        <div className="d-flex flex-column mb-3">
          <label className="mb-2">Email or Username</label>
          <input
            className="form-control form-control-lg"
            required
            onChange={emailChangeHandler}
          ></input>
        </div>
        <div className="d-flex flex-column mb-3">
          <label className="mb-2">Password</label>
          <input
            className="form-control form-control-lg"
            required
            onChange={passwordChangeHandler}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block text-white mt-5 w-75"
        >
          Log in
        </button>
      </form>
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show mt-3"
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
    </div>
  );
};

export default LoginForm;
