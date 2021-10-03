import Form from "./Form";
import Header from "./Header";
import MentorProfilesGrid from "./MentorProfilesGrid";
import SectionText from "./SectionText";

const Layout = () => {
  return (
    <div className="container-fluid p-0" style={{ marginTop: "70px" }}>
      <Header />
      <SectionText />
      <div className="px-3 px-sm-4 px-md-5 pb-5 text-center">
        <h1>Our Student Mentor Program</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere
          quasi earum aspernatur vitae, cupiditate nulla deserunt dolorem ipsam
          officia maiores natus architecto repellendus, sed voluptatibus. Dolore
          earum quos itaque id velit natus, rerum aliquid inventore repudiandae.
          Rerum, harum fuga?
        </p>
      </div>
      <Form />
      <MentorProfilesGrid />
    </div>
  );
};

export default Layout;
