import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/mentor-profiles/ProfilePage";
import CareerProfilePage from "./components/careerCounsellors-profiles/CareerProfilePage";
import Layout from "./components/mentorship-section/Layout";
import Navbar from "./components/Navbar";
import Auth from "./Pages/Auth";
import Collaboration from "./Pages/Collaboration";
import Home from "./Pages/Home";
import MentorProfile from "./Pages/MentorProfile";
import Pictures from "./Pages/Pictures";
import AuthContext from "./Store/Auth-Context";
import { useContext } from "react";
import Services from "./Pages/Services";
import Mentorship from "./Pages/Mentorship";
import PersonalityDev from "./Pages/PersonalityDev";
import CareerCounselling from "./Pages/CareerCounselling";
const App = () => {
  const authCtx = useContext(AuthContext);
  const type = authCtx.type;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div style={{ fontFamily: "Lato" }}>
            <Home />
          </div>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/pictures" exact>
          <Pictures />
        </Route>
        <Route path="/mentorship" exact>
          <Mentorship />
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
        <Route path="/mentorProfilePage">
          <ProfilePage />
        </Route>
        <Route path="/careerCounselling">
          <CareerCounselling />
        </Route>
        <Route path="/CareerProfilePage">
          <CareerProfilePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
