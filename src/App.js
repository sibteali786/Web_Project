import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/mentor-profiles/ProfilePage";
import Layout from "./components/mentorship-section/Layout";
import Navbar from "./components/Navbar";
import Auth from "./Pages/Auth";
import Collaboration from "./Pages/Collaboration";
import Home from "./Pages/Home";
import MentorProfile from "./Pages/MentorProfile";
import PersonalDev from "./Pages/PersonalDev";
import Pictures from "./Pages/Pictures";
import AuthContext from "./Store/Auth-Context";
import { useContext } from "react";
import Services from "./Pages/Services";
import PersonalityDev from "./Pages/PersonalityDev";
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
            <Layout />
            <ProfilePage />
          </div>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/pictures" exact>
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
      </Switch>
    </Router>
  );
};

export default App;
