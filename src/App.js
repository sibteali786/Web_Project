import { useCallback, useContext } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import ProfilePage from "./components/mentor-profiles/ProfilePage";
import Layout from "./components/mentorship-section/Layout";
import Auth from "./Pages/Auth";
import Collaboration from "./Pages/Collaboration";
import Home from "./Pages/Home";
import MentorProfile from "./Pages/MentorProfile";
import PersonalDev from "./Pages/PersonalDev";
import Pictures from "./Pages/Pictures";
import AuthContext from "./Store/Auth-Context";
const App = () => {
  const authCtx = useContext(AuthContext);
  const type = authCtx.type;
  return (
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
      <Route path="/personalDev">
        <PersonalDev />
      </Route>
      {type === "Mentor/Counselor" ? (
        <Route path="/profile" exact>
          <MentorProfile />
        </Route>
      ) : null}
    </Switch>
  );
};

export default App;
