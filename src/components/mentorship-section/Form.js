const Form = () => {
  return (
    <form className="row justify-content-center m-0 pb-5 px-4">
      <label htmlFor="discipline" className="col-auto col-form-label">
        Enter Your Discipline
      </label>
      <div className="col-md-5">
        <input type="email" className="form-control" id="discipline" />
      </div>
      <div className="col-auto">
        <button className="btn btn-dark my-3 my-md-0">Find Mentors</button>
      </div>
    </form>
  );
};

export default Form;
