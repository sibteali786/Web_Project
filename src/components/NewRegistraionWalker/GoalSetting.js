import { useContext } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import { getObjId } from "../../Pages/NewStudentForm";
import AuthContext from "../../Store/Auth-Context";

const GoalSetting = () => {
  const [answer1, setanswer1] = useState("");
  const [answer2, setanswer2] = useState("");
  const [answer3, setanswer3] = useState("");
  const [answer4, setanswer4] = useState("");
  const [answer5, setanswer5] = useState("");
  const [answer6, setanswer6] = useState("");
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  const id = getObjId(email);
  const ans1ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer1(val);
  };
  const ans2ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer2(val);
  };
  const ans3ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer3(val);
  };
  const ans4ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer4(val);
  };
  const ans5ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer5(val);
  };
  const ans6ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer6(val);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://gul-e-shaoor-default-rtdb.firebaseio.com/Users/${id}/GoalSetting.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          answer1,
          answer2,
          answer3,
          answer4,
          answer5,
          answer6,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div
      style={{
        backgroundColor: "#222831",
        color: "#e5e5e5",
        borderRadius: "10px",
        marginRight: "15px",
      }}
    >
      <form onSubmit={formSubmitHandler}>
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <label className="form-label mt-5" style={{ fontSize: "110%" }}>
              Yahan par mukhtalif qisim k sawalaat mojuud ho ge , hoho
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Why do you want to join....."
              required
              onChange={ans1ChangeHandler}
            ></textarea>
          </div>
          <div className="col-5" style={{ fontSize: "110%" }}>
            <label className="form-label mt-5">
              Yahan par mukhtalif qisim k sawalaat mojuud ho ge , hoho
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Why do you want to join....."
              required
              onChange={ans2ChangeHandler}
            ></textarea>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <label className="form-label mt-5" style={{ fontSize: "110%" }}>
              Yahan par mukhtalif qisim k sawalaat mojuud ho ge , hoho
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Why do you want to join....."
              required
              onChange={ans3ChangeHandler}
            ></textarea>
          </div>
          <div className="col-5" style={{ fontSize: "110%" }}>
            <label className="form-label mt-5">
              Yahan par mukhtalif qisim k sawalaat mojuud ho ge , hoho
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Why do you want to join....."
              required
              onChange={ans4ChangeHandler}
            ></textarea>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <label className="form-label mt-5" style={{ fontSize: "110%" }}>
              Yahan par mukhtalif qisim k sawalaat mojuud ho ge , hoho
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Why do you want to join....."
              required
              onChange={ans5ChangeHandler}
            ></textarea>
          </div>
          <div className="col-5" style={{ fontSize: "110%" }}>
            <label className="form-label mt-5">
              Yahan par mukhtalif qisim k sawalaat mojuud ho ge , hoho
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Why do you want to join....."
              required
              onChange={ans6ChangeHandler}
            ></textarea>
          </div>
        </div>
        <div
          className="text-center"
          style={{ marginTop: "-20px", paddingTop: "20px" }}
        >
          <button
            className="btn btn-outline-light text center"
            style={{ width: "150px", fontSize: "110%" }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default GoalSetting;
