import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import Community from "../components/NewRegistraionWalker/Community";
import GoalSetting from "../components/NewRegistraionWalker/GoalSetting";
import SideBar from "../components/NewRegistraionWalker/SideBar";
import NewStudentForm from "./NewStudentForm";

const RegisWalker = () => {
  const history = useHistory();
  const [applicationStatus, setapplicationStatus] = useState({
    signUpStatus: true,
    personalDetailsStatus: false,
    goalSetting: false,
    joinCommunity: false,
    getMentor: false,
  });
  const managePersonalDetailsStatus = () => {
    setapplicationStatus((prevState) => {
      return {
        ...prevState,
        personalDetailsStatus: true,
      };
    });
  };
  const manageGoalSettingStatus = () => {
    setapplicationStatus((prevState) => {
      return {
        ...prevState,
        goalSetting: true,
      };
    });
  };
  const manageCommunity = () => {
    setapplicationStatus((prevState) => {
      return {
        ...prevState,
        joinCommunity: true,
      };
    });
    history.replace("/");
  };
  return (
    <div>
      <div style={{ marginTop: "100px", fontFamily: "Lato" }}>
        <div className="row">
          <div className="col-2 p-0 m-0">
            <div className="" style={{ margin: "0 20px" }}>
              <SideBar appStat={applicationStatus} />
            </div>
          </div>
          <div className="col-10">
            {!applicationStatus.personalDetailsStatus && (
              <NewStudentForm appMan={managePersonalDetailsStatus} />
            )}
            {applicationStatus.personalDetailsStatus &&
              !applicationStatus.goalSetting && (
                <GoalSetting appMan={manageGoalSettingStatus} />
              )}
            {applicationStatus.goalSetting &&
              !applicationStatus.joinCommunity && (
                <Community appMan={manageCommunity} />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisWalker;
