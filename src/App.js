import { Switch, Route } from "react-router";
import "./App.css";
import ProfilePage from "./components/mentor-profiles/ProfilePage";
import Layout from "./components/mentorship-section/Layout";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
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
    </Switch>
  );
};

export default App;
