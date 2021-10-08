import { useState } from "react/cjs/react.development";
import Community from "../components/NewRegistraionWalker/Community";
import GoalSetting from "../components/NewRegistraionWalker/GoalSetting";
import SideBar from "../components/NewRegistraionWalker/SideBar";

const RegisWalker = () => {
  const [applicationStatus, setapplicationStatus] = useState({
    signUpStatus: false,
    personalDetailsStatus: false,
    joinCommunity: false,
    getMentor: false,
  });

  return (
    <div>
      <div style={{ marginTop: "100px", fontFamily: "Lato" }}>
        <div className="row">
          <div className="col-2 p-0 m-0">
            <div className="" style={{ margin: "0 20px" }}>
              <SideBar />
            </div>
          </div>
          <div className="col-10">
            {false && <GoalSetting />}
            <Community />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisWalker;
