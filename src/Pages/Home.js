import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../Pages/Services";

import Auth from "../Pages/Auth";
import Mentorship from "../Pages/Mentorship";
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
