import "./App.css";
import ProfilePage from "./components/mentor-profiles/ProfilePage";
import Layout from "./components/mentorship-section/Layout";
import Home from "./Pages/Home";
const App = () => {
  return (
    <div style={{ fontFamily: "Lato" }}>
      <Home />
      <Layout />
      <ProfilePage />
    </div>
  );
};

export default App;
