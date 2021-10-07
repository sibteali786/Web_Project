import "./CareerReg.css";
import CareerForm from "../components/CareerForm/CareerForm";
import { useParams } from "react-router";
const CareerReg = () => {
  const params = useParams();
  const copy = [
    {
      careerCategory: "mentors",
      mainCopy:
        "GuleShaoor is a student-led organization aimed at empowering youngsters with the aid of youngsters. Do you feel like working for an early-stage organization and are ready to grow with us?  If you support our aim and want to create some impact with the skills you have, you can join GuleShaoor as a Mentor",
      eligibilityCopy:
        "PhD/Masters in any educational field.Have good knowledge of industry trends in your field.3-4 years of experience.Good interpersonal skills",
    },
    {
      careerCategory: "studentambassador",
      mainCopy:
        "If you have a warm confident approachable personality; why not use it to amplify your impact and help your fellow students. Be the face of GuleShaoor on your campus. Connect with other students in your community and empower them to focus on their career growth. Here, enhance your skill set, find endless networking opportunities and join hands with GuleShaoor as a Student Ambassador! ",
      eligibilityCopy:
        "If you are an undergraduate student from any university of Pakistan.Have  0-1 years experience.Have Great communication and interpersonal skills.Are Enthusiastic and eager to participate actively",
    },
    {
      careerCategory: "studentguide",
      mainCopy:
        "Have you ever wanted to be a change-maker while being a student? Here is an ideal chance! Become a Student Guide for GuleShaoor. If you think you have the capabilities to guide a student on choosing a good university and set forth the details regarding the admission issues; wait no more! ",
      eligibilityCopy:
        "3rd year or Final year undergraduate students from universities across Pakistan.Good knowledge about universities and admission tests.Good communication skills.Leadership skills",
    },
    {
      careerCategory: "careercounsellors",
      mainCopy:
        "Did you hear it? We are recruiting Career Counsellors for GuleShaoor. Are you someone who could help the clients evaluate their abilities and interests, overcome challenges and obstacles, and pave a pathway? If the answer is yes, We Are Looking For You! ",
      eligibilityCopy:
        "Masters in Counselling.3-4 yrs experience.Knowledge regarding careers and the skillset needed.Great communication and interpersonal skills.Active listener",
    },
    {
      careerCategory: "marketingintern",
      mainCopy:
        "Are you marketing-savvy looking for a chance to showcase your skills? GuleShaoor is seeking out interns for a marketing internship program that will enhance your healthy networking and confidence in sales. It would also be beneficial to you for enhancing your marketing strategy games and their implementation. If you feel you want to groom your confidence to imitate calls and build conversations in a fun environment, sign up! Students are encouraged to join it.",
      eligibilityCopy: "undergraduate student",
    },
    {
      careerCategory: "psychologists",
      mainCopy:
        "Are you a psychologist? Do you support the vision of GuleShaoor and want to be a help for the students? We need YOU! Are you being a starter willing to grow with an early-stage organization? SIGN UP!",
      eligibilityCopy:
        "Knowledge of psychological theory.Superior communication skills.Interest in how people think and process information.Ability to empathize with a wide range of people.Listening skills.Capacity for handling stressful and possible volatile situations",
    },
  ];
  let copyToRender = {};
  for (let i = 0; i < copy.length; i++) {
    if (copy[i].careerCategory === params.carId) {
      const temp = copy[i].eligibilityCopy.split(".");
      copyToRender = copy[i];
      copyToRender.eligibilityCopy = temp;
    }
  }
  return (
    <div
      style={{
        marginTop: "150px",
        fontFamily: "Lato",
      }}
    >
      <div style={{ backgroundColor: "#222831", color: "#eee" }}>
        <div
          className="container d-flex justify-content-around"
          style={{ paddingTop: "50px" }}
        >
          <div className="row p-0">
            <div
              className="col-lg-7 career-main-copy"
              style={{ paddingLeft: "0" }}
            >
              <h2>Description</h2>
              <div className="px-3">{copyToRender.mainCopy}</div>
            </div>
            <div className="col-lg-5 ml-5 career-elig-copy">
              <h2>Apply Now</h2>
              <div className="px-3">
                {copyToRender.eligibilityCopy.map((c, index) => {
                  return (
                    <li key={index} style={{}}>
                      {c}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <CareerForm />
        </div>
      </div>
    </div>
  );
};

export default CareerReg;
