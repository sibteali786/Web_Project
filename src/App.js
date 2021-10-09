import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/mentor-profiles/ProfilePage";
import CareerProfilePage from "./components/careerCounsellors-profiles/CareerProfilePage";
import Navbar from "./components/Navbar";
import Auth from "./Pages/Auth";
import Collaboration from "./Pages/Collaboration";
import Home from "./Pages/Home";
import MentorProfile from "./Pages/MentorProfile";
import Pictures from "./Pages/Pictures";
import AuthContext from "./Store/Auth-Context";
import { useContext } from "react";
import Services from "./Pages/Services";
import PersonalityDev from "./Pages/PersonalityDev";
import CareerCounselling from "./Pages/CareerCounselling";
import CareerReg from "./Pages/CareerReg";
import Mentorship from "./Pages/Mentorship";
//import StudentProfile from "./Pages/StudentProfile";
//import CareerReg from "./Pages/CareerReg";
import Entertainment from "./Pages/Entertainment";
import StudentProfile from "./Pages/StudentProfile";
import RegisWalker from "./Pages/RegisWalker";
const App = () => {
  const authCtx = useContext(AuthContext);
  const type = authCtx.type;
  const isLoggedin = authCtx.isLoggedin;
  console.log(type);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div style={{ fontFamily: "Lato", marginTop: "80px" }}>
            <Home />
          </div>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/careers" exact>
          <Pictures />
        </Route>
        <Route path="/collaboration">
          <Collaboration />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/personalitydev">
          <PersonalityDev />
        </Route>
        {type === "Mentor/Counselor" && (
          <Route path="/profile">
            <MentorProfile />
          </Route>
        )}
        {type == "Student" && (
          <Route path="/profile">
            <StudentProfile />
          </Route>
        )}
        <Route path="/careers/:carId" exact>
          <CareerReg />
        </Route>
        <Route path="/careerCounselling">
          <CareerCounselling />
        </Route>
        <Route path="/mentorship">
          <Mentorship />
        </Route>
        <Route path="/entertainment">
          <Entertainment />
        </Route>
        <Route path="/mentorProfilePage">
          <ProfilePage />
        </Route>
        <Route path="/CareerProfilePage">
          <CareerProfilePage />
        </Route>

        {isLoggedin && type === "Student" && (
          <Route path="/newRegis">
            <RegisWalker />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default App;
