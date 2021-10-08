import React from "react";
import Hero from "../components/Hero";
import Services from "../Pages/Services";
import Mentorship from "../Pages/Mentorship";
import Header from "../components/mentorship-section/Header";
import Mentors from "../components/Mentors";
import CareerCounsellors from "../components/CareerCounsellors";
import Auth from "../Pages/Auth";
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Header />
      <Mentors />
      <section className="bg-dark text-light">
        <CareerCounsellors />
      </section>
    </div>
  );
};

export default Home;
