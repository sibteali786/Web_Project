import { Switch, Route } from "react-router";
import "./App.css";
import ProfilePage from "./components/mentor-profiles/ProfilePage";
import Layout from "./components/mentorship-section/Layout";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import Pictures from "./Pages/Pictures";
import Vacancies from "./Pages/Vacancies";
const App = () => {
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
      <Route path="/pictures/:catType">
        <Vacancies />
      </Route>
    </Switch>
  );
};

export default App;
