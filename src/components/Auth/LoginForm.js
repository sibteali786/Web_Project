import React from "react";
const LoginForm = () => {
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log("this was also clicked!");
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
          <input className="form-control form-control-lg" required></input>
        </div>
        <div className="d-flex flex-column mb-3">
          <label className="mb-2">Password</label>
          <input className="form-control form-control-lg" required></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block text-white mt-5 w-75"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
