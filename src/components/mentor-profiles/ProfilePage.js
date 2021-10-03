import Contact from "./Contact";
import Header from "./Header";
import About from "./About";

const ProfilePage = () => {
  return (
    <div className="container p-5" style={{ width: "100%", maxWidth: "850px" }}>
      <Header />
      <div className="row m-0 pt-5">
        <div className="profile-image col-md-5 mx-auto mb-md-0 mb-4"></div>
        <p className="col-md-7 d-flex flex-column justify-content-center mx-auto text-center fst-italic lh-lg">
          "I am highly elated to be part of this group of like minded people who
          are interested in advancing the SDG'S which would help to impact
          positively on the lives of people. I believe that ignorance is never a
          solution to a problem hence it's needed for all to be knowledgeable"
        </p>
      </div>
      <About />
      <Contact />
    </div>
  );
};

export default ProfilePage;
